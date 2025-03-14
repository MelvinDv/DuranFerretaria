<template>
  <v-card
    class="rounded cardHover"
    color="white"
    @click="lookProduct(product?.id)"
  >
    <v-row align="center" no-gutters>
      <v-col cols="2">
        <v-sheet
          class="rounded"
          color="grey"
          height="100"
          width="100%"
        ></v-sheet>
      </v-col>

      <v-col cols="8" class="px-2">
        <p class="mb-0 subtitle-2 grey--text text--darken-3">
          {{ product?.brand }}
        </p>
        <p class="mb-0 grey--text text--darken-4">{{ product?.title }}</p>
        <p class="mb-0 subtitle-2 grey--text text--darken-1">
          SKU {{ product?.sku }}
        </p>
      </v-col>

      <v-col cols="2" class="px-2">
        <p class="mb-0 red--text text-subtitle-1 font-weight-medium">
          ${{ product?.price }}
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CardProduct",

  props: {
    product: Object,
  },
  data: () => ({}),
  methods: {
    lookProduct(id) {
      this.$router.push({ name: "Product", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.cardHover {
  cursor: pointer;
}
</style>
