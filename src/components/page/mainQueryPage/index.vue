<template>
  <div>
    <!-- 第一页 -->
    <content1></content1>
    <!-- 第二页 -->
    <content2></content2>
    <!-- 第三页 -->
    <content3></content3>
    <!-- 第四页 -->
    <content4></content4>
    <!-- 第五页 -->
    <content5></content5>
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
      ]
    }
  }
}
</script>
