import styled from 'styled-components';

type SelectAttr = {
  height?: string;
  width?: string;
  bg?: ElementColor;
};

export const StyledSelect = styled.div<Partial<SelectAttr>>`
  width: ${({ width = 'max-content' }) => width};
  background-color: ${({ theme, bg }) => theme.fn.getColor(bg)};
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryText};
  text-transform: capitalize;

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
    top: ${({ height = '40px' }) => height};
    left: 0;
    position: absolute;
    z-index: 1;
    background-color: ${({ theme, bg }) => theme.fn.getColor('cardBg')};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    width: 100%;
  }

  li {
    list-style: none;
    opacity: 0.8;
    padding: 5px;
    margin: 0 2px;

    :not(:last-child) {
      border-bottom: 1px solid white;
    }

    :hover {
      opacity: 1;
    }
  }
`;
