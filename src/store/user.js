import { login } from '@/static/api';

const state = () => ({
  user: null,
  isLogged: null,
  errorMessage: '',
});

const getters = {
  user: (state) => state.user,
  isLogged: (state) => state.isLogged,
  errorMessage: (state) => state.errorMessage
}

const actions = {
  async login({ commit }, user) {
    // 実際はPOSTでサーバー側にAPI飛ばすなりして確認する
    const res = await login(user);

    // `?.` => optionalChaining
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    if (res?.errors) {
      commit('updateUser', null);
      commit('updateIsLogged', false);
      commit('updateErrorMessage', res.errors.message);
      return;
    }

    commit('updateUser', user.username);
    commit('updateIsLogged', true);
  },
  updateIsLogged({ commit }, payload = null) {
    commit('updateIsLogged', payload);
  }
}

const mutations = {
  updateUser(state, user) {
    state.user = user;
  },
  updateIsLogged(state, payload) {
    state.isLogged = payload;
  },
  updateErrorMessage(state, message) {
    state.errorMessage = message;
  }
}

export {
  state,
  getters,
  actions,
  mutations,
};
