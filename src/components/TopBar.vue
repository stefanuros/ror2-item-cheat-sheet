<template>
  <div class="top-bar">
    <div class="nav-bar">
      <SearchBar />
      <SortBySelector />
    </div>
  </div>
</template>

<script>
import SearchBar from './NavBar/SearchBar.vue';
import SortBySelector from './NavBar/SortBySelector.vue';

export default {
  name: 'TopBar',
  components: {
    SearchBar,
    SortBySelector,
  },
};
</script>

<style scoped>
.top-bar {
  --top-bar-height: 60px;
}

.top-bar {
  min-height: var(--top-bar-height);
  background: #444444;
  margin: 0px;
  display: flex;
  flex-flow: row wrap;
}

.nav-bar {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
}
</style>
