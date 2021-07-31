export default {
  namespaced: true,
  state() {
    return {
      searchValue: "",
    };
  },
  mutations: {
    onChangeSearchValue(state, searchValue) {
      state.searchValue = searchValue;
    },
  },
};
