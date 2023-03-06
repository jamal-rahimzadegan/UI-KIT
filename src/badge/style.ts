import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const BadgeText = styled.p`
    font-weight: bold;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #292983;
    box-shadow: 3px 5px 5px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    `

export default {
    Wrapper,
    BadgeText
}
