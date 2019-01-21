<template>
  <div class="container">
    <form @submit.prevent="sendForm">
      <div class="form-group btn-group btn-group-toggle">
        <label class="btn btn-secondary"
               :class="{ 'active': switcher === 'product'}">
          <input type="radio"
                 name="options"
                 value="product"
                 v-model="switcher"
          > Продукт
        </label>
        <label class="btn btn-secondary"
               :class="{ 'active': switcher === 'recipe'}">
          <input type="radio"
                 name="options"
                 value="recipe"
                 v-model="switcher"
          > Рецепт
        </label>
      </div>


      <div>
        <recipe v-if="switcher === 'recipe'"></recipe>
        <product v-else></product>
      </div>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit"
              class="btn btn-primary"
              :disabled="!formCheck">
        Submit
      </button>
    </form>

    <pre>{{ changedData }}</pre>

  </div>
</template>

<script>
  import Product from './card/product.vue'
  import Recipe from './card/recipe.vue'

  export default {
    data() {
      return {
        switcher: 'recipe'
      }
    },
    methods: {
      sendForm() {
        let data = this.$store.state[this.switcher],
            tableName = this.switcher + 's';

        this.$http.post(tableName, data)
      }
    },
    computed: {
      changedData(){
        return this.$store.getters.getState
      },
      formCheck() {
        return true
      }
    },
    components: {
      Product,
      Recipe
    }
  }
</script>

<style scoped>
  form{
    width: 50%;
    padding: 10px;
    margin: 0 auto;

    border: 1px solid navy;
    border-radius: 20px;
    text-align: center;
  }
</style>