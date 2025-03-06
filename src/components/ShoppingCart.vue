<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - ₱{{ item.price }} x {{ item.quantity }}
        <button @click="decreaseQuantity(item.id)">-</button>
        <button @click="addToCart(item)">+</button>
      </li>
    </ul>
    <p>Total Amount: ₱{{ $store.getters.cartTotal }}</p>
    <p>Total Items: {{ $store.getters.cartQuantity }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapActions(['addToCart', 'decreaseQuantity'])
  }
};
</script>
