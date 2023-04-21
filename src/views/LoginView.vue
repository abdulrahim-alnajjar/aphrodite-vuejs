<template>
  <main>
    <div @submit.prevent="" class="container">
      <form class="login-form">
        <h2 class="title">Login to your Account</h2>
        <input v-model="user" type="text" placeholder="Username Or Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input class="submit" type="submit" value="Submit" />
        <span class="switch">
          Don't have an account?
          <span class="sign_toggle"
            ><router-link to="/sign-up">Sign Up</router-link></span
          ></span
        >
        <div class="separator">
          <hr class="line" />
          <span>Or</span>
          <hr class="line" />
        </div>

        <button title="Sign In" type="submit" class="sign-in_ggl">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            />
          </svg>
          <span>Sign In with Google</span>
        </button>
        <button title="Sign In" type="submit" class="sign-in_apl">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            />
          </svg>
          <span>Sign In with Apple</span>
        </button>
        <p class="note">Terms of use &amp; Conditions</p>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log("ggos");
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
.login-form,
.sign-form {
  width: 95%;
  min-height: 60vh;
  padding: 1rem;
  margin: 3rem auto;
  border-radius: $border-radius;
  box-shadow: 2px 2px 15px $main-color;
  @media ($md) {
    width: 70%;
    padding: 3rem;
  }
  .title {
    text-align: center;
    color: $white;
    margin: 1rem 0 3rem 0;
  }
  input,
  .sign-in_ggl,
  .sign-in_apl {
    // text-align: center;
    font-size: 1rem;
    display: block;
    width: 90%;
    padding: 1rem;
    margin: 1.5rem auto;
    border-radius: $border-radius;
    color: $white;
  }
  input:not([type="submit"]) {
    box-shadow: inset 2px 2px 15px rgba(0, 0, 0, 0.5);
  }
  .submit {
    font-weight: bold;
    cursor: pointer;
    background: $main-color;
    transition: 0.5s;
    @media ($md) {
      &:hover {
        box-shadow: inset 2px 2px 15px rgba(0, 0, 0, 0.5);
      }
    }
  }
  // switch to sign up
  .switch {
    font-size: 1rem;
    display: block;
    text-align: center;
    margin: 1.5rem auto;
    .sign_toggle {
      font-weight: bold;
      cursor: pointer;
      color: $white;
    }
  }
  // separator
  .separator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #8b8e98;
    .line {
      width: 100%;
      height: 1px;
      border: 0;
      background-color: #e8e8e8;
    }
  }
  // Sign In ways
  .sign-in_ggl {
    border: 2px solid $l-gray;
    color: $white;
    background: transparent;
  }
  .sign-in_apl {
    background: #000;
  }
  .sign-in_ggl,
  .sign-in_apl {
    cursor: pointer;
    .icon {
      width: 16px;
      fill: $white;
      margin-right: 0.5rem;
    }
  }
  .note {
    text-align: center;
    margin: 1rem;
  }
}
</style>
