import { create } from "@storybook/theming";
import cfALogo from "../src/assets/CfAGaiaBanner_tx.png";

export default create({
  base: "light",
  brandTitle: "Gaia",
  brandUrl: "/",
  brandImage: cfALogo,
  brandTarget: "_self",
});
