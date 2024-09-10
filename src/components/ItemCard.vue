<template>
  <div
    class="item-card"
    v-bind:class="[this.rarityClass, this.cardSize]"
    v-on:mouseup="itemCardClick()"
  >
    <div class="image-div">
      <img class="dlc-icon" v-if="itemData.dlc" v-bind:src="this.dlcIconUrl" />
      <img class="item-icon" :src="this.itemImageUrl" />
    </div>
    <div class="item-details">
      <h4 class="item-name">
        {{ itemData.name }}
        <span class="item-id" v-if="itemData.id" unselectable="on">#{{ itemData.id }}</span>
        <span class="item-effective-max" v-if="effectiveMax > 0" unselectable="on">
          Max: {{ effectiveMax }}
        </span>
      </h4>
      <p class="item-short-description">{{ itemData.shortDescription }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import items from "../data/items.json";
import itemImages from "../data/itemImages.json";
import { ItemRarityClass, DlcIconUrl } from "../data/constants";

export default {
  name: "ItemCard",
  props: ["itemId", "itemType"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapState(["cardSize"]),
    effectiveMax() {
      return (this.itemData.stats || []).reduce((tot, val) => {
        return Math.max(tot, val.effectiveMax || 0);
      }, 0);
    },
    rarityClass() {
      return ItemRarityClass[this.itemData.itemRarity];
    },
    itemData() {
      return items[this.itemId];
    },
    dlcIconUrl() {
      if (this.itemData.dlc) {
        return DlcIconUrl[this.itemData.dlc];
      }
      return "";
    },
    itemImageUrl() {
      if (itemImages[this.itemId]) {
        return `items/${itemImages[this.itemId]}`;
      }
      return "";
    },
  },
  methods: {
    ...mapMutations(["setSelectedItem"]),
    itemCardClick() {
      this.setSelectedItem({ id: this.itemId, type: this.itemType });
    },
  },
};
</script>

<style scoped>
.small-view {
  --item-card-height: 50px;
  --border-thickness: 2px;

  --sub-text-colour: darkSlateGrey;
  --background-opacity: 0.45;

  --sub-text-size: 65%;
  --item-name-text-size: 90%;
  --description-text-size: 70%;

  --item-card-margin: 2px;

  --dlc-icon-size: 14px;
}

.large-view {
  --item-card-height: 75px;
  --border-thickness: 2px;

  --sub-text-colour: darkSlateGrey;
  --background-opacity: 0.25;

  --sub-text-size: 75%;
  --item-name-text-size: 95%;
  --description-text-size: 80%;

  --item-card-margin: 2px;

  --dlc-icon-size: 14px;
}

/* Setting colours for different rarities */
.item-colour-common {
  --item-card-colour: #96a6a6;
  --item-card-colour-opaque: rgba(199, 204, 206, var(--background-opacity));
}
.item-colour-uncommon {
  --item-card-colour: #71bc39;
  --item-card-colour-opaque: rgba(113, 188, 57, var(--background-opacity));
}
.item-colour-void {
  --item-card-colour: #a92964;
  --item-card-colour-opaque: rgba(169, 41, 100, var(--background-opacity));
}
.item-colour-legendary {
  --item-card-colour: #df4d39;
  --item-card-colour-opaque: rgba(223, 77, 57, var(--background-opacity));
}
.item-colour-boss {
  --item-card-colour: #aeba23;
  --item-card-colour-opaque: rgba(174, 186, 35, var(--background-opacity));
}
.item-colour-lunar,
.equipment-colour-lunar {
  --item-card-colour: #36b8e0;
  --item-card-colour-opaque: rgba(54, 184, 224, var(--background-opacity));
}
.equipment-colour-normal,
.equipment-colour-elite {
  --item-card-colour: #c78536;
  --item-card-colour-opaque: rgba(199, 133, 54, var(--background-opacity));
}

.item-card {
  display: flex;
  flex-direction: row;
  height: var(--item-card-height);
  border: var(--border-thickness) solid var(--item-card-colour);

  cursor: pointer;

  margin: var(--item-card-margin);

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.item-card:hover {
  margin-bottom: calc(2 * var(--item-card-margin));
  margin-top: 0px;
  margin-right: 0px;
  margin-left: calc(2 * var(--item-card-margin));
  box-shadow: calc(-1 * var(--item-card-margin)) var(--item-card-margin) 5px #999999;
}

.item-card:active {
  box-shadow: none;
  margin: var(--item-card-margin);
}

.item-icon {
  height: var(--item-card-height);
  width: var(--item-card-height);
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
  margin: 3px 3px 1px 5px;

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
  margin: 1px 3px 3px 5px;

  /* Truncate */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

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

.image-div {
  position: relative;
}

.dlc-icon {
  height: var(--dlc-icon-size);
  width: auto;
  margin: 2px 0px 0px 2px;
  position: absolute;
}
</style>
