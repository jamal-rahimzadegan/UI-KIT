// @ts-nocheck

import styled, { css } from "styled-components";
// import { FONT_SIZES } from "SIZES";

// FIXME: types
const TextWrapper = styled.p<any>`
  font-size: ${(props) => FONT_SIZES[props.size || "m"]};
  color: ${({ theme, color }) => theme[color || "PRIMARY_TEXT"]};
  text-align: ${({ align }) => align || null};

  ${(props) =>
    props.numberOfLines
      ? css`
          display: block;
          display: -webkit-box;
          -webkit-line-clamp: ${props.numberOfLines};
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        `
      : ""};
`;

export default TextWrapper;
