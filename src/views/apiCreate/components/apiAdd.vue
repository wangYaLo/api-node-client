<template>
  <div class="apiAddBox">
      <div class="title">
          创建API
      </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ApiAdd'
})
export default class ApiAdd extends Vue {
  
}
</script>

<style lang='scss' scoped>
  .apiAddBox{
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      background: chartreuse;
      border: 5px solid rgba(145, 190, 187, .5);
      overflow-x: hidden;
      overflow-y: scroll;
      display: flex;
  }
</style>
