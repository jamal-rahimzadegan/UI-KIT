import React from 'react';
import Wrapper from './style';

interface Props {
    count: number
    children?: any
}

export default function Badge(props: Props): JSX.Element {
    const {count, children} = props
    return <Wrapper>{children}<BadgeText>{count}</BadgeText></Wrapper>
}
