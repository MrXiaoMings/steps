<template>
  <div class="step_container">
    <template v-for="(stepNum, index) in stepNums">
      <div class="step_row_data" :key="index">
        <div class="step_column_data">
          <span v-if="!stepNum.step_explain" @click="titleInputShow(index)">
            {{stepNum.step_title}}
          </span>
          <input v-else type="text" ref="step_explain" @keyup="(e) =>explainEnter(e.keyCode, index)" v-model="stepNum.step_title" @blur="() => stepNum.step_explain = false" class="step_explain">
        </div>
        <div class="step_column_data">
          <div class="step_line"></div>
          <div class="step_num">
            {{stepNum.step_num}}
          </div>
        </div>
        <div class="step_column_data">
          <el-tag
            v-for="(tag, index1) in stepNum.tags"
            closable
            :key="tag.tagName + index1"
            :disable-transitions="false"
            @contextmenu="contextMenu"
            @close="handleClose(tag, index, index1)">
            {{tag.tagName}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="stepNum.inputVisible"
            v-model="stepNum.inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm(index)"
            @blur="handleInputConfirm(index)"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput(index)">+ New Tag</el-button>
          <div class="step_time">
            <span v-if="!stepNum.timeInputVisible" @click="showTimeInput(index)">{{stepNum.step_time}}</span>
            <input v-else type="text" ref="time_input" v-model="stepNum.step_time" @keyup="(e) =>timeEnter(e.keyCode, index)" @blur="() => stepNum.timeInputVisible = false" class="time_input">
          </div>
        </div>
      </div>
    </template>
    <div class="addStep">
      <i @click="addStep" class="el-icon-plus"></i>
    </div>
    <div class="decreaseStep">
      <i @click="decreaseStep" class="el-icon-minus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      stepNums: [
        {
          step_title: '报名',
          step_num: 1,
          inputVisible: false,
          timeInputVisible: false,
          step_explain: false,
          step_time: '2019-07-19',
          inputValue: '',
          tags: []
        },
        {
          step_title: '准考证',
          step_num: 2,
          inputVisible: false,
          timeInputVisible: false,
          step_explain: false,
          step_time: '2019-07-19',
          inputValue: '',
          tags: []
        },
        {
          step_title: '考试',
          step_num: 3,
          inputVisible: false,
          timeInputVisible: false,
          step_explain: false,
          step_time: '2019-07-19',
          inputValue: '',
          tags: []
        }
      ]
    }
  },
  methods: {
    addStep () {
      const stepNum = this.stepNums.length + 1
      this.stepNums.push({
        step_num: stepNum,
        step_title: '添加标题',
        inputVisible: false,
        timeInputVisible: false,
        step_explain: false,
        step_time: '2019-07-19',
        inputValue: '',
        tags: []
      })
    },
    explainEnter (keyCode, index) {
      if (keyCode === 13) {
        this.stepNums[index].step_explain = false
      }
    },
    timeEnter (keyCode, index) {
      if (keyCode === 13) {
        this.stepNums[index].timeInputVisible = false
      }
    },
    contextMenu () {
      console.log(111)
    },
    decreaseStep () {
      this.stepNums.splice(this.stepNums.length - 1, 1)
    },
    handleClose (tag, index, index1) {
      this.stepNums[index].tags.splice(index1, 1)
      this.checkHeight(index, false)
    },
    showTimeInput (index) {
      this.stepNums[index].timeInputVisible = true
      this.$nextTick(_ => {
        this.$refs['time_input'][0].focus()
      })
    },
    titleInputShow (index) {
      this.stepNums[index].step_explain = true
      this.$nextTick(_ => {
        this.$refs['step_explain'][0].focus()
      })
    },
    showInput (index) {
      this.stepNums[index].inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput[0].$refs.input.focus()
      })
      this.checkHeight(index, true)
    },
    checkHeight (index, isAdd = true) {
      let currentRow = document.getElementsByClassName('step_row_data')[index]
      const currentRowHeight = currentRow.clientHeight
      const currentThree = currentRow.getElementsByClassName('step_column_data')[2]
      const tagsHeight = currentThree.clientHeight
      if (isAdd && (tagsHeight < currentRowHeight)) {
        return
      }
      if (tagsHeight >= 150) {
        currentRow.style.height = tagsHeight + 'px'
        currentRow.getElementsByClassName('step_line')[0].style.height = tagsHeight + 'px'
      } else {
        currentRow.style.height = '150px'
        currentRow.getElementsByClassName('step_line')[0].style.height = '150px'
      }
    },
    handleInputConfirm (index) {
      let inputValue = this.stepNums[index].inputValue
      if (inputValue) {
        this.stepNums[index].tags.push({tagName: inputValue, url: ''})
      }
      this.stepNums[index].inputVisible = false
      this.stepNums[index].inputValue = ''
      this.checkHeight(index, true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .step_container{
    width: 1200px;
    margin: 150px auto;
    .step_row_data{
      min-height: 150px;
      width: 100%;
      overflow: hidden;
      .step_column_data{
        float: left;
      }
      .step_column_data:nth-child(1){
        margin-right: 20px;
        padding-top: 20px;
        width: 150px;
        text-align: right;
        span:hover{
          cursor: pointer;
          color: cornflowerblue;
        }
        .step_explain{
          width: 150px;
          outline: none;
          border: none;
          border-bottom: 1px solid cornflowerblue;
        }
      }
      .step_column_data:nth-child(3){
        margin-left: 20px;
        padding-top: 15px;
        overflow: hidden;
        width: 500px;
        padding-bottom: 30px;
        position: relative;
        .step_time{
          position: absolute;
          bottom: 0;
          color: lightgrey;
          span{
            margin-bottom: 0px;
          }
          span:hover{
            cursor: pointer;
            color: cornflowerblue;
          }
          .time_input{
            outline: none;
            border: none;
            border-bottom: 1px solid cornflowerblue;
          }
        }
        /*.step_time:hover{*/
          /*cursor: pointer;*/
          /*color: cornflowerblue;*/
        /*}*/
        span{
          float: left;
          margin-right: 20px;
          margin-bottom: 15px;
        }
        button{
          float: left;
          margin-bottom: 15px;
        }
        .input-new-tag{
          float: left;
          margin-bottom: 15px;
        }
      }
      .step_column_data:nth-child(2){
        padding-top: 0;
        min-height: 150px;
        position: relative;
        .step_line{
          min-height: 150px;
          width: 2px;
          background: blue;
        }
        .step_num{
          position: absolute;
          top: 20px;
          left: -10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
          background: white;
          border: 1px solid lightgrey;
        }
      }
    }
    .input-new-tag{
      max-width: 150px;
    }
    .addStep, .decreaseStep{
      width: 186px;
      text-align: right;
      margin-top: 10px;
      i{
        font-size: 30px;
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
</style>
