<template>
    <div>
        <div class="table-line-container" v-for="(o, i) in tableData" :key="i">
            <div class="line-type-include" :style="{ 'backgroundColor': colorList[o.level - 1] }"
                v-if="o.type === 'array' || o.type === 'object'">
                <div class="line-col">{{ o.prop }}</div>
                <div class="line-col">{{ o.value }} <el-button class="expand-fold" size="small" type="text"
                        @click="changeShowStatus(o, i)">{{ o.isShow ? '折叠' : '展开' }}</el-button></div>
                <div class="line-col">{{ o.type }}</div>
            </div>
            <div class="line-type-include" :style="{ 'backgroundColor': colorList[o.level - 1] }" v-else>
                <div class="line-col">{{ o.prop }}</div>
                <div class="line-col">{{ o.value }}</div>
                <div class="line-col">{{ o.type }}</div>
            </div>
            <tableBody @updateShowStatus="sendToParentShowStatus" :tableData="o.children"
                v-if="o.children && o.children.length && o.isShow === true"></tableBody>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tableBody',
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
        sendToParentShowStatus (o, i) {
            this.$emit('updateShowStatus', o, i, !o.isShow)
        },
        changeShowStatus (o, i) {
            console.log(o)
            this.$emit('updateShowStatus', o, i, !o.isShow)
        }
    }
}
</script>
<style lang="scss" scoped>
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
</style>
