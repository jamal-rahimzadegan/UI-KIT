import styled from 'styled-components';

export const StyledCol = styled.div`
  // Extra Small devices (landscape phones, 576px and up)
  @media (max-width: 576px) {
    width: ${({ xs }) => (xs * 100) / 12 + '%'};
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    width: ${({ sm }) => (sm * 100) / 12 + '%'};
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: ${({ md }) => (md * 100) / 12 + '%'};
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: ${({ lg }) => (lg * 100) / 12 + '%'};
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    width: ${({ xl }) => (xl * 100) / 12 + '%'};
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    width: ${({ xxl }) => (xxl * 100) / 12 + '%'};
  }
`;
