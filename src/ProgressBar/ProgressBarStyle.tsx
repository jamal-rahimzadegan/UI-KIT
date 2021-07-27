import styled from 'styled-components';

export const BarContainer = styled.div`
  overflow: hidden;
  border-radius: ${({ hasRadius = true }) => (hasRadius ? '10px' : null)};
  height: ${({ height }) => height ?? '10px'};

  progress[value] {
    appearance: none;
    transition: all 500ms;

    ::-webkit-progress-bar {
      height: 100%;
      background-color: ${({ theme, bgColor }) => theme[bgColor]};
    }

    ::-webkit-progress-value {
      background-color: ${({ theme, barColor }) => theme[barColor]};
    }

    ::-moz-progress-bar {
      background-color: ${({ theme, barColor }) => theme[barColor]};
    }
  }
`;
