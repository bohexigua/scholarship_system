let client = require("./mysql");

let applyAward = async (data, userName) => {
  await client.startTransaction();
  const res = await client.executeTransaction(
    "INSERT INTO award (aid, inform_id, user_name) VALUES (null, ?, ?)", 
    [data.id, userName]);
  await client.stopTransaction();
  return res;
}

let getAward = async (_class) => {      // 奖学金
  await client.startTransaction();
  const res = await client.executeTransaction(
    "SELECT * FROM award a, inform i, user_info u, poverty_level p \
    WHERE a.inform_id = i.id AND a.user_name = u.user_name \
    AND p.user_name = u.user_name AND i.type = '1' AND u.class = ?"
    , [_class]);
  await client.stopTransaction();
  return res;
}

let getGrant = async (_class) => {
  await client.startTransaction();
  const res = await client.executeTransaction(
    "SELECT * FROM award a, inform i, user_info u, poverty_level p \
    WHERE a.inform_id = i.id AND a.user_name = u.user_name \
    AND p.user_name = u.user_name AND i.type = '2' AND u.class = ?"
    , [_class]);
  await client.stopTransaction();
  return res;
}

let setSubmit = async () => {
  await client.startTransaction();
  const res = await client.executeTransaction("UPDATE award SET submit = 1 WHERE result != '不同意' or result != '未处理';");
  await client.stopTransaction();
  return res;
} 

let setDone = async (data) => {
  await client.startTransaction();
  const res = await client.executeTransaction("UPDATE award SET result = ? WHERE user_name = ? AND aid = ?;", [data.result, data.user_name, data.aid]);
  await client.stopTransaction();
  return res;
}

let getUserInfo = async (id) => {
  await client.startTransaction();
  const res = await client.executeTransaction(
    "SELECT * FROM award a, inform i, user_info u, poverty_level p \
    WHERE a.inform_id = i.id AND a.user_name = u.user_name \
    AND p.user_name = u.user_name AND a.submit = '1' AND i.id = ?"
    , [id]);
  await client.stopTransaction();
  return res;
}

module.exports = {
  applyAward: applyAward,
  getAward: getAward,
  getGrant: getGrant,
  setSubmit: setSubmit,
  setDone: setDone,
  getUserInfo: getUserInfo
}
