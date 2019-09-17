<template>
  <div class="m-progress">
    <div class="base-ui">
      <m-progress
        :height="6"
        :percent="55"
        bg-start-color="#feea4d"
        bg-end-color="#ff3d00"></m-progress>
    </div>
    <div class="add-percent">
      <m-progress
        :height="6"
        :percent="percent1"
        :bg-start-color="color1"
        :bg-end-color="color2"></m-progress>
      <div class="operateBtn">
        <el-button size="mini" @click="addPercent">添加进度</el-button>
        <el-button size="mini" @click="decreasePercent">减少进度</el-button>
        <div class="block">
          <span class="demonstration">初始颜色</span>
          <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
          <span class="demonstration">结束颜色</span>
          <el-color-picker v-model="color2"></el-color-picker>
        </div>
      </div>
    </div>
    <div class="auto-play">
      <m-progress
        :height="6"
        :percent="percent2"
        bg-start-color="#feea4d"
        bg-end-color="#ff3d00"></m-progress>
      <div class="operate-btn">
        <el-button size="mini" @click="stopAuto">{{ autoText }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import MProgress from '../../components/Progress'
export default {
  data () {
    return {
      percent1: 10,
      percent2: 10,
      timer: null,
      autoText: '停止',
      color1: '#feea4d',
      color2: '#ff3d00'
    }
  },
  created () {
    this.autoPlay()
  },
  methods: {
    autoPlay () {
      this.timer = setInterval(() => {
        if (this.percent2 >= 100) {
          this.percent2 = 0
        }
        this.percent2 = (this.percent2 * 10 + 1) / 10
      }, 50)
    },
    stopAuto () {
      if (this.autoText === '停止') {
        clearInterval(this.timer)
        this.autoText = '开始'
      } else {
        this.autoPlay()
        this.autoText = '停止'
      }
    },
    addPercent () {
      if (this.percent1 >= 100) {
        return
      }
      this.percent1++
    },
    decreasePercent () {
      if (this.percent1 <= 0) {
        return
      }
      this.percent1--
    }
  },
  components: {
    'm-progress': MProgress
  }
}
</script>
<style lang="scss">
  .m-progress{
    .base-ui{
      width: 600px;
      margin-top: 100px;
    }
    .add-percent{
      width: 600px;
      margin-top: 100px;
      .operateBtn{
        margin-top: 15px;
        .block{
          display: inline-block;
          margin-left: 20px;
          .demonstration{
            font-size: 14px;
          }
          /deep/ .el-color-picker{
            vertical-align: middle;
          }
        }
      }
    }
    .auto-play{
      width: 600px;
      margin-top: 100px;
      .operate-btn {
        margin-top: 15px;
      }
    }
  }
</style>
