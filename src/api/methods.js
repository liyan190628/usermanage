// import qs from 'qs'
import router from '../router'
import app from '../main.js'
const axios = require('axios')
import {
    Loading,
    Message
} from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
// var loadinginstace
// axios.interceptors.request.use(config => {
//     // element ui Loading方法
//     loadinginstace = Loading.service({
//         fullscreen: true
//     })

//     return config

// }, error => {
//     loadinginstace.close()
//     Message.error({
//         message: '加载超时'

//     })

//     return Promise.reject(error)

// })
// // http响应拦截器
// axios.interceptors.response.use(data => { // 响应成功关闭loading
//     loadinginstace.close()

//     return data

// }, error => {
//     loadinginstace.close()
//     Message.error({
//         message: '加载失败'

//     })

//     return Promise.reject(error)

// })
// export default axios
const myErr = 'callback is expect fuction'
const instance = axios.create()

instance.defaults.headers.post['Content-Type'] = 'application/json-patch+json'

// 发送请求拦截器
instance.interceptors.request.use(config => {
    // 获取本地存储的token值
    let token = localStorage.getItem('platformToken')
    if (token) { // 发送前判断是否存在token，如果存在，统一在http请求的headers加上token
        config.headers.Authorization = 'Bearer ' + token
    }
    app.loadingService()
    if (config.method === 'post' && !config.data.Accept) {
        let data = config.data
        let arr = []
        config.data = JSON.stringify(data, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (arr.indexOf(value) !== -1) return
                arr.push(value)
            }
            return value
        })
        arr = null
        // config.data = JSON.stringify(config.data)
    }
    if (typeof config.data === 'object') { // 对有请求头的改变的数据处理
        if (config.data.Accept) {
            config.data = config.data.file
        }
    }
    // console.log(config)
    return config
}, err => {
    message('请求失败，请检查网络', 'warning')
    return Promise.reject(err)
})

// 返回参数拦截器
instance.interceptors.response.use(
    response => {
        app.$load.close()
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
        app.$load.close()
        return Promise.reject(err)
    }
)

/*
 * 提示消息函数
 * 参数msg是提示的文本内容
 * 参数type是提示的主题，有success/warning/error/info
 */
function message(msg, type) {
    Message({
        // showClose: true, // 是否显示关闭按钮
        message: msg, // 提示信息
        duration: 2000, // 显示时间
        type // 主题
    })
}

const directives = {
    // 异步get方法
    async getAsync(apiUrl, header) {
        return instance({
            method: 'get',
            url: apiUrl,
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
    },
    // axios的get方法
    getMethod(apiUrl, queryVM, callback) {
        if (typeof callback !== 'function') throw myErr
        else {
            instance.get(apiUrl, queryVM)
                .then(response => callback(response, null))
                .catch(err => callback(null, err))
        }
    },
    /*
     * axios的post方法
     * apiUrl是请求地址
     * queryVM是请求参数， .e.g. {id: '1'}
     * callback是回调函数
     */
    postMethod(apiUrl, queryVM, callback) {
        if (typeof callback !== 'function') throw myErr
        else {
            instance.post(apiUrl, queryVM)
                .then(response => callback(response, null))
                .catch(err => callback(null, err))
        }
    },
    // axios的delete方法
    deleteMethod(apiUrl, queryVM, callback) {
        if (typeof callback !== 'function') throw myErr
        else {
            instance.delete(apiUrl, queryVM)
                .then(response => callback(response, null))
                .catch(err => callback(null, err))
        }
    },
    // axios的put方法
    putMethod(apiUrl, queryVM, callback) {
        if (typeof callback !== 'function') throw myErr
        else {
            instance.put(apiUrl, queryVM)
                .then(response => callback(response, null))
                .catch(err => callback(null, err))
        }
    }
}

export {
    directives
}
