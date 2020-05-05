<template>
  <div class="top-bar">
    <div class="nav-bar">
      <SearchBar />
      <SortBySelector />
      <CategoryFilter />
      <RarityFilter />
    </div>
  </div>
</template>

<script>
import SearchBar from './NavBar/SearchBar.vue';
import SortBySelector from './NavBar/SortBySelector.vue';
import CategoryFilter from './NavBar/CategoryFilter.vue';
import RarityFilter from './NavBar/RarityFilter.vue';

export default {
  name: 'TopBar',
  components: {
    SearchBar,
    SortBySelector,
    CategoryFilter,
    RarityFilter,
  },
};
</script>

<style scoped>
.top-bar {
  --top-bar-height: 60px;
  --top-bar-background-colour: #333333;
}

.top-bar {
  min-height: var(--top-bar-height);
  background: var(--top-bar-background-colour);
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
