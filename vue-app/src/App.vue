<template>
  <div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/products/add">Add Product</router-link></li>
      </ul>

      <hr/>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
</style>
