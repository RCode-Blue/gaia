import React from "react";

interface HeaderProps {
  primary?: boolean;
  displayName?: string;
  cssClass?: string;
  italic?: boolean;
  content?: string;
}

export const Header1 = ({
  primary = false,
  displayName = "basic",
  cssClass = "",
  italic = false,
  content = "Heading H1",
  ...props
}: HeaderProps) => {
  return <h1 className={cssClass}>Heading H1</h1>;
};
