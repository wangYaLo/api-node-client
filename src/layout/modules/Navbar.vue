<template>
  <div class="navbar">
    <div class="header">
      <div class="leftbox"><FontForEach :fontString="'Api Service'" :fontSize="'30px'"></FontForEach></div>
      <div class="rightbox">
        <div class="addBox" @click="addApi" @mouseenter="addImgShow = false" @mouseleave="addImgShow = true">
          <img v-show="addImgShow" src="@/assets/img/addApi.svg" alt="">
          <img v-show="!addImgShow" src="@/assets/img/addApihover.svg" alt="">
        </div>
        <div class="userImgBox" @mouseenter="userImgShow = false" @mouseleave="userImgShow = true">
          <img v-show="userImgShow" src="@/assets/img/user.svg" alt="">
          <img v-show="!userImgShow" src="@/assets/img/userhover.svg" alt="">
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
    FontForEach,
  }
})
export default class Navbar extends Vue {
  public userImgShow: boolean = true;
  public addImgShow: boolean = true;
  public show: boolean = true
  addApi(): void {

  }
}
</script>

<style lang='scss'>
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
