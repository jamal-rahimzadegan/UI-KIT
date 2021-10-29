import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
import { RADIUS } from 'constant';

export const MapStyle = styled(MapContainer)`
  z-index: 0 !important;
  height: ${({ height }) => height || '500px'};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ hasRadius }) => RADIUS[hasRadius ? 'm' : 'none']};
  ${({ theme, hasBorder }) => (hasBorder ? `border: 2px solid ${theme.BORDER}` : 'unset')};
`;
