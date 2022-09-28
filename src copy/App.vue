<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroSection from "./components/HeroSection.vue";
// import CategoriesSection from "./components/CategoriesSection.vue";
import FoodItemsSection from "./components/FoodItemsSection.vue";
import PartnerAndMedia from "./components/PartnerAndMedia.vue";
import DownloadAppSection from "./components/DownloadAppSection.vue";
import DownloadBottomSection from "./components/DownloadBottomSection.vue";
import FooterSection from "./components/FooterSection.vue";
import PreorderModal from "./components/PreorderModal.vue";
import FilterModal from "./components/FilterModal.vue";
import MobileLoader from "./components/MobileLoader.vue";
import MobileFooterCss from "./components/MobileFooterCss.vue";
// let datas = {};

// getCategories();
// console.log(data.status, await data.categories);
</script>

<template>
  <HeaderComponent />
  <HeroSection />
  <CategoriesSection />
  <FoodItemsSection />
  <PartnerAndMedia />
  <DownloadAppSection />
  <DownloadBottomSection />
  <FooterSection />
  <PreorderModal />
  <FilterModal />
  <MobileLoader />
  <MobileFooterCss />

  <!-- <div class="" v-if="Object.keys(datas).length">
    <div class="" v-for="(data, i) in datas.value.categories" :key="i">
      {{ data.category_name }}
    </div>
  </div>
  <div class="" v-else>kk</div> -->
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
