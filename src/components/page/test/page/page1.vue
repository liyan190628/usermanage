<template>
  <div class='bg-white py-20'>
    <!-- 标题 -->
    <el-row class='px-30'>
      <el-col><h1>PS2-4000 C-SJ8-15</h1></el-col>
    </el-row>
    <el-row class='px-30 mt-10'>
      <el-col><h3>Solar Submersible Pump System for 4" wells</h3></el-col>
    </el-row>
    <el-row class='px-30 mt-20'>
      <el-col><h3>System Overview</h3></el-col>
    </el-row>

    <!-- 详情 -->
    <el-row class='px-30 mt-10'>
      <el-col :span="6">Head</el-col>
      <el-col :span="6">max. 80 m</el-col>
    </el-row>
    <el-row class='px-30 mt-10'>
      <el-col :span="6">Flow rate</el-col>
      <el-col :span="6">max. 13 m³/h</el-col>
    </el-row>
    
    <el-row class='px-30 mt-20'>
      <el-col><h3>Technical Data</h3></el-col>
    </el-row>

    <!-- 图表详情部分 -->
    <el-row class='px-30 mt-10'>
      <el-col :span="12">
        <h4>Controller PS2-4000</h4>
        <ul style="padding-left: 20px;">
          <li>Controlling and monitoring</li>
          <li>Control inputs for dry running protection, remote control etc.</li>
          <li>Protected against reverse polarity, overload and overtemperature</li>
          <li>Integrated MPPT (Maximum Power Point Tracking)</li>
          <li>Integrated Sun Sensor</li>
        </ul>
        <el-row class='mt-10'>
          <el-col :span="18">Power</el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Input voltage</el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Optimum Vmp** </el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Motor current</el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Efficiency</el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Ambient temp. </el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Enclosure class</el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>

        <h4 class="mt-20">Motor ECDRIVE 4000-C</h4>
        <ul style="padding-left: 20px;">
          <li>Maintenance-free brushless DC motor</li>
          <li>Water filled</li>
          <li>Premium materials, stainless steel: AISI 304/316</li>
          <li>No electronics in the motor</li>
        </ul>
        <el-row class='mt-10'>
          <el-col :span="18">Rated power</el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Efficiency </el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Motor speed </el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Insulation class F</el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Enclosure class </el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Submersion</el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>

        <h4 class="mt-20">Pump End PE C-SJ8-15</h4>
        <ul style="padding-left: 20px;">
          <li>Non-return valve</li>
          <li>Premium materials, stainless steel: AISI 304</li>
          <li>Optional: dry running protection</li>
          <li>Centrifugal pump</li>
        </ul>
      
        <h4 style="margin-top:60px;" class="mt-20">Pump Unit PU4000 C-SJ8-15 (Motor, Pump End)</h4>
        <el-row class='mt-10'>
          <el-col :span="18">Borehole diameter</el-col>
          <el-col :span="6">max. 4.0 kW</el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="18">Water temperature</el-col>
          <el-col :span="6">max. 13 m³/h</el-col>
        </el-row>

        <el-row class='mt-10'>
          <el-col><h3>Standards</h3></el-col>
        </el-row>
        <el-row class='mt-10'>
          <el-col :span="8">
            <img src="@/assets/pdf-7.jpg" alt="">
          </el-col>
          <el-col :span="16">
            <p>2006/42/EC, 2004/108/EC, 2006/95/EC</p>
            <p style="margin-top:20px;">UL 778, 1004</p>
            <p style="margin-bottom:20px;">CSA C22.2 No. 14, 100, </p>
            <p>IEC/EN 61702:1995</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <img src="@/assets/pdf-6.jpg" alt="">
      </el-col>
    </el-row>

    <p class="px-30 mt-20">The logos shown reflect the approvals that have been granted for this product family. Products are ordered and supplied with the approvals specific to the market requirements.</p>
    <p class="px-30">**Vmp: MPP-voltage under Standard Test Conditions (STC): 1000 W/m² solar irradiance, 25 °C cell temperature</p>
    
    <!-- 页面底部 -->
    <el-row style="margin-top:100px;" class="px-30">
      <h5>BERNT LORENTZ GmbH & Co. KG</h5>
      <P>Siebenstuecken 24, 24558 Henstedt-Ulzburg, </P>
      <P>Germany, Tel +49 (0)4193 8806-700, www.lorentz.de</P>
    </el-row>
    
    <el-row class="px-30 mt-20">
      <el-col :span="1">
        <img src="@/assets/pdf-2.png" alt="">
      </el-col>
      <el-col :span="28">
        <p>Created by LORENTZ COMPASS 3.1.0.92</p>
        <P>All specifications and information are given with good intent, errors are possible and products may be subject to change without notice.Pictures may differ from actual </P>
        <P>products depending on local market requirements and regulations.</P>
      </el-col>
    </el-row>



  </div>
</template>
