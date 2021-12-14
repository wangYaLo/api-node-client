<template>
  <div class="navbar">
    <div class="header">
      <div class="leftbox"><FontForEach :fontString="'Api Service'" :fontSize="'30px'"></FontForEach></div>
      <div class="rightbox">
        <div class="addBox" @click="addApi" @mouseenter="addImgShow = false" @mouseleave="addImgShow = true">
          <img v-show="addImgShow" src="@/assets/img/addApi.svg" alt="">
          <img v-show="!addImgShow" src="@/assets/img/addApihover.svg" alt="">
        </div>
        <div class="userImgBox" @click="getLoginMsg" @mouseenter="userImgShow = false" @mouseleave="userImgShow = true">
          <el-popover
            placement="bottom"
            width="100"
            trigger="click">
            <div class="user" style="height: 40px; display: flex; cursor: pointer; justify-content: center; align-items: center; border-bottom: 1px solid #f1f1f1;">
              <img width="25px" height="25px" style="border:2px solid #FEF1E8; border-radius: 50%" src="@/assets/logo.png" alt="">
              <p style="font-size: 16px; font-weight: 600; margin-left: 10px">{{isUsername}}</p>
            </div>
            <div class="setting" style="height: 30px; margin-left: 25px; cursor: pointer; font-size: 16px; font-weight: 600; border-bottom: 1px solid #f1f1f1; display: flex; align-items: center; justify-content: center;">
              设置
            </div>
            <div class="signout" style="height: 30px; margin-left: 25px; cursor: pointer; font-size: 16px; font-weight: 600; display: flex; align-items: center; justify-content: center;">
              登出
            </div>
            <div slot="reference" >
              <img v-show="userImgShow" src="@/assets/img/user.svg" alt="">
              <img v-show="!userImgShow" src="@/assets/img/userhover.svg" alt="">
            </div>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import FontForEach from './fontForech.vue'
@Component({
  name: 'Navbar',
  components: {
    FontForEach
  }
})
export default class Navbar extends Vue {
  public userImgShow: boolean = true;
  public addImgShow: boolean = true;
  public show: boolean = true;
  public isUsername: string = '';
  created(): void {
    this.isUsername = window.localStorage.getItem('username') as string;
  }
  addApi(): void {

  }

  //获取登录信息
  getLoginMsg(): void {

  }
}
</script>

<style lang='scss'>
  .el-popover{
    min-width: 0 !important;
  }
  .navbar{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(145, 190, 187, 1);
    .header{
      width: 100%;
      max-width: 1400px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .leftbox{
        padding: 0px 30px;
      }
      .rightbox{
        padding: 10px 30px;
        display: flex;
        .addBox{
          cursor: pointer;
        }
        .userImgBox{
          cursor: pointer;
          display: inline-block;
          margin-left: 10px;
          img{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
</style>
