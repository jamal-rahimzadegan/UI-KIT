import React, { useState } from 'react';
import L from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';
import { MarkerType } from 'types';

export const markerIcon = new L.Icon({
  iconUrl: '/static/img/marker.png',
  iconSize: new L.Point(25, 35),
});

interface Props {
  markerCb?: Function;
}

export default function MapMarker(props: Props) {
  const { markerCb } = props;
  const [position, setPosition] = useState<MarkerType>([35.6892, 51.389]);

  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition([lat, lng]);
      markerCb?.(event.latlng);
    },
  });

  return <Marker position={position} interactive={false} icon={markerIcon} />;
}
