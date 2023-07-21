import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      sharedData: 'Initial data',
    };
  },
  mutations: {
    updateSharedData(state, newData) {
      state.sharedData = newData;
    },
  },
});

export default store;
