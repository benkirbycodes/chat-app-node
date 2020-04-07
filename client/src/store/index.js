import Vue from "vue";
import Vuex from "vuex";
import AuthService from "../AuthService";
import router from "../router/index";
import axios from "axios";

Vue.use(Vuex);

let api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    user: {},
    convos: [],
    activeConvo: {}
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    setUser(state, user) {
      state.user = user;
    },
    resetState(state) {
      state.user = {};
    }
  },
  actions: {
    // Auth SECTION

    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.push({ name: "convos" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.push({ name: "convos" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout();
        if (!success) {
        }
        commit("resetState");
        router.push({ name: "login" });
      } catch (e) {
        console.warn(e.message);
      }
    },

    //Convos SECTION
    async getConvos({ commit, dispatch }) {
      try {
        let res = await api.get("convos");
        commit("setResource", { resource: "convos", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getConvoById({ commit, dispatch }, convoId) {
      try {
        let res = await api.get("convos/" + convoId);
        commit("setResource", { resource: "activeConvo", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async createConvo({ commit, dispatch }, newConvo) {
      try {
        let res = await api.post("convos", newConvo);
        dispatch("getConvos");
      } catch (error) {
        console.error(error);
      }
    },
    async editConvo({ commit, dispatch }, { update, convoId }) {
      try {
        let res = await api.put("convos/" + convoId, update);
        dispatch("getConvos");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteConvo({ commit, dispatch }, convoId) {
      try {
        let res = await api.delete("convos/" + convoId);
        dispatch("getConvos");
      } catch (error) {
        console.error(error);
      }
    },
    async addMessage({ commit, dispatch }, newMessage) {
      try {
        let res = await api.post("convos/" + newMessage.convoId + "/messages");
        dispatch("getConvoById", newMessage.convoId);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteMessage({ commit, dispatch }, { convoId, messageId }) {
      try {
        let res = await api.delete(
          "convos/" + convoId + "/messages/" + messageId
        );
        dispatch("getConvoById", convoId);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
