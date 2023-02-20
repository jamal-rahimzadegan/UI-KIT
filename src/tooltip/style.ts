import styled from "styled-components";

const BG_COLOR = "grey"; // NOTE: replace it with a theme color

const formatArrowBaseStyle = (dir: string) => `
    content: " ";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    ${dir}: 100%
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

  &[data-place^="right"] {
    top: -5px;
    left: 105%;

    ::after {
      ${formatArrowBaseStyle("right")};
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-color: transparent ${BG_COLOR} transparent transparent;
    }
  }

  &[data-place^="left"] {
    top: -5px;
    right: 105%;

    ::after {
      ${formatArrowBaseStyle("left")};
      top: 50%;
      margin-top: -5px;
      border-color: transparent transparent transparent ${BG_COLOR};
    }
  }

  &[data-place^="top"] {
    bottom: 100%;
    left: 50%;
    margin-left: -${(props: any) => props["data-maxwidth"] / 2}px;

    ::after {
      ${formatArrowBaseStyle("top")};
      left: 50%;
      margin-left: -5px;
      border-color: ${BG_COLOR} transparent transparent transparent;
    }
  }

  &[data-place^="bottom"] {
    top: 100%;
    left: 50%;
    margin-left: -${(props: any) => props["data-maxwidth"] / 2}px;

    ::after {
      ${formatArrowBaseStyle("bottom")};
      left: 50%;
      margin-left: -5px;
      border-color: transparent transparent ${BG_COLOR} transparent;
    }
  }
`;

export default {
  Wrapper,
  Text,
};
