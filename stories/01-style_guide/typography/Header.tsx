import React from "react";

interface HeaderProps {
  primary?: boolean;
  displayName?: string;
  cssClass?: string;
  italic?: boolean;
  content?: string;
}

export const Header = ({
  primary = false,
  displayName = "basic",
  cssClass = "",
  italic = false,
  content = "",
  ...props
}: HeaderProps) => {
  return (
    <div>
      <h1 className={cssClass}> {content ? content : "Heading H1"}</h1>
      <h2 className={cssClass}> {content ? content : "Heading H2"}</h2>
      <h3 className={cssClass}> {content ? content : "Heading H3"}</h3>
      <h4 className={cssClass}> {content ? content : "Heading H4"}</h4>
      <h5 className={cssClass}> {content ? content : "Heading H5"}</h5>
    </div>
  );
};
