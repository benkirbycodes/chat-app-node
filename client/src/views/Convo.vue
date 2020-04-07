<template>
  <div class="convo-frame">
    <navbar />

    <div class="convo">
      <div id="screen-scroll" class="screen-outer-border">
        <div id="insert-messages"></div>
      </div>

      <!-- "Typing" animation -->
      <div class="typing-holder">
        <div v-if="otherTyping" class="typing">
          <span class="circle scaling"></span>
          <span class="circle scaling"></span>
          <span class="circle scaling"></span>
        </div>
      </div>

      <div class="screen-bottom">
        <div id="insert-user-reply" class="user-message">
          <form id="user-reply-form" @submit.prevent="sendMessage">
            <input id="user-reply-input" type="text" v-model="outGoingMessage" />
          </form>
        </div>
        <button v-if="!otherTyping" class="send">
          <span class="button-text">Send</span>
        </button>
        <button v-if="otherTyping" class="send">
          <span class="button-text">Send</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Navbar.vue";
export default {
  name: "Convo",
  data() {
    return {
      outGoingMessage: "",
      otherTyping: false
    };
  },
  methods: {
    sendMessage() {}
  },
  components: {
    navbar
  }
};
</script>

<style>
html {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
}
body {
  display: flex;
  flex-direction: column;
}
.convo-frame {
}
.convo {
  height: 667px;
  width: 375px;
  margin: auto;
  justify-content: flex-start;
  background-color: grey;
  padding-top: 3%;
  border-radius: 4px;
  border: 4px solid lightgray;
}
.screen-outer-border {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  height: 75%;
  width: 95%;
  overflow: scroll;
}
.screen-bottom {
  width: 95%;
  height: 12%;
  display: flex;
  flex-direction: row;
  margin: auto;
}
.user-message {
  width: 87%;
  height: 90%;
  border: 2px solid lightgray;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: white;
  overflow: scroll;
}
.send {
  height: 94%;
  width: 12.5%;
  border-radius: 4px;
  margin-left: 2px;
  background-color: grey;
  border: 2px solid lightgray;
  color: white;
}

.other-frame {
  padding: 4px;
  max-width: 45%;
  border: 1px solid grey;
  border-radius: 10px 10px 10px 0px;
  background-color: white;
  margin: 3px;
  color: black;
}
.user-frame {
  padding: 4px;
  max-width: 45%;
  border: 1px solid grey;
  border-radius: 10px 10px 0px 10px;
  background-color: black;
  margin: 3px;
  color: white;
  align-self: flex-end;
}
#insert-messages {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#user-reply-form {
  width: 100%;
  height: 100%;
}
#user-reply-input {
  width: 100%;
  height: 100%;
}
.reply {
  margin-left: 2px;
}
.typing-holder {
  height: 8%;
  width: 95%;
  margin: auto;
}
.typing {
  display: block;
  width: 60px;
  height: 40px;
  background-color: #bdbdbd;
  margin-left: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle.scaling {
  animation: typing 1000ms ease-in-out infinite;
  animation-delay: 3600ms;
}
.circle {
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #757575;
  margin: 3px;
}
.circle:nth-child(1) {
  animation-delay: 0ms;
}

.circle:nth-child(2) {
  animation-delay: 333ms;
}

.circle:nth-child(3) {
  animation-delay: 666ms;
}
@keyframes typing {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>