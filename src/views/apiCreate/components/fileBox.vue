<template>
  <div class="ccc" @click="add" @mouseenter="imgshow = false" @mouseleave="imgshow = true">
    <div class=imgBox>
      <img v-show="imgshow" src="@/assets/img/apiFile.svg" alt="">
      <img v-show="!imgshow" src="@/assets/img/apiFilehover.svg" alt="">
      </div>
    <div class="nameBox">{{ boxName }}</div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'fileBox'
})
export default class FileBox extends Vue {
  @Prop({ default: 'xxx' }) public boxName!: string;
  @Prop() public boxItem!: { user: string; name: string;};
  public imgshow: boolean = true
  $EventBus: any;
  add(): void {
    this.$EventBus.$emit('addApiBox', this.boxItem)
  }
}
</script>

<style lang='scss'>
  .ccc{
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border: 1px solid #f1f1f1;
      background-color: rgba(0, 180, 0, .1);
    }
    .imgBox{
      img{
        width: 40px;
        height: 40px;
      }
    }
    .nameBox{
      color: rgba(0, 0, 0, .3);
    }
  }
</style>
