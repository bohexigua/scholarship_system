let client = require("./mysql");

let setInform = async (data) => {
  await client.startTransaction();
  const res = await client.executeTransaction(
    "INSERT INTO inform(id, type, title, grade, poverty_level, \
      award, content) \
      VALUES (null, ?, ?, ?, ?, ?, ?);", 
    [data.type, data.title, data.grade, data.poverty_level, data.award, data.content]);
  await client.stopTransaction();
  return res;
}

let getInform = async (type) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `inform` WHERE type = ?;", [type]);
  await client.stopTransaction();
  return res;
}

let getInformById = async (id) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `inform` WHERE id = ?;", [id]);
  await client.stopTransaction();
  return res;
}

module.exports = {
  setInform: setInform,
  getInform: getInform,
  getInformById: getInformById
}
