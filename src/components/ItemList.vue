<template>
  <div class="item-list-wrapper">
    <h2 class="item-list-header">{{ SelectionTypePluralization[itemListType] }}</h2>
    <hr class="item-list-divisor">
    <div class="item-list" v-bind:class="[this.cardSize]">
      <ItemCard 
        v-show="!isItemIdListEmpty"
        v-for="itemId in itemIdList"
        v-bind:key="itemId"
        v-bind:itemId="itemId"
        :itemType="itemListType"
      />
    </div>
    <div
      class="no-items-message"
      v-show="isItemIdListEmpty"
    >
      No Matching {{ itemListType.description }} Found
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ItemCard from './ItemCard.vue';

import { items, equipment } from "../data/items";
import { SelectionType, SelectionTypePluralization } from "../data/constants";
import ItemIdUtils from '../helpers/ItemIdUtils';

export default {
  name: "ItemList",
  props: [
    'itemListType',
  ],
  data() {
    return {
      SelectionTypePluralization,
    };
  },
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
        (itemIds, itemList) => ItemIdUtils.showHiddenOperation(itemIds, itemList, this.showHidden),
        (itemIds, itemList) => ItemIdUtils.filterOperation(itemIds, itemList, this.filterBy),
        (itemIds, itemList) => ItemIdUtils.searchOperation(itemIds, itemList, this.searchTerm),
        (itemIds, itemList) => ItemIdUtils.sortOperation(itemIds, itemList, this.sortBy),
      ];

      let itemList;

      if (this.itemListType === SelectionType.ITEM) {
        itemList = items;
      } else if (this.itemListType === SelectionType.EQUIPMENT) {
        itemList = equipment;
      }

      // Go through the operations and apply each operation to the output of the
      // previous operation
      return itemIdOperations.reduce((itemIds, operation) => {
        return operation(itemIds, itemList);
      }, itemList.getItemIds());
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

.item-list-header {
  text-align-last: right;
  margin: 0px;
  margin-top: 5px;
  margin-right: 25px;
  color: var(--no-items-message-colour);
}

hr.item-list-divisor {
  margin: 0px 25px 10px;
  border: 1px solid var(--no-items-message-colour);
}

</style>
