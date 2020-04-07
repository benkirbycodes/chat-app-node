<template>
  <div class="navbar">
    <button id="logout-button" @click="logout">Logout</button>
    <div id="nav-title">
      <h1>Chat-App</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
#logout-button {
  align-self: left;
  height: 70%;
  border-radius: 4px;
}
#nav-title {
  margin: auto;
}
</style>