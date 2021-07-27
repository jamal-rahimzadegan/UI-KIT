import React from 'react';
import { LIGHT_THEME } from 'assets/style/theme';
import { StyledSkeleton } from './SkeletonStyle';

interface SkeletonProps {
  width?: string;
  height?: string;
  rippleWidth?: string;
  rippleHeight?: string;
  className?: string;
  hasRipple?: boolean;
  bgColor?: keyof typeof LIGHT_THEME;
  rippleColor?: keyof typeof LIGHT_THEME;
}

export default function Skeleton(props: SkeletonProps) {
  return <StyledSkeleton {...props} />;
}
