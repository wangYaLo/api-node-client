<template>
  <div class="apiBox" @mousemove="mousemove">

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'imgHover'
})
export default class imgHover extends Vue {
  public mousemovefunc: any;
  public mouseupfunc: any
  mousemove(event: any): void {
    // 鼠标在左右
    const wCursor = ((event.offsetX <= 0 && event.offsetX >= -2) || (event.offsetX >= event.target.clientWidth && event.offsetX <= event.target.clientWidth + 2)) && (event.offsetY >= 4 && event.offsetY <= event.target.clientHeight - 4);
    // 鼠标在上下
    const sCursor = ((event.offsetY <= 0 && event.offsetY >= -2) || (event.offsetY >= event.target.clientHeight && event.offsetX <= event.target.clientHeight + 2)) && (event.offsetX >= 4 && event.offsetX <= event.target.clientWidth - 4);
    // 鼠标在左上或者右下
    const seCursor = (event.offsetX <= 4 && event.offsetY <= 4) || (event.offsetX >= event.target.clientWidth - 4 && event.offsetY >= event.target.clientHeight - 4);
    // 鼠标在左下或者右上
    const neCursor = (event.offsetX <= 4 && event.offsetY >= event.target.clientHeight - 4) || (event.offsetX >= event.target.clientWidth - 4 && event.offsetY <= 4)
    if (wCursor) {
      event.target.style.cursor = 'w-resize'
      event.target.onmousedown = (ev1: any) => {
        let getscreenX = event.screenX
        document.addEventListener('mousemove', this.mousemovefunc = (newEvent: any) => {
          if (newEvent.screenX > getscreenX) {
            if ((event.offsetX <= 0 && event.offsetX >= -2)) {
              ev1.target.style.left = ev1.target.offsetLeft + (newEvent.screenX - getscreenX) + 'px'
              ev1.target.style.width = ev1.target.clientWidth - (newEvent.screenX - getscreenX) + 'px'
            } else {
              ev1.target.style.width = ev1.target.clientWidth + (newEvent.screenX - getscreenX) + 'px'
            }
          }
          if ((newEvent.screenX < getscreenX)) {
            if ((event.offsetX <= 0 && event.offsetX >= -2)) {
              ev1.target.style.left = ev1.target.offsetLeft - (getscreenX - newEvent.screenX) + 'px'
              ev1.target.style.width = ev1.target.clientWidth + (getscreenX - newEvent.screenX) + 'px'
            } else {
              ev1.target.style.width = ev1.target.clientWidth - (getscreenX - newEvent.screenX) + 'px'
            }
          }
          getscreenX = newEvent.screenX
        })
        document.addEventListener('mouseup', this.mouseupfunc = () => {
          document.removeEventListener('mousemove', this.mousemovefunc)
          document.removeEventListener('mouseup', this.mouseupfunc)
        })
      }
    } else if (sCursor) {
      event.target.style.cursor = 's-resize'
      event.target.onmousedown = (ev1: any) => {
        let getscreenY = event.screenY
        document.addEventListener('mousemove', this.mousemovefunc = (newEvent: any) => {
          if (newEvent.screenY > getscreenY) {
            if ((event.offsetY <= 0 && event.offsetY >= -2)) {
              ev1.target.style.top = ev1.target.offsetTop + (newEvent.screenY - getscreenY) + 'px'
              ev1.target.style.height = ev1.target.clientHeight - (newEvent.screenY - getscreenY) + 'px'
            } else {
              ev1.target.style.height = ev1.target.clientHeight + (newEvent.screenY - getscreenY) + 'px'
            }
          }
          if (newEvent.screenY < getscreenY) {
            if ((event.offsetY <= 0 && event.offsetY >= -2)) {
              ev1.target.style.top = ev1.target.offsetTop - (getscreenY - newEvent.screenY) + 'px'
              ev1.target.style.height = ev1.target.clientHeight + (getscreenY - newEvent.screenY) + 'px'
            } else {
              ev1.target.style.height = ev1.target.clientHeight - (getscreenY - newEvent.screenY) + 'px'
            }
          }
          getscreenY = newEvent.screenY
        })
        document.addEventListener('mouseup', this.mouseupfunc = () => {
          document.removeEventListener('mousemove', this.mousemovefunc)
          document.removeEventListener('mouseup', this.mouseupfunc)
        })
      }
    } else if (seCursor) {
      event.target.style.cursor = 'se-resize'
      event.target.onmousedown = (ev1: any) => {
        let getscreenY = event.screenY
        let getscreenX = event.screenX
        document.addEventListener('mousemove', this.mousemovefunc = (newEvent: any) => {
          if (newEvent.screenX > getscreenX) {
            console.log(event.offsetX <= 4);
            console.log(event.offsetX >= -2);
            if ((event.offsetX <= 4 && event.offsetX >= -2)) {
              ev1.target.style.left = ev1.target.offsetLeft + (newEvent.screenX - getscreenX) + 'px'
              ev1.target.style.width = ev1.target.clientWidth - (newEvent.screenX - getscreenX) + 'px'
            } else {
              console.log(123);
              
              ev1.target.style.width = ev1.target.clientWidth + (newEvent.screenX - getscreenX) + 'px'
            }
          }
          if ((newEvent.screenX < getscreenX)) {
            if ((event.offsetX <= 4 && event.offsetX >= -2)) {
              ev1.target.style.left = ev1.target.offsetLeft - (getscreenX - newEvent.screenX) + 'px'
              ev1.target.style.width = ev1.target.clientWidth + (getscreenX - newEvent.screenX) + 'px'
            } else {
              ev1.target.style.width = ev1.target.clientWidth - (getscreenX - newEvent.screenX) + 'px'
            }
          }
          if (newEvent.screenY > getscreenY) {
            if ((event.offsetY <= 4 && event.offsetY >= -2)) {
              ev1.target.style.top = ev1.target.offsetTop + (newEvent.screenY - getscreenY) + 'px'
              ev1.target.style.height = ev1.target.clientHeight - (newEvent.screenY - getscreenY) + 'px'
            } else {
              ev1.target.style.height = ev1.target.clientHeight + (newEvent.screenY - getscreenY) + 'px'
            }
          }
          if (newEvent.screenY < getscreenY) {
            if ((event.offsetY <= 4 && event.offsetY >= -2)) {
              ev1.target.style.top = ev1.target.offsetTop - (getscreenY - newEvent.screenY) + 'px'
              ev1.target.style.height = ev1.target.clientHeight + (getscreenY - newEvent.screenY) + 'px'
            } else {
              ev1.target.style.height = ev1.target.clientHeight - (getscreenY - newEvent.screenY) + 'px'
            }
          }
          getscreenY = newEvent.screenY
          getscreenX = newEvent.screenX
        })
        document.addEventListener('mouseup', this.mouseupfunc = () => {
          document.removeEventListener('mousemove', this.mousemovefunc)
          document.removeEventListener('mouseup', this.mouseupfunc)
        })
      }
    } else if (neCursor) {
      event.target.style.cursor = 'ne-resize'
      event.target.onmousedown = (ev1: any) => {
        let getscreenY = event.screenY
        let getscreenX = event.screenX
        document.addEventListener('mousemove', this.mousemovefunc = (newEvent: any) => {
          if (newEvent.screenX > getscreenX) {
            if ((event.offsetX <= 0 && event.offsetX >= -2)) {
              ev1.target.style.left = ev1.target.offsetLeft + (newEvent.screenX - getscreenX) + 'px'
              ev1.target.style.width = ev1.target.clientWidth - (newEvent.screenX - getscreenX) + 'px'
            } else {
              ev1.target.style.width = ev1.target.clientWidth + (newEvent.screenX - getscreenX) + 'px'
            }
          }
          if ((newEvent.screenX < getscreenX)) {
            if ((event.offsetX <= 0 && event.offsetX >= -2)) {
              ev1.target.style.left = ev1.target.offsetLeft - (getscreenX - newEvent.screenX) + 'px'
              ev1.target.style.width = ev1.target.clientWidth + (getscreenX - newEvent.screenX) + 'px'
            } else {
              ev1.target.style.width = ev1.target.clientWidth - (getscreenX - newEvent.screenX) + 'px'
            }
          }
          if (newEvent.screenY > getscreenY) {
            if ((event.offsetY <= 0 && event.offsetY >= -2)) {
              ev1.target.style.top = ev1.target.offsetTop + (newEvent.screenY - getscreenY) + 'px'
              ev1.target.style.height = ev1.target.clientHeight - (newEvent.screenY - getscreenY) + 'px'
            } else {
              ev1.target.style.height = ev1.target.clientHeight + (newEvent.screenY - getscreenY) + 'px'
            }
          }
          if (newEvent.screenY < getscreenY) {
            if ((event.offsetY <= 0 && event.offsetY >= -2)) {
              ev1.target.style.top = ev1.target.offsetTop - (getscreenY - newEvent.screenY) + 'px'
              ev1.target.style.height = ev1.target.clientHeight + (getscreenY - newEvent.screenY) + 'px'
            } else {
              ev1.target.style.height = ev1.target.clientHeight - (getscreenY - newEvent.screenY) + 'px'
            }
          }
          getscreenY = newEvent.screenY
          getscreenX = newEvent.screenX
        })
        document.addEventListener('mouseup', this.mouseupfunc = () => {
          document.removeEventListener('mousemove', this.mousemovefunc)
          document.removeEventListener('mouseup', this.mouseupfunc)
        })
      }
    } else {
      event.target.style.cursor = 'default'
      event.target.onmousedown = null
    }
  }
}
</script>

<style lang='scss'>
  .apiBox{
    width: 500px;
    height: 400px;
    border: 2px solid #000000;
    border-radius: 4px;
    position: fixed;
    top: 60px;
    left: 100px;
  }
</style>
