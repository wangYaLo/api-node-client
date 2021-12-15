<template>
  <transition name="to-login">
    <div class="apiBox"  @mousedown="mousedown1" @mousemove="mousemove1" v-show="apiBoxItem.show">
      <div class="header" >
        <div class="header-star">
          <p>USER:{{apiBoxItem.user}} API_NAME: {{apiBoxItem.name}}</p>
        </div>
        <div class="header-end">
          <div class="btn-star" @click="putAway" @mouseenter="btn_star_show = false" @mouseleave="btn_star_show = true">
            <img v-show="btn_star_show" src="@/assets/img/btn-star.svg" alt="">
            <img v-show="!btn_star_show" src="@/assets/img/btn-star-hover.svg" alt="">
          </div>
          <div class="btn-center" v-show="isBig" @click="apiBoxSmall" @mouseenter="btn_center_show = false" @mouseleave="btn_center_show = true">
            <img v-show="btn_center_show" style="width: 15px; height: 15px" src="@/assets/img/btn-center-small.svg" alt="">
            <img v-show="!btn_center_show" style="width: 15px; height: 15px" src="@/assets/img/btn-center-small-hover.svg" alt="">
          </div>
          <div class="btn-center" v-show="!isBig" @click="apiBoxBig" @mouseenter="btn_center_show = false" @mouseleave="btn_center_show = true">
            <img v-show="btn_center_show" src="@/assets/img/btn-center.svg" alt="">
            <img v-show="!btn_center_show" src="@/assets/img/btn-center-hover.svg" alt="">
          </div>
          <div class="btn-end" @click="removeApiBox" style="cursor: pointer;" @mouseenter="btn_end_show = false" @mouseleave="btn_end_show = true">
            <img v-show="btn_end_show" src="@/assets/img/btn-end.svg" alt="">
            <img v-show="!btn_end_show" src="@/assets/img/btn-end-hover.svg" alt="">
          </div>
        </div>
      </div>
      <div class="body">

      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { apiBox_Type } from '../apiCreate.type';
@Component({
  name: 'ImgHover'
})
export default class ImgHover extends Vue {
  @Prop() private apiBoxItem!: apiBox_Type
  public mousemovefunc1!: (event: any) => void;
  public mousemovefunc2!: (event: any) => void;
  public mousemovefunc3!: (event: any) => void;
  public btn_end_show: boolean = true;
  public btn_center_show: boolean = true;
  public btn_star_show: boolean = true;
  public isBig: boolean = false;
  $EventBus: any;
  mounted(): void {
    this.promoteApiBox()
    document.addEventListener('mouseup', () => {
      this.removeEventAll()
    })
  }
  beforeDestroy(): void {
    this.removeEventAll()
  }
  removeEventAll(): void {
    document.removeEventListener('mousemove', this.mousemovefunc1);
    document.removeEventListener('mousemove', this.mousemovefunc2);
    document.removeEventListener('mousemove', this.mousemovefunc3);
  }
  mousedown1(event: any): void {
    this.promoteApiBox()
    const evX = event.offsetX
    const evY = event.offsetY
    const evCX = event.target.clientWidth
    const evCY = event.target.clientHeight
    this.removeEventAll()
    if ((evX <= 0 && evX >= -5) || (evX >= evCX && evX <= evCX + 5)) {
      let getscreenX = event.screenX
      document.addEventListener('mousemove', this.mousemovefunc1 = (newEvent: any) => {
        if (newEvent.screenX > getscreenX) {
          if ((event.offsetX <= 0 && event.offsetX >= -5)) {
            event.target.style.left = event.target.offsetLeft + (newEvent.screenX - getscreenX) + 'px'
            event.target.style.width = event.target.clientWidth - (newEvent.screenX - getscreenX) + 'px'
          } else {
            event.target.style.width = event.target.clientWidth + (newEvent.screenX - getscreenX) + 'px'
          }
        } else {
          if ((event.offsetX <= 0 && event.offsetX >= -5)) {
            event.target.style.left = event.target.offsetLeft - (getscreenX - newEvent.screenX) + 'px'
            event.target.style.width = event.target.clientWidth + (getscreenX - newEvent.screenX) + 'px'
          } else {
            event.target.style.width = event.target.clientWidth - (getscreenX - newEvent.screenX) + 'px'
          }
        }
        getscreenX = newEvent.screenX
      })
    }
    if ((evY <= 0 && evY >= -5) || (evY >= evCY && evY <= evCY + 5)) {
      let getscreenY = event.screenY
      document.addEventListener('mousemove', this.mousemovefunc2 = (newEvent: any) => {
        if (newEvent.screenY > getscreenY) {
          if ((event.offsetY <= 0 && event.offsetY >= -5)) {
            event.target.style.top = event.target.offsetTop + (newEvent.screenY - getscreenY) + 'px'
            event.target.style.height = event.target.clientHeight - (newEvent.screenY - getscreenY) + 'px'
          } else {
            event.target.style.height = event.target.clientHeight + (newEvent.screenY - getscreenY) + 'px'
          }
        } else {
          if ((event.offsetY <= 0 && event.offsetY >= -5)) {
            event.target.style.top = event.target.offsetTop - (getscreenY - newEvent.screenY) + 'px'
            event.target.style.height = event.target.clientHeight + (getscreenY - newEvent.screenY) + 'px'
          } else {
            event.target.style.height = event.target.clientHeight - (getscreenY - newEvent.screenY) + 'px'
          }
        }
        getscreenY = newEvent.screenY
      })
    }
    if (evX > 0 && evX < evCX && evY > 0 && evY < 20) {
      let apiBoxEvent: any;
      event.path.forEach((item: any) => {
        if (item._prevClass === 'apiBox') {
          apiBoxEvent = item
        }
      })
      let getscreenX = apiBoxEvent.screenX;
      let getscreenY = apiBoxEvent.screenY;
      document.addEventListener('mousemove', this.mousemovefunc3 = (newEvent: any) => {
        if (newEvent.screenX > getscreenX) {
          apiBoxEvent.style.left = apiBoxEvent.offsetLeft + (newEvent.screenX - getscreenX) + 'px'
        } else {
          apiBoxEvent.style.left = apiBoxEvent.offsetLeft - (getscreenX - newEvent.screenX) + 'px'
        }
        if (newEvent.screenY > getscreenY) {
          apiBoxEvent.style.top = apiBoxEvent.offsetTop + (newEvent.screenY - getscreenY) + 'px'
        } else {
          apiBoxEvent.style.top = apiBoxEvent.offsetTop - (getscreenY - newEvent.screenY) + 'px'
        }
        getscreenY = newEvent.screenY
        getscreenX = newEvent.screenX
      })
    }
  }
  mousemove1(event: any): void {
    const evX = event.offsetX
    const evY = event.offsetY
    const evCX = event.target.clientWidth
    const evCY = event.target.clientHeight
    // 鼠标在左右
    const wCursor = ((evX <= 0 && evX >= -5) || (evX >= evCX && evX <= evCX + 5)) && (evY >= 0 && evY <= evCY);
    // 鼠标在上下
    const sCursor = ((evY <= 0 && evY >= -5) || (evY >= evCY && evY <= evCY + 5)) && (evX >= 0 && evX <= evCX);
    // 鼠标在左上或者右下
    const seCursor = (evX <= 0 && evY <= 0) || (evX >= evCX && evY >= evCY);
    // 鼠标在左下或者右上
    const neCursor = (evX <= 0 && evY >= evCY) || (evX >= evCX && evY <= 0)
    if (wCursor) {
      event.target.style.cursor = 'w-resize'
    } else if (sCursor) {
      event.target.style.cursor = 's-resize'
    } else if (seCursor) {
      event.target.style.cursor = 'se-resize'
    } else if (neCursor) {
      event.target.style.cursor = 'ne-resize'
    } else {
      event.target.style.cursor = 'default'
    }
  }

  // 移除盒子
  removeApiBox(): void {
    this.$EventBus.$emit('removeApiBox', this.apiBoxItem)
  }

  // 提升盒子
  promoteApiBox(): void {
    this.$EventBus.$emit('promoteApiBox', this.apiBoxItem)
  }

  // 盒子变大
  apiBoxBig(event: any): void {
    this.isBig = true;
    let apiBoxEvent: any;
    let appMianEvent: any;
    event.path.forEach((item: any) => {
      if (item._prevClass === 'apiBox') {
        apiBoxEvent = item;
      }
      if (item._prevClass === 'app-main') {
        appMianEvent = item;
      }
    })
    apiBoxEvent.style.top = appMianEvent.offsetTop + 'px'
    apiBoxEvent.style.left = appMianEvent.offsetLeft + 'px'
    apiBoxEvent.style.width = appMianEvent.offsetWidth + 'px'
    apiBoxEvent.style.height = appMianEvent.offsetHeight + 'px'
  }

  // 盒子变小
  apiBoxSmall(event: any): void {
    this.isBig = false;
    let apiBoxEvent: any;
    let appMianEvent: any;
    event.path.forEach((item: any) => {
      if (item._prevClass === 'apiBox') {
        apiBoxEvent = item;
      }
      if (item._prevClass === 'app-main') {
        appMianEvent = item;
      }
    })
    apiBoxEvent.style.top = appMianEvent.offsetTop + 'px';
    apiBoxEvent.style.left = appMianEvent.offsetLeft + 'px';
    apiBoxEvent.style.width = '500px';
    apiBoxEvent.style.height = '400px';
  }

  // 收起盒子
  putAway(event: any): void {
    this.isBig = false;
    let apiBoxEvent: any;
    let appMianEvent: any;
    event.path.forEach((item: any) => {
      if (item._prevClass === 'apiBox') {
        apiBoxEvent = item;
      }
      if (item._prevClass === 'app-main') {
        appMianEvent = item;
      }
    })
    apiBoxEvent.style.top = appMianEvent.offsetHeight + 'px';
    apiBoxEvent.style.left = appMianEvent.offsetLeft + 'px';
    apiBoxEvent.style.width = '500px';
    apiBoxEvent.style.height = '30px';
  }
}
</script>

<style lang='scss'>
  .to-login-enter-active {
    transition: all 0.3s;
  }
  .to-login-enter {
    opacity: 0;
    transform: translateY(-50px);
  }
  .to-login-leave-active {
    transition: all 0.3s;
  }
  .to-login-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
  .to-login-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }
  .apiBox{
    width: 500px;
    min-width: 500px;
    min-height: 30px;
    height: 400px;
    border: 5px solid rgba(145, 190, 187, .5);
    border-radius: 4px;
    position: fixed;
    top: 300px;
    left: 300px;
    background-color: #fff;
    .header{
      width: 100%;
      height: 20px;
      min-height: 20px;
      background: rgba(145, 190, 187, .2);
      display: flex;
      justify-content: space-between;
      .header-star{
        font-size: 14px;
        color: #91BEBB;
        p{
          margin: 0 5px;
        }
      }
      .header-end{
        display: flex;
        .btn-center{
          margin: 0 5px;
          img{
            width: 17px;
            height: 17px;
          }
        }
        .btn-end{
          margin-right: 5px;
        }
        img{
          width: 16px;
          height: 16px;
          cursor: pointer !important;
        }
      }
    }
  }
</style>
