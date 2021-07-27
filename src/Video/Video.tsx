import React from 'react';
import { ObjectFit } from 'types';
import { StyledVideo } from './VideoStyle';

interface VideoProps {
  height: string;
  width: string;
  src: string | string[];
  objectFit?: ObjectFit;
  type: 'video/mp4' | 'video/webm' | 'video/ogg';
  poster?: string;
  isShowControls?: boolean;
}

export default function Video(props: VideoProps) {
  const { height, width, src, type, objectFit, ...restProps } = props;
  return <StyledVideo objectFit={objectFit} width={width} height={height} type={type ?? 'video/mp4'} {...restProps} />;
}
