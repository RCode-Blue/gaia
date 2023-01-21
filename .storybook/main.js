module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/**/*.stories.@(js|jsx|ts|mdx)",
    "../stories/styles/styles.scss",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@chakra-ui/storybook-addon",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  // framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    // builder: "webpack5",
  },
  features: {
    // emotionAlias: false,
  },
};
