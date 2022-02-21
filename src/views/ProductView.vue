<template>
  <div>
    <template v-for="product in products" :key="product">
      {{ product.name }}<br />
      {{ product.category }}<br />
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    axios
      .get(`http://35.234.34.149/products?user_id=1`)
      .then((res) => (this.products = res.data));
  }
}
</script>
<style scoped>
</style> 
