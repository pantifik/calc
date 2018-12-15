'use strict'

import VueRouter from 'vue-router';

import Card from '../components/card'
import Calc from '../components/calc'
import RecipesBook from '../components/recipesBook'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Card
    },
    {
      path: '/calc',
      component: Calc
    },
    {
      path: '/recipes',
      component: RecipesBook
    },
  ]
})