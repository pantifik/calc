<template>
  <div class="product">
    <div class="row">
      <div class="form-group col-md-12">
        <label for="name">Название</label>
        <input type="text"
               class="form-control"
               id="name"
               aria-describedby="ProductName"
               placeholder=""
               v-model.trim="name"
               @input="changeValue">
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-md-12">
        <label for="weight">Вес</label>
        <input type="number"
               class="form-control"
               id="weight"
               aria-describedby="ProductWeight"
               placeholder=""
               v-model.number="weight"
               @input="changeValue">
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-md-12">
        <label for="weight">Цена</label>
        <input type="number"
               class="form-control"
               id="price"
               aria-describedby="ProductWeight"
               placeholder=""
               v-model.number="price"
               @input="changeValue">
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        weight: 0,
        price: 0
      }
    },
    methods: {
      changeValue(event) {
        let data = {};
        data[event.target.id] = this[event.target.id];
        this.$store.commit('changeState', data);
      }
    }
  }
</script>

<style scoped>

</style>