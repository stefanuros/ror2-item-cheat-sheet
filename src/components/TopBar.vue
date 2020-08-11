<template>
  <div class="top-bar-wrapper">
    <div class="top-bar" :class="{ 'top-bar-fixed': fixed }">
      <div class="nav-bar">
        <SearchBar />
        <SortBySelector />
        <CategoryFilter />
        <RarityFilter />
      </div>
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
  props: ['fixed'],
  components: {
    SearchBar,
    SortBySelector,
    CategoryFilter,
    RarityFilter,
  },
};
</script>

<style>
.top-bar-wrapper {
  --top-bar-height: 60px;
  --top-bar-background-colour: #333333;
}

.top-bar {
  min-height: var(--top-bar-height);
  background: var(--top-bar-background-colour);
  margin: 0px;
  display: flex;
  flex-flow: row wrap;

  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;
}

.top-bar-wrapper .top-bar-fixed {
  position: fixed;
}

.top-bar-wrapper > :not(.top-bar-fixed) {
  visibility: hidden;
}

.nav-bar {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
}

</style>
