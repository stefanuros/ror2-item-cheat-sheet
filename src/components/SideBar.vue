<template>
  <div 
    class="side-bar-wrapper"
  >
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

        <div v-if="itemData.dropsFrom" class="drops-from-section">
          <p class="drops-from-data">
            Drops From: <b>{{itemData.dropsFrom.source}}</b>
          </p>
          <a
            v-if="itemData.dropsFrom.url" 
            v-bind:href="itemData.dropsFrom.url" 
            target="_blank" 
            class="drops-from-link"
          >
            <font-awesome-icon class="fa-icon" icon="external-link-alt" />
            More Info
          </a>
        </div>

        <p 
          class="equipment-cooldown"
          v-if="this.isEquipment"
          >
          Cooldown: <b>{{ itemData.cooldown }}</b></p>
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
        <h4 class="item-rarity-label">Rarity</h4>
        <p 
          class="item-rarity"
          v-on:mouseup="clickRarityPill(itemData.itemRarity)"
          >
          {{ itemData.itemRarity.description }}
        </p>
        <h4 class="item-category-label">Category</h4>
        <div class="item-category-list">
          <p 
            class="item-category"
            v-for="category in itemData.category"
            v-bind:key="category"
            v-on:mouseup="clickCategoryPill(category)"
            >
            {{ category.description }}
          </p>
        </div>
      </div>

      <div class="item-stats-section" v-if="this.shouldShowStatStacking">
        <h4 class="item-stats-label">Item Stacking</h4>
        <table class="item-stats-table" v-if="itemData.stats">
          <tr class="item-stats-labels">
            <th class="stat-name-label">Stat</th>
            <th class="stat-value-label">Value</th>
            <th class="stat-stack-label">Stack</th>
            <th class="stat-add-label">Add</th>
          </tr>
          <tr 
            class="item-stat"
            v-for="stat in itemData.stats"
            v-bind:key="stat.stat"
            >
              <td class="stat-name">{{ stat.stat }}</td>
              <td class="stat-value">{{ stat.value }}</td>
              <td class="stat-stack">{{ stat.stackType.description }}</td>
              <td class="stat-add">{{ stat.stackValue }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import CloseIcon from './Icons/CloseIcon.vue';

import { SelectionTypeMapping } from '../data/items';
import { ItemRarityClass, SelectionType } from '../data/constants';
import { bus } from '../main';

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
    isEquipment() {
      return this.selectedItem.type === SelectionType.EQUIPMENT;
    },
    shouldShowStatStacking() {
      return this.itemData.stats
        && this.itemData.stats.length > 0
        && !this.isEquipment;
    },
  },
  methods: {
    ...mapMutations([
      'setSelectedItem',
      'setFilterByState',
    ]),
    clickCloseButton() {
      this.setSelectedItem(null);
    },
    clickRarityPill(rarity) {
      bus.$emit('filterRarity', rarity);
      this.setFilterByState({ rarity: [rarity] });
    },
    clickCategoryPill(category) {
      bus.$emit('filterCategory', category);
      this.setFilterByState({ category: [category] });
    },
  },
};
</script>

