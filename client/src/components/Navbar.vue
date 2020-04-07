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
  },
  components: {}
};
</script>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: thistle;
  height: 10%;
  margin-bottom: 1%;
}
#logout-button {
  align-self: left;
  height: 70%;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 10px;
}
#nav-title {
  margin: auto;
}
#new-convo-button {
  align-self: right;
  height: 70%;
  border-radius: 4px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>