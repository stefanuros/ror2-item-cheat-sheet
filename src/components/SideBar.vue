<template>
  <div class="side-bar" v-if="selectedItem != null">
    {{ this.itemData.name }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SelectionTypeMapping } from '../data/items';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'selectedItem',
    ]),
    itemData() {
      const { id, type } = this.selectedItem;
      return SelectionTypeMapping[type][id];
    },
  },
};
</script>

<style>
.side-bar {
  --side-bar-width: 350px;
  --side-bar-background-colour: #444444;
}

.side-bar {
  width: var(--side-bar-width);
  background: var(--side-bar-background-colour);
}
</style>
