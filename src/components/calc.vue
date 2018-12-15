<template>
 <div class="calc container">
   <h1>calc</h1>

   <table class="table table-striped table-hover">
     <thead class="thead-dark">
     <tr>
       <th scope="col">#</th>
       <th scope="col">Название</th>
       <th scope="col">Вес</th>
       <th scope="col">Цена</th>
       <th scope="col">Цена за 1 гр</th>
     </tr>
     </thead>
     <tbody>
     <tr v-for="(product, index) in products"
         :key="index">
       <th scope="row">{{ index + 1 }}</th>
       <td @dblclick.prevent="edit(product)">
         {{ product.name }}
         <input type="text"
                :class="{active: editedProduct == product, editInput: !editedProduct}"
                v-model="product.name"
                >
       </td>
       <td>{{ product.weight }}</td>
       <td>{{ product.price }}</td>
       <td>{{ getCoast(product.price,product.weight) }}</td>
     </tr>
     </tbody>
   </table>

 </div>
</template>

<script>

  export default {
    name: "calc",
    data: function () {
      return {
        products: {},
        editedProduct: null,
      }
    },
    methods: {
      getCoast(price, weight) {
        return (price / weight).toFixed(2)
      },
      edit(product) {
        this.editedProduct = product
      }
    },
    created() {
      this.$http.get('products').then(response => {
        return response.json();
      }, response => {
        window.console.log(response)
      }).then(products => {
        this.products = products;
      });
    }
  }
</script>

<style scoped>
  .editInput{
    display: none;
  }
  .v{
    display: block
  }
</style>