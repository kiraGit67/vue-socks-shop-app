"use strict";

const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    incrementCart(id) {
      this.cart.push(id);
    },
    decrementCart(id) {
      if (this.cart.length > 0) {
        const index = this.cart.indexOf(id);
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    },
  },
});
