'use strict'

export default {
  methods: {
    coast( {price, weight} ) {
      return (price / weight).toFixed(2);
    }
  }
}