import styled from "styled-components";

const AvatarContainer = styled.div<{ hasImg: boolean }>`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background: ${({hasImg}) => (hasImg ? "white" : "transparent")};
`;

const UserNameTitle = styled.div`
	font-weight: bold;
`;

const UserImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export { AvatarContainer, UserNameTitle, UserImg };
