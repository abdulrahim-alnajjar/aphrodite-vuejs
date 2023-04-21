<template>
  <div class="nav-menu">
    <ul class="pages-links">
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/contact">contact</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
    <ul class="categores">
      <li><a href="#">fasion</a></li>
      <li><a href="#">sports</a></li>
      <li><a href="#">food</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeaderNav",
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.nav-menu {
  width: 100%;
  padding: 0.5rem;
  display: none;
  flex-wrap: wrap;
  background-color: $d-gray;
  box-shadow: 0px 0px 10px black;
  &.open {
    display: flex;
  }
  @media ($md) {
    position: absolute;
    top: calc(100% + 15px);
    background-color: $d-gray;
    &::before {
      @include arow(10px, bottom, 17px, -18px, $d-gray); // Direction
    }
  }
  & > * {
    width: 25%;
  }
  @media ($max-sm) {
    & > * {
      width: 100%;
    }
  }
  ul {
    padding: 0.5rem;
    li {
      padding: 0.25rem 1rem;
      font-weight: bold;
    }
  }
}
</style>
