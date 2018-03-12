import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import information from './views/child/information.vue'
import informationEdit from './views/child/informationEdit.vue'
import documentSelect from './views/child/documentSelect.vue'
import documentSubmit from './views/child/documentSubmit.vue'
import jiangxuejin from './views/child/jiangxuejin.vue'
import jiangxuexiangqing from './views/child/jiangxuexiangqing.vue'
import zhuxue from './views/child/zhuxue.vue'
import zhuxuexiangqing from './views/child/zhuxuexiangqing.vue'
import documentSh from './views/teacher/documentSh.vue'
import documentxiangqing from './views/teacher/documentxiangqing.vue'
import submit from './views/teacher/submit.vue'
import jiangxuejinSh from './views/teacher/jiangxuejinSh.vue'
import jiangxuejinSubmit from './views/teacher/jiangxuejinSubmit.vue'
import jiangxuejinxiangqingSh from './views/teacher/jiangxuejinxiangqingSh.vue'
import zhuxueSh from './views/teacher/zhuxueSh.vue'
import zhuxueSubmit from './views/teacher/zhuxueSubmit.vue'
import zhuxuexiangqingSh from './views/teacher/zhuxuexiangqingSh.vue'
import xuesheng from './views/admin/xuesheng.vue'
import creatJiangxue from './views/admin/createJiangxue.vue'
import pinkuntongji from './views/admin/pinkuntongji.vue'
import pinkunxq from './views/admin/pinkunxq.vue'
import jiangxuexq from './views/admin/jiangxuexq.vue'
import jiangxuetongji from './views/admin/jiangxuetongji.vue'

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
        path: '/student',
        component: Home,
        name: '个人信息',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/studentInformation', component: information, name: '信息查询' },
            { path: '/studentInformationEdit', component: informationEdit, name: '完善信息' }
        ]
    },
    {
        path: '/student',
        component: Home,
        name: '贫困建档信息',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/studentDocumentSelect', component: documentSelect, name: '个人贫困建档信息' },
            { path: '/studentDocumentSubmit', component: documentSubmit, name: '完善贫困建档信息' }
        ]
    },
    {
        path: '/student',
        component: Home,
        name: '奖学金信息',
        iconCls: 'fa fa-id-card',
        children: [
            { path: '/studentJiangxuejin', component: jiangxuejin, name: '所有通知页面' },
            { path: '/studentJiangxuexiangqing', component: jiangxuexiangqing, name: '详细信息页面',hidden: true }
        ]
    },
    {
        path: '/student',
        component: Home,
        name: '助学金信息',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/studentZhuxue', component: zhuxue, name: '所有通知页面' },
            { path: '/studentZhuxuexiangqing', component: zhuxuexiangqing, name: '详细信息页面',hidden: true }
        ]
    },
    {
        path: '/teacher',
        component: Home,
        name: '教师审批',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/teacherDocumentSh', component: documentSh, name: '贫困建档审核' },
            { path: '/teacherDocumentxiangqing', component: documentxiangqing, name: '完善贫困建档信息', hidden: true },
            { path: '/teacherJiangxuejinSh', component: jiangxuejinSh, name: '奖学金审批' },
            { path: '/teacherJiangxuejinSubmit', component: jiangxuejinSubmit, name: '提交奖学金', hidden: true },
            { path: '/teacherJiangxuejinxiangqingSh', component: jiangxuejinxiangqingSh, name: '奖学金详情', hidden: true },
            { path: '/teacherSubmit', component: submit, name: '完善贫困建档信息', hidden: true },
            { path: '/teacherZhuxueSh', component: zhuxueSh, name: '助学金审批' },
            { path: '/teacherZhuxueSubmit', component: zhuxueSubmit, name: '提交助学金', hidden: true },
            { path: '/teacherZhuxuexiangqingSh', component: zhuxuexiangqingSh, name: '助学金详情', hidden: true }
        
        ]
    },
    {
        path: '/admin',
        component: Home,
        name: '管理员列表',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/adminxuesheng', component: xuesheng, name: '录入新生学号信息' },
            { path: '/admincreatJiangxue', component: creatJiangxue, name: '发布奖／助学金'},
            { path: '/adminpinkuntongji', component: pinkuntongji, name: '贫困建档统计' },
            { path: '/adminpinkunxq', component: pinkunxq, name: '提交奖学金', hidden: true },
            { path: '/adminjiangxuexq', component: jiangxuexq, name: '奖学金详情', hidden: true },
            { path: '/adminjiangxuetongji', component: jiangxuetongji, name: '奖学金统计'},
            // { path: '/teacherZhuxueSh', component: zhuxueSh, name: '助学金审批' },
            // { path: '/teacherZhuxueSubmit', component: zhuxueSubmit, name: '提交助学金', hidden: true },
            // { path: '/teacherZhuxuexiangqingSh', component: zhuxuexiangqingSh, name: '助学金详情', hidden: true }
        
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
