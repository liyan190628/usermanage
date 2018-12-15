<template>
  <div class='bg-white mb-20'>
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
      <el-col class='border-bottom2'><h3>Sizing Layout</h3></el-col>
    </div>

    <!-- 图表详情 -->
    
    <div class="mt-30">
      <img style="display: block;margin: 0 auto;" src="@/assets/pdf-5.jpg" alt=""> 
    </div>
      
    <div class="px-30" v-for="(item, index) in customerInfo" :key="index">
      <el-row :class="index==0? 'border-top' : ''" type="flex" class="row-bg pd border-bottom">
      <el-col class="pl-30" :span="5">
        <h4>{{item.title}}</h4> 
      </el-col>
      <el-col :span="19">
        <span>{{item.content}}</span>
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
      customerInfo: [
        {title: 'H (Static head): ', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'B (Drawdown): ', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'D (Pipeline inner diameter)', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'L (Pipe length):', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'T (Tilt angle):', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'}
      ]
    }
  },
  methods: {
  }
}
</script>
