<template>
  <div class="search-bar">
    <SearchIcon />
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
import SearchIcon from '../Icons/SearchIcon.vue';

export default {
  name: 'SearchBar',
  components: {
    SearchIcon,
  },
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

.search-bar-input {
  height: var(--search-bar-height);

  border: none;
  font-size: var(--search-bar-text-size);
  padding-left: 5px;

  flex-grow: 1;
  color: #757575;
}

.search-bar-input:focus {
  border:none;
  box-shadow: none;
  outline: 0;
}

.search-bar-input::placeholder {
  font-size: 80%;
  transform:translate3d(0,-2px,0);

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
</style>
