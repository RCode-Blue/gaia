import "../stories/styles/styles.scss";
import "../stories/styles/storybook-styles.scss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import chakraTheme from "./chakraTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  // chakra: {
  //   theme: chakraTheme,
  // },
};
