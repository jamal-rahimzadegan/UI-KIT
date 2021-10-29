import React from 'react';
import { TileLayer } from 'react-leaflet';
import { MarkerType } from 'types';
import 'leaflet/dist/leaflet.css';
import { MapStyle } from './MapStyle';
import MapMarker from './MapMarker';

// TODO: use it like (don't import) -> const Map = dynamic(() => import('components/common/map/Map'), { ssr: false });
interface Props {
  markerCb?: Function;
  centerCoordinate?: MarkerType;
  zoomLevel?: number;
  className?: string;
  height: string; // don't use percent
  width?: string;
  hasRadius?: boolean;
  hasBorder?: boolean;
}

export default function Map(props: Props): JSX.Element {
  const { markerCb, className = '', centerCoordinate = [35.6892, 51.389], zoomLevel = 12, ...restProps } = props;

  return (
    <>
      <MapStyle className={className} center={centerCoordinate} zoom={zoomLevel} {...restProps}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarker markerCb={markerCb} />
      </MapStyle>
    </>
  );
}
