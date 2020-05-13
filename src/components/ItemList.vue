<template>
  <div class="item-list" v-bind:class="[this.cardSize]">
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
import ItemIdUtils from '../helpers/ItemIdUtils';

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  computed: {
    ...mapState([
      'showHidden',
      'sortBy',
      'filterBy',
      'searchTerm',
      'cardSize',
    ]),
    itemIdList() {
      // Set a list of operations that will be done to the item id list
      // * Note: Order matters in this list
      const itemIdOperations = [
        (itemIds) => ItemIdUtils.showHiddenOperation(itemIds, this.showHidden),
        (itemIds) => ItemIdUtils.filterOperation(itemIds, this.filterBy),
        (itemIds) => ItemIdUtils.searchOperation(itemIds, this.searchTerm),
        (itemIds) => ItemIdUtils.sortOperation(itemIds, this.sortBy),
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
.small-view {
  --item-card-width: 310px;
}

.large-view {
  --item-card-width: 400px;
}

.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--item-card-width), 1fr));
  height: fit-content;
}
</style>
