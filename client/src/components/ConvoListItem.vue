<template>
  <div class="convo-list-item-frame">
    <router-link :to="{name: 'convo', params: {convoId: convoData._id}}">
      <div class="convo-list-item">
        <h4 class="convo-title">{{convoData.title}}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "convoListItem",
  props: ["convoData"]
};
</script>

<style>
.convo-list-item-frame {
  width: 20%;
  height: 20%;
  border: 1px solid lightgray;
  margin: 1%;
  border-radius: 4px;
}
.convo-list-item {
  width: 100%;
  height: 100%;
  display: flex;
}
.convo-title {
  margin: auto;
}
</style>