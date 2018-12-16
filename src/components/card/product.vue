<template>
  <div class="product">
    <div class="row" v-for="(input,key) in inputs">
      <card-input
              :key="key"
              :inputName="input.inputName"
              :inputId="input.inputId"
              :inputParent="input.inputParent"
              :defaultValue="input.defaultValue"
      ></card-input>
    </div>


  </div>
</template>

<script>
  import cardInput from './cardInput.vue'

  export default {
    data() {
      return {
        inputs: [
          {
            inputName: "Название",
            inputId: "name",
            inputParent: "product",
            defaultValue: ""
          },
          {
            inputName: "Вес",
            inputId: "weight",
            inputParent: "product",
            defaultValue: 0
          },
          {
            inputName: "Цена",
            inputId: "price",
            inputParent: "product",
            defaultValue: 0
          },
        ]
      }
    },
    components: {
      cardInput,
    }
  }
</script>

<style scoped>

</style>