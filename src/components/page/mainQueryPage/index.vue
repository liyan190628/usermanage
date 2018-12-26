<template>
  <div id="pdfDom" @click="getPdf()">
    <div class="mainContent">
      <content1></content1>
    </div>
    <div class="mainContent">
      <content2></content2>
    </div>
    <div class="mainContent">
      <content3></content3>
    </div>
    <div class="mainContent">
      <content4></content4>
    </div>
    <div class="mainContent">
      <content5></content5>
    </div>
  </div>
</template>
<script>
import content1 from './content/content1'
import content2 from './content/content2'
import content3 from './content/content3'
import content4 from './content/content4'
import content5 from './content/content5'
export default {
  components: {content1, content2, content3, content4, content5},
  data () {
    return {
      htmlTitle: '页面导出PDF文件名'
    }
  }
}
</script>
<style>
.mainQuery{
  /* height: 10000px; */
  overflow: auto;
}
.mainContent{
  height: 1505px;
  background: #fff;
  /* font-size: 18px; */
  /* padding-bottom: 10px; */
}
</style>
