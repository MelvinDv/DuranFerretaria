<template>
  <v-app>
    <v-app-bar app color="grey darken-4" dark>
      <v-col lg="4" md="3" sm="2">
        <v-img
          src="../src/assets/logoDuran.png"
          max-width="150"
          max-height="100"
        ></v-img>
      </v-col>

      <v-col lg="4" md="6" sm="8">
        <v-text-field
          class="rounded-lg"
          label="¿Qué estas buscando?"
          hide-details
          dense
          filled
          outlined
        ></v-text-field>
      </v-col>

      <v-col lg="4" md="3" sm="2" class="d-flex justify-end">
        <v-badge
          :content="cart.length"
          bottom
          :color="cart.length != 0 ? 'red' : 'transparent'"
          overlap
        >
          <v-icon @click="cartAction()"> fa-solid fa-cart-shopping </v-icon>
        </v-badge>
      </v-col>
    </v-app-bar>

    <CartComponent :show="showCart" />

    <v-main style="background: #fafafa">
      <router-view />
      <FooterSection />
    </v-main>
  </v-app>
</template>

<script>
import FooterSection from "./components/FooterSection.vue";
import CartComponent from "./components/CartComponent.vue";

export default {
  name: "App",

  components: {
    FooterSection,
    CartComponent,
  },
  data: () => ({
    showCart: false,
  }),
  created() {
    this.$store.dispatch("cart/initCart");
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
  },
  methods: {
    cartAction() {
      this.showCart = !this.showCart;
    },
  },
};
</script>
