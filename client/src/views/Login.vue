<template>
  <div class="login">
    <div class="title">
      <h1 id="login-title-text">Welcome To Chat-App!</h1>
    </div>
    <div>
      <form v-if="loginForm" @submit.prevent="loginUser">
        <input type="email" v-model="creds.email" placeholder="email" />
        <br />
        <br />
        <input type="password" v-model="creds.password" placeholder="password" />
        <br />
        <button type="submit">Login</button>
      </form>

      <form v-else @submit.prevent="register">
        <input type="text" v-model="newUser.name" placeholder="name" />

        <br />
        <br />
        <input type="email" v-model="newUser.email" placeholder="email" />
        <br />
        <br />
        <input type="password" v-model="newUser.password" placeholder="password" />
        <br />
        <button type="submit">Create Account</button>
      </form>
      <div class="action" @click="loginForm = !loginForm">
        <p class="account" v-if="loginForm">No account? Click here to Register</p>
        <p class="account" v-else>Already have an account? Click here to Login</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "Login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        name: "",
        password: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "Convos" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
.login {
  background-color: pink;
  height: 100%;
}
#login-title-text {
  margin-top: 0px;
}
</style>
