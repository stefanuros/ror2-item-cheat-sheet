<template>
  <div>
    <div v-for="itemId in itemIdList" v-bind:key="itemId">
      <ItemCard v-bind:itemId="itemId"/>
    </div>
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

</style>
