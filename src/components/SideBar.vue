<template>
  <div class="side-bar" v-if="selectedItem != null">
    <CloseIcon v-bind:clickCloseButton="this.clickCloseButton" />
    {{ this.itemData.name }}
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { SelectionTypeMapping } from '../data/items';
import CloseIcon from './Icons/CloseIcon.vue';

export default {
  name: "SideBar",
  components: {
    CloseIcon,
  },
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
