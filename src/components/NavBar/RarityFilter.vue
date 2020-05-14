<template>
  <div class="rarity-filter">
    <multiselect class="filter-select"
      placeholder="Filter By Rarity Type"
      v-model="filterByRarity"
      :options="rarityOptions"
      :searchable="true"
      :multiple="true"
      :close-on-select="false"
      :preserve-search="false"
      :preselect-first="false"
      :showNoResults="false"
      label="name"
      track-by="code">
    </multiselect>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Multiselect } from 'vue-multiselect';
import { ItemRarity } from '../../data/constants';

const clear = {
  name: "Clear All",
  code: Symbol("Clear All"),
};
const rarities = [clear].concat(Object.values(ItemRarity).map((rarity) => {
  return {
    name: rarity.description,
    code: rarity,
  };
}));


export default {
  name: "RarityFilter",
  components: { Multiselect },
  data() {
    return {
      filterByRarity: null,
      rarityOptions: rarities,
    };
  }, 
  methods: {
    ...mapMutations([
      'setFilterByState',
    ]),
    clearAll() {
      this.filterByRarity = null;
      this.setFilterByState({ rarity: [] });
    },
  },
  watch: {
    filterByRarity(selected) {
      if (!selected || selected.includes(clear)) {
        this.clearAll();
      } else {
        const filter = selected.map(item => item.code);
        this.setFilterByState({ rarity: filter });
      }
    },
  },
};
</script>

<style>
.rarity-filter {
  --rarity-filter-height: 30px;
  --rarity-filter-select-text-size: 100%;
  --rarity-filter-label-size: 100%;
  --rarity-filter-width: 150px;
  --rarity-pill-width: 70%;
  --rarity-pill-text-size: 70%;
}

.rarity-filter {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: grid;
}


.rarity-filter .multiselect {
  width: var(--rarity-filter-width);
  height: var(--rarity-filter-height);
  font-size: var(--rarity-filter-text-size);
  color: #757575;
  
  display: inline;
  overflow: scroll;

  margin-top: 10px;
  margin-left: 10px;
}

.rarity-filter .multiselect::-webkit-scrollbar {
  display: none;
}

.rarity-filter .multiselect__input {
  font-size: var(--rarity-filter-text-size);
  outline: none;
  border: none;
  position: relative;
  display: block;
}

.rarity-filter .multiselect--active .multiselect__tags-wrap {
  display: none;
}

.rarity-filter .multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
  color: #fff;
  line-height: 1;
  background: #777;
  margin-bottom: 5px;
  max-width: 100%;
  text-overflow: ellipsis;

  font-size: var(--rarity-pill-text-size);
}

.rarity-filter .multiselect__content {
  margin-top: 15px;
  position: absolute;
  list-style: none;
  padding-inline-start: 0px;
}

.rarity-filter .multiselect__element {
  display: flex;
  flex-grow: -1;
}

.rarity-filter .multiselect__tags-wrap {
  width: var(--rarity-filter-width);
  height: 0px;
  position: relative;
}

.rarity-filter .multiselect__option {
  color: #555;
  cursor: pointer;
  background: #fff;
  width: calc(var(--rarity-filter-width) - 25px);
  margin-left: -10px;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  transition: 0.4s;

  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.rarity-filter .multiselect__option:hover {
  background:  rgba(170, 170, 170, 0.9);;
  
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  transition: 0.4s;
}

.rarity-filter .multiselect__option--selected {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  border-radius: 8px;
  background: #777;
  color: #fff;
}

</style>
