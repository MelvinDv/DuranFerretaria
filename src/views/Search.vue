<template>
  <div>
    <BannerComponent />

    <v-container>
      <v-row v-if="result != null">
        <v-col lg="3" md="3" sm="6">
          <p class="text-h6 grey--text text--darken-4 mb-1">Filtros</p>

          <div>
            <p class="mb-0 grey--text text--darken-3">Precio</p>

            <p class="mb-0 grey--text text--darken-3 font-weight-medium">
              ${{ range[0] }} - ${{ range[1] }}
            </p>

            <v-range-slider
              v-model="range"
              track-color="red lighten-4"
              color="red"
              :max="max"
              :min="min"
            ></v-range-slider>
          </div>

          <div class="mb-6">
            <p class="mb-0 grey--text text--darken-3">Marca</p>

            <div v-for="brand in result?.brands" :key="brand.id">
              <v-checkbox
                v-model="selectedBrands"
                :value="brand.title"
                color="red"
                hide-details
                dense
                :label="`${brand.title} (${brand.total})`"
              ></v-checkbox>
            </div>
          </div>

          <v-btn
            block
            depressed
            dense
            color="red"
            class="white--text"
            @click="applyFilters()"
            >Aplicar filtros</v-btn
          >

          <v-btn
            block
            depressed
            dense
            color="grey lighten-1"
            class="white--text mt-2"
            @click="clearFilters()"
            >Limpiar filtros</v-btn
          >
        </v-col>

        <v-col lg="6" md="6" sm="6">
          <div class="d-flex align-center">
            <p class="mb-0 grey--text text--darken-4 mr-2 text-h4">
              {{ search }}
            </p>

            <v-chip dense>{{ result?.totalProducts }} Resultados</v-chip>
          </div>

          <div class="d-flex">
            <v-chip
              class="mr-1 mb-1"
              v-for="(filter, i) in selectedFilters"
              :key="i"
            >
              {{ filter }}

              <v-btn
                @click="removeFilter(filter, i)"
                class="ml-1"
                icon
                small
                dense
                depressed
              >
                <v-icon small>fa-solid fa-circle-xmark</v-icon>
              </v-btn>
            </v-chip>
          </div>

          <div v-for="result in result?.products" :key="result.id">
            <CardProductComponent class="my-4" :product="result" />
          </div>
        </v-col>

        <v-col
          v-if="!$vuetify.breakpoint.mdAndDown"
          lg="3"
          md="0"
          sm="0"
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BannerComponent from "../components/homeSections/BannerComponent.vue";
import CardProductComponent from "../components/CardProductComponent.vue";

export default {
  name: "Search",
  components: {
    BannerComponent,
    CardProductComponent,
  },

  data: () => ({
    search: "Taladro",
    result: null,
    range: [0, 0],
    min: 0,
    max: 0,
    selectedBrands: [],
    selectedFilters: [],
  }),

  mounted() {
    this.getResults();
  },

  methods: {
    getResults() {
      this.result = {
        totalProducts: 9,
        highPrice: 2098.0,
        brands: [
          {
            id: 1,
            title: "Ryobi",
            total: 9,
          },
          {
            id: 2,
            title: "DeWalt",
            total: 0,
          },
        ],
        products: [
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
        ],
      };

      this.max = this.result.highPrice;
      this.range[1] = this.result.highPrice;
    },

    applyFilters() {
      this.selectedFilters = [...this.selectedBrands];

      if (this.range[0] != 0 || this.range[1] != this.result.highPrice) {
        let rangeFilters = `${this.range[0]}-${this.range[1]}`;
        this.selectedFilters.push(rangeFilters);
      }
    },

    clearFilters() {
      this.selectedBrands = [];

      this.max = this.result.highPrice;
      this.min = 0;

      this.range = [0, this.result.highPrice];

      this.selectedFilters = [];
    },

    removeFilter(filter, index) {
      this.selectedFilters.splice(index, 1);

      let indexFind = this.selectedBrands.indexOf(filter);
      if (indexFind !== -1) {
        this.selectedBrands.splice(index, 1);
      }

      let range = `${this.range[0]}-${this.range[1]}`;
      if (range == filter) {
        this.range = [0, this.result.highPrice];
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
