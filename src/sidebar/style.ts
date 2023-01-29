import styled from "styled-components";
import { Props } from "./sidebar";

const Wrapper = styled.aside<Pick<Props, "isOpen">>`
  height: 100vh;
  width: 250px;
  background: grey;
  position: fixed;
  left: ${(props: Props) => (props.isOpen ? "0" : "-100%")};
  top: 0;
  transition: left 250ms;
  border-radius: 0 10px 10px 0;
  padding: 10px;
  box-shadow: 10px 2px 14px 0px rgba(0, 0, 0, 0.2);
`;

const SubMenu = styled.button`
  background: transparent;
  width: 100%;
  border: none;
  text-align: start;
  font-weight: bold;
`;

export default {
  Wrapper,
  SubMenu,
};
