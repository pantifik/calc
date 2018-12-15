<template>
  <div class="recipe">
    <div class="row">
      <div class="form-group col-md-12">
        <label for="name">Название</label>
        <input type="text"
               class="form-control"
               id="name"
               aria-describedby="ProductName"
               placeholder="">
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </div>
    <p>Состав</p>

    <div class="row">
      <div class="form-group col-md-12">
        <label for="price">Продукт</label>
        <input type="text"
               class="form-control"
               id="price"
               aria-describedby="ProductPrice"
               placeholder="">
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-md-12">
        <label for="weight">Вес</label>
        <input type="text"
               class="form-control"
               id="weight"
               aria-describedby="ProductWeight"
               placeholder="">
        <small class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>