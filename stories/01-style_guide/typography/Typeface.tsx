import React from "react";

interface TypefaceProps {
  primary?: boolean;
  size?: number;
  fontWeight?: number;
  displayName?: string;
  cssClass?: string;
  italic?: boolean;
  content?: string;
}

export const Typeface = ({
  primary = false,
  size = 30,
  fontWeight = 400,
  displayName = "basic",
  cssClass = "",
  italic = false,
  content = "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy  Zz",
  ...props
}: TypefaceProps) => {
  return (
    <div className={`${cssClass} ${italic ? "ga-font__italic" : ""}`}>
      {content}
    </div>
  );
};
