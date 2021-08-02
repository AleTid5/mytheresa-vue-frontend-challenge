import "@testing-library/jest-dom";
const { localStorage } = require("./tests/__mocks__/local-storage.mock");

global.localStorage = localStorage;

beforeEach(() => {
  global.localStorage.clear();

  window.location = {
    assign: jest.fn(),
    href: null,
  };
});
