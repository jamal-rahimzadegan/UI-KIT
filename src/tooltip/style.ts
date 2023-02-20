import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip-text {
    visibility: visible;
  }
`;

const Text = styled.span`
  visibility: hidden;
  width: ${(props: any) => props["data-maxWidth"] || "120px"};
  background-color: grey;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;

  &[data-place^="top"] {
    bottom: 100%;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
  }

  &[data-place^="right"] {
    top: -5px;
    left: 105%;
  }

  &[data-place^="bottom"] {
    top: 100%;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
  }

  &[data-place^="left"] {
    top: -5px;
    right: 105%;
  }
`;

export default {
  Wrapper,
  Text,
};
