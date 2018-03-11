let sessionParse = session => {
  const tokenArr = session.split('.');  // userName|date
  const userName = tokenArr && tokenArr[0];
  const date = tokenArr && tokenArr[1];
  return {
    userName,
    date
  }
}

let compare2now = time => { // 设定过期时间为 30分钟
  time = time * 1000;   // 转化为毫秒
  var exprise = 600000 * 3;
  var date = Date.parse(new Date());
  if(time - date > exprise) return false;
  else return true;
}

module.exports = {
  sessionParse: sessionParse,
  compare2now: compare2now
}