<template>
  <v-card class="rounded" color="white">
    <v-row align="center" no-gutters>
      <v-col cols="4" class="pa-2">
        <v-sheet
          class="rounded"
          color="grey"
          height="120"
          width="100%"
        ></v-sheet>
      </v-col>

      <v-col cols="8" class="pa-2 pl-0">
        <div class="d-flex justify-space-between align-center">
          <p
            class="mb-0 grey--text text--darken-3 font-weight-bold"
            style="font-size: 12px"
          >
            {{ product?.brand }}
          </p>

          <v-btn
            v-if="editable"
            @click="deleteProduct(product?.id)"
            class="ml-1"
            icon
            small
            dense
            depressed
          >
            <v-icon small>fa-solid fa-circle-xmark</v-icon>
          </v-btn>
        </div>
        <p class="mb-0 grey--text text--darken-4" style="font-size: 14px">
          {{ product?.title }}
        </p>
        <p class="mb-0 grey--text text--darken-1" style="font-size: 12px">
          SKU: {{ product?.sku }}
        </p>

        <!-- OPTIONS -->
        <div class="d-flex align-center justify-space-between">
          <p class="mb-0 red--text text-subtitle-1 font-weight-medium">
            ${{ product?.price }}
          </p>

          <div v-if="editable" class="d-flex align-center">
            <v-btn
              class="rounded ml-2"
              x-small
              depressed
              color="grey lighten-2"
              :disabled="product.selected == 1"
              @click="reduceProduct(product?.id)"
            >
              <v-icon color="grey darken-3" small>fa-solid fa-minus</v-icon>
            </v-btn>

            <v-sheet
              class="px-4 py-0 mx-1 rounded text-subtitle-2"
              color="grey lighten-2"
            >
              {{ product?.selected }}
            </v-sheet>

            <v-btn
              class="rounded"
              x-small
              depressed
              color="red darken-3"
              :disabled="product.quantity == product.selected"
              @click="addUpProduct(product)"
            >
              <v-icon color="white" small>fa-solid fa-plus</v-icon>
            </v-btn>
          </div>

          <div v-if="!editable" class="d-flex align-center">
            <p class="mb-0 grey--text text--darken-1">
              Cantidad: {{ product.selected }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CardSmallProductComponent",

  props: {
    product: Object,
    editable: Boolean,
  },
  data: () => ({}),
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
  },
  methods: {
    reduceProduct(productId) {
      this.$store.dispatch("cart/reduceProduct", productId);
    },

    addUpProduct(product) {
      this.$store.dispatch("cart/addProduct", product);
    },

    deleteProduct(productId) {
      this.$store.dispatch("cart/deleteProduct", productId);
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
