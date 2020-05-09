<template>
  <div 
    class="side-bar" 
    v-if="selectedItem != null"
    v-bind:class="[this.rarityClass]"
  >
    <div class="top-section">
      <a class="wiki-link" v-bind:href="itemData.wikiLink" target="_blank">
        <font-awesome-icon class="item-link-icon" icon="external-link-alt" />
      </a>
      <p class="item-id">#{{ this.itemData.id }}</p>
      <CloseIcon v-bind:clickCloseButton="this.clickCloseButton" class="close-icon" />
    </div>

    <div class="item-info-section">
      <hr style="margin-top: 0px;">
      <h3 class="item-name">{{ itemData.name }}</h3>
      <hr>
      <img class="item-icon" v-bind:src="itemData.image" />
      <p class="item-short-description">{{ itemData.shortDescription }}</p>
      <hr>
      <p class="item-description">{{ itemData.description }}</p>
      <hr>
    </div>

    <div class="unlock-info-section" v-if="itemData.unlock">
      <h4 class="unlock-name">Complete "{{ itemData.unlock.name }}" to Unlock</h4>
      <p class="unlock-description">{{ itemData.unlock.description }}</p>
      <a v-bind:href="itemData.unlock.link" target="_blank" class="unlock-link">
        <font-awesome-icon class="fa-icon" icon="external-link-alt" />
        More Info
      </a>
      <hr>
    </div>

    <div class="item-category-section">
      <p class="item-rarity-label">Rarity</p>
      <p class="item-rarity">{{ itemRarity }}</p>
      <p class="item-category-label">Category</p>
      <div 
        class="item-category-list"
        v-for="category in this.itemCategories"
        v-bind:key="category"
        >
        <p class="item-category">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import CloseIcon from './Icons/CloseIcon.vue';

import { SelectionTypeMapping } from '../data/items';
import { ItemRarityClass } from '../data/constants';

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
    rarityClass() {
      return ItemRarityClass[this.itemData.itemRarity];
    },
    itemRarity() {
      return this.itemData.itemRarity.description;
    },
    itemCategories() {
      return this.itemData.category.map(val => {
        return val.description;
      });
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

<style scoped>
.side-bar {
  --side-bar-width: 300px;
  --side-bar-background-colour: #444444;

  --item-icon-size: 200px;

  --margin-left: 20px;
  --margin-top: var(--margin-left);

  --main-text-colour: #FFF;
  --sub-text-colour: #999;
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

.side-bar {
  width: var(--side-bar-width);
  background: var(--side-bar-background-colour);
  position: relative;

  color: var(--main-text-colour);
}

.top-section {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
}

.wiki-link {
  height: 40px;
  line-height: 40px;
}

.wiki-link:link {
  text-decoration: inherit;
  color: inherit;
}

.wiki-link:visited {
  text-decoration: inherit;
  color: inherit;
}

.item-link-icon {
  color: var(--sub-text-colour);
  font-size: 120%;
}

.item-id {
  color: var(--sub-text-colour);
  margin: 0px;
  font-style: italic;
  font-size: x-large;
  height: 40px;
  line-height: 40px;
  display: inline-block;
}

.close-icon {
  margin: 0px;
}

hr {
  margin-left: calc( -1 * var(--margin-left) );
  margin-right: calc( -1 * var(--margin-left) );
  color: var(--sub-text-colour);
}

.item-info-section {
  justify-content: center;
  display: grid;
  padding-left: var(--margin-left);
  padding-right: var(--margin-left);
}

.item-name {
  margin: 0px;
  font-size: 120%;
  text-align: center;
}

.item-icon {
  height: var(--item-icon-size);
  margin: auto;
  border: 5px var(--item-card-colour) solid;
  background: radial-gradient(var(--item-card-colour), #222222);
}

.item-short-description {
  color: var(--sub-text-colour);
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 80%;
  font-style: italic;
  text-align: center;
}

.item-description {
  margin-top: 0px;
  text-align: center;
  font-size: 90%;
  margin-bottom: 0px;
}

.unlock-info-section {
  justify-content: center;
  /* display: grid; */
  padding-left: var(--margin-left);
  padding-right: var(--margin-left);
  text-align: center;
}

.unlock-name {
  margin: 0px;
}

.unlock-description {
  font-size: 90%;
  margin-top: 10px;
  margin-bottom: 5px;
}

.unlock-link {
  color: var(--sub-text-colour);
  text-decoration: none;
  font-size: 80%;
  font-style: italic;
}
</style>
