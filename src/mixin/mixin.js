export default {
    name: 'mixin',
    methods: {
        handleSizeChange(val) {
            this.rows = val
            this.getTableList()
        },
        handleCurrentChange(val) {
            this.cur_page = val
            this.getTableList()
        },
        addCancel() {
            this.addVisible = !this.addVisible
        },
        editCancel() {
            this.editVisible = !this.editVisible
        },
        deleteCancel() {
            this.delVisible = !this.delVisible
        },
        back() {
            this.$router.go(-1)
        },
        linkTo(name, routeId) {
            this.$router.push({ name: name, params: { id: routeId } })
        }
    }
}