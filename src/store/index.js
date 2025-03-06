import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
    products: [
      { id: 1, name: "Apple MacBook Air M2", price: "55,944.00" },
      { id: 2, name: "Samsung Galaxy S24", price: "44,744.00" },
      { id: 3, name: "Sony WH-1000XM5 Headphones", price: "22,288.00" },
      { id: 4, name: "Logitech G Pro X Superlight Mouse", price: "8,904.00" },
      { id: 5, name: "Keychron K8 Mechanical Keyboard", price: "5,544.00" },
      { id: 6, name: "Apple Watch Series 9", price: "22,344.00" },
      { id: 7, name: "JBL Charge 5 Bluetooth Speaker", price: "8,344.00" },
      { id: 8, name: "Apple iPad Air (5th Gen)", price: "33,544.00" },
      { id: 9, name: "Samsung T7 1TB External SSD", price: "4,984.00" },
      { id: 10, name: "LG UltraGear 27” Gaming Monitor", price: "15,624.00" }
    ]
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++; 
      } else {
        state.cart.push({ ...product, quantity: 1 }); 
      }
    },
    DECREASE_QUANTITY(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity--; // Reduce quantity
        if (item.quantity === 0) {
          state.cart = state.cart.filter(i => i.id !== productId); 
        }
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    decreaseQuantity({ commit }, productId) {
      commit('DECREASE_QUANTITY', productId);
    }
  },
  getters: {
    cartItems: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((sum, item) => {
        return sum + parseFloat(item.price.replace(/,/g, '')) * item.quantity;
      }, 0).toLocaleString('en-PH', { minimumFractionDigits: 2 });
    },
    cartQuantity: state => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
});
