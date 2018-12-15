'use strict'

import VueRouter from 'vue-router';

import Card from '../components/card'
import Calc from '../components/calc'

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
  ]
})