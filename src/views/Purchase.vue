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

    <p class="text-h6">Resumen</p>

    <v-row>
      <v-col cols="8">
        <v-stepper class="transparent" flat v-model="stepper">
          <v-stepper-header class="elevation-0">
            <v-stepper-step color="red" :complete="stepper > 1" step="1">
              Información personal
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="red" :complete="stepper > 2" step="2">
              Método de pago
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="red" step="3"> Resumen </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <PersonalStep />
            </v-stepper-content>

            <v-stepper-content step="2">
              <CheckoutStep />
            </v-stepper-content>

            <v-stepper-content step="3">
              <SummaryStep />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>

        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column">
            <p v-if="stepper == 3" class="mb-1">
              ¿Cuentas con un código de descuento?
            </p>
            <div v-if="stepper == 3" class="d-flex">
              <v-text-field
                label="Código de descuento"
                class="rounded"
                color="red"
                outlined
                dense
              ></v-text-field>

              <v-btn
                class="ml-2 rounded"
                color="red darken-2"
                outlined
                depressed
                >Aplicar</v-btn
              >
            </div>
          </div>

          <div class="d-flex justify-end">
            <v-btn
              v-if="stepper > 1"
              @click="stepper -= 1"
              color="grey darken-1"
              class="white--text mr-2"
              depressed
              >Volver</v-btn
            >

            <v-btn
              @click="stepper += 1"
              color="red darken-2"
              class="white--text"
              depressed
              >{{ stepper == 3 ? "Confirmar y pagar" : "Siguiente" }}</v-btn
            >
          </div>
        </div>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col cols="4">
        <p class="text-h6 mb-0 grey--text text--darken-4">Carrito</p>
        <p class="grey--text text--darken-1">{{ cart.length }} Productos</p>

        <v-divider class="mb-4"></v-divider>

        <div v-if="cart.length > 0" v-for="product in cart" :key="product.id">
          <CardSmallProductComponent
            class="mb-2"
            :product="product"
            :editable="false"
          />
        </div>

        <v-divider class="mt-4 mb-4"></v-divider>

        <div class="d-flex justify-space-between align-center">
          <p class="mb-0 text-body-2">Subtotal:</p>
          <p class="mb-0 text-subtitle-1 red--text --textdarken-4">
            ${{ sum }}
          </p>
        </div>

        <div class="d-flex justify-space-between align-center">
          <p class="mb-0 text-body-2">Envio:</p>
          <p class="mb-0 text-subtitle-1 red--text --textdarken-4">$150</p>
        </div>

        <div class="d-flex justify-space-between align-center">
          <p class="mb-0 text-h6">Total (IVA Incluido):</p>
          <p class="mb-0 text-h6 red--text --textdarken-4">${{ sum }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonalStep from "../components/purchaseSections/PersonalStep.vue";
import CheckoutStep from "../components/purchaseSections/CheckoutStep.vue";
import CardSmallProductComponent from "../components/CardSmallProductComponent.vue";
import SummaryStep from "../components/purchaseSections/SummaryStep.vue";

export default {
  name: "Purchase",

  components: {
    PersonalStep,
    CheckoutStep,
    CardSmallProductComponent,
    SummaryStep,
  },
  data: () => ({
    stepper: 1,
  }),
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },

    sum() {
      return this.cart.reduce((acc, val) => acc + val.price * val.selected, 0);
    },
  },
  methods: {
    back() {
      this.$router.push({ name: "PurchaseSummary" });
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
