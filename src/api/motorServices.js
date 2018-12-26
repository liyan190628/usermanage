import {
    directives
} from './methods'

let apiBaseUrl = require('./ApiConst').apiBaseUrl
apiBaseUrl += 'pumpms/motor'

const motorServices = {
    // 获取列表
    async getMotorList(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryList`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 编辑
    async getMotorEdit(vm, header) {
        let apiUrl = `${apiBaseUrl}/edit`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 添加
    async getMotorAdd(vm, header) {
        let apiUrl = `${apiBaseUrl}/add`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 删除
    async getMotorDelete(vm, header) {
        let apiUrl = `${apiBaseUrl}/delete`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    async getMotorDetail(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryDetail`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    }
}

export { motorServices }