<template>
  <ul>
    <li v-for="p in products">
      <product
        v-bind:id="p.id"
        v-bind:name="p.name"
        v-bind:is-sold-out="p.isSoldOut"
        v-on:buy-click="buyProduct"
      ></product>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Product from './Product'

export default {
  components: {Product},
  name: 'products',
  computed: mapState(['products']),
  methods: mapActions(['buyProduct'])
}
</script>

<style scoped>
</style>
