<template>
  <div id="app" class="">
    <common-header></common-header>
    <router-view class="container"/>
  </div>
</template>

<script>
import Header from '@/components/topBar.vue';
export default {
  name: 'App',
  components: {
    'common-header': Header,
  },
}
</script>

<style>
  #app{
    margin-top: 65px;
  }
</style>
