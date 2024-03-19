import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App.vue'
import Index from '../components/common/index'
import Steps from '../components/Steps.vue'
import Progress from '../views/progress/index'
import JsonToTable from '../views/jsonToTable/formatJson.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'mingComponents',
      component: Index,
      redirect: '/mingComponents/Steps',
      meta: {
        title: '组件中心'
      },
      children: [
        {
          path: 'mingComponents/Steps',
          name: 'Steps',
          component: Steps,
          meta: {
            title: '步骤条',
            index: 0
          }
        },
        {
          path: 'mingComponents/Progress',
          name: 'Progress',
          component: Progress,
          meta: {
            title: '进度条',
            index: 1
          }
        },
        {
          path: 'mingComponents/JsonToTable',
          name: 'JsonToTable',
          component: JsonToTable,
          meta: {
            title: 'json解析',
            index: 2
          }
        }
      ]
    }
  ]
})
export default router
