<template>
  <div class="recipes">
    <h3>Книга рецептов</h3>
    <ul class="list-group" >
      <li class="list-group-item" v-for="(name,recipeIndex) in recipesName" :key="recipeIndex">
        <button type="button" class="btn btn-light btn-lg btn-block"
                @click="active = active === name ? '' : name">
          {{ name }}
        </button>
        <table class="table" v-if="active === name">
          <tbody>
          <tr v-for="(item,index) in recipes[recipeIndex].items" :key="index">
            <th scope="row">{{ index + 1}}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.weight }}</td>
            <td>{{ item.price }}</td>
          </tr>
          </tbody>
        </table>
      </li>
    </ul>

  </div>


</template>

<script>
  import lib from '../mixins/methods'

  export default {
    mixins: [lib],

    data: function () {
      return {
        recipes: [],
        active: ''
      }
    },

    computed: {
      recipesName: function () {
        let names = [];
        for (let key in this.recipes) {
          names.push(this.recipes[key].name);
        }
        return names;
      },
    },


    methods: {
      getProductPrice(item) {
          this
            .$http
              .get('products/?name=' + item.name)
                .then(response => response.json())
                .then(product => item.price = (this.coast(product[0]) * item.weight).toFixed(2))
                .catch( () => item.price = 'none')
      },

    },

    created() {
      this
        .$http
          .get('recipes')
            .then(response => response.json())
            .then(recipes => this.recipes = recipes)
            .then(recipes => {

              this.recipes = recipes.map(recipe => {

                recipe.items = recipe.items.map(item => {
                  this.getProductPrice(item);
                  return item
                });

                return recipe;
              })
            })

  }
  }
</script>

<style scoped>

</style>