<template>
  <div class="home">
    <BannerComponent />

    <CategorySection />

    <ForYouSection />

    <NewProducts />

    <MethodsSection />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerComponent from "../components/homeSections/BannerComponent.vue";
import CategorySection from "../components/homeSections/CategorySection.vue";
import ForYouSection from "../components/homeSections/ForYouSection.vue";
import NewProducts from "../components/homeSections/NewProducts.vue";
import MethodsSection from "../components/homeSections/MethodsSection.vue";

export default {
  name: "Home",
  components: {
    BannerComponent,
    CategorySection,
    ForYouSection,
    NewProducts,
    MethodsSection,
  },
};
</script>
