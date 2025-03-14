<template>
  <form id="payment-form">
    <div id="card-element">
      <!-- Stripe Elements se insertará aquí -->
    </div>
    <button>Submit Payment</button>
  </form>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js/pure";

export default {
  name: "CheckoutStep",

  data: () => ({
    stripe: null,
    cardElement: null,
  }),

  mounted() {
    this.checkout();
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
