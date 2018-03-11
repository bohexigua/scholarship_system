let client = require("./mysql");

let setUserInfo = async (data, userName) => {
  await client.startTransaction();
  const res = await client.executeTransaction(
    "INSERT INTO user_info(user_name, name, sex, brithday, \
      id, mz, zzmm, saddress, faddress, ftel, jtsrly, pjxfjd, tccj, \
      start, xy, zy, grade, class, tel, jl, hzzz, sqjly, sqzly) \
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", 
    [userName, data.name, data.sex, data.brithday, data.id, data.mz, data.zzmm, data.saddress,
     data.faddress, data.ftel, data.jtsrly, data.pjxfjd, data.tccj, data.start, data.xy, data.zy,
     data.grade, data.class, data.tel, data.jl, data.hzzz, data.sqjly, data.sqzly]);
  await client.stopTransaction();
  return res;
}

let getUserInfo = async (userName) => {
  await client.startTransaction();
  const res = await client.executeTransaction("SELECT * FROM `user_info` WHERE user_name = ?;", [userName]);
  await client.stopTransaction();
  return res;
}

module.exports = {
  setUserInfo: setUserInfo,
  getUserInfo: getUserInfo
}


/* <p>姓名:{{this.data.name}}</p >
   <p>性别:{{this.data.sex}}</p >
   <p>出生年月:{{this.data.brithday}}</p >
   <p>学号:{{this.data.id}}</p >
   <p>民族:{{this.data.mz}}</p >
   <p>政治面貌:{{this.data.zzmm}}</p >
   <p>校内住址:{{this.data.saddress}}</p >
   <p>家庭住址:{{this.data.faddress}}</p >
   <p>家庭联系电话:{{this.data.ftel}}</p >
   <p>家庭收入来源:{{this.data.jtsrly}}</p >
   <p>平均学分绩点:{{this.data.pjxfjd}}</p >
   <p>体测成绩:{{this.data.tccj}}</p >
  </div>
  <div class="center">
   <p>入学时间:{{this.data.start}}</p >
   <p>学院:{{this.data.xy}}</p >
   <p>专业:{{this.data.zy}}</p >
   <p>年级:{{this.data.grade}}</p >
   <p>班级:{{this.data.class}}</p >
   <p>贫困建档等级:{{this.data.pkjddj}}</p >
   <p>联系电话:{{this.data.tel}}</p >
   <p>曾获何种奖励:{{this.data.jl}}</p >
   <p>曾获何种资助:{{this.data.hzzz}}</p >
   <p>申请奖学金理由:{{this.data.sqjly}}</p >
   <p>申请助学金理由:{{this.data.sqzly}}</p > */