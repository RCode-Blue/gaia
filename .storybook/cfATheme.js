import { create } from "@storybook/theming";
// import cfALogo from "../stories/assets/CfABanner.png";
import cfALogo from "../stories/assets/CfAGaiaBanner_tx.png";

export default create({
  base: "light",
  brandTitle: "Gaia",
  brandUrl: "https://www.codeforaustralia.org",
  brandImage: cfALogo,
  brandTarget: "_self",
});
