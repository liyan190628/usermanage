<template>
  <div>
    <el-tabs
      v-model="activeName"
      type="border-card"
    >
      <el-tab-pane
        name="input"
        label="Input"
      >
        <input-content></input-content>
      </el-tab-pane>
      <el-tab-pane
        name="wiring"
        label="Wiring"
      >
        <wiring></wiring>
      </el-tab-pane>
      <el-tab-pane
        name="report"
        label="Report"
      >
        <report></report>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import inputContent from './input'
import wiring from './wiring'
import report from './report'
export default {
  components: { inputContent, wiring, report },
  data() {
    return {
      activeName: 'report'
    }
  }
}
</script>
<style>
.imgWrap {
}
</style>
