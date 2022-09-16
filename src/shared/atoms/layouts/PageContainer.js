import React from "react";
import { css } from "@emotion/react";

export default ({ 
  children,
  noYPaddingXs = false,
  RenderAs='section', 
  ...props 
}) => {
  return (
    <RenderAs
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        padding: ${noYPaddingXs ? `12px 0px` : `12px`};
        padding-top: 24px;
        @media(min-width: 1200px) {
          padding-top: 52px;
          padding-bottom: 24px;
          padding-left: 0;
          padding-right: 0;
        } 
      `}
      {...props}
    >
      {children}
    </RenderAs>
  )
}