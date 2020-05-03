import Vue from 'vue';
import Vuex from 'vuex';
import { SortType } from './data/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showHidden: false,
    sortBy: SortType.RARITY,
    filterBy: { category: [], rarity: [] },
    searchTerm: "",
  },
  mutations: {
    setSortBy: (state, { sortKey }) => {
      state.sortBy = SortType[sortKey.toUpperCase()];
    },
  },
});
