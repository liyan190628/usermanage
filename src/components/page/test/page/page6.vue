<template>
  <div class='bg-white py-20 px-30'>
    <!-- 标题 -->
    <el-row>
      <el-col><h1>PV Disconnect 440-40-6</h1></el-col>
    </el-row>
    <el-row class='mt-10'>
      <el-col><h3>Connection box with DC Disconnect Switch and optional lightning surge protection</h3></el-col>
    </el-row>

    <el-row>
      <h4>ORDER INFORMATION</h4>
        <ul class="mt-20" style="padding-left: 40px;">
          <li>
            <span class="text-bold">Item no.:</span>
            <span class="mr-10">19-000136</span>
            <span class="text-bold">product name: </span>
            <span>PV Disconnect 440-40-6</span>
          </li>
          <li>
            <span class="text-bold">Item no.:</span>
            <span class="mr-10">19-000136</span>
            <span class="text-bold">product name: </span>
            <span>PV Disconnect 440-40-6</span>
          </li>
          <p class="mt-10">Lightning surge protectors must be ordered separately</p>
        </ul>
    </el-row>

    <!-- 图表详情部分 -->
    <el-row class='mt-20'>
      <el-col :span="12">
        <h4 class="mt-20">FEATURES</h4>
        <ul class="mt-20" style="padding-left: 40px;">
          <li>Designed for PS150 – PS4000</li>
          <li>For professional installation of pumping systems</li>
        </ul>
    
        <h4 class="mt-20">TECHNICAL DATA</h4>
        <ul style="padding-left: 40px;">
          <li>Wiring up to 6 PV-strings in parallel</li>
          <li>DC rated disconnect switch enclosed</li>
          <li>Enclosure class IP 54</li>
          <li>Meets the requirements for CE</li>
        </ul>

      <div class="mt-20">
        <h4 style="padding-left:5px;" class='pd border-bottom'>PV Disconnect 440-40-6</h4>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">Max. voltage </el-col>
          <el-col :span="6">440 V DC</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">Max. current per string</el-col>
          <el-col :span="6">10 A</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">Max. total current</el-col>
          <el-col :span="6">40 A</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">Max. no. of strings</el-col>
          <el-col :span="6">6</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">String cable size </el-col>
          <el-col :span="6">2,5 - 4mm²</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">Output cable size </el-col>
          <el-col :span="6">4 - 10mm²</el-col>
        </el-row>
      </div>

      <h4 class="mt-20">DIMENSION/WEIGHT [mm]</h4>
      <img src="@/assets/pdf-11.jpg" alt="">

      </el-col>



      <!-- 右侧图片栏 -->
      <el-col :span="12">

        <!-- 展示图片 -->
        <img src="@/assets/pdf-10.jpg" alt="">

        <h4 class="mt-20">Optional lightning surge protector</h4>
        <ul class="mt-20" style="padding-left: 40px;">
          <li>Connects through an existing mounting hole in the PV connect housing</li>
          <li>Proper grounding of the device is mandatory to achieve protection</li>
        </ul>

      <div class="mt-20">
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col class="text-bold" :span="6">Controller</el-col>
          <el-col class="text-bold" :span="8">MidNite surge protector</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">PS150 – PS200 </el-col>
          <el-col :span="8">MNSPD115</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">PS600 – PS1800</el-col>
          <el-col :span="8">MNSPD300</el-col>
        </el-row>
        <el-row style="padding-left:5px;" type="flex" justify="space-between" class='pd border-bottom'>
          <el-col :span="6">PS4000</el-col>
          <el-col :span="8">MNSPD600</el-col>
        </el-row>
      </div>

      <img class="mt-20" src="@/assets/pdf-12.jpg" alt="">

      </el-col>
    </el-row>

     <!-- 页面底部 -->
    <el-row style="margin-top:100px;">
      <h5>BERNT LORENTZ GmbH & Co. KG</h5>
      <P>Siebenstuecken 24, 24558 Henstedt-Ulzburg, Germany</P>
      <P>Tel +49 (0)4193 8806-700, <a>www.lorentz.de</a></P>
    </el-row>
    
    <el-row class="mt-20">
      <el-col>
        <P>All specifications and information are given with good intent, errors are possible and products may be subject to change without notice. </P>
        <P>Pictures may differ from actual products depending on local market requirements and regulations</P>
      </el-col>
    </el-row>

  </div> 
</template>
