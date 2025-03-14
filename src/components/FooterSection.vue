<template>
  <v-sheet class="pa-4" color="#B9323E" width="100vw" height="fit-content">
    <v-container>
      <p class="text-h6 mb-0 white--text font-weight-bold">Ubicación</p>
      <div class="d-flex">
        <v-col cols="6" class="d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14078.853387250201!2d-110.70039277487065!3d28.09428541540114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c9154384acc2df%3A0xb53456501cb019ba!2zRmVycmV0ZXLDrWEgRHVyw6Fu!5e0!3m2!1ses-419!2smx!4v1741640818682!5m2!1ses-419!2smx"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div>
            <p class="font-weight-bold white--text ml-2">Ferretaría Durán</p>
            <p class="white--text ml-2">
              SON 85, 85535 José María Morelos y Pavón, Son.
            </p>
          </div>
        </v-col>

        <v-col cols="3">
          <p class="white--text font-weight-bold">Acerca de</p>

          <p class="white--text mb-1">Sobre nosotros</p>
          <p class="white--text mb-0">Ayuda</p>
        </v-col>

        <v-col cols="3">
          <p class="white--text font-weight-bold">Contacto</p>

          <div class="d-flex align-center mb-1">
            <v-icon color="white">fa-brands fa-square-facebook</v-icon>
            <p class="white--text mb-0 ml-2">Facebook.com/FerreteriaDuran</p>
          </div>

          <div class="d-flex align-center mb-1">
            <v-icon color="white">fa-brands fa-square-instagram</v-icon>
            <p class="white--text mb-0 ml-2">Instagram.com/FerreteriaDuran</p>
          </div>

          <div class="d-flex align-center mb-1">
            <v-icon color="white">fa-solid fa-envelope</v-icon>
            <p class="white--text mb-0 ml-2">ferreteriaduran@gmail.com</p>
          </div>

          <div class="d-flex align-center mb-1">
            <v-icon color="white">fa-solid fa-phone</v-icon>
            <p class="white--text mb-0 ml-2">(622) 222-2222</p>
          </div>
        </v-col>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "FooterSection",
  data: () => ({}),
};
</script>
