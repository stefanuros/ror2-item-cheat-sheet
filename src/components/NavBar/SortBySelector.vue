<template>
  <div class="sort-by-selector">
    <select 
      name="sort-by" 
      id="sort-by" 
      class="sort-by"
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

</style>
