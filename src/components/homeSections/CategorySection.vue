<template>
  <v-container>
    <p class="text-h6 grey--text text--darken-4">Buscar por categoría</p>

    <div class="d-flex">
      <div v-for="category in categories" :key="category.id">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="
              hover
                ? 'pa-5 mr-4 d-flex align-center justify-center hoverCard'
                : 'pa-5 mr-4 d-flex align-center justify-center'
            "
            :color="hover ? 'red' : 'white'"
            width="120"
            height="120"
          >
            <div class="d-flex flex-column align-center justify-center">
              <v-icon :color="hover ? 'white' : 'grey darken-2'" x-large>{{
                category.icon
              }}</v-icon>
              <span
                :class="
                  hover ? 'white--text mt-2' : 'grey--text text--darken-2 mt-2'
                "
                >{{ category.title }}</span
              >
            </div>
          </v-card>
        </v-hover>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CategorySection",

  data: () => ({
    categories: [],
  }),
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.categories = [
        {
          id: 1,
          icon: "fa-solid fa-door-closed",
          title: "Puertas",
        },
        {
          id: 2,
          icon: "fa-solid fa-toilet",
          title: "Plomeria",
        },
      ];
    },
  },
};
</script>

<style scoped>
.hoverCard {
  cursor: pointer;
}
</style>
