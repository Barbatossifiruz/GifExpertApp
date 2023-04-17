/**
 * @jest-environment jsdom
 */

module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["./jest.setup.js"],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};
