<template>
  <div class="apiAddBox">
      <div class="title">
      </div>
      <div class="formBody">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="接口名称:">
            <el-input v-model="form.apiName" placeholder="请输入接口名称"></el-input>
          </el-form-item>
          <el-form-item label="路径名称:">
            <el-input v-model="form.apiUrl" placeholder="请输入路径名称"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <div style="height: 40px; display: flex; align-items: center; margin-right: 12px;">
          <p>添加层级: </p>
        </div>
        <el-select disabled  v-model="typeValue" placeholder="请选择活动区域">
          <el-option
            v-for="item in AllType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div @click="addType" class="addType"  @mouseenter="addImgShow = false" @mouseleave="addImgShow = true">
          <img width="40px"  v-show="!addImgShow" src="@/assets/img/addtype.svg" alt="">
          <img width="40px" v-show="addImgShow" src="@/assets/img/addtypehover.svg" alt="">
        </div>
      </div>
      <div class="footer2">
        <div class="left">
          <el-steps :style="'height:' + (levelArr.length * 100) + 'px'" direction="vertical" :active="active" finish-status="success">
            <el-step v-for="(item, index) in levelArr" :key="'level' + index" :title="'层级' + (index + 1)"></el-step>
          </el-steps>
        </div>
        <div class="right">
          <div @click="addInput"  style="width: 40px; height: 40px; cursor: pointer;" @mouseenter="addInputShow = false" @mouseleave="addInputShow = true" v-show="levelArr.length !== 0">
            <img width="40px"  v-show="!addInputShow" src="@/assets/img/addtype.svg" alt="">
            <img width="40px" v-show="addInputShow" src="@/assets/img/addtypehover.svg" alt="">
          </div>
          <div class="box" v-for="(item, index) in levelArr" :key="'box' + index" v-show="active + 1 === item">
            <el-input style="width: 500px; margin-bottom: 10px;" placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-select style="width: 100px" v-model="select" slot="prepend" placeholder="请选择">
                <el-option
                  v-for="item in AllType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-input>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { form_Type, all_Type } from './apiAdd.type'

@Component({
  name: 'ApiAdd'
})
export default class ApiAdd extends Vue {
  public active: number = 0;
  public addImgShow: boolean = true;
  public addInputShow: boolean = true;
  form: form_Type = {
    apiName: ''
  }
  levelArr = []
  apiForm: any
  AllType: all_Type[] = [{
    value: 'string',
    label: 'String'
  }, {
    value: 'number',
    label: 'Number'
  }, {
    value: 'boolean',
    label: 'Boolean'
  }, {
    value: 'array',
    label: 'Array'
  }, {
    value: 'object',
    label: 'Object'
  }];
  typelist = {
    value1: ''
  }
  public typeValue: string = ''
  public select: string = '';
  public input3: string = '';
  public addType() {
    if (this.typeValue !== '') {
      const obj = {
        type: this.typeValue
      }
      this.levelArr.push(obj)
    }
  }
  public addInput(): void {
    console.log(123);
    
  }
}
</script>

<style lang='scss' scoped>
  .apiAddBox{
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      background: white;
      padding-left: 40px;
      padding-top: 40px;
      border: 5px solid rgba(145, 190, 187, .5);
      overflow-x: hidden;
      // overflow-y: scroll;
      display: flex;
      flex-direction: column;
      .footer{
        width: 400px;
        display: flex;
        .addType{
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-left: 10px;
        }
      }
      .footer2{
        margin-top: 40px;
        display: flex;
        .left{
          width: 100px;
          border-right: 1px dashed #999;
          margin-right: 20px;
        }
        .right{
          .box{
            display: flex;
            flex-direction: column;
          }
        }
      }
  }
</style>
