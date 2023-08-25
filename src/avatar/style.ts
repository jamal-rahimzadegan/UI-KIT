import styled from "styled-components";

const Container = styled.div<{ hasImg: boolean; size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background: ${({ hasImg }) => (hasImg ? "inherit" : "transparent")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  font-size: 14px;
  font-weight: bold;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transform-origin: top center;

    &[alt]: after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      line-height: ${({ size }) => size / 16};
      text-align: center;
      content: attr(alt);
    }
  }
`;

export default { Container };
