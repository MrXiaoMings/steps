<template>
    <div class="monitor-analysis-page">
        <div class="monitor-data-input">
            <el-input type="textarea" v-model="logData" :autosize="{ minRows: 6, maxRows: 20 }"
                placeholder=" Please Input Log Data" @input="dataBlur"></el-input>
            <span v-if="isWrong" class="data-tips">数据格式错误</span>
        </div>
        <div class="data-table">
            <ParamsTable @updateShowStatus="updateShowStatus" :tableData="tableDataArray" :key="setKey" />
        </div>
    </div>
</template>

<script>
import ParamsTable from '../../components/paramsTable/index.vue'
export default {
    components: {
        ParamsTable
    },
    data () {
        return {
            setKey: 0,
            isWrong: false,
            logData: '',
            tableDataArray: []
        }
    },
    methods: {
        dataBlur (val) {
            if (!val) {
                this.tableDataArray = []
                this.isWrong = false
            }
            try {
                const jsonStr = JSON.parse(this.logData)
                console.log(jsonStr)
                this.tableDataArray = this.formatDataToArr(jsonStr, 1)
                this.setKey++
                this.isWrong = false
            } catch (error) {
                console.log(error)
                this.isWrong = true
            }
        },
        formatDataToArr (obj = {}, level = 1) {
            console.log('monitorData', obj)
            let tmpArr = []
            if (this.$proxy._typeof(obj) === 'array') {
                obj.forEach((o, i) => {
                    let indexObj = {}
                    indexObj.prop = i
                    indexObj.type = this.$proxy._typeof(o)
                    if (indexObj.type === 'object') {
                        indexObj.value = 'Object'
                        indexObj.level = level
                        indexObj.isShow = false
                        tmpArr.push(indexObj)
                        indexObj.children = this.formatDataToArr(o, level + 1)
                    } else {
                        indexObj.value = o
                        indexObj.level = level
                        tmpArr.push(indexObj)
                    }
                })
            } else {
                Object.keys(obj).map(k => {
                    let tmpObj = {}
                    tmpObj.prop = k
                    tmpObj.type = this.$proxy._typeof(obj[k])
                    tmpObj.value = obj[k]
                    tmpObj.level = level
                    console.log('tmpObj.type', tmpObj.type)
                    if (tmpObj.type === 'array' && tmpObj.value.length && this.$proxy._typeof(tmpObj.value[0]) === 'object') {
                        tmpObj.children = this.formatDataToArr(tmpObj.value, level + 1)
                        tmpObj.value = 'Array'
                        tmpObj.isShow = false
                    } else if (tmpObj.type === 'object') {
                        tmpObj.children = this.formatDataToArr(tmpObj.value, level + 1)
                        tmpObj.value = 'Object'
                        tmpObj.isShow = false
                    } else if (tmpObj.type === 'array' && tmpObj.value.length && this.$proxy._typeof(tmpObj.value[0]) === 'string') {
                        tmpObj.children = this.formatDataToArr(tmpObj.value, level + 1)
                        tmpObj.value = 'Array'
                        tmpObj.isShow = false
                    }
                    tmpArr.push(tmpObj)
                })
            }
            return tmpArr
        },
        updateShowStatus (o, i, isShow) {
            this.setKey++
            o.isShow = isShow
            console.log('tableDataArray', this.tableDataArray)
        }
    }
}
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
    .monitor-analysis-page {
        width: 1024px;
    }
}
.monitor-analysis-page {
    margin: 30px auto;
    .data-tips {
        color: crimson;
    }
    .data-table {
        margin-top: 40px;
    }
}
</style>
