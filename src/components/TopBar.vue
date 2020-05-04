<template>
  <div class="top-bar">
    <div class="nav-bar">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from './NavBar/SearchBar.vue';

export default {
  name: 'TopBar',
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.top-bar {
  --top-bar-height: 60px;
}

.top-bar {
  height: var(--top-bar-height);
  background: #444444;
  margin: 0px;
  display: flex;
  flex-flow: row;
}

.nav-bar {
  margin: auto;
}
</style>
