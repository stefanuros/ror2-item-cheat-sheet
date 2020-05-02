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
import { SortType, ItemRaritySortValue as rarityValues } from '../data/constants';

export default {
  name: "ItemView",
  components: {
    ItemCard,
  },
  // data: () => {
  //   return {
  //     itemIdList: items.getItemIds(),
  //   };
  // },
  computed: {
    ...mapState([
      'sortBy',
    ]),
    itemIdList() {
      // Sort the item ids based on the sortBy state value
      return items.getItemIds().sort((a, b) => {
        // Sort by rarity
        if (this.sortBy === SortType.RARITY) {
          const aRarity = items[a].itemRarity;
          const bRarity = items[b].itemRarity;
          // If theyre the same rarity, sort by ID
          if (aRarity !== bRarity) {
            return rarityValues[aRarity] - rarityValues[bRarity];
          }
        }
        // Sort by Name
        if (this.sortBy === SortType.NAME) {
          return (items[a].name < items[b].name ? -1 : 1);
        }
        // Sort by ID (default)
        return a - b;
      });
    },
    itemIdList_v2() {
      // Set a list of operations that will be done to the item id list
      // * Note: Order matters in this list
      const itemIdOperations = [
        // (itemIds) => filterFunction(itemIds, this.filterBy),
        // (itemIds) => searchFunction(itemIds, this.searchTerm),
        // (itemIds) => sortFunction(itemIds, this.sortBy),
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
