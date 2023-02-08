import styled from "styled-components";

const Wrapper = styled.nav`
  height: 100vh;
  width: 250px;
  background: grey;
  position: fixed;
  left: ${(props: any) => (props["aria-expanded"] ? "0" : "-100%")};
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

  [aria-current="page"] {
    font-weight: bold;
  }
`

const Link = styled.a`
  cursor: pointer;
  text-align: start;
`;

export default {
    Wrapper,
    LinksContainer,
    Link,
};
