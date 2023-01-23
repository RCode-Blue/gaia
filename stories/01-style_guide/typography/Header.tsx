import React from "react";
import { Heading } from "@chakra-ui/react";

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
      <Heading as="h1" size="4xl" className={cssClass}>
        {" "}
        {content ? content : "Heading H1"}
      </Heading>
      <Heading as="h2" size="3xl" className={cssClass}>
        {" "}
        {content ? content : "Heading H2"}
      </Heading>
      <Heading as="h3" size="2xl" className={cssClass}>
        {" "}
        {content ? content : "Heading H3"}
      </Heading>
      <Heading as="h4" size="xl" className={cssClass}>
        {" "}
        {content ? content : "Heading H4"}
      </Heading>
      <Heading as="h5" size="lg" className={cssClass}>
        {" "}
        {content ? content : "Heading H5"}
      </Heading>
    </div>
  );
};
