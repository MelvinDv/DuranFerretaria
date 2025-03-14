<template>
  <v-container>
    <div class="d-flex align-center">
      <v-btn depressed class="mb-2" color="transparent" @click="back()">
        <v-icon small color="grey darken-1" class="mr-2">
          fa-solid fa-angle-left
        </v-icon>
        <span class="mb-0 grey--text text--darken-1">Regresar</span>
      </v-btn>
    </div>

    <v-row class="mb-8">
      <v-col cols="5">
        <v-sheet
          class="elevation-1 rounded"
          color="white"
          width="100%"
          height="100%"
        ></v-sheet>
      </v-col>

      <v-col cols="7">
        <p
          class="font-weight-bold grey--text text--darken-3 text-subtitle-2 mb-0"
        >
          {{ product?.brand }}
        </p>
        <p class="grey--text text--darken-4 text-h6 mb-0">
          {{ product?.title }}
        </p>
        <p
          class="font-weight-medium grey--text text--darken-2 text-subtitle-2 mb-0"
        >
          SKU: {{ product?.sku }}
        </p>
        <p class="text-justify grey--text text--darken-3 mt-2">
          {{ product?.desc }}
        </p>

        <p class="red--text text--darken-3 text-h4 font-weight-bold">
          ${{ product?.price }}
        </p>

        <div class="d-flex align-center">
          <p class="mb-0 grey--text text--darken-4">Cantidad:</p>

          <v-btn
            class="rounded ml-2"
            small
            depressed
            color="grey lighten-2"
            @click="minusQuantity()"
          >
            <v-icon small>fa-solid fa-minus</v-icon>
          </v-btn>

          <v-sheet class="py-1 px-4 mx-1 rounded" color="grey lighten-2">
            {{ quantitySelected }}
          </v-sheet>

          <v-btn
            class="rounded"
            small
            depressed
            color="grey lighten-2"
            @click="plusQuantity()"
          >
            <v-icon small>fa-solid fa-plus</v-icon>
          </v-btn>
        </div>

        <p class="text-body-2 grey--text text--darken-1">
          Contamos con {{ product?.quantity }} disponibles para venta en línea.
        </p>

        <v-btn width="250px" color="red darken-3" class="white--text" depressed
          >Agregar al carrito</v-btn
        >
      </v-col>
    </v-row>

    <MethodsSection />

    <ForYouSection />
  </v-container>
</template>

<script>
import MethodsSection from "../components/homeSections/MethodsSection.vue";
import ForYouSection from "../components/homeSections/ForYouSection.vue";

export default {
  name: "product",

  components: {
    MethodsSection,
    ForYouSection,
  },
  data: () => ({
    product: null,
    quantitySelected: 0,
  }),
  mounted() {
    this.getProductById();

    window.scrollTo(0, 0);
  },
  methods: {
    getProductById() {
      /*
        const productoId = this.$route.params.id; // Obtén el ID de la URL

        try {
        const response = await fetch(`/api/productos/${productoId}`);
        this.producto = await response.json();
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
        */

      this.product = {
        brand: "Ryobi",
        sku: "195539",
        title: 'ONE+ KIT DE TALADRO DESTORNILLADOR DE 1/2" DE 18V',
        desc: 'Expanda su sistema RYOBI 18V ONE+ con el Kit de Taladro/Atornillador de 1/2" 18V. Este taladro/atornillador de 1/2" está equipado con un potente motor que proporciona 515 pulgadas-libras de torque. La caja de cambios de 2 velocidades y el embrague de 24 posiciones le permiten ajustar la salida de torque para controlar la profundidad del tornillo o sujetador. El embrague dentado sin llave de 1/2" proporciona una retención segura de la broca para todas sus necesidades de perforación y conducción. La luz LED incorporada crea visibilidad adicional para todos sus proyectos.',
        price: 2098.0,
        quantity: 8,
      };
    },

    plusQuantity() {
      if (this.quantitySelected < this.product.quantity) {
        this.quantitySelected += 1;
      }
    },

    minusQuantity() {
      if (this.quantitySelected > 0) {
        this.quantitySelected -= 1;
      }
    },

    back() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
