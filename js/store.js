define(function () {
  const store = new Vuex.Store({
    state: {
      count: 0,
      qwe: 123
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  })
  return {
    store: store
  };
});