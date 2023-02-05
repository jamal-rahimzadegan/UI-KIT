import React from 'react';
import {Container} from './style';

interface Props extends Partial<HTMLHRElement>{
    height?: string;
    width?: string;
    className?: string;
}

export default function Hr(props: Props): JSX.Element {
    return <Container {...props} />;
}
