<template>
  <div style="height: 1140px;" class='bg-white mb-20'>
    <!-- logo及公司相关信息 -->
    <el-row type="flex" class="row-bg py-20 px-30">
      <el-col :span="7">
        <img src="@/assets/logo.png" alt="">
        <p class='pd text-bold'>Tuesday, 16 May 2017</p>
        <h3>Solar Water Pump @Chiang Rai</h3>
      </el-col>
      <el-col :span="8">
        <h4 class='pb-10'>ABO Trading Co.,Ltd</h4>
        <p class='text-bold'>17/6-7 Moo 4, Chiangmai-Lumpang </p>
        <p class='text-bold'>Road, T.Nongpakrang, A.Muang</p>
        <p class='text-bold'>Chiangmai</p>
        <p class='text-bold'>www.abotrading.co.th</p>
      </el-col>
      <el-col :span="6">
        <h4 class='pb-10'>K.Issaraporn</h4>
        <p class='text-bold'>Tel: 0 5324 1617</p>
        <p class='text-bold'>Fax: 0 5324 1616</p>
        <p class='text-bold'>issaraporn@abotrading.co.th</p>
      </el-col>
    </el-row>
    
    <!-- 输出的曲线 -->
    <el-row class='px-30'>
      <el-col><h4>Solar pumping project</h4></el-col>
    </el-row>

    <div class="px-30 mt-10 mb-20">
      <el-col class='border-bottom2'><h3>System Layout</h3></el-col>
    </div>

    <!-- 图表详情 -->
    
    <div class="mt-30">
      <img style="display: block;margin: 0 auto;" src="@/assets/pdf-4.jpg" alt=""> 
    </div>
      
    <div class="px-30 mt-20">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="11">
          <div :class="index==0? 'border-top' : ''" v-for="(item, index) in systermInfo" :key="index"  class="pd pl-30 border-bottom">
            <span :class="index===9? 'ml-left' : ''" class="text-bold mr-10">{{index+1}}:</span>
            {{item.content}}
          </div>  
        </el-col>
        <el-col :span="11">
          <div :class="index==0? 'border-top' : ''" v-for="(item, index) in systermInfo2" :key="index"  class="pd pl-30 border-bottom">
            <span class="text-bold mr-10">{{index+11}}:</span>
            {{item.content}}
          </div> 
        </el-col>
      </el-row>
    </div>

    

    <!-- 页尾 -->
    <el-row type="flex" class="row-bg py-20 px-30">
      <el-col :span="1">4/5</el-col>
      <el-col :span="1">
        <img src="@/assets/pdf-2.png" alt="">
      </el-col>
      <el-col :span="24">
        <p>Created by LORENTZ COMPASS 3.1.0.92</p>
        <p>All specifications and information are given with good intent, errors are possible and products may be subject to change</p>
        <p>without notice.</p>
      </el-col>
      <el-col :span="6">
        <img src="@/assets/pdf-3.jpg" alt="">
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      systermInfo: [
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
      ],
      systermInfo2: [
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'},
        { content: 'PS2 Controller'}
      ]
    }
  },
  methods: {
  }
}
</script>
