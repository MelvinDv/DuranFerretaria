<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <p class="mb-0 font-weight-bold grey--text text--darken-4">
          1. Información Personal
        </p>
      </v-col>

      <v-col cols="4">
        <p class="mb-0">Lorem Ipsum</p>
        <p class="mb-0">Lorem Ipsum</p>
        <p class="mb-0">Lorem Ipsum</p>
        <p class="mb-0">Lorem Ipsum</p>
      </v-col>

      <v-col cols="2">
        <v-btn v-if="false" color="red darken-4" @click="stepper = 1" text dense
          >Modificar</v-btn
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <p class="mb-0 font-weight-bold grey--text text--darken-4">
          2. Método de pago
        </p>
      </v-col>

      <v-col cols="4">
        <p class="mb-0">Tarjeta con terminación</p>
        <p class="mb-0">Expiración</p>
        <p class="mb-0">Pago a meses no disponible.</p>
      </v-col>

      <v-col cols="2">
        <v-btn v-if="false" color="red darken-4" text dense>Modificar</v-btn>
      </v-col>
    </v-row>

    <v-divider class="mt-4"></v-divider>
  </v-container>
</template>

<script>
export default {
  name: "Summary",

  data: () => ({}),
};
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
