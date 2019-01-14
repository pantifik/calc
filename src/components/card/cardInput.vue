<template>
  <div class="form-group col-md-12">
    <label :for="inputId">{{ inputName }}</label>
    <input type="text"
           class="form-control"
           :id="inputId"
           :aria-describedby="inputName"
           placeholder=""
           :value="defaultValue"
           @input="$emit('input', $event.target.value)">
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
      'defaultValue'
    ]
  }
</script>

<style scoped>

</style>