const user_model = require('../models/user_model')
const userInfo_model = require('../models/userInfo_model');
const poverty_level = require('../models/poverty_level');
const inform = require('../models/inform');
const util = require('../common/util');
const award = require('../models/award');

let checkLogin = async (token) => {
  const sessionData = util.sessionParse(token);
  const sessionList = user_model.getSession(sessionData.userName);
  if(session.length) {
    const session = sessionList[0];
    return util.compare2now(session.date);
  } else {
    return false;
  }
}

let login = async (ctx, next) => {
  const body = ctx.request.body;
  console.log(body, '.......\n\n\n');
  const userName = body.username;
  const passWord = body.password;
  const res = await user_model.getUser(userName, passWord);
  var result = { success: false };
  if(res.length) {
    const sessionRes = await user_model.setSession(userName);
    const session = await user_model.getSession(userName);
    result.success = true;
    result.token = session[0].user_name + '.' + session[0].date;
    result.admin = res[0].user_admin;
    result.username = res[0].user_name;
  }
  ctx.response.body = JSON.stringify(result);
}

let setUserInfo = async (ctx, next) => {
  const body = ctx.request.body;
  const data = body.data;
  const token = body.token;
  const session = util.sessionParse(token);
  console.log(data, session, '....');
  const res = await userInfo_model.setUserInfo(data, session.userName);
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let getUserInfo = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const res = await userInfo_model.getUserInfo(session.userName);
  var result = { success: false };
  if(res.length) {
    result.success = true;
    result.data = {};
    for(var key in res[0]) {
      result.data[key] = res[0][key];
    }
  }
  ctx.response.body = JSON.stringify(result);
}

let setPovertyLevel = async (ctx, next) => {
  const body = ctx.request.body;
  const data = body.data;
  const token = body.token;
  const session = util.sessionParse(token);
  console.log(data, session, '....');
  const res = await poverty_level.setPovertyLevel(data, session.userName);
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let setPovertyLevelSubmit = async (ctx, next) => {
  const body = ctx.request.body;
  const token = body.token;
  const session = util.sessionParse(token);
  const res = await poverty_level.setSubmit();
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let setPovertyLevelDone = async (ctx, next) => {
  const body = ctx.request.body;
  const token = body.token;
  const data = { user_name: body.user_name, done: body.done };
  const session = util.sessionParse(token);
  console.log(data, session, '....');
  const res = await poverty_level.setDone(data);
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let setAwardSubmit = async (ctx, next) => {
  const body = ctx.request.body;
  const token = body.token;
  const session = util.sessionParse(token);
  const res = await award.setSubmit();
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let setAwardDone = async (ctx, next) => {
  const body = ctx.request.body;
  const token = body.token;
  console.log(body, '...');
  const data = { user_name: body.user_name, result: body.result, aid: body.aid };
  const session = util.sessionParse(token);
  console.log(data, session, '....');
  const res = await award.setDone(data);
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let getPovertyLevel = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const res = await poverty_level.getPovertyLevel(session.userName);
  var result = { success: false };
  if(res.length) {
    result.success = true;
    result.data = {};
    for(var key in res[0]) {
      result.data[key] = res[0][key];
    }
  }
  ctx.response.body = JSON.stringify(result);
}

let getPovertyLevelAll = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const res = await poverty_level.getAll();
  var result = { success: false };
  if(res.length) {
    result.success = true;
    result.data = {};
    for(let i = 0; i < res.length; i++) {
      if(!result.data[res[i].class]) result.data[res[i].class] = [];
      else result.data[res[i].class].push(res[i]);
    }
  }
  ctx.response.body = JSON.stringify(result);
}

let getPovertyLevelClassAll = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const user = await user_model.getUserInfo(session);
  console.log(user, '...');
  const _class = user[0].user_class;
  const res = await poverty_level.getClassAll(_class);
  var result = { success: false };
  if(res.length) {
    result.success = true;
    result.data = res;
  }
  ctx.response.body = JSON.stringify(result);
}

let setInform = async (ctx, next) => {
  const body = ctx.request.body;
  const data = body.data;
  const token = body.token;
  const session = util.sessionParse(token);
  console.log(data, session, '....');
  const res = await inform.setInform(data);
  var result = { success: true };
  ctx.response.body = JSON.stringify(result);
}

let setUser = async (ctx, next) => {
  const body = ctx.request.body;
  const data = body.data;
  const token = body.token;
  const session = util.sessionParse(token);
  data.passWord = 123456;
  console.log(data, session, '....');
  const res = await user_model.setUser(data);
  var result = { success: true };
  if(!res) result.success = false;
  ctx.response.body = JSON.stringify(result);
}

let getInform = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const type = query.type;
  const res = await inform.getInform(type);
  var result = { success: false };
  if(res.length) {
    result.success = true;
    result.data = res;
  }
  ctx.response.body = JSON.stringify(result);
}

let applyAward = async (ctx, next) => {
  const body = ctx.request.body;
  const data = body.data;
  const token = body.token;
  const session = util.sessionParse(token);
  console.log(data, session, '....');
  const res = await award.applyAward(data, session.userName);
  var result = { success: true };
  if (!res.success) {
    result = { success: false, reason: res.reason };
  }
  ctx.response.body = JSON.stringify(result);
}

let getAward = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const user = await user_model.getUserInfo(session);
  console.log(user, '...');
  const _class = user[0].user_class;
  const res = await award.getAward(_class);
  var result = { success: true, data: res};
  ctx.response.body = JSON.stringify(result);
}

let getGrant = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const session = util.sessionParse(token);
  const user = await user_model.getUserInfo(session);
  console.log(user, '...');
  const _class = user[0].user_class;
  const res = await award.getGrant(_class);
  var result = { success: true, data: res };
  ctx.response.body = JSON.stringify(result);
}

let getAwardUserInfo = async (ctx, next) => {
  const query = ctx.request.query;
  console.log(query, '....');
  const token = query.token;
  const id = query.id;
  const session = util.sessionParse(token);
  const res = await award.getUserInfo(id);
  var result = { success: true, data: res };
  ctx.response.body = JSON.stringify(result);
}

module.exports = {
  login: login,
  setUserInfo: setUserInfo,
  getUserInfo: getUserInfo,
  setPovertyLevel: setPovertyLevel,
  getPovertyLevel: getPovertyLevel,
  setInform: setInform,
  getInform: getInform,
  getPovertyLevelAll: getPovertyLevelAll,
  setPovertyLevelSubmit: setPovertyLevelSubmit,
  setPovertyLevelDone: setPovertyLevelDone,
  applyAward: applyAward,
  getAward: getAward,
  getGrant: getGrant,
  setAwardSubmit: setAwardSubmit,
  setAwardDone: setAwardDone,
  setUser: setUser,
  getPovertyLevelClassAll: getPovertyLevelClassAll,
  getAwardUserInfo: getAwardUserInfo
}