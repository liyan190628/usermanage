import Vue from 'vue'
export default {
    state: {
        currentUser: {
            get UserName() {
                return localStorage.getItem('currentUser_name')
            },
            get UserToken() {
                return localStorage.getItem('currentUser_token')
            }
        }
    },
    mutations: {
        // 保存到客户端
        setUser(state, {
            user_name,
            user_token
        }) {
            // 在这里把用户名和token保存起来
            localStorage.setItem('currentUser_name', user_name)
            localStorage.setItem('currentUser_token', user_token)
        },
        getUser() {}
    },
    actions: {
        // 发送http请求后台服务器 在用户登录页调用
        userLogin(context, {
            user_name,
            user_pass
        }) {
            // 发送get请求做权限验证(真实开发建议用post方式)
            let url = "http://localhost/yiiserver/web/index.php/token?client_appid=" + user_name + "&client_appkey=" + user_pass
            // console.log(url)
            Vue.http.get(url)
                .then((res) => {
                    if (res !== null && res.body !== undefined && 'access-token' in res.body) {
                        var token = res.body['access-token']
                        if (token !== '') {
                            // 后端api验证通过
                            // 调用mutations里定义的方法
                            context.commit('setUser', {
                                'user_name': user_name,
                                'user_token': user_token
                            })
                        } else {
                            this.$message.error('用户名密码错误')
                        }
                    }(res) => {
                        this.$message.error('请求失败进入这里')
                    }
                })
        }
    }
}
