<template>
  <div class="pageMain">
      <Navbar ref="navbar"></Navbar>
      <div class="main">
        <app-main></app-main>
      </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Navbar from './modules/Navbar.vue'
import appMain from './modules/appMain.vue'
@Component({
  name: 'layout',
  components: {
    Navbar,
    appMain
  }
})
export default class Layout extends Vue {
}
</script>

<style lang='scss'>
  .pageMain{
    width: 1400px;
    margin: auto;
    .main{
      margin-top: 56px;
      width: 100%;
    }
  }
</style>
