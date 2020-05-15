<template>
  <div class="item-list-wrapper">
    <div class="item-list" v-bind:class="[this.cardSize]">
      <ItemCard 
        v-show="!isItemIdListEmpty"
        v-for="itemId in itemIdList"
        v-bind:key="itemId"
        v-bind:itemId="itemId"
      />
    </div>
    <div
      class="no-items-message"
      v-show="isItemIdListEmpty"
    >
      No Matching Items Found
    </div>
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
    isItemIdListEmpty() {
      return this.itemIdList.length <= 0;
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

.item-list-wrapper {
  --no-items-message-colour: #999;
  --no-items-message-size: 150%;
}

.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--item-card-width), 1fr));
  height: fit-content;
}

.no-items-message {
  text-align: center;
  margin: 20px;
  color: var(--no-items-message-colour);
  font-size: var(--no-items-message-size);
}

</style>
