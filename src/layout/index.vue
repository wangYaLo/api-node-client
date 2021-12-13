<template>
  <div class="pageMain">
      <Navbar ref="navbar"></Navbar>
      <div class="main">
        <api-box></api-box>
      </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Navbar from './modules/Navbar.vue'
import apiBox from './modules/apiBox.vue'
@Component({
  name: 'layout',
  components: {
    Navbar,
    apiBox
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
