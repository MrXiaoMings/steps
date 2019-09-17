<template>
  <div class="progress-container">
    <div class="percent-include" :style="percentStyle">
      <div class="no-percent" :style="noPercentStyle">
        <div class="bg-percent" :style="bgPercentStyle"></div>
      </div>
    </div>
    <span>{{ percent }}%</span>
  </div>
</template>
<script>
/*
   params:{
     height: 进度条高度
     bgStartColor: 进度条渐变开始颜色
     bgEndColor: 进度条渐变结束颜色
     percent: 进度
   }
    */
export default {
  name: 'MProgress',
  props: {
    height: {
      type: Number,
      default: () => {
        return 10
      }
    },
    bgStartColor: {
      type: String,
      default: () => {
        return '#feea4d'
      }
    },
    bgEndColor: {
      type: String,
      default: () => {
        return '#ff3d00'
      }
    },
    percent: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  mounted () {},
  computed: {
    noPercentStyle () {
      return {
        height: this.height + 'px',
        borderRadius: this.height / 2 + 'px',
        left: this.percent - 100 + '%'
      }
    },
    percentStyle () {
      return {
        height: this.height + 'px',
        borderRadius: this.height / 2 + 'px'
      }
    },
    bgPercentStyle () {
      return {
        height: this.height + 'px',
        borderRadius: this.height / 2 + 'px',
        background: 'linear-gradient(to right,' + this.bgStartColor + ',' + this.bgEndColor + ')',
        left: 100 - this.percent + '%'
      }
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="scss">
  .progress-container{
    width: 100%;
    min-height: 15px;
    .percent-include{
      width: calc(100% - 60px);
      background: #EBEBEB;
      overflow: hidden;
      position: relative;
      display: inline-block;
      .no-percent{
        width: 100%;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0);
        overflow: hidden;
        .bg-percent{
          position: absolute;
          top: 0;
          left: 100%;
          width: 100%;
        }
      }
    }
    span{
      display: inline-block;
      vertical-align: middle;
      padding-left: 2px;
      font-size: 12px;
    }
  }
</style>
