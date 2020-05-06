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
      state.filterBy = filterBy || { category: [], rarity: [] };
    },
    updateSearchTermState(state, searchTerm) {
      state.searchTerm = (searchTerm == null ? "" : searchTerm);
    },
    setSelectedItem(state, selectedItem) {
      state.selectedItem = selectedItem;
    },
  },
});
