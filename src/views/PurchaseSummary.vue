<template>
  <v-container>
    <p class="text-h6">Resumen</p>

    <div class="mb-2 d-flex align-center">
      <p class="mb-0 grey--text text--darken-4">{{ cart.length }} Productos</p>
      <v-btn
        class="mb-0 ml-2 red--text text--darken-4"
        text
        dense
        :disabled="cart.length == 0"
        @click="cleanCart()"
        >Vaciar carrito</v-btn
      >
    </div>

    <v-row>
      <v-col cols="9">
        <div v-if="cart.length > 0" v-for="product in cart" :key="product.id">
          <CardSmallProductComponent class="mb-2" :product="product" />
        </div>

        <div v-if="cart.length == 0">
          <p
            class="mb-0 text-center font-weight-medium text-body-1 grey--text text--darken-4"
          >
            Carrito de compras vacio.
          </p>
          <p class="mb-0 text-center text-body-2 grey--text text--darken-2">
            Los productos que agregues al carrito los podrás visualizar aquí.
          </p>
        </div>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col cols="3">
        <div class="my-2 d-flex align-center justify-space-between">
          <span class="text-h6 grey--text text--darken-4">Subtotal:</span>
          <span class="text-h6 red--text">${{ sum }}</span>
        </div>

        <v-divider></v-divider>

        <v-btn
          class="mt-2 white--text"
          block
          depressed
          dense
          color="red darken-3"
          :disabled="cart.length == 0"
          >Proceder al pago</v-btn
        >
      </v-col>
    </v-row>

    <ForYouSection />
  </v-container>
</template>

<script>
import CardSmallProductComponent from "../components/CardSmallProductComponent.vue";
import ForYouSection from "../components/homeSections/ForYouSection.vue";

export default {
  name: "PurchaseSummary",

  components: {
    CardSmallProductComponent,
    ForYouSection,
  },
  data: () => ({}),
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },

    sum() {
      return this.cart.reduce((acc, val) => acc + val.price * val.selected, 0);
    },
  },
  methods: {
    cleanCart() {
      this.$store.dispatch("cart/cleanCart");
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
