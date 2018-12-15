'use strict'

import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    weight: null,
    price: null,
  },
  mutations: {
    changeState(state, payload) {
      for (let key in payload) {
        if(!payload.hasOwnProperty(key)) continue;
        state[key] = payload[key]
      }
    },
    changeName(state, payload) {
      state.name = payload;
    },
    changeWeight(state, payload) {
      state.weight = payload;
    },
    changeCoast(state, payload) {
      state.coast = payload;
    }
  }
});