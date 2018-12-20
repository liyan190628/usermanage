import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/userManagement'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '首页'
            },
            children: [{
                    path: '/userManagement',
                    component: resolve => require(['../components/page/UserManagement/UserList.vue'], resolve),
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: '/roleManage',
                    meta: {
                        title: '角色管理'
                    },
                    component: resolve => require(['../components/page/roleManage/index.vue'], resolve),
                },
                {
                    path: '/systemParameter',
                    component: resolve =>
                        require(['../components/page/SystemParameter/SystemParameterList.vue'], resolve),
                    meta: {
                        title: '系统参数管理'
                    }
                },
                {
                    path: '/pumpParameter',
                    component: resolve => require(['../components/page/PumpParameter/PumpParameterList.vue'], resolve),
                    meta: {
                        title: '泵参数管理'
                    }
                },
                {
                    path: '/pumpEdit',
                    name: 'pumpEdit',
                    component: resolve => require(['../components/page/PumpParameter/pumpEdit.vue'], resolve),
                },
                    {
                
                    path: '/motorManage',
                    component: resolve => require(['../components/page/PumpParameter/motorManage.vue'], resolve),
                    meta: {
                        title: 'MotorManage'
                    }
                },
                {
                    path: '/standardsManage',
                    component: resolve => require(['../components/page/PumpParameter/standardsManage.vue'], resolve),
                    meta: {
                        title: 'StandardsManage'
                    }
                },
                {
                    path: '/addPumpParameter',
                    component: resolve => require(['../components/page/PumpParameter/addPumpParameter.vue'], resolve),
                    meta: {
                        title: '新增泵参数'
                    }
                },
                {
                    path: '/solarParameter',
                    component: resolve =>
                        require(['../components/page/SolarParameter/SolarParameterList.vue'], resolve),
                    meta: {
                        title: '太阳能参数管理'
                    }
                },
                {
                    // 附件管理
                    path: '/attachment',
                    component: resolve => require(['../components/page/Attachment/attachmentList.vue'], resolve),
                    meta: {
                        title: '附件管理列表'
                    }
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: {
                        title: '泵类型维护'
                    }
                },
                {
                    path: '/systemInstallDiagram',
                    component: resolve =>
                        require(['../components/page/SystemInstallDiagram/SystemInstallDiagram.vue'], resolve),
                    meta: {
                        title: '系统安装图管理'
                    }
                },
                {
                    path: '/mainQueryPage',
                    component: resolve => require(['../components/page/mainQueryPage/index.vue'], resolve),
                    meta: {
                        title: '主查询页面',
                        permission: true
                    }
                },
                {
                    path: '/test',
                    component: resolve => require(['../components/page/test/index.vue'], resolve),
                    meta: {
                        title: '测试',
                        permission: true
                    }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: {
                        title: '403'
                    }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
