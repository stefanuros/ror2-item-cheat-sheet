<template>
  <div class="rarity-filter">
    <multiselect class="filter-select"
      placeholder="Filter By Rarity"
      v-model="filterByRarity"
      :options="rarityOptions"
      :searchable="true"
      :multiple="true"
      :close-on-select="false"
      :preserve-search="false"
      :preselect-first="false"
      label="name"
      track-by="code">
    </multiselect>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Multiselect } from 'vue-multiselect';
import { ItemRarity } from '../../data/constants';

const rarities = Object.values(ItemRarity).map((rarity) => {
  return {
    name: rarity.description,
    code: rarity
  };
});

export default {
  name: "RarityFilter",
  components: { Multiselect },
  data() {
    return {
      filterByRarity: '',
      rarityOptions: rarities,
    };
  }, 
  methods: {
    ...mapMutations([
      'setFilterByState',
    ]),
  },
  watch: {
    filterByRarity(selected) {
      const filter = selected.map(item => item.code);
      this.setFilterByState({ rarity: filter });
    },
  },
};
</script>

<style>
.rarity-filter {
  --rarity-filter-select-height: 40px;
  --rarity-filter-select-text-size: 100%;
  --rarity-filter-label-size: 100%;
}

.rarity-filter {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
}

.rarity-filter-label {
  display: inline;
  padding-left: 10px;
  font-size: var(--rarity-filter-label-size);
  color: darkGrey;
  margin: auto;

  color: #757575;
}

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #41b883;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}

.multiselect__content {
  position: absolute;
  list-style: none;
  padding: 10px;
}

.multiselect__element: {
  padding: 10px;
}


.multiselect__option {
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: 0.4s;
}

.multiselect__option--selected {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
}
</style>
