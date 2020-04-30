<template>
  <div class="item-card" v-bind:class="this.getRarityClass()">
    <img class="item-icon" v-bind:src="itemData.image" />
    <div class="item-details">
      <h4 class="item-name">{{ itemData.name }} - {{ itemId }}</h4>
      <p class="item-short-description">{{ itemData.shortDescription }}</p>
    </div>
  </div>
</template>

<script>
import { items } from "../data/items";
import { ItemRarity } from '../data/constants';

export default {
  name: "ItemCard",
  props: ["itemId"],
  data() {
    return {
      itemData: items[this.itemId],
    };
  },
  methods: {
    getRarityClass() {
      switch (this.itemData.itemType) {
        case ItemRarity.COMMON:
          return "item-colour-common";
        case ItemRarity.UNCOMMON:
          return "item-colour-uncommon";
        case ItemRarity.LEGENDARY:
          return "item-colour-legendary";
        case ItemRarity.BOSS:
          return "item-colour-boss";
        case ItemRarity.LUNAR:
          return "item-colour-lunar";
        default:
          return "item-colour-common";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-card {
  --item-card-height: 60px;
  --item-card-width: 400px;

  --border-pixel: 2px;
}

/* Setting colours for different rarities */
.item-colour-common { --border-colour: #C7CCCE; }
.item-colour-uncommon { --border-colour: #71BC39; }
.item-colour-legendary { --border-colour: #DF4D39; }
.item-colour-boss { --border-colour: #AEBA23; }
.item-colour-lunar { --border-colour: #36B8E0; }

.item-card {
  display: flex;
  flex-direction: row;
  height: var(--item-card-height);
  width: var(--item-card-width);
  border: var(--border-pixel) solid var(--border-colour);
}

.item-icon {
  height: var(--item-card-height);
  border-right: var(--border-pixel) solid var(--border-colour);
  background: radial-gradient(var(--border-colour), #222222);
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-size: 95%;
  margin: 5px 10px 2px 10px;
  /* text-align: start; */
}

.item-short-description {
  font-size: 85%;
  font-style: italic;
  margin: 2px 10px 5px 10px;
  /* text-align: start; */

  /* Align vertically */
  display: flex;
  align-items: center;
  flex-grow: 1;
}
</style>
