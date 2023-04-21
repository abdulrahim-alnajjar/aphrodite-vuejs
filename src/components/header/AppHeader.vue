<template>
  <header>
    <svg
      @click="toggleNavMenu"
      v-click-away="closeNavMenu"
      class="bars icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        v-show="barsIcon"
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
      <path
        v-show="!barsIcon"
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
    <a class="logo" href="#">Aphrodite</a>
    <form class="search-form">
      <svg
        @click="submitForm($event)"
        class="search-sub icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
      <input type="search" placeholder="Search" name="search" />
    </form>
    <svg
      @click="toggleSearchForm"
      class="search icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
    <div v-if="signed">
      <svg
        class="noti icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
        />
      </svg>
      <svg
        class="user icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
        />
      </svg>
    </div>
    <div v-if="!signed">
      <button class="button">
        <router-link to="/login">Login</router-link>
      </button>
    </div>
    <AppHeaderNav></AppHeaderNav>
    <div class="blure-overlay">
      <svg
        @click="toggleSearchForm"
        class="x-mark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
  </header>
</template>

<script>
import AppHeaderNav from "@/components/header/AppHeaderNav.vue";
import { mixin as VueClickAway } from "vue3-click-away";
export default {
  name: "AppHeader",
  data() {
    return {
      barsIcon: true,
      signed: false,
      navMenuClicked: "gg",
    };
  },
  methods: {
    toggleNavMenu() {
      document.querySelector("header .nav-menu").classList.toggle("open");
      this.barsIcon = !this.barsIcon;
    },
    closeNavMenu(event) {
      if (
        event.target != document.querySelector("header .nav-menu") &&
        !document.querySelector("header .nav-menu").contains(event.target)
      ) {
        document.querySelector("header .nav-menu").classList.remove("open");
        this.barsIcon = true;
      }
    },
    toggleSearchForm() {
      document.querySelector("header .search-form").classList.toggle("open");
      document.querySelector("header .search-form input").focus();
      document.querySelector("header .blure-overlay").classList.toggle("open");
    },
    submitForm() {
      if (document.querySelector("header .search-form input").value)
        document.querySelector("header .search-form").submit();
    },
  },
  components: {
    AppHeaderNav,
  },
  mixins: [VueClickAway],
  mounted() {
    // document.addEventListener("click", () => {
    //   console.log(this.navMenuClicked);
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
header {
  width: 100%;
  max-height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: $d-gray;
  // logo
  .logo {
    @extend %logo;
    @media ($max-sm) {
      font-size: 20px;
    }
  }
  // icons
  .icon {
    width: 16px;
    padding: 20px;
    fill: $l-gray;
    @media ($md) {
      &:hover {
        background-color: $gray;
        fill: $white;
      }
    }
  }
  // search
  .search.icon {
    @media ($md) {
      display: none;
    }
  }
  .search-form {
    display: flex;
    align-items: center;
    border-radius: $border-radius;
    background: $gray;
    overflow: hidden;
    @media ($md) {
      margin: 0 20px;
    }
    @media ($max-sm) {
      display: none;
      width: 90%;
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      z-index: 110;
      &.open {
        display: flex;
      }
    }
    & > * {
      // margin: 10px;
    }
    .search-sub {
      width: 16px;
      padding: 10px;
      fill: $l-gray;
    }
    input {
      flex: 1;
      font-size: 1rem;
      color: $white;
    }
  }
  .button {
  }
  .blure-overlay {
    @media ($max-sm) {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $d-gray;
      z-index: 99;
      &.open {
        display: block;
      }
      .x-mark {
        width: 16px;
        fill: $l-gray;
        margin: 20px;
      }
    }
  }
}
</style>
