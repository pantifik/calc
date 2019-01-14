'use strict'

import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {
      name: '',
      weight: 0,
      price: 0,
    },
    recipe: {
      name: '',
      item: {
        name: '',
        weight: 0
      },
      items: []
    }
    
  },
  mutations: {
    changeProductVal(state, payload) {
      state.product[payload.name] = payload.value;
    },
    changeRecipeName(state, payload) {
      state.recipe.name = payload;
    },
    changeRecipeItem(state, payload) {
      state.recipe.item[payload.name] = payload.value;
    },
    addRecipeItems(state) {
      state.recipe.items.push(Object.assign({}, state.recipe.item))
    }
  },
  actions: {
  
  },
  getters: {
    getState: state => {
      return state;
    },
    formFilled(state) {
      return nameState => {
        return state[nameState].name
      }
    }
  }
  
});