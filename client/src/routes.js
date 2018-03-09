import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    
    {
        path: '/',
        component: Home,
        name: '个人信息',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/information', component: information, name: '信息查询' },
            { path: '/informationEdit', component: informationEdit, name: '完善信息' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '贫困建档信息',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/documentSelect', component: documentSelect, name: '个人贫困建档信息查询页面' },
            { path: '/documentSubmit', component: documentSubmit, name: '完善贫困建档信息并提交至教师' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '奖学金信息',
        iconCls: 'fa fa-id-card',
        children: [
            { path: '/jiangxuejin', component: jiangxuejin, name: '所有通知页面' },
            { path: '/jiangxuexiangqing', component: jiangxuexiangqing, name: '详细信息页面' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '助学金信息',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/zhuxue', component: zhuxue, name: '所有通知页面' },
            { path: '/zhuxuexiangqing', component: Page5, name: '详细信息页面' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
