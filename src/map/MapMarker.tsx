import React, { useState } from 'react';
import L from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';
import { MarkerType } from 'types';

export const markerIcon = new L.Icon({
  iconUrl: '/static/img/marker.png',
  iconSize: new L.Point(25, 35),
});

interface Props {
  runOnMark?: Function;
}

export default function MapMarker(props: Props) {
  const { runOnMark } = props;
  const [position, setPosition] = useState<MarkerType>([35.6892, 51.389]);

  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition([lat, lng]);
      runOnMark?.(event.latlng);
    },
  });

  return <Marker position={position} interactive={false} icon={markerIcon} />;
}
