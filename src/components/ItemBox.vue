<template>
  <div>
    ItemBox
    {{ item }}
  </div>
</template>

<script>
import { items } from '../data/items';

export default {
  name: 'ItemBox',
  data: () => {
    return {
      item: items[0],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
