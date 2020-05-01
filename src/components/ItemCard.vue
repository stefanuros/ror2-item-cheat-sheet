<template>
  <div class="item-card" v-bind:class="this.getRarityClass()">
    <img class="item-icon" v-bind:src="itemData.image" />
    <div class="item-details">
      <h4 class="item-name">
        {{ itemId }} - {{ itemData.name }}
        <span 
          class="item-effective-max"
          v-if="getEffectiveMax()"
        >
          Max: {{ effectiveMax }}
        </span>
      </h4>
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
      effectiveMax: null,
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
    getEffectiveMax() {
      let effectiveMax = 0;
      // Go through all the stats and get the biggest effective max 
      for (let i = 0; i < this.itemData.stats.length; i++) {
        const currentStat = this.itemData.stats[i];
        effectiveMax = Math.max(currentStat.effectiveMax || 0, effectiveMax);
      }

      // If there were no effective maxes, return false
      if (effectiveMax <= 0) {
        effectiveMax = false;
      }

      // Set the effective max value in the prop
      this.effectiveMax = effectiveMax;

      return effectiveMax;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-card {
  --item-card-height: 60px;
  --item-card-width: 350px;

  --border-thickness: 2px;

  --sub-text-colour: darkSlateGrey;
  --background-opacity: 0.25;
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
  font-size: 90%;
  margin: 3px 10px 1px 10px;
  /* text-align: start; */
}

.item-effective-max {
  font-size: 70%;
  color: var(--sub-text-colour);
  font-style: italic;
  float: right;
}

.item-short-description {
  font-style: normal;
  font-size: 75%;
  /* font-style: italic; */
  margin: 1px 10px 3px 10px;
  /* text-align: start; */

  /* Align vertically */
  display: flex;
  align-items: center;
  flex-grow: 1;

  color: var(--sub-text-colour);
}
</style>
