<template>
  <div>
    <h2>Products</h2>
    <div v-for="product in products" :key="product.id">
      <p>{{ product.name }} - ₱{{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
};
</script>
