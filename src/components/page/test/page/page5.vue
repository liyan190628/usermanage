<template>
  <div class='bg-white py-20 px-30'>
    <!-- 标题 -->
    <el-row>
      <el-col><h1>Surge Protector</h1></el-col>
    </el-row>
    <el-row class='mt-10'>
      <el-col><h3>Device to Protect LORENTZ Pump Accessories from Voltage Spikes</h3></el-col>
    </el-row>

    <!-- 图表详情部分 -->
    <el-row class='mt-20'>
      <el-col :span="12">
        <h4>ORDER INFORMATION</h4>
        <ul class="mt-20" style="padding-left: 40px;">
          <li>Item no.: </li>
        </ul>

        <h4 class="mt-20">FEATURES</h4>
        <ul class="mt-20" style="padding-left: 40px;">
          <li>Reliable surge protection for all </li>
          <li style="list-style:none;">LORENTZ pump accessories</li>
          <li>Can be installed inside the PS Controller</li>
        </ul>
    
        <h4 class="mt-20">TECHNICAL DATA</h4>
        <ul style="padding-left: 40px;">
          <li>Max. voltage: 14 VDC</li>
          <li>Max current 8/20µs: 500 A</li>
          <li>Enclosure class: IP65</li>
          <li>Ambient temperature: max. 50°C</li>
          <li>Wire size: 3x 1.0mm² or AWG 18</li>
          <li>Meets the requirements for CE</li>
        </ul>
        
        <h4 class="mt-20">DIMENSION/WEIGHT</h4>
        <ul style="padding-left: 40px;">
          <li>Packaging dimensions: 260 x 170 x 40 mm</li>
          <li>Total weight: 0.8 kg / 1.8 lbs</li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img src="@/assets/pdf-6.jpg" alt="">
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
