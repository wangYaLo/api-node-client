<template>
  <div class="apiService">
    <file-box v-for="item in apiArr" :key="item.name" :boxName="item.name" :boxItem="item"></file-box>
    <div style=" width: 120px; height:0;" v-for="item in 10" :key="item*99"></div>
    <api-box v-for="(item, index) in apiBoxArr" :key="index"></api-box>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import apiBox from './components/apiBox.vue'
import fileBox from './components/fileBox.vue'
@Component({
  name: 'apiCreate',
  components: {
    apiBox,
    fileBox
  }
})
export default class ApiCreate extends Vue {
  public apiArr = [{
    user: 'admin',
    name: 'api11'
  }, {
    user: 'admin1',
    name: 'api111'
  }];
  public apiBoxArr: { user: string; name: string; }[] = []
  $EventBus: any;
  mounted(): void {
    const clientHeight = document.getElementsByClassName('navbar')[0].clientHeight;
    const apiHeight = document.getElementsByClassName('apiService')[0];
    const client = document.documentElement.clientHeight;
    (apiHeight as any).style.height = (client - clientHeight - 30) + 'px';
    this.$EventBus.$on('addApiBox', (data: { user: string; name: string; }) => {
      const isAdd = this.apiBoxArr.filter((item: { user: string; name: string; }) => {
        return item === data
      })
      if (isAdd.length === 0) {
        this.apiBoxArr.push(data)
      }
    })
  }
}
</script>

<style lang='scss' scoped>
  .apiService{
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
  }
</style>
