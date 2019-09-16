<template>
  <div class="menu-container" id="menu-container">
    <ul id="ul-container">
      <template v-for="(item, index) in menuList">
        <li @click="selectTag($event, item)" :key="index" :class="!index ? 'selectPoint' : ''"><span class="point"></span>{{ item.meta.title }}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import routerData from '@/router'
export default {
  computed: {
    menuList () {
      return routerData.options.routes[0].children
    }
  },
  mounted () {
    this.onResize()
    window.onresize = () => {
      return (() => {
        this.onResize()
      })()
    }
  },
  data () {
    return {
    }
  },
  methods: {
    selectTag (e, val) {
      for (let i = 0; i < document.getElementsByClassName('selectPoint').length; i++) {
        document.getElementsByClassName('selectPoint')[i].classList.remove('selectPoint')
      }
      console.log(e.target)
      e.target.classList.add('selectPoint')
    },
    onResize () {
      const outerHeight = window.innerHeight
      const menuHeight = document.getElementById('ul-container').clientHeight
      console.log('menuHeight:', menuHeight)
      if (outerHeight - menuHeight <= 0) {
        return
      }
      const topValue = (outerHeight - menuHeight) / 2
      document.getElementById('ul-container').style.marginTop = topValue + 'px'
      document.getElementById('ul-container').style.transition = 'all .8s ease-in-out'
    }
  }
}
</script>
<style lang="scss">
  .menu-container{
    height: 100%;
    ul{
      list-style: none;
      padding-left: 100px;
      li{
        padding: 10px 0 10px 0;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        .point{
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: red;
          position: absolute;
          left: -12px;
          top: 14px;
          cursor: pointer;
        }
      }
      .selectPoint{
        transition: all .2s ease-in-out;
        .point{
          transition: all .4s ease-in-out;
          transform: scale(1.3);
          /*width: 8px;*/
          /*height: 8px;*/
          background: green;
          top: 14px;
        }
        font-weight: bolder;
      }
    }
  }
</style>
