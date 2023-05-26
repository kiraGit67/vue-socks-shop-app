"use strict";

const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      //image: "./assets/images/socks_green.jpg",
      alt: "Green Socks",
      activeClass: true,
      onSale: true,
      //inStock: true,
      //inventory: 35,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 5,
        },
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    isOnSale() {
      return this.onSale === true ? this.title + " is on sale" : this.title;
    },
  },
});

const mountedApp = app.mount("#app");
