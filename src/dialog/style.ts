import styled from "styled-components";

const BackDrop = styled.div`
  display: ${(props: any) => (props.open ? "block" : "none")};
  z-index: 101;
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: auto;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: fading 700ms forwards;
  @keyframes fading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalBody = styled.div`
  background-color: grey;
  width: 70%; /* Width in proportion to its parent container*/
  max-width: 640px; /* Max width where it stops expanding */
  height: max-content; /* Height in proportion to its parent container */
  margin: auto; /* Auto margin according to the element width */
  padding: 10px;
  border-radius: 8px;
`;

export default {
  BackDrop,
  ModalContainer,
  ModalBody,
};
