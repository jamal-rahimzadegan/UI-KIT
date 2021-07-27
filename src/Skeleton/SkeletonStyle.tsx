import styled, { keyframes, css } from 'styled-components';

const rippleEffect = keyframes`
    from {
        left: -150px;
    }
    to {
        left: 100%;
    }`;

export const StyledSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme, bgColor }) => theme[bgColor || 'SKELETON_BACK']};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '10px'};

  ${({ hasRipple = true }) =>
    hasRipple
      ? css`
          &:before {
            content: '';
            display: block;
            position: absolute;
            left: -50px;
            top: 0;
            width: ${({ rippleWidth }) => rippleWidth || '50%'};
            height: ${({ rippleHeight }) => rippleHeight || '100%'};
            background: ${({ theme, rippleColor }) =>
              `linear-gradient(to right, transparent 0%, ${
                theme[rippleColor || 'SKELETON_FORE']
              } 50%, transparent 100%)`};
            animation: ${rippleEffect} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `
      : null};
`;
