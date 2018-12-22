import {
    directives
} from './methods'

let apiBaseUrl = require('./ApiConst').apiBaseUrl
apiBaseUrl += 'pumpms/pump'

const pumpService = {
    // 获取列表
    async getList(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryList`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 编辑
    async postEdit(vm, header) {
        let apiUrl = `${apiBaseUrl}/edit`
        let res = await directives.postAsync(apiUrl, vm, header)
        return res
    },
    // 添加
    async getAdd(vm, header) {
        let apiUrl = `${apiBaseUrl}/add`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    // 删除
    async getDelete(vm, header) {
        let apiUrl = `${apiBaseUrl}/delete`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    },
    async getDetail(vm, header) {
        let apiUrl = `${apiBaseUrl}/queryDetail`
        let res = await directives.getAsync(apiUrl, vm, header)
        return res
    }
}

export { pumpService }