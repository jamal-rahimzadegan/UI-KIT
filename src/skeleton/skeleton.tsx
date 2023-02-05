import React from 'react';
import { StyledSkeleton } from './style';

interface Props {
    width?: string;
    height?: string;
    rippleWidth?: string;
    rippleHeight?: string;
    className?: string;
    hasRipple?: boolean;
    bgColor?: keyof typeof YOUR_THEME;
    rippleColor?: keyof typeof YOUR_THEME;
}

export default function Skeleton(props: Props) {
    return <StyledSkeleton {...props} />;
}
