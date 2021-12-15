<template>
  <div class="apiBox" @mousedown="mousedown1" @mousemove="mousemove1">
    <div class="header" >
      
    </div>
    <div class="body">

    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'imgHover'
})
export default class imgHover extends Vue {
  public mousemovefunc1: any;
  public mousemovefunc2: any;
  public mousemovefunc3: any;
  mounted(): void {
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
      let getscreenX = event.path[1].screenX;
      let getscreenY = event.path[1].screenY;
      document.addEventListener('mousemove', this.mousemovefunc3 = (newEvent: any) => {
        if (newEvent.screenX > getscreenX) {
          event.path[1].style.left = event.path[1].offsetLeft + (newEvent.screenX - getscreenX) + 'px'
        } else {
          event.path[1].style.left = event.path[1].offsetLeft - (getscreenX - newEvent.screenX) + 'px'
        }
        if (newEvent.path[1].screenY > getscreenY) {
          event.path[1].style.top = event.path[1].offsetTop + (newEvent.screenY - getscreenY) + 'px'
        } else {
          event.path[1].style.top = event.path[1].offsetTop - (getscreenY - newEvent.screenY) + 'px'
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
}
</script>

<style lang='scss'>
  .apiBox{
    width: 500px;
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
    }
  }
</style>
