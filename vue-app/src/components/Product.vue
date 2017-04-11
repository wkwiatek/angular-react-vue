<template>
  <div>
    <span v-bind:style="{ textDecoration: isSoldOut ? 'line-through' : 'none' }">
    {{ name }}
    </span>
    <button v-on:click="handleClick">
      Buy
    </button>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['id', 'name', 'isSoldOut'],
  methods: {
    handleClick () {
      this.$emit('buy-click', this.id)
    }
  }
}
</script>

<style scoped>
</style>
