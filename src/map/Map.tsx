import React from 'react';
import { TileLayer } from 'react-leaflet';
import { MarkerType } from 'types'; // MarkerType=[lat: number, lng: number]
import { MapStyle } from './MapStyle';
import MapMarker from './MapMarker';

interface Props {
  runOnMark?: Function;
  centerCoordinate?: MarkerType;
  zoomLevel?: number;
  className?: string;
}

export default function Map(props: Props): JSX.Element {
  const { runOnMark, className = '', centerCoordinate = [35.6892, 51.389], zoomLevel = 12 } = props;

  return (
    <>
      <MapStyle className={className} center={centerCoordinate} zoom={zoomLevel}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarker runOnMark={runOnMark} />
      </MapStyle>
    </>
  );
}
