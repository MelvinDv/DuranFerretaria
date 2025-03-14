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
              Name of step 1
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="red" :complete="stepper > 2" step="2">
              Name of step 2
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="red" step="3">
              Name of step 3
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <PersonalStep />
            </v-stepper-content>

            <v-stepper-content step="2">
              <CheckoutStep />
            </v-stepper-content>

            <v-stepper-content step="3"> </v-stepper-content>
          </v-stepper-items>
        </v-stepper>

        <div class="d-flex justify-end">
          <v-btn
            v-if="stepper > 1"
            @click="stepper -= 1"
            color="grey darken-1"
            class="white--text mr-2"
            depressed
            >Volver</v-btn
          >

          <v-btn @click="stepper += 1" color="red" class="white--text" depressed
            >Siguiente</v-btn
          >
        </div>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col cols="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonalStep from "../components/purchaseSections/PersonalStep.vue";
import CheckoutStep from "../components/purchaseSections/CheckoutStep.vue";

export default {
  name: "Purchase",

  components: {
    PersonalStep,
    CheckoutStep,
  },
  data: () => ({
    stepper: 1,
  }),
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
