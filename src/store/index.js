'use strict'

import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {
    },
    recipe: {}
  },
  mutations: {
    addItem(state, payload) {
      let store = state[payload.storeName];
      Vue.set(store, payload.name, payload.value);
    }
  },
  
});