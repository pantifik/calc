<template>
  <div class="product">
    <div class="row" v-for="(input,key) in inputs" :key="key">
      <card-input
              :inputName="input.inputName"
              :inputId="input.inputId"
              :defaultValue="input.value"
              v-model="input.value"
              @input="changeProductVal({name: input.inputId, value: input.value})"
      ></card-input>
    </div>
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
            value: this.$store.state.product.name
          },
          {
            inputName: "Вес",
            inputId: "weight",
            value: this.$store.state.product.weight
          },
          {
            inputName: "Цена",
            inputId: "price",
            value: this.$store.state.product.price
          },
        ]
      }
    },
    components: {
      cardInput,
    },
    methods: {
      ...mapMutations([
        'changeProductVal'
      ])
    }
  }
</script>

<style scoped>

</style>