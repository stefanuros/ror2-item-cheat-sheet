<template>
  <div class="home-page">
    <TopBar/>
    <div class="info-section">
      <ItemList style="flex: 1;" />
      <SideBar/>
    </div>
  </div>
</template>

<script>
import ItemList from './ItemList.vue';
import TopBar from './TopBar.vue';
import SideBar from './SideBar.vue';

export default {
  name: 'HomePage',
  components: {
    ItemList,
    TopBar,
    SideBar,
  },
};
</script>

<style scoped>
.info-section {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
}
</style>
