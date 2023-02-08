import styled from "styled-components";
import {Props} from "./drawer";

const Wrapper = styled.nav<Pick<Props, "isOpen">>`
  height: 100vh;
  width: 250px;
  background: grey;
  position: fixed;
  left: ${(props: Props) => (props.isOpen ? "0" : "-100%")};
  top: 0;
  transition: left 250ms;
  border-radius: 0 10px 10px 0;
  padding: 10px;
  box-shadow: 10px 2px 14px 0 rgba(0, 0, 0, 0.2);
`;

const LinksContainer = styled.ul`
  list-style: none;

  li {
    margin: 20px 0;
  }
`

const Link = styled.a`
  background: transparent;
  width: 100%;
  border: none;
  text-align: start;
  font-weight: bold;
`;

export default {
    Wrapper,
    LinksContainer,
    Link,
};
