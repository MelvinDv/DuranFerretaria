<template>
  <v-container>
    <v-checkbox
      v-model="payInStore"
      class="mt-0"
      color="red"
      label="Pagar en tienda"
    ></v-checkbox>

    <div v-if="!payInStore">
      <v-item-group class="mb-8" v-model="optionToPay" mandatory>
        <v-row>
          <v-col cols="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :style="{
                  border: active ? '2px solid red' : '2px solid #BDBDBD',
                  backgroundColor: '#FAFAFA',
                }"
                class="d-flex align-center"
                height="80"
                flat
                @click="toggle"
              >
                <p
                  class="grey--text text--darken-1 mb-0 flex-grow-1 text-center"
                >
                  OXXO
                </p>
              </v-card>
            </v-item>
          </v-col>

          <v-col cols="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :style="{
                  border: active ? '2px solid red' : '2px solid #BDBDBD',
                  backgroundColor: '#FAFAFA',
                }"
                class="d-flex align-center"
                height="80"
                flat
                @click="toggle"
              >
                <p
                  class="grey--text text--darken-1 mb-0 flex-grow-1 text-center"
                >
                  Tarjeta
                </p>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>

      <v-text-field
        label="Número de tarjeta"
        outlined
        flat
        color="red"
        v-model="cardNumber"
        v-mask="'#### #### #### ####'"
        placeholder="1234 1234 1234 1234"
      ></v-text-field>

      <v-row>
        <v-col>
          <v-text-field
            v-model="dateCard"
            v-mask="'##/##'"
            label="Fecha de caducidad"
            placeholder="MM/YYYY"
            outlined
            flat
            color="red"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="cvc"
            v-mask="'###'"
            type="password"
            label="Código de seguridad"
            outlined
            flat
            color="red"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js/pure";

export default {
  name: "CheckoutStep",

  data: () => ({
    stripe: null,
    cardElement: null,

    payInStore: false,
    optionToPay: [],

    cardNumber: "",
    dateCard: "",
    cvc: "",
  }),

  mounted() {
    window.checkout = this;
  },
  methods: {
    async checkout() {
      this.stripe = await loadStripe(
        "pk_test_51R2bnnFxMiSWBlkrJ6KokiKR9lo9dXEm1Qa1dAK8ABk9CgyloWX1IAHSNgRx7Fh9hgM7LrD71VzZg0ogO8fzIyVL00KcDQ6PQo"
      );

      // Crea un elemento de tarjeta y monta en el contenedor
      const elements = this.stripe.elements();
      console.log("ELEMENTOSSS:", elements);
      this.cardElement = elements.create("card");
      this.cardElement.mount("#card-element");
    },
  },
};
</script>

<style scoped></style>
