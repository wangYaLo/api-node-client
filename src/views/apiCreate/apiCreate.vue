<template>
  <div class="apiService">
    <file-box v-for="item in apiArr" :key="item.name" :boxName="item.name" :boxItem="item"></file-box>
    <div style=" width: 120px; height:0;" v-for="item in 10" :key="item*99"></div>
    <api-box v-for="(item, index) in apiBoxArr"  :key="item.name + index" :apiBoxItem="item" :style="'z-index:' + item.zIndex"></api-box>
    <api-add class="apiAdd" v-if="isApiAddShow"></api-add>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import apiBox from './components/apiBox.vue'
import fileBox from './components/fileBox.vue'
import apiAdd from './components/apiAdd.vue'
import { apiFile_Type, apiBox_Type } from './apiCreate.type'

@Component({
  name: 'apiCreate',
  components: {
    apiBox,
    fileBox,
    apiAdd
  }
})
export default class ApiCreate extends Vue {
  public apiArr: apiFile_Type[] = [{
    user: 'admin',
    name: 'admin',
    show: true,
    zIndex: 7
  }, {
    user: 'zhangsan',
    name: 'zhangsan',
    show: true,
    zIndex: 7
  }];
  public apiBoxArr: apiBox_Type[] = [];
  public isApiAddShow: boolean = false;
  $EventBus: any;
  mounted(): void {
    const clientHeight = document.getElementsByClassName('navbar')[0].clientHeight;
    const apiHeight = document.getElementsByClassName('apiService')[0];
    const client = document.documentElement.clientHeight;
    (apiHeight as any).style.height = (client - clientHeight - 30) + 'px';

    // 挂载添加接口盒子事件
    this.$EventBus.$on('addApiBox', (data: apiBox_Type) => {
      const isAdd = this.apiBoxArr.filter((item: apiBox_Type) => {
        return item === data
      })
      if (isAdd.length === 0) {
        this.apiBoxArr.push(data)
      } else {
        this.apiBoxArr.forEach((item: apiBox_Type) => {
          if (item === data) {
            item.show = true
          }
        })
      }
      this.apiBoxArr.forEach((item: apiBox_Type) => {
        item.zIndex = item === data ? 8 : 7;
      })
    })

    // 挂载移除api盒子事件
    this.$EventBus.$on('removeApiBox', (data: apiBox_Type) => {
      this.apiBoxArr.forEach((item: apiBox_Type, index: number) => {
        if (item === data) {
          item.show = false
        }
      })
    })

    // 挂载将api盒子置顶事件
    this.$EventBus.$on('promoteApiBox', (data: apiBox_Type) => {
      this.apiBoxArr.forEach((item: apiBox_Type) => {
        item.zIndex = item === data ? 8 : 7;
      })
    })

    //挂载api添加事件
    this.$EventBus.$on('apiCreate', () => {
      this.isApiAddShow = true;
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
    position: relative;
    .apiAdd{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 8;
    }
  }
  .plus-login-enter-active {
    transition: all 0.3s;
  }
  .plus-login-enter {
    opacity: 0;
    //  transform: translateY(-50px);
  }
  .plus-login-leave-active {
    transition: all 0.3s;
  }
  .plus-login-leave-to {
    opacity: 0;
    // transform: translateY(-50px);
  }
  .plus-login-enter-to {
    opacity: 1;
    //  transform: translateY(0px);
  }
</style>
