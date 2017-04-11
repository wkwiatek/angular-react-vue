<template>
  <form v-on:submit.prevent="handleSubmit(product)">
    <input v-model="product.name">
    <button>Submit</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'add-product',
  data () {
    return {
      product: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    handleSubmit (product) {
      this.addProduct(product)
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
</style>
