export default {
    name: 'mixin',
    methods: {
        handleCurrentChange(val) {
            this.cur_page = val
            // this.getData()
        },
        handleDelete(index, row) {
            this.idx = index
            this.delVisible = true
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
    }
}
