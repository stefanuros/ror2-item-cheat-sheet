<template>
  <div class="search-bar">
    <font-awesome-icon class="search-bar-icon" icon="search" />
    <input 
      type="text" 
      class="search-bar-input" 
      name="search-bar-input" 
      id="search-bar-input"
      placeholder="Type Here to Search"
      v-model="searchTerm"
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    ...mapMutations([
      'updateSearchTermState',
    ]),
  },
  watch: {
    searchTerm(newVal) {
      this.updateSearchTermState(newVal);
    },
  },
};
</script>

<style scoped>
.search-bar {
  --search-bar-height: 40px;
  --search-bar-width: 300px;
  --search-bar-text-size: 130%;
  --search-bar-icon-size: calc( var(--search-bar-height) - 15px );
}

.nav-bar {
  margin: auto;
}

.search-bar {
  height: var(--search-bar-height);
  width: var(--search-bar-width);

  margin: auto;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-flow: row;
}

.search-bar-icon {
  display: inline;
  height: var(--search-bar-icon-size);
  width: var(--search-bar-icon-size);
  padding-left: 10px;
  font-size: 85%;
  color: darkGrey;
  margin: auto;
}

.search-bar-input {
  height: var(--search-bar-height);

  border: none;
  font-size: var(--search-bar-text-size);
  padding-left: 10px;

  flex-grow: 1;
}

.search-bar-input:focus {
  border:none;
  box-shadow: none;
  outline: 0;
}
</style>
