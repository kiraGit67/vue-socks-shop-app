"use strict";

app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- Product Image -->
                <img :src="image" :class="{ 'out-of-stock-img': !inStock }" :alt="alt" :title="alt">
            </div>
            <div class="product-info">
                <h1>{{ isOnSale }}</h1>
                <p v-if="inStock && variants[selectedVariant].quantity > 10">In Stock</p>
                <p
                    v-else-if="inStock && variants[selectedVariant].quantity > 0 && variants[selectedVariant].quantity <= 10">
                    Almost sold out!</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>
                
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                    class="color-circle" :class="{ active: activeClass }"
                    :style="{ backgroundColor: variant.color }">
                </div>
                
                <product-sizes :sizes="sizes"></product-sizes>

                <button class="button" :class="{ disabledButton: !inStock }" v-on:click="add2Cart"
                    :disabled="!inStock">Add2Cart</button>
                <button class="button" :class="{ disabledButton: !inStock }" @click="removeFromCart"
                    :disabled="!inStock">Remove From Cart</button>
            </div>
        </div>
        <review-list :reviews="reviews" v-if="reviews.length"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      alt: "Green Socks",
      activeClass: true,
      onSale: true,
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
      reviews: [],
    };
  },
  methods: {
    add2Cart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
      /*
      if (this.cart < this.variants[this.selectedVariant].quantity) {
        this.cart++;
      }
      */
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
      /*
      if (this.cart > 0) {
        this.cart--;
      }
      */
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
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
    shipping() {
      return this.premium ? "Free" : 2.99;
    },
  },
});
