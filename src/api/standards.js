import {
    directives
} from './methods'

let apiBaseUrl = require('./ApiConst').apiBaseUrl
apiBaseUrl += 'pumpms/standard'

const standardService = {
    // 获取用户列表
    async getList(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryList`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 添加用户
    async getAdd(vm, header) {
        let apiUrl = `${apiBaseUrl}/add`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 查询用户
    async getDetail(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryDetail`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 删除用户
    async getDelete(vm, header) {
        let apiUrl = `${apiBaseUrl}/delete`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    }
}

export {
    standardService
}