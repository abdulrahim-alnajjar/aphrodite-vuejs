<template>
  <main class="home-page">
    <CateguresBar></CateguresBar>
    <LatestEvents></LatestEvents>
    <WeekEvents></WeekEvents>
    <CelebrityLooks></CelebrityLooks>
  </main>
</template>

<script>
import CateguresBar from "@/components/home/CateguresBar.vue";
import LatestEvents from "@/components/home/LatestEvents.vue";
import WeekEvents from "@/components/home/WeekEvents.vue";
import CelebrityLooks from "@/components/home/CelebrityLooks.vue";
export default {
  name: "HomeView",
  components: {
    CateguresBar,
    LatestEvents,
    WeekEvents,
    CelebrityLooks,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
