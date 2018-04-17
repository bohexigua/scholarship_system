// import axios from 'axios';
import $ from 'jquery'

// let base = '';

// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

let base = 'http://127.0.0.1:3000';

export const requestLogin = params => { return $.post(`${base}/login`, params ).then(res => JSON.parse(res)); };
export const userInfo = (params) => { return $.post(`${base}/setUserInfo`, params ).then(res => JSON.parse(res)); };
export const getUserInfo = params => { return $.get(`${base}/getUserInfo`, params ).then(res => JSON.parse(res)); };
export const setPovertyLevel = params => {return $.post(`${base}/setPovertyLevel`, params).then(res => JSON.parse(res));};
export const getPovertyLevel = params => {return $.get(`${base}/getPovertyLevel`, params).then(res => JSON.parse(res));};
export const getInform = params => {return $.get(`${base}/getInform`, params).then(res => JSON.parse(res));};
export const getPovertyLevelClassAll = params => {return $.get(`${base}/getPovertyLevelClassAll`, params).then(res => JSON.parse(res));};
export const setPovertyLevelDone = params => {return $.post(`${base}/setPovertyLevelDone`, params).then(res => JSON.parse(res));};
export const setPovertyLevelSubmit = params => {return $.post(`${base}/setPovertyLevelSubmit`, params).then(res => JSON.parse(res));};
export const applyAward = params => {return $.post(`${base}/applyAward`, params).then(res => JSON.parse(res));};
export const getAward = params => {return $.get(`${base}/getAward`, params).then(res => JSON.parse(res));};
export const getGrant = params => {return $.get(`${base}/getGrant`, params).then(res => JSON.parse(res));};
export const setAwardSubmit = params => {return $.post(`${base}/setAwardSubmit`, params).then(res => JSON.parse(res));};
export const setAwardDone = params => {return $.post(`${base}/setAwardDone`, params).then(res => JSON.parse(res));};
export const setUser = params => {return $.post(`${base}/setUser`, params).then(res => JSON.parse(res));};
export const setInform = params => {return $.post(`${base}/setInform`, params).then(res => JSON.parse(res));};
export const getPovertyLevelAll = params => {return $.get(`${base}/getPovertyLevelAll`, params).then(res => JSON.parse(res));};
export const getAwardUserInfo = params => {return $.get(`${base}/getAwardUserInfo`, params).then(res => JSON.parse(res));};
