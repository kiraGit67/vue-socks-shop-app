"use strict";

const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      alt: "Green Socks",
      activeClass: true,
      inStock: true,
      inventory: 35,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: [
        { id: "XS", description: "xtraSmall" },
        { id: "S", description: "small" },
        { id: "M", description: "medium" },
        { id: "L", description: "large" },
        { id: "XL", description: "xtraLarge" },
        { id: "XXL", description: "doubleXtraLarge" },
      ],
    };
  },
  methods: {
    add2Cart() {
      this.cart++;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart--;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});

const mountedApp = app.mount("#app");
