<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'app'
})
export default class pp extends Vue {
  mounted(): void {
    const title = document.getElementsByTagName('title')[0];
    title.innerHTML = 'API模拟';
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  background: #f1f1f1;
}
</style>
