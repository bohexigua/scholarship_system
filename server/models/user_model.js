let client = require("./mysql");

let getUser = async (userName, passWord) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `user` WHERE user_name = ? AND user_pwd = ?;", [userName, passWord]);
  await client.stopTransaction();
  return res;
}

let getSession = async (userName) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT UNIX_TIMESTAMP(date) as date, user_name FROM redis_session WHERE user_name = ?;", [userName]);
  await client.stopTransaction();
  return res;
}

let setSession = async (userName) => {
  const session = await getSession(userName);
  await client.startTransaction();
  let res;
  if(session.length) {  // 可以找到 session
    res = await client.executeTransaction("UPDATE redis_session SET date = now() WHERE user_name = ?;", [userName]);
  } else {
    res = await client.executeTransaction("INSERT INTO redis_session(user_name, date) VALUES (?, now());", [userName]);
  }
  await client.stopTransaction();
  return res;
}

let getUserInfo = async (data) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `user` WHERE user_name = ?;", [data.userName]);
  await client.stopTransaction();
  return res;
}

let setUser = async (data) => {
  const user = await getUserInfo(data);
  await client.startTransaction();
  if(user.length) return false;
  const res = await client.executeTransaction("INSERT INTO user(user_name, user_pwd, user_admin, user_class) VALUES (?, ?, ?, ?);", 
  [data.userName, data.passWord, data.admin, data.class]);
  await client.stopTransaction();
  return res;
}

module.exports = {
  getUser: getUser,
  setSession: setSession,
  getSession: getSession,
  setUser: setUser,
  getUserInfo: getUserInfo
}
