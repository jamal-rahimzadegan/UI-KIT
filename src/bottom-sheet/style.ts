import styled from 'styled-components';

type ContainerProps = {
  isOpen: boolean;
  height?: string;
};

const Backdrop = styled.div`
  height: 100vh;
  position: relative;
`;

const Container = styled.div<ContainerProps>`
  padding: ${({ isOpen }) => (isOpen ? 10 : 0)}px;
  height: ${({ isOpen, height = '70%' }) => (isOpen ? height : '0')};
  transition: height 300ms, padding 300ms;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: grey;
  border-radius: 20px 20px 0 0;
  position: fixed;
  right: 0;
  bottom: 0;
  user-select: none;
  box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.75);

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    background: transparent; /* make scrollbar transparent */
  }
}
`;

export default { Backdrop, Container };
