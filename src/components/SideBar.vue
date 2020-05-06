<template>
  <div class="side-bar" v-if="selectedItem != null">
    <div class="close-side-bar-button" v-on:mouseup="this.clickCloseButton">
      <svg class="close-side-bar-icon">
        <path d="m10 10 l20 20 m-20 0 l20 -20 z" />
      </svg>
    </div>
    {{ this.itemData.name }}
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
  methods: {
    ...mapMutations([
      'setSelectedItem',
    ]),
    clickCloseButton() {
      this.setSelectedItem(null);
    }
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

.close-side-bar-button {
  position: relative;
  height: 40px;
  width: 40px;
  margin-right: 5px;
  margin-top: 5px;
  float: right;

  transition: background-color 0.5s ease;
  border-radius: 20px;
}

.close-side-bar-button:hover {
  background: rgba(190, 190, 190, 0.25);
  transition: background-color 0.25s ease;
}

.close-side-bar-icon {
  height: inherit;
  width: inherit;
  stroke: #CCCCCC;
  stroke-width: 2px;
}
</style>
