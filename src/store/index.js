import Vue from "vue";
import Vuex from "vuex";
import Actions from "./actions";
import Getters from "./getters";
import Mutations from "./mutations";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    userinfo: {
      user: "hermine",
    },
  },
  actions: Actions,
  getters: Getters,
  mutations: Mutations,
});

export default Store;
