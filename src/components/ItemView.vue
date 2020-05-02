<template>
  <div class="item-view">
    <ItemCard 
      v-for="itemId in itemIdList"
      v-bind:key="itemId"
      v-bind:itemId="itemId"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ItemCard from './ItemCard.vue';

import { items } from "../data/items";
import { sortOperation, filterOperation } from '../helpers/ItemIdUtils';

export default {
  name: "ItemView",
  components: {
    ItemCard,
  },
  computed: {
    ...mapState([
      'sortBy',
      'filterBy',
    ]),
    itemIdList() {
      // Set a list of operations that will be done to the item id list
      // * Note: Order matters in this list
      const itemIdOperations = [
        (itemIds) => filterOperation(itemIds, this.filterBy),
        // (itemIds) => searchOperation(itemIds, this.searchTerm),
        (itemIds) => sortOperation(itemIds, this.sortBy),
      ];

      // Go through the operations and apply each operation to the output of the
      // previous operation
      return itemIdOperations.reduce((itemIds, operation) => {
        return operation(itemIds);
      }, items.getItemIds());
    },
  },
};
</script>

<style>
.item-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
