<template>
  <div class="top-bar">
    <input 
      type="text" 
      class="search-bar" 
      name="search-bar" 
      id="search-bar"
      placeholder="Type Here to Search"
      v-model="searchTerm"
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TopBar',
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
  }
};
</script>

<style scoped>
.top-bar {
  --top-bar-height: 60px;
  --search-bar-height: 40px;
  --search-bar-width: 400px;
  --search-bar-text-size: 130%;
}

.top-bar {
  height: var(--top-bar-height);
  background: #444444;
  margin: 0px;
  display: flex;
}

.search-bar {
  height: var(--search-bar-height);
  width: var(--search-bar-width);
  margin: auto;

  border-radius: 10px;
  border: none;
  padding-left: 10px;
  font-size: var(--search-bar-text-size);
}

.search-bar:focus {
  border:none;
  box-shadow: none;
  outline: 0;
}
</style>
