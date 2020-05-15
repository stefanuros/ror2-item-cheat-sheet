import Vue from 'vue';
import Vuex from 'vuex';
import { SortType, Theme } from './data/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardSize: Theme.SMALL,
    pageTheme: Theme.DARK,
    showHidden: false,
    sortBy: SortType.RARITY,
    filterBy: { category: [], rarity: [] },
    searchTerm: "",
    selectedItem: null,
  },
  mutations: {
    updateSortByState(state, sortBy) {
      state.sortBy = sortBy || SortType.RARITY;
    },
    updateFilterByState(state, filterBy) {
      const { category, rarity } = state.filterBy;
      state.filterBy.category = filterBy.category || category;
      state.filterBy.rarity = filterBy.rarity || rarity;
    },
    setFilterByState(state, filterToAdd) {
      const { category, rarity } = filterToAdd;
      if (!category && rarity) {
        state.filterBy = { category: state.filterBy.category, rarity };
      } else if (!rarity && category) {
        state.filterBy = { category, rarity: state.filterBy.rarity };
      } else {
        state.filterBy = { category, rarity };
      }
    },
    updateSearchTermState(state, searchTerm) {
      state.searchTerm = (searchTerm == null ? "" : searchTerm);
    },
    setSelectedItem(state, selectedItem) {
      state.selectedItem = selectedItem;
    },
  },
});
