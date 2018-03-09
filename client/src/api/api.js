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

let base = 'http://192.168.1.101:3000';

export const requestLogin = params => { return $.post(`${base}/login`, params ).then(res => JSON.parse(res)); };
export const userInfo = (params) => { return $.post(`${base}/setUserInfo`, params ).then(res => JSON.parse(res)); };
export const getUserInfo = params => { return $.get(`${base}/getUserInfo`, params ).then(res => JSON.parse(res)); };
