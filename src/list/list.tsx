// check https://www.w3schools.com/html/html_lists.asp for more details

import React, {ReactNode} from 'react'
import Container from "./style";

interface Props<T = any[]> {
    testId?: string
    isLoading?: boolean
    isEmpty?: boolean
    emptyMsg?: string
    error?: boolean
    className?: string
    data: T
    as?: "ol" | "ul" | "dl"
    children?: Element | ReactNode | JSX.Element
}

type ContentProps = Omit<Props, 'testId' | 'className'>


export default function List(props: Props): JSX.Element {
    const {testId, as, className = '', ...restProps} = props

    return (
        <Container as={as} data-testid={testId} className={className}>
            {<RenderContent {...restProps} />}
        </Container>
    )
}


const RenderContent = (props: ContentProps): JSX.Element => {
    const {children, data, isLoading = true, error, emptyMsg, isEmpty} = props

    if (isLoading) return <p>Loading...</p>
    else if (data.length) return <>{children}</>
    else if (isEmpty) return <p>{emptyMsg}</p>
    else if (error) return <p>Something Went Wrong</p>
    else return <></>
}
