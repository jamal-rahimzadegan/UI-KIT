import styled from 'styled-components';

type SelectAttr = {
  height?: string;
  width?: string;
  isOpen: boolean;
  isReversed: boolean;
  contentHeight: string;
};

export const StyledSelect = styled.div<Partial<SelectAttr>>`
  width: ${({ width = 'max-content' }) => width};
  background-color: ${({ theme }) => theme.palette.bg};
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primaryText};
  text-transform: capitalize;
  transition: all 200ms;

  button {
    text-transform: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: inherit;
    padding: 0 5px;
    height: ${({ height = '40px' }) => height};
  }

  ul {
    left: 0;
    position: absolute;
    z-index: 1;
    background: ${({ theme }) => theme.palette.lightGrey};
    box-shadow: ${({ theme }) => theme.palette.shadow};
    width: 100%;
    height: ${({ contentHeight }) => contentHeight};
    overflow-y: auto;
    top: ${({ height = '40px', isReversed, contentHeight }) => {
      return isReversed ? '-' + contentHeight : height;
    }};
  }

  li {
    list-style: none;
    opacity: 0.8;
    padding: 5px;
    margin: 0 2px;

    :not(:last-child) {
      border-bottom: 1px solid white;
    }

    &:hover {
      opacity: 1;
      background: ${({ theme }) => theme.palette.mediumGrey};
      color: ${({ theme }) => theme.palette.white};
    }
  }
`;
