<template>
  <div class="sort-by">
    <p class="sort-by-label" unselectable="on">Sort By</p>
    <select 
      name="sort-by-select" 
      id="sort-by-select" 
      class="sort-by-select"
      v-model="sortBy"
    >
      <option value="RARITY">Rarity</option>
      <option value="ID">Id</option>
      <option value="NAME">Name</option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { SortType } from '../../data/constants';

export default {
  name: "SortBySelector",
  data() {
    return {
      sortBy: "RARITY",
    };
  },
  methods: {
    ...mapMutations([
      'updateSortByState',
    ]),
  },
  watch: {
    sortBy(newVal) {
      this.updateSortByState(SortType[newVal]);
    },
  },
};
</script>

<style scoped>
.sort-by-select {
  --sort-by-select-height: 40px;
  --sort-by-select-text-size: 100%;
  --sort-by-label-size: 110%;
}

.sort-by {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
}

.sort-by-label {
  display: inline;
  padding-left: 10px;
  font-size: var(--sort-by-label-size);
  color: darkGrey;
  margin: auto;

  font-family: Arial, Helvetica, sans-serif;
  color: #757575;

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

.sort-by-select {
  height: var(--sort-by-select-height);
  background: white;

  font-size: var(--sort-by-select-text-size);
  color: #757575;

  border-radius: 10px;
  border: none;

  /* padding-left: 5px; */
}

.sort-by-select:focus {
  border: none;
  box-shadow: none;
  outline: 0;
}
</style>
