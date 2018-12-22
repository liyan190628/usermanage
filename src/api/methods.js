import router from '../router'
const axios = require('axios')
import { Loading, } from 'element-ui'

axios.defaults.timeout = 5000 // 超时时间
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 发送请求拦截器
instance.interceptors.request.use(config => {
    // 获取本地存储的token值
    let token = localStorage.getItem('platformToken')
    if (token) { // 发送前判断是否存在token，如果存在，统一在http请求的headers加上token
        config.headers.Authorization = 'Bearer ' + token
    }
    // loadinginstace = Loading.service({ // 加载状态
    //     fullscreen: true
    // })
    return config
}, err => {
    // loadinginstace.close()
    message('请求失败，请检查网络', 'warning')
    return Promise.reject(err)
})

// 返回参数拦截器
instance.interceptors.response.use(
    response => {
        // loadinginstace.close()
        let err = response.data.Error
        if (err) { // 若操作失败
            message(err, 'error')
        }
        return response.data
    },
    err => {
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    message('登录已失效，请重新登录！', 'warning')
                    localStorage.removeItem('platformToken') // 清除token值
                    router.push({
                        name: '登录',
                        query: {
                            redirect: router.currentRoute.fullPath
                        } // 登录后跳转回来
                    })
                    break
                case 403:
                    message('您没有此操作权限', 'error')
                    break
                case 404:
                    message('请求地址失效', 'error')
                    break
                default:
                    message('网络不稳定，请检查网络', 'error')
            }
        }
        // loadinginstace.close()
        return Promise.reject(err)
    }
)

const directives = {
    // 异步get方法
    async getAsync(apiUrl, params, header) {
        return instance({
            method: 'get',
            url: apiUrl,
            params: params,
            headers: header || null
        })
    },
    // 异步post方法
    async postAsync(apiUrl, params, header) {
        return instance({
            method: 'post',
            url: apiUrl,
            data: params,
            headers: header || null
        })
    },
    // 异步put方法
    async putAsync(apiUrl, params, header) {
        return instance({
            method: 'put',
            url: apiUrl,
            data: params,
            headers: header || null
        })
    }
}

export {
    directives
}