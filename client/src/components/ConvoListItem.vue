<template>
  <div class="convo-list-item-frame">
    <router-link :to="{name: 'convo', params: {convoId: convoData._id}}">
      <div class="convo-list-item">{{convoData.title}}</div>
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
  width: 98%;
  height: 10%;
  border: 1px solid lightgray;
  margin: 1%;
  border-radius: 4px;
}
</style>