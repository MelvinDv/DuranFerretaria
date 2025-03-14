<template>
  <v-container>
    <v-text-field
      label="Nombre Completo"
      outlined
      solo
      flat
      color="red"
      background-color="#f1f1f1"
    ></v-text-field>

    <v-row>
      <v-col>
        <v-text-field
          label="Correo electronico"
          outlined
          flat
          color="red"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field label="Teléfono" outlined flat color="red"></v-text-field>
      </v-col>
    </v-row>

    <v-checkbox color="red" label="Recoger en tienda"></v-checkbox>

    <v-row>
      <v-col>
        <v-autocomplete label="País" outlined flat color="red"></v-autocomplete>
      </v-col>

      <v-col>
        <v-text-field
          label="Código Postal"
          outlined
          flat
          color="red"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-autocomplete
          label="Estado"
          outlined
          flat
          color="red"
        ></v-autocomplete>
      </v-col>

      <v-col>
        <v-text-field label="Ciudad" outlined flat color="red"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field label="Colonia" outlined flat color="red"></v-text-field>
      </v-col>

      <v-col>
        <v-text-field label="Calle" outlined flat color="red"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field label="Número" outlined flat color="red"></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          label="Referencia"
          outlined
          flat
          color="red"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PersonalStep",

  data: () => ({}),
  methods: {},
};
</script>

<style>
.v-input.v-input--outlined .v-input__control {
  border-color: green !important;
}
</style>
