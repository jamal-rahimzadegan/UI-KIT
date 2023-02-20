import styled from "styled-components";

const BG_COLOR = "grey"; // NOTE: replace it with a theme color
const ARROW_BASE_STYLE = `
    content: " ";
    position: absolute;
    border-width: 5px;
    border-style: solid;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip-text {
    visibility: visible;
  }
`;

const Text = styled.span`
  visibility: hidden;
  width: ${(props: any) => props["data-maxwidth"]}px;
  background-color: ${BG_COLOR};
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;

  &[data-place^="top"] {
    bottom: 100%;
    left: 50%;
    margin-left: -${(props: any) => props["data-maxwidth"] / 2}px;

    ::after {
      ${ARROW_BASE_STYLE};
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: ${BG_COLOR} transparent transparent transparent;
    }
  }

  &[data-place^="right"] {
    top: -5px;
    left: 105%;

    ::after {
      ${ARROW_BASE_STYLE};
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-color: transparent ${BG_COLOR} transparent transparent;
    }
  }

  &[data-place^="bottom"] {
    top: 100%;
    left: 50%;
    margin-left: -${(props: any) => props["data-maxwidth"] / 2}px;

    ::after {
      ${ARROW_BASE_STYLE};
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: transparent transparent ${BG_COLOR} transparent;
    }
  }

  &[data-place^="left"] {
    top: -5px;
    right: 105%;

    ::after {
      ${ARROW_BASE_STYLE};
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-color: transparent transparent transparent ${BG_COLOR};
    }
  }
`;

export default {
  Wrapper,
  Text,
};
