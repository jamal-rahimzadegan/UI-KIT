import React from 'react';
import Wrapper from './style';

interface Props {
    name: string;
    size?: number;
    className: string;
    color: string;
    isBold?: boolean;
}

export default function Icon(props: Props): JSX.Element {
    const {name, className = "", ...restProps} = props;
    return (
        <Wrapper className={`icon-${name} ${className}`}  {...restProps} />
    );
}
