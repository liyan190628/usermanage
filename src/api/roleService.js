import {
    directives
} from './methods'

let apiBaseUrl = require('./ApiConst').apiBaseUrl
apiBaseUrl += 'pumpms/role'

const roleService = {
    // 获取角色列表
    async getRoleList(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryList`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 编辑角色
    async getEditRole(vm, header) {
        let apiUrl = `${apiBaseUrl}/edit`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 添加角色
    async getAddRoler(vm, header) {
        let apiUrl = `${apiBaseUrl}/add`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 删除角色
    async getDeleteRole(vm, header) {
        let apiUrl = `${apiBaseUrl}/delete`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    async getQueryRoles(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryRoles`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    }
}

export { roleService }