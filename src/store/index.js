import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
import modal_status from './modules/modal_status'
export default new vuex.Store({
    modules: {
        modal_status
    }
})
