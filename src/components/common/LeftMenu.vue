<template>
  <div class="menu-container">
    <ul>
      <template v-for="(item, index) in menuList">
        <li @click="selectTag($event, item)" :key="index"><span class="point"></span>{{ item.meta.title }}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import routerData from '@/router'
export default {
  created () {
    console.log(routerData.options.routes[0].children)
  },
  computed: {
    menuList () {
      return routerData.options.routes[0].children
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
    }
  }
}
</script>
<style lang="scss">
  .menu-container{
    height: 100%;
    ul{
      list-style: none;
      li{
        padding: 10px 0 10px 0;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        .point{
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background: red;
          position: absolute;
          left: -12px;
          top: 17px;
          cursor: pointer;
        }
      }
      .selectPoint{
        transition: all .2s ease-in-out;
        .point{
          transition: all .4s ease-in-out;
          transform: scale(1.5);
          /*width: 8px;*/
          /*height: 8px;*/
          background: green;
          top: 16px;
        }
        font-weight: bolder;
      }
    }
  }
</style>
