<template>
  <div>
    <nav class="nav nav-pills nav-justified">
      <router-link to="/"
                   class="nav-link"
                   active-class="active"
                   exact>
        Card
      </router-link>
      <router-link to="/calc"
                   class="nav-link"
                   active-class="active">
        Calc
      </router-link>
    </nav>

    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
</style>
