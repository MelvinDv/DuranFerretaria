<template>
  <v-card width="220px">
    <div class="d-flex flex-column pa-3">
      <v-sheet height="180" color="grey"></v-sheet>

      <p class="mt-2 mb-0 subtitle-2 grey--text text--darken-3">
        {{ product.brand }}
      </p>
      <p
        class="mb-0 grey--text text--darken-4 linkText"
        style="font-size: 14px"
        @click="lookProduct(product.id)"
      >
        {{ product.title }}
      </p>

      <p class="mt-1 mb-1 red--text text-h5 font-weight-bold">
        ${{ product.price }}
      </p>

      <v-btn
        color="red darken-3"
        class="white--text"
        dense
        block
        depressed
        @click="addToCart(product)"
        >Agregar al carrito</v-btn
      >
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ItemComponent",

  props: {
    product: Object,
  },
  data: () => ({}),
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
  },
  methods: {
    lookProduct(id) {
      this.$router.push({ name: "Product", params: { id: id } });
    },

    addToCart(product) {
      this.$store.dispatch("cart/addProduct", product);
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}

.linkText {
  cursor: pointer;
}

.linkText:hover {
  color: red !important;
}
</style>
