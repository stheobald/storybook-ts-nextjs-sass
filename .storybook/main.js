const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-typescript",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: "[name]__[local]--[hash:base64:5]"
        }
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      enforce: "pre",
      test: /.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: ["./src/styles/fonts.scss", "./src/styles/theme.scss"]
      }
    });
    return config;
  }
};
