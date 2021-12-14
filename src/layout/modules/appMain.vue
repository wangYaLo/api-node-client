<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component
export default class AppMain extends Vue {
  $route: any;
  get key(): void {
    return this.$route.path;
  }
}
</script>
<style scoped>

</style>

