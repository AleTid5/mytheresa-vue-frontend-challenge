import router from "../../src/router";
import store from "../../src/stores";

export const renderOptionsMock = {
  global: {
    mocks: {
      $router: {
        push: jest.fn(),
      },
      $store: store,
    },
  },
  router,
};
