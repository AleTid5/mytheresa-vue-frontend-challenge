import router from "../../src/router";

export const renderOptionsMock = {
  global: {
    mocks: {
      $router: {
        push: jest.fn(),
      },
    },
  },
  router,
};
