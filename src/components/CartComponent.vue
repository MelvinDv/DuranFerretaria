<template>
  <v-navigation-drawer
    v-model="show"
    stateless
    color="grey lighten-4"
    clipped
    right
    fixed
  >
    <div class="px-2" style="margin-top: 72px">
      <p class="mt-2 font-weight-bold grey--text text--darken-4 mb-0">
        Carrito de compras
      </p>

      <p class="text-subtitle-2 mb-4 grey--text text--darken-2">
        {{ cart.length }} Productos
      </p>

      <div v-if="cart.length > 0">
        <div v-for="product in cart" :key="product.id">
          <CardSmallProductComponent class="mb-2" :product="product" />
        </div>

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
          color="grey lighten-1"
          @click="cleanCart()"
          >Vaciar carrito</v-btn
        >

        <v-btn
          class="mt-2 white--text"
          block
          depressed
          dense
          color="red darken-3"
          >Proceder al pago</v-btn
        >

        <p class="mt-2 text-caption text-center grey--text text--darken-1">
          Algunos precios pueden variar al momento de proceder al pago.
        </p>
      </div>

      <!-- EMPTY CART -->
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
    </div>
  </v-navigation-drawer>
</template>

<script>
import CardSmallProductComponent from "../components/CardSmallProductComponent.vue";

export default {
  name: "Cart",

  props: {
    show: Boolean,
  },
  components: {
    CardSmallProductComponent,
  },
  data: () => ({
    totalItems: 0,
  }),
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

.v-navigation-drawer {
  width: 350px !important;
}
</style>
