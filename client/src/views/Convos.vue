<template>
  <div class="convos">
    <navbar />
    <h3 id="convos-title-text">Your Conversations</h3>
    <div class="convos-frame"></div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: "convos",
  components: {
    navbar
  }
};
</script>

<style>
.convos {
  height: 100%;
  background-color: seashell;
  display: flex;
  flex-direction: column;
}
.convos-frame {
  height: 75%;
  width: 85%;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: auto;
}
#convos-title-text {
  margin: auto;
}
</style>