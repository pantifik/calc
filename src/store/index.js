'use strict'

import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
    recipes: {},
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
    /*******************END RECIPE MUTATION***********************/


    setProducts(state, payload) {
      state.products = payload;
    },
    
    setRecipes(state, payload) {
      state.recipes = payload;
    },
  },
  
  actions: {
    initProducts({ commit }) {
      Vue.http.get('products').then(response => response.json())
                              .then(products => {
                                commit('setProducts',products);
                              });
    },
    
    initRecipes({ commit }) {
      Vue.http.get('recipes').then(response => response.json())
                              .then(recipes => {
                                commit('setRecipes',recipes);
                              });
    }
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