"use strict";

const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      alt: "Green Socks",
      inStock: false,
      inventory: 25,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
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
});

const mountedApp = app.mount("#app");
