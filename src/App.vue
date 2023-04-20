<template>
  <app-header />
  <router-view class="main-view" />
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "@/components/footer/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
#app {
  .main-view {
    // margin-top: 60px;
  }
}
</style>
