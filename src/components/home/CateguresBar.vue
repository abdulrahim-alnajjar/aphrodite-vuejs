<template>
  <div class="cate-bar">
    <div class="container">
      <h2>see what's trending</h2>
      <svg
        @click="openCatsMenu()"
        class="filter icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
        />
      </svg>
      <ul class="categores">
        <li><a href="#">fasion</a></li>
        <li><a href="#">sports</a></li>
        <li><a href="#">food</a></li>
        <li><a href="#">health</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateguresBar",
  methods: {
    openCatsMenu: function () {
      document.querySelector(".cate-bar .categores").classList.toggle("open");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.cate-bar {
  border-bottom: 1px solid $l-gray;
  .container {
    @extend %flex-space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem 0;
    margin: 0 auto;
    h2 {
      color: $white;
      @media ($max-sm) {
        font-size: 1rem;
      }
    }
    ul.categores {
      &.open {
        display: block;
      }
      @media ($max-sm) {
        width: 100%;
        padding-top: 0.5rem;
        display: none;
      }
      li {
        padding: 0.25rem;
        font-weight: bold;
        @media ($md) {
          display: inline-block;
        }
      }
    }
    .filter.icon {
      fill: $l-gray;
      width: 20px;
      @media ($md) {
        display: none;
      }
    }
  }
}
</style>
