"use strict";

const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      alt: "Green Socks",
      inStock: false,
      inventory: 25,
    };
  },
});

const mountedApp = app.mount("#app");
