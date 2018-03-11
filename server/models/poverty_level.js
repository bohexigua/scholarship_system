let client = require("./mysql");

let setPovertyLevel = async (data, userName) => {
  await client.startTransaction();
  const res = await client.executeTransaction(
    "INSERT INTO poverty_level(user_name, name, syd, class, \
      rjnsr, jtsrly, reason) \
      VALUES (?, ?, ?, ?, ?, ?, ?);", 
    [userName, data.name, data.syd, data.class, data.rjnsr, data.jtsrly, data.reason]);
  await client.stopTransaction();
  return res;
}

let getPovertyLevel = async (userName) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `poverty_level` WHERE user_name = ?;", [userName]);
  await client.stopTransaction();
  return res;
}

let getClassAll = async (teacherClass) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `poverty_level` WHERE class = ?;", [teacherClass]);
  await client.stopTransaction();
  return res;
}

let getAll = async () => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `poverty_level`;");
  await client.stopTransaction();
  return res;
}

let setSubmit = async () => {
  await client.startTransaction();
  const res = await client.executeTransaction("UPDATE poverty_level SET submit = 1 WHERE done != '未处理' or done != '不同意';");
  await client.stopTransaction();
  return res;
} 

let setDone = async (data) => {
  await client.startTransaction();
  const res = await client.executeTransaction("UPDATE poverty_level SET done = ? WHERE user_name = ?;", [data.done, data.user_name]);
  await client.stopTransaction();
  return res;
} 

module.exports = {
  setPovertyLevel: setPovertyLevel,
  getPovertyLevel: getPovertyLevel,
  getAll: getAll,
  setSubmit: setSubmit,
  setDone: setDone,
  getClassAll: getClassAll
}


/* 
  <p>姓名:{{this.data.name}}</p >
   <p>生源地:{{this.data.syd}}</p >
   <p>班级:{{this.data.class}}</p >
   <p>家庭人均年收入:{{this.data.rjnsr}}</p >
   <p>家庭收入来源:{{this.data.jtsrly}}</p >
   <p>学生陈述认定理由:{{this.data.reason}}</p > 
*/
