<template>
  <v-container>
    <p class="text-h6 grey--text text--darken-4">
      Nuestras recomendaciones para ti
    </p>

    <vueper-slides
      :touchable="false"
      class="no-shadow"
      infinite
      slide-multiple
      :arrows="true"
      :dots="true"
      fixed-height="390px"
      :breakpoints="{
        700: { visibleSlides: 2 },
        958: { visibleSlides: 3 },
        1263: { visibleSlides: 4 },
        1904: { visibleSlides: 5 },
        2000: { visibleSlides: 7 },
      }"
    >
      <vueper-slide class="pa-2" v-for="item in favProducts" :key="item.id">
        <template #content>
          <ItemComponent :product="item" />
        </template>
      </vueper-slide>
    </vueper-slides>
  </v-container>
</template>

<script>
import ItemComponent from "../ItemComponent.vue";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ForYouComponent",

  components: {
    ItemComponent,
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    favProducts: [],
  }),
  mounted() {
    this.getFavProducts();
  },
  methods: {
    getFavProducts() {
      this.favProducts = [
        {
          id: 1,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 2,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 3,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 4,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 5,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 6,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 7,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 8,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
        {
          id: 9,
          img: "",
          brand: "Ryobi",
          title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
          sku: "195539",
          price: 2098.0,
          quantity: 8,
        },
      ];
    },
  },
};
</script>

<style scoped>
.vueperslides__bullet {
  margin: 0.3em 0.6em !important;
}

.vueperslides--fixed-height.vueperslides--bullets-outside {
  margin-bottom: 1em !important;
}

.vueperslides__slide {
  cursor: default;
}
</style>
