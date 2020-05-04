<template>
  <div class="item-card" v-bind:class="[this.rarityClass, this.cardSize]">
    <img class="item-icon" v-bind:src="itemData.image" />
    <div class="item-details">
      <h4 class="item-name">
        {{ itemData.name }}
        <span class="item-id" unselectable="on">#{{ itemId }}</span>
        <span 
          class="item-effective-max"
          v-if="effectiveMax > 0"
          unselectable="on"
        >
          Max: {{ effectiveMax }}
        </span>
      </h4>
      <p class="item-short-description">{{ itemData.shortDescription }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { items } from "../data/items";
import { ItemRarityClass } from '../data/constants';

export default {
  name: "ItemCard",
  props: ["itemId"],
  data() {
    return {
      itemData: items[this.itemId],
    };
  },
  computed: {
    ...mapState([
      'cardSize',
    ]),
    effectiveMax() {
      return (this.itemData.stats || []).reduce((tot, val) => {
        return Math.max(tot, val.effectiveMax || 0);
      }, 0);
    },
    rarityClass() {
      return ItemRarityClass[this.itemData.itemRarity];
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.small-view {
  --item-card-height: 50px;
  --item-card-width: 310px;

  --border-thickness: 2px;

  --sub-text-colour: darkSlateGrey;
  --background-opacity: 0.25;

  --sub-text-size: 65%;
  --item-name-text-size: 90%;
  --description-text-size: 70%;
}

.large-view {
  --item-card-height: 75px;
  --item-card-width: 400px;

  --border-thickness: 2px;

  --sub-text-colour: darkSlateGrey;
  --background-opacity: 0.25;

  --sub-text-size: 75%;
  --item-name-text-size: 95%;
  --description-text-size: 80%;
}

/* Setting colours for different rarities */
.item-colour-common { 
  --item-card-colour: #96A6A6;
  --item-card-colour-opaque: rgba(199, 204, 206, var(--background-opacity));
}
.item-colour-uncommon { 
  --item-card-colour: #71BC39;
  --item-card-colour-opaque: rgba(113, 188, 57, var(--background-opacity));
}
.item-colour-legendary { 
  --item-card-colour: #DF4D39;
  --item-card-colour-opaque: rgba(223, 77, 57, var(--background-opacity));
}
.item-colour-boss { 
  --item-card-colour: #AEBA23;
  --item-card-colour-opaque: rgba(174, 186, 35, var(--background-opacity));
}
.item-colour-lunar { 
  --item-card-colour: #36B8E0;
  --item-card-colour-opaque: rgba(54, 184, 224, var(--background-opacity));
}

.item-card {
  display: flex;
  flex-direction: row;
  height: var(--item-card-height);
  width: var(--item-card-width);
  border: var(--border-thickness) solid var(--item-card-colour);
  font-family:Arial, Helvetica, sans-serif;

  margin: 2px;
}

.item-icon {
  height: var(--item-card-height);
  border-right: var(--border-thickness) solid var(--item-card-colour);
  background: radial-gradient(var(--item-card-colour), #222222);
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: var(--item-card-colour-opaque);
}

.item-name {
  font-size: var(--item-name-text-size);
  margin: 3px 5px 1px 10px;

  position: relative;
}

.item-effective-max {
  position: absolute;
  top: 0;
  right: 0;

  font-size: var(--sub-text-size);
  color: var(--sub-text-colour);
  /* float: right; */

    user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

.item-short-description {
  font-style: normal;
  font-size: var(--description-text-size);
  margin: 1px 5px 3px 10px;

  /* Align vertically */
  display: flex;
  align-items: center;
  flex-grow: 1;

  color: var(--sub-text-colour);
}

.item-id {
  font-size: var(--sub-text-size);
  font-style: italic;
  font-weight: lighter;
  color: var(--sub-text-colour);

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
</style>
