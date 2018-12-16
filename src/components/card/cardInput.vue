<template>
  <div class="form-group col-md-12">
    <label :for="inputId">{{ inputName }}</label>
    <input type="text"
           class="form-control"
           :id="inputId"
           :aria-describedby="inputName"
           placeholder=""
           v-model="val"
           @input="changeValue">
    <small class="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
</template>

<script>
  export default {
    props: [
      'inputName',
      'inputId',
      'inputParent',
      'defaultValue'
    ],
    data() {
      return {
        val: this.defaultValue
      }
    },
    methods: {
      changeValue() {
        let data = {};
        data.storeName = this.inputParent;
        data.name = this.inputId;
        data.value = this.val;
        this.$store.commit('addItem', data);
      }
    }
  }
</script>

<style scoped>

</style>