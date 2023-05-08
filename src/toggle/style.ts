import styled, { css } from 'styled-components'

export const Wrapper = styled.div<any>`
  position: relative;
  display: inline-block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;
  margin-inline-end: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    :checked + span {
      background-color: ${({ theme }) => theme.colors.brand};
    }

    :checked + span:before {
      ${({ height }) =>
        css`
          transform: translateX(${height - 1}px);
        `};
    }
  }

  .toggle-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.mediumGrey};
    transition: 0.3s;
    border-radius: ${({ width }) => width}px;

    :before {
      position: absolute;
      content: '';
      width: ${({ height }) => height - 5}px;
      height: ${({ height }) => height - 5}px;
      left: 3px;
      bottom: 2.6px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      transition: 0.3s;
    }
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`
