<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div class="wiring">
          <div class="title">
            太阳能板接线描述
          </div>
        </div>
      </el-col>
      <el-col>

      </el-col>
    </el-row>
  </div>
</template>
<style lang='scss'>
.wiring {
  border: 1px solid #e0e0e0;
  padding: 20px;
  // background: #666666;
  min-height: 520px;
  position: relative;
  // color: #fff;
}
.wiring .title {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  /* font-size: 18px; */
}
</style>
