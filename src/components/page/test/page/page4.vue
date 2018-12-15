<template>
  <div class='bg-white py-20 px-30'>
    <!-- 标题 -->
    <el-row>
      <el-col><h1>Float Switch</h1></el-col>
    </el-row>
    <el-row class='mt-10'>
      <el-col><h3>Mechanically Activated Device for Dry Run Protection in Applications </h3></el-col>
    </el-row>
    <el-row class='mt-20'>
      <el-col><h3>with LORENTZ Solar Pump Systems</h3></el-col>
    </el-row>
    <el-row class="mt-20">
      <p>The switch can be used to detect the water level within a well. When the water level in the well dropped below the level of the well probe, the LORENTZ Controller will stop the pump and indicates Source Low LED. </p>
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
          <li>N.O. (normally open) and N.C. (normally closed) function</li>
          <li>Reliable water level detection</li>
          <li>Simple to install</li>
          <li>Trouble free operation</li>
          <li>Not sensitive to rotation</li>
          <li>Corrosion-free</li>
        </ul>
    
        <h4 class="mt-20">TECHNICAL DATA</h4>
        <ul style="padding-left: 40px;">
          <li>Operating temperature: -10°C to 55°C</li>
          <li>Storage temperature: : -10°C to 55°C</li>
          <li>Enclosure class: IP68</li>
          <li>Cable length: 3m, waterproof</li>
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
