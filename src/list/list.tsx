import React, { ReactNode } from 'react'
import Container from './style'

interface Props<T = any[]> {
  isLoading?: boolean
  emptyMsg?: string
  error?: boolean
  className?: string
  data: T
  as?: 'ol' | 'ul' | 'dl'
  children?: Element | ReactNode | JSX.Element
}

type ContentProps = Omit<Props, 'testId' | 'className'>

export default function List(props: Props): JSX.Element {
  const { as, className = '', ...restProps } = props

  return (
    <Container as={as} className={className}>
      <Renderer {...restProps} />
    </Container>
  )
}

function Renderer(props: ContentProps): JSX.Element {
  const { children, data, isLoading = true, error, emptyMsg, isEmpty } = props

  if (isLoading) return <p>Loading...</p>
  else if (data.length) return <>{children}</>
  else if (!data.length) return <p>{emptyMsg || 'There is nothing here!!!'}</p>
  else if (error) return <p>Something Went Wrong</p>
  else return <></>
}
