<template>
  <div id="app" class="">
    <common-header></common-header>
    <router-view class="container"/>
  </div>
</template>

<script>
import topBar from '@/components/topBar.vue';
export default {
  name: 'App',
  components: {
    'common-header': topBar,
  },
}
</script>


<style>
  #app{
    margin-top: 65px;
  }
  .container{
    width: 1170px;
    max-width: none !important;
  }
  @media screen and (max-width: 1400px) {
    body{
      width: 1400px;
    }
  } 
</style>
