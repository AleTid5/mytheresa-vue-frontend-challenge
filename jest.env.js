import "@testing-library/jest-dom";
const { localStorage } = require("./tests/__mocks__/local-storage.mock");

global.localStorage = localStorage;
global.console.warn = jest.fn();

beforeEach(() => {
  global.localStorage.clear();

  window.location = {
    assign: jest.fn(),
    href: null,
  };
});
