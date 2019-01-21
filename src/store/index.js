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
      items: [
      ]
    },
    recipeItem: {
      name: '',
      weight: 0
    },
    
  },
  mutations: {
    changeProductVal(state, payload) {
      state.product[payload.name] = payload.value;
    },
    
    /******************* RECIPE MUTATION ***********************/
    changeRecipeName(state, payload) {
      state.recipe.name = payload;
    },
    changeRecipeItem(state, payload) {
      state.recipeItem[payload.name] = payload.value;
    },
    addRecipeItems(state) {
      state.recipe.items.push(Object.assign({}, state.recipeItem))
    },
    /*createNewItem(state) {
      state.recipe.items.push({
                                name: '',
                                weight: 0
                              })
    }*/
    /*******************END RECIPE MUTATION***********************/
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