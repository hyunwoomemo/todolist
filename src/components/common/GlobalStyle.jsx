import React from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
  @font-face {
    font-family: "establishRoomNo703OTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRoomNo703OTF.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "establishRoomNo703OTF";
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
