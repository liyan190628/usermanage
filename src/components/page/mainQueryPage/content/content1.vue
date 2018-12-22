<template>
  <div style="height:647px;" class='bg-white border mb-20'>
    <!-- <el-button>导出pdf</el-button> -->
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
   
    <el-row class='px-30'>
      <el-col><h4>Solar pumping project</h4></el-col>
    </el-row>

    <div class="px-30 mt-10">
      <el-row type="flex" style='background-color: #DCDFE6;' class="row-bg pl-10 pd">
      <el-col :span="2">
        <h4>Note: </h4>
      </el-col>
      <el-col :span="6">
        <p class='text-bold'>Reference: K.Krit </p>
        <p class='text-bold'>E-mail: loadthep@gmail.com</p>
        <p class='text-bold'>Tel.: 086-3761868</p>
      </el-col>
      </el-row>
    </div>

    <div class="px-30">
      <el-row class='mt-10 border-bottom'>
        <el-col><h3>Parameter</h3></el-col>
      </el-row>
    </div>
    
    <!-- 客户输入相关 -->
    <div class="px-30">
      <el-row type="flex" class="row-bg pd border-bottom" justify="space-between">
      <el-col :span="6">
        Location: 
      </el-col>
      <el-col :span="6">
        Water temperature: 
      </el-col>
    </el-row>
    </div>
    <div class="px-30">
      <el-row type="flex" class="row-bg pd border-bottom" justify="space-between">
      <el-col :span="6">
        Required daily output:: 
      </el-col>
      <el-col :span="6">
        Dirt loss:  
      </el-col>
      <el-col :span="6">
        Motor cable:  
      </el-col>
    </el-row>
    </div>
    <div class="px-30">
      <el-row type="flex" class="row-bg pd border-bottom" justify="space-between">
      <el-col :span="6">
        Pipe type:  
      </el-col>
      <el-col :span="6">
        Static head:  
      </el-col>
      <el-col :span="6">
        Pipe length: 
      </el-col>
    </el-row>
    </div>
    
    <!-- 报告输出内容 -->
    <div class="px-30">
      <el-row type="flex" class='mt-10 border-bottom'>
        <el-col :span="5"><h3>Parameter</h3></el-col>
        <el-col :span="19"><h4>Quantity Details</h4></el-col>
      </el-row>
    </div>
    
    <div class="px-30" v-for="(item, index) in customerInfo" :key="index">
      <el-row type="flex" class="row-bg pd border-bottom">
      <el-col :span="5">
        <span>{{item.title}}</span> 
      </el-col>
      <el-col :span="19">
        <span>{{item.content}}</span>
      </el-col>
    </el-row>
    </div>


    <!-- 页尾 -->
    <el-row type="flex" class="row-bg py-20 px-30">
      <el-col :span="1">1/5</el-col>
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
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'},
        {title: 'PS2-4000 C-SJ8-15 -D', content: '1 pc. Submersible pump system including controller with DataModule, motor and pump end'}
      ]
    }
  }
}
</script>
