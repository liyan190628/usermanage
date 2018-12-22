import {
    directives
} from './methods'

let apiBaseUrl = require('./ApiConst').apiBaseUrl
apiBaseUrl += 'pumpms/customer'

const userService = {
    // 获取用户列表
    async getList(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryList`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 编辑用户
    async getEdit(vm, header) {
        let apiUrl = `${apiBaseUrl}/edit`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 删除用户
    async getUnlock(vm, header) {
        let apiUrl = `${apiBaseUrl}/unlock`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    async getlock(vm, header) {
        let apiUrl = `${apiBaseUrl}/lock`
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
    async getDeleteUser(vm, header) {
        let apiUrl = `${apiBaseUrl}/delete`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 用户授权
    async getAccredit(vm, header) {
        let apiUrl = `${apiBaseUrl}/accredit`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    }
}

export { userService }