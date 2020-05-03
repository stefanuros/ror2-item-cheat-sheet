<template>
  <div class="home-page">
    <TopBar/>
    <ItemList/>
  </div>
</template>

<script>
import ItemList from './ItemList.vue';
import TopBar from './TopBar.vue';

export default {
  name: 'HomePage',
  components: {
    ItemList,
    TopBar,
  },
};
</script>

<style>

</style>
