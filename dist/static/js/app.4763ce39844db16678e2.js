webpackJsonp([1],{"8PsO":function(t,e){},ICpS:function(t,e){},LTWf:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("/ocq"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]},o=n("VU/8")(null,a,!1,null,null,null).exports,l={name:"MSteps",data:function(){return{stepNums:[{step_title:"报名",step_num:1,inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]},{step_title:"准考证",step_num:2,inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]},{step_title:"考试",step_num:3,inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]}]}},methods:{addStep:function(){var t=this.stepNums.length+1;this.stepNums.push({step_num:t,step_title:"添加标题",inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]})},explainEnter:function(t,e){13===t&&(this.stepNums[e].step_explain=!1)},timeEnter:function(t,e){13===t&&(this.stepNums[e].timeInputVisible=!1)},contextMenu:function(){console.log(111)},decreaseStep:function(){this.stepNums.splice(this.stepNums.length-1,1)},handleClose:function(t,e,n){this.stepNums[e].tags.splice(n,1)},showTimeInput:function(t){var e=this;this.stepNums[t].timeInputVisible=!0,this.$nextTick(function(t){e.$refs.time_input[0].focus()})},titleInputShow:function(t){var e=this;this.stepNums[t].step_explain=!0,this.$nextTick(function(t){e.$refs.step_explain[0].focus()})},showInput:function(t){var e=this;this.stepNums[t].inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput[0].$refs.input.focus()})},handleInputConfirm:function(t){var e=this.stepNums[t].inputValue;e&&this.stepNums[t].tags.push({tagName:e,url:""}),this.stepNums[t].inputVisible=!1,this.stepNums[t].inputValue=""}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step_container"},[t._l(t.stepNums,function(e,s){return[n("div",{key:s,staticClass:"step_row_data"},[n("div",{staticClass:"step_column_data"},[e.step_explain?n("input",{directives:[{name:"model",rawName:"v-model",value:e.step_title,expression:"stepNum.step_title"}],ref:"step_explain",refInFor:!0,staticClass:"step_explain",attrs:{type:"text"},domProps:{value:e.step_title},on:{keyup:function(e){return t.explainEnter(e.keyCode,s)},blur:function(){return e.step_explain=!1},input:function(n){n.target.composing||t.$set(e,"step_title",n.target.value)}}}):n("span",{on:{click:function(e){return t.titleInputShow(s)}}},[t._v("\n          "+t._s(e.step_title)+"\n        ")])]),t._v(" "),n("div",{staticClass:"step_column_data"},[n("div",{staticClass:"step_num"},[t._v("\n          "+t._s(e.step_num)+"\n        ")]),t._v(" "),t._l(e.tags,function(e,i){return n("el-tag",{key:e.tagName+i,attrs:{closable:"","disable-transitions":!1},on:{contextmenu:t.contextMenu,close:function(n){return t.handleClose(e,s,i)}}},[t._v("\n          "+t._s(e.tagName)+"\n        ")])}),t._v(" "),e.inputVisible?n("el-input",{ref:"saveTagInput",refInFor:!0,staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(s)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(s)}},model:{value:e.inputValue,callback:function(n){t.$set(e,"inputValue",n)},expression:"stepNum.inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showInput(s)}}},[t._v("+ New Tag")]),t._v(" "),n("div",{staticClass:"step_time"},[e.timeInputVisible?n("input",{directives:[{name:"model",rawName:"v-model",value:e.step_time,expression:"stepNum.step_time"}],ref:"time_input",refInFor:!0,staticClass:"time_input",attrs:{type:"text"},domProps:{value:e.step_time},on:{keyup:function(e){return t.timeEnter(e.keyCode,s)},blur:function(){return e.timeInputVisible=!1},input:function(n){n.target.composing||t.$set(e,"step_time",n.target.value)}}}):n("span",{on:{click:function(e){return t.showTimeInput(s)}}},[t._v(t._s(e.step_time))])])],2)])]}),t._v(" "),n("div",{staticClass:"addStep"},[n("i",{staticClass:"el-icon-plus",on:{click:t.addStep}})]),t._v(" "),n("div",{staticClass:"decreaseStep"},[n("i",{staticClass:"el-icon-minus",on:{click:t.decreaseStep}})])],2)},staticRenderFns:[]};var c=n("VU/8")(l,r,!1,function(t){n("LTWf")},"data-v-1a6e8968",null).exports,u={name:"MProgress",props:{height:{type:Number,default:function(){return 10}},bgStartColor:{type:String,default:function(){return"#feea4d"}},bgEndColor:{type:String,default:function(){return"#ff3d00"}},percent:{type:Number,default:function(){return 0}}},mounted:function(){},computed:{noPercentStyle:function(){return{height:this.height+"px",borderRadius:this.height/2+"px",left:this.percent-100+"%"}},percentStyle:function(){return{height:this.height+"px",borderRadius:this.height/2+"px"}},bgPercentStyle:function(){return{height:this.height+"px",borderRadius:this.height/2+"px",background:"linear-gradient(to right,"+this.bgStartColor+","+this.bgEndColor+")",left:100-this.percent+"%"}}},data:function(){return{}},methods:{}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress-container"},[e("div",{staticClass:"percent-include",style:this.percentStyle},[e("div",{staticClass:"no-percent",style:this.noPercentStyle},[e("div",{staticClass:"bg-percent",style:this.bgPercentStyle})])]),this._v(" "),e("span",[this._v(this._s(this.percent)+"%")])])},staticRenderFns:[]};var d={data:function(){return{percent1:10,percent2:10,timer:null,autoText:"停止",color1:"#feea4d",color2:"#ff3d00"}},created:function(){this.autoPlay()},methods:{autoPlay:function(){var t=this;this.timer=setInterval(function(){t.percent2>=100&&(t.percent2=0),t.percent2=(10*t.percent2+1)/10},50)},stopAuto:function(){"停止"===this.autoText?(clearInterval(this.timer),this.autoText="开始"):(this.autoPlay(),this.autoText="停止")},addPercent:function(){this.percent1>=100||this.percent1++},decreasePercent:function(){this.percent1<=0||this.percent1--}},components:{"m-progress":n("VU/8")(u,p,!1,function(t){n("8PsO")},"data-v-188890da",null).exports}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-progress"},[n("div",{staticClass:"base-ui"},[n("m-progress",{attrs:{height:6,percent:55,"bg-start-color":"#feea4d","bg-end-color":"#ff3d00"}})],1),t._v(" "),n("div",{staticClass:"add-percent"},[n("m-progress",{attrs:{height:6,percent:t.percent1,"bg-start-color":t.color1,"bg-end-color":t.color2}}),t._v(" "),n("div",{staticClass:"operateBtn"},[n("el-button",{attrs:{size:"mini"},on:{click:t.addPercent}},[t._v("添加进度")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.decreasePercent}},[t._v("减少进度")]),t._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[t._v("初始颜色")]),t._v(" "),n("el-color-picker",{model:{value:t.color1,callback:function(e){t.color1=e},expression:"color1"}})],1),t._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[t._v("结束颜色")]),t._v(" "),n("el-color-picker",{model:{value:t.color2,callback:function(e){t.color2=e},expression:"color2"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"auto-play"},[n("m-progress",{attrs:{height:6,percent:t.percent2,"bg-start-color":"#feea4d","bg-end-color":"#ff3d00"}}),t._v(" "),n("div",{staticClass:"operate-btn"},[n("el-button",{attrs:{size:"mini"},on:{click:t.stopAuto}},[t._v(t._s(t.autoText))])],1)],1)])},staticRenderFns:[]};var m=n("VU/8")(d,h,!1,function(t){n("fDls")},null,null).exports,v=n("fZjL"),f=n.n(v),_={name:"tableBody",props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{colorList:["#FFF3E6","#FFE8D9","#FFDDD0","#FFD2C2","#FFC7B5","#FFBCA8"]}},methods:{sendToParentShowStatus:function(t,e){this.$emit("updateShowStatus",t,e,!t.isShow)},changeShowStatus:function(t,e){console.log(t),this.$emit("updateShowStatus",t,e,!t.isShow)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tableData,function(e,s){return n("div",{key:s,staticClass:"table-line-container"},["array"===e.type||"object"===e.type?n("div",{staticClass:"line-type-include",style:{backgroundColor:t.colorList[e.level-1]}},[n("div",{staticClass:"line-col"},[t._v(t._s(e.prop))]),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.value)+" "),n("el-button",{staticClass:"expand-fold",attrs:{size:"small",type:"text"},on:{click:function(n){return t.changeShowStatus(e,s)}}},[t._v(t._s(e.isShow?"折叠":"展开"))])],1),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.type))])]):n("div",{staticClass:"line-type-include",style:{backgroundColor:t.colorList[e.level-1]}},[n("div",{staticClass:"line-col"},[t._v(t._s(e.prop))]),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.value))]),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.type))])]),t._v(" "),e.children&&e.children.length&&!0===e.isShow?n("tableBody",{attrs:{tableData:e.children},on:{updateShowStatus:t.sendToParentShowStatus}}):t._e()],1)}),0)},staticRenderFns:[]};var y={components:{tableBody:n("VU/8")(_,g,!1,function(t){n("ePh4")},"data-v-dde9b784",null).exports},props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{colorList:["#FFF3E6","#FFE8D9","#FFDDD0","#FFD2C2","#FFC7B5","#FFBCA8"]}},methods:{changeStatus:function(t,e){console.log(t),this.$emit("updateShowStatus",t,e,!t.isShow)},sendToParentShowStatus:function(t,e,n){this.$emit("updateShowStatus",t,e,n)}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools-table-container"},[t._m(0),t._v(" "),n("div",{staticClass:"table-body-container"},t._l(t.tableData,function(e,s){return n("div",{key:s,staticClass:"table-line-container"},["array"===e.type||"object"===e.type?n("div",{staticClass:"line-type-include",style:{backgroundColor:t.colorList[e.level-1]}},[n("div",{staticClass:"line-col"},[t._v(t._s(e.prop))]),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.value)+" "),n("el-button",{staticClass:"expand-fold",attrs:{type:"text",size:"small"},on:{click:function(n){return t.changeStatus(e,s)}}},[t._v(t._s(e.isShow?"折叠":"展开"))])],1),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.type))])]):n("div",{staticClass:"line-type-include",style:{backgroundColor:t.colorList[e.level-1]}},[n("div",{staticClass:"line-col"},[t._v(t._s(e.prop))]),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.value))]),t._v(" "),n("div",{staticClass:"line-col"},[t._v(t._s(e.type))])]),t._v(" "),e.children&&e.children.length&&!0===e.isShow?n("tableBody",{attrs:{tableData:e.children},on:{updateShowStatus:t.sendToParentShowStatus}}):t._e()],1)}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-header-container"},[e("div",{staticClass:"header-col"},[this._v("属性")]),this._v(" "),e("div",{staticClass:"header-col"},[this._v("值")]),this._v(" "),e("div",{staticClass:"header-col"},[this._v("类型")])])}]};var C={components:{ParamsTable:n("VU/8")(y,b,!1,function(t){n("rk4w")},"data-v-7ed417ae",null).exports},data:function(){return{setKey:0,isWrong:!1,logData:"",tableDataArray:[]}},methods:{dataBlur:function(t){t||(this.tableDataArray=[],this.isWrong=!1);try{var e=JSON.parse(this.logData);console.log(e),this.tableDataArray=this.formatDataToArr(e,1),this.setKey++,this.isWrong=!1}catch(t){console.log(t),this.isWrong=!0}},formatDataToArr:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;console.log("monitorData",e);var s=[];return"array"===this.$proxy._typeof(e)?e.forEach(function(e,i){var a={};a.prop=i,a.type=t.$proxy._typeof(e),"object"===a.type?(a.value="Object",a.level=n,a.isShow=!1,s.push(a),a.children=t.formatDataToArr(e,n+1)):(a.value=e,a.level=n,s.push(a))}):f()(e).map(function(i){var a={};a.prop=i,a.type=t.$proxy._typeof(e[i]),a.value=e[i],a.level=n,console.log("tmpObj.type",a.type),"array"===a.type&&a.value.length&&"object"===t.$proxy._typeof(a.value[0])?(a.children=t.formatDataToArr(a.value,n+1),a.value="Array",a.isShow=!1):"object"===a.type?(a.children=t.formatDataToArr(a.value,n+1),a.value="Object",a.isShow=!1):"array"===a.type&&a.value.length&&"string"===t.$proxy._typeof(a.value[0])&&(a.children=t.formatDataToArr(a.value,n+1),a.value="Array",a.isShow=!1),s.push(a)}),s},updateShowStatus:function(t,e,n){this.setKey++,t.isShow=n,console.log("tableDataArray",this.tableDataArray)}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monitor-analysis-page"},[n("div",{staticClass:"monitor-data-input"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:20},placeholder:" Please Input Log Data"},on:{input:t.dataBlur},model:{value:t.logData,callback:function(e){t.logData=e},expression:"logData"}}),t._v(" "),t.isWrong?n("span",{staticClass:"data-tips"},[t._v("数据格式错误")]):t._e()],1),t._v(" "),n("div",{staticClass:"data-table"},[n("ParamsTable",{key:t.setKey,attrs:{tableData:t.tableDataArray},on:{updateShowStatus:t.updateShowStatus}})],1)])},staticRenderFns:[]};var x=n("VU/8")(C,S,!1,function(t){n("ICpS")},"data-v-5560dafe",null).exports;s.default.use(i.a);var w=new i.a({routes:[{path:"/",name:"mingComponents",component:o,redirect:"/mingComponents/Steps",meta:{title:"组件中心"},children:[{path:"mingComponents/Steps",name:"Steps",component:c,meta:{title:"步骤条",index:0}},{path:"mingComponents/Progress",name:"Progress",component:m,meta:{title:"进度条",index:1}},{path:"mingComponents/JsonToTable",name:"JsonToTable",component:x,meta:{title:"json解析",index:2}}]}]}),k={computed:{menuList:function(){return w.options.routes[0].children}},mounted:function(){var t=this;window.onresize=function(){t.onResize(),t.onAppResize()};for(var e=this.$route.meta.index,n=0;n<document.getElementsByClassName("selectPoint").length;n++)document.getElementsByClassName("selectPoint")[n].classList.remove("selectPoint");document.getElementById("ul-container").getElementsByTagName("li")[e].classList.add("selectPoint"),this.onResize(),this.onAppResize()},data:function(){return{}},methods:{selectTag:function(t,e){for(var n=0;n<document.getElementsByClassName("selectPoint").length;n++)document.getElementsByClassName("selectPoint")[n].classList.remove("selectPoint");t.target.classList.add("selectPoint"),this.$router.push({name:e.name})},onAppResize:function(){var t=window.innerHeight,e=document.getElementsByClassName("left-content")[0],n=document.getElementsByClassName("right-content")[0];e.style.height=t+"px",n.style.minHeight=t+"px"},onResize:function(){var t=window.innerHeight,e=document.getElementById("ul-container").clientHeight;if(console.log("menuHeight:",e),!(t-e<=0)){var n=(t-e)/2;document.getElementById("ul-container").style.marginTop=n+"px",document.getElementById("ul-container").style.transition="all .8s ease-in-out"}}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-container",attrs:{id:"menu-container"}},[n("ul",{attrs:{id:"ul-container"}},t._l(t.menuList,function(e,s){return n("li",{key:s,class:s?"":"selectPoint",on:{click:function(n){return t.selectTag(n,e)}}},[n("span",{staticClass:"point"}),t._v(t._s(e.meta.title))])}),0)])},staticRenderFns:[]};var F={methods:{},components:{LeftMenu:n("VU/8")(k,D,!1,function(t){n("x9MT")},null,null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"left-content"},[e("LeftMenu")],1),this._v(" "),e("div",{staticClass:"right-content"},[e("router-view")],1)])},staticRenderFns:[]};var N=n("VU/8")(F,T,!1,function(t){n("R7Ja")},null,null).exports,P=n("zL8q"),E=n.n(P),V=(n("tvR6"),{_typeof:function(t){return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()}});s.default.use(E.a),s.default.config.productionTip=!1,s.default.prototype.$proxy=V,new s.default({el:"#app",components:{App:N},router:w,template:"<App/>"})},R7Ja:function(t,e){},ePh4:function(t,e){},fDls:function(t,e){},rk4w:function(t,e){},tvR6:function(t,e){},x9MT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4763ce39844db16678e2.js.map