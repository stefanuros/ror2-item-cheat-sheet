import Vue from 'vue';
import Vuex from 'vuex';
import { SelectionType } from './data/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    selectedId: 0,
    selectedType: SelectionType.EQ,
  },
  mutations: {
    increment: state => { state.count++; },
  },
});
