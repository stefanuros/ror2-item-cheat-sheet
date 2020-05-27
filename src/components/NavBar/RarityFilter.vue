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
import { bus } from '../../main';

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
  created() {
    bus.$on('filterRarity', (filter) => {
      this.filterByRarity = [{
        name: filter.description,
        code: filter,
      }];
    });
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
  --rarity-filter-height: 20px;
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
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  padding-left: 5px;
  padding-top: 1px;

  display: inline;
  overflow: scroll;

  width: var(--rarity-filter-width);
  height: var(--rarity-filter-height);
  font-size: var(--rarity-filter-text-size);
  color: #757575;
}

.rarity-filter .multiselect::-webkit-scrollbar {
  display: none;
}

.rarity-filter .multiselect__input {
  position: relative;
  display: block;

  font-size: var(--rarity-filter-text-size);
  outline: none;
  border: none;
}

.rarity-filter .multiselect--active .multiselect__tags-wrap {
  display: none;
}

.rarity-filter .multiselect__tag {
  position: relative;
  display: inline-block;

  max-width: 100%;
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 5px;

  border-radius: 5px;
  color: #fff;
  line-height: 1;
  background: #777;
  text-overflow: ellipsis;
  font-size: var(--rarity-pill-text-size);
}

.rarity-filter .multiselect__content {
  position: absolute;
  margin-top: 15px;
  list-style: none;
  padding-inline-start: 0px;
}

.rarity-filter .multiselect__element {
  display: flex;
  flex-grow: -1;
}

.rarity-filter .multiselect__tags-wrap {
  position: relative;
  width: var(--rarity-filter-width);
  height: 0px;
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
