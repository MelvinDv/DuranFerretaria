<template>
  <v-container>
    <p class="text-h6 grey--text text--darken-4">Métodos de pago</p>

    <div class="d-flex">
      <v-card
        class="rounded-circle pa-4 mr-2 d-flex flex-column align-center justify-center"
        width="150"
        height="150"
        v-for="method in methods"
        :key="method.id"
      >
        <v-icon x-large>{{ method.icon }}</v-icon>
        <p class="mb-0 mt-1 grey--text text--darken-2">{{ method.text }}</p>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MethodsSection",

  data: () => ({
    methods: [
      {
        id: 1,
        icon: "fa-solid fa-credit-card",
        text: "Crédito y débito",
      },
      {
        id: 2,
        icon: "fa-solid fa-money-bill-1-wave",
        text: "Efectivo (OXXO)",
      },
      {
        id: 3,
        icon: "fa-solid fa-store",
        text: "Tienda",
      },
    ],
  }),
};
</script>
