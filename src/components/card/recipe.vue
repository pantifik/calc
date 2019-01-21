<template>
  <div class="recipe">
    <div class="row">
      <card-input
              inputName="Название"
              inputId="name"
              defaultValue=""
              v-model="recipeName"
      ></card-input>
    </div>
    <p>Состав</p>
      <table class="table table-striped">
        <tbody>
          <tr v-for="(item, index) in recipeItems" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.weight }}</td>
          </tr>
        </tbody>
      </table>
    <div class="row" v-for="(input,key) in inputs" :key="key">
      <card-input
              :inputName="input.inputName"
              :inputId="input.inputId"
              :defaultValue="input.value"
              v-model="input.value"
              @input="changeRecipeItem({name: input.inputId, value: input.value})"
      ></card-input>
    </div>
    <button type="button"
            class="btn btn-success"
            @click="addRecipeItems">
      Добавить
    </button>

  </div>
</template>

<script>
  import cardInput from './cardInput.vue';
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        inputs: [
          {
            inputName: "Название",
            inputId: "name",
            value: this.$store.state.recipeItem.name
          },
          {
            inputName: "Вес",
            inputId: "weight",
            value: this.$store.state.recipeItem.weight
          }
        ]
      }
    },
    methods: {
      ...mapMutations([
        'changeRecipeItem',
        'changeRecipeName',
        'addRecipeItems'
      ])
    },
    computed: {
      recipeName: {
        get () {
          return this.$store.state.recipe.name
        },
        set (value) {
          this.changeRecipeName(value)
        }
      },
      recipeItems: function () {
        return this.$store.state.recipe.items
      }
    },
    components: {
      cardInput,
    }
  }
</script>

<style scoped>

</style>