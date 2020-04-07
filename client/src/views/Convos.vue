<template>
  <div class="convos">
    <navbar />
    <h3 id="convos-title-text">
      Your Conversations
      <a class="fa fa-plus" @click="showModal"></a>
    </h3>
    <div class="convos-frame"></div>

    <!-- Hidden Modal -->
    <div class="modal" id="newConvoModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Start A New Conversation</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createNewConvo">
              <label for="title">
                Title
                <input
                  v-model="newConvo.title"
                  type="text"
                  name="title"
                  placeholder="Add a title "
                />
              </label>
              <label for="email">
                Enter an email
                <input v-model="newConvo.memberEmail" name="email" type="email" />
              </label>
              <button type="submit" class>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";

export default {
  name: "convos",
  data() {
    return {
      newConvo: {
        title: "",
        memberEmail: ""
      }
    };
  },
  methods: {
    showModal() {
      $("#newConvoModal").modal("show");
    },
    hideModal() {
      $("#newConvoModal").modal("hide");
    },
    createNewConvo() {
      let newConvo = { ...this.newConvo };
      this.$store.dispatch("createConvo", newConvo);
      this.hideModal();
      this.newConvo = {
        title: "",
        memberEmail: ""
      };
    }
  },
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