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
import ItemCard from './ItemCard.vue';
import { items } from "../data/items";

export default {
  name: "ItemView",
  components: {
    ItemCard,
  },
  data: () => {
    return {
      itemIdList: items.getItemIds(),
    };
  },
};
</script>

<style>
.item-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
