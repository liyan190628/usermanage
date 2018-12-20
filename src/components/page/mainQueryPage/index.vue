<template>
  <div @click="getPdf()" id="pdfDom">
    <!-- 第一页 -->
    <div>
      <content1></content1>
    </div>
    <!-- 第二页 -->
    <div>
      <content2></content2>
    </div>
    <!-- 第三页 -->
    <div>
      <content3></content3>
    </div>
    <!-- 第四页 -->
    <div>
      <content4></content4>
    </div>
    <!-- 第五页 -->
    <div>
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
      tableData: [],
      customerInfo: [
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'}
      ],
      htmlTitle: '页面导出PDF文件名'
    }
  }
}
</script>
