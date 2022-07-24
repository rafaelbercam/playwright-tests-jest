module.exports = {
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
      "^.+\\.(ts)$": "ts-jest",
    },
    testEnvironmentOptions: {
        "jest-playwright": {
          browsers: ["chromium", "firefox", "webkit"],
          //browsers: ["chromium"],
          launchOptions: {
            headless: false,
          },
        },
      }
  };