<template>
    <div class="tools-table-container">
        <div class="table-header-container">
            <div class="header-col">属性</div>
            <div class="header-col">值</div>
            <div class="header-col">类型</div>
        </div>
        <div class="table-body-container">
            <div class="table-line-container" v-for="(o, i) in tableData" :key="i">
              <div class="line-type-include" :style="{'backgroundColor': colorList[o.level - 1]}" v-if="o.type === 'array' || o.type === 'object'">
                <div class="line-col">{{o.prop}}</div>
                <div class="line-col">{{o.value}} <el-button type="text" size="small" class="expand-fold" @click="changeStatus(o, i)">{{o.isShow ? '折叠' : '展开'}}</el-button></div>
                <div class="line-col">{{o.type}}</div>
              </div>
              <div class="line-type-include" :style="{'backgroundColor': colorList[o.level - 1]}" v-else>
                <div class="line-col">{{o.prop}}</div>
                <div class="line-col">{{o.value}}</div>
                <div class="line-col">{{o.type}}</div>
              </div>
              <tableBody @updateShowStatus="sendToParentShowStatus" :tableData="o.children" v-if="o.children && o.children.length && o.isShow === true"></tableBody>
            </div>
        </div>
    </div>
</template>
<script>
import tableBody from '@/components/paramsTable/tableBody.vue'

export default {
  components: {
    tableBody
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      colorList: ['#FFF3E6', '#FFE8D9', '#FFDDD0', '#FFD2C2', '#FFC7B5', '#FFBCA8']
    }
  },
  methods: {
    changeStatus (o, i) {
      console.log(o)
      this.$emit('updateShowStatus', o, i, !o.isShow)
    },
    sendToParentShowStatus (o, i, isShow) {
      this.$emit('updateShowStatus', o, i, isShow)
    }
  }
}
</script>
<style lang="scss" scoped>
.tools-table-container {
    width: 1024px;
    border: 1px solid #d3d7d4;
    .table-header-container {
        width: 100%;
        height: 40px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        box-sizing: border-box;
        background-color: #B0E0E6;
        .header-col {
            // width: 50%;
            text-align: center;
            line-height: 40px;
        }
        .header-col {
            border-right: 1px solid #d3d7d4;
        }
        .header-col:last-child {
            border-right: none;
        }
    }
    .table-body-container {
        .table-line-container {
          .line-type-include {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            min-height: 30px;
            border-bottom: 1px solid #CCCCCC;
            .line-col {
              // overflow: auto;
              flex-grow: 1;
              // box-sizing: border-box;
              word-break: break-all;
              text-align: center;
              line-height: 25px;
              border-right: 1px solid #CCCCCC;
              color: #000000;
              position: relative;
              .expand-fold {
                position: absolute;
                right: 20px;
                top: 5px;
              }
            }
          }
        }
    }
}
</style>