<style scoped>
.side-bar-wrapper {
  --side-bar-width: 300px;
  --side-bar-background-colour: #444444;

  --item-icon-size: 150px;

  --margin-left: 20px;
  --margin-top: var(--margin-left);

  --main-text-colour: #FFF;
  --main-text-size: 90%;
  --sub-text-colour: #999;
  --sub-text-size: 80%;

  --top-bar-height: 60px;

  overflow-y: auto;
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
.item-colour-lunar, .equipment-colour-lunar { 
  --item-card-colour: #36B8E0;
  --item-card-colour-opaque: rgba(54, 184, 224, var(--background-opacity));
}
.equipment-colour-normal, .equipment-colour-elite {
  --item-card-colour: #C78536;
  --item-card-colour-opaque: rgba(199, 133, 54, var(--background-opacity));
}

.side-bar {
  width: var(--side-bar-width);
  background: var(--side-bar-background-colour);

  color: var(--main-text-colour);

  padding-bottom: var(--margin-left);
  min-height: calc(100% - var(--margin-left));
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
  width: var(--item-icon-size);
  margin: auto;
  border: 5px var(--item-card-colour) solid;
  background: radial-gradient(var(--item-card-colour), #222222);
}

.item-short-description {
  color: var(--sub-text-colour);
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: var(--sub-text-size);
  font-style: italic;
  text-align: center;
}

.item-description {
  margin-top: 0px;
  text-align: center;
  font-size: 90%;
  margin-bottom: 0px;
  white-space: break-spaces;
}

.drops-from-section {
  justify-content: center;
  display: grid;
  padding-left: var(--margin-left);
  padding-right: var(--margin-left);
  text-align: center;
}

.drops-from-data {
  font-size: var(--main-text-size);
  margin-top: 10px;
  margin-bottom: 5px;
}

.drops-from-link {
  color: var(--sub-text-colour);
  text-decoration: none;
  font-size: var(--sub-text-size);
  font-style: italic;
}

.equipment-cooldown {
  padding-top: 10px;
  margin-top: 0px;
  text-align: center;
  font-size: 90%;
  margin-bottom: 0px;
}

.unlock-info-section {
  justify-content: center;
  display: grid;
  padding-left: var(--margin-left);
  padding-right: var(--margin-left);
  text-align: center;
}

.unlock-name {
  margin: 0px;
}

.unlock-description {
  font-size: var(--main-text-size);
  margin-top: 10px;
  margin-bottom: 5px;
}

.unlock-link {
  color: var(--sub-text-colour);
  text-decoration: none;
  font-size: var(--sub-text-size);
  font-style: italic;
}

.item-category-section {
  justify-content: center;
  display: grid;
  padding-left: var(--margin-left);
  padding-right: var(--margin-left);
  text-align: center;
}

.item-category-section > * {
  margin: 0px;
}

.item-rarity {
  font-size: var(--main-text-size);
  margin: 5px auto;
  padding: 3px 8px;

  display: inline-block;
  color: var(--item-card-colour);
  border: 2px var(--item-card-colour) solid;
  /* Large border radius to make it pill shape */
  border-radius: 100px;

  cursor: pointer;
}

.item-rarity:hover {
  background: rgba(190, 190, 190, 0.25);
  transition: background-color 0.25s ease;
}

.item-rarity:active {
  background: rgba(190, 190, 190, 0.75);
}

.item-category-label {
  margin-bottom: 5px;
  margin-top: 5px;
}

.item-category-list {
  display: flex;
  justify-content: center;
  flex-flow: row;
  flex-wrap: wrap;
}

.item-category {
  font-size: var(--main-text-size);
  margin: 2px 3px;
  padding: 3px 8px;

  color: var(--sub-text-colour);
  border: 2px var(--sub-text-colour) solid;
  /* Large border radius to make it pill shape */
  border-radius: 100px;

  cursor: pointer;
}

.item-category:hover {
  background: rgba(190, 190, 190, 0.25);
  transition: background-color 0.25s ease;
}

.item-category:active {
  background: rgba(190, 190, 190, 0.75);
}

.item-stats-section {
  justify-content: center;
  padding-left: var(--margin-left);
  padding-right: var(--margin-left);
  text-align: center;
}

.item-stats-table {
  border: 1px var(--sub-text-colour) solid;
  border-collapse: collapse;
  width: 100%;
}

.item-stats-label {
  margin-bottom: 5px;
  margin-top: 10px;
}

.item-stats-table, td, th {
  border: 1px var(--sub-text-colour) solid;
}

tr:nth-child(even) {
  background-color: #555;
}

.stat-name-label, .stat-value-label, .stat-stack-label, .stat-add-label {
  padding: 3px 5px;
}

.stat-name, .stat-value, .stat-stack, .stat-add {
  font-size: var(--main-text-size);
  padding: 3px 5px;
}
</style>
