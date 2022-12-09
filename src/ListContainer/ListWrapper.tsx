
import React, { ReactChildren, ReactNode } from 'react'

interface Props<T = any[]> {
  testId?: string
  isLoading?: boolean
  isEmpty?: boolean
  emptyMsg?: string
  error?: boolean
  className?: string
  data: T
  children?: Element | ReactNode | JSX.Element | ReactChildren
}

type ContentProps = Omit<Props, 'testId' | 'className'>

const RenderContent = (props: ContentProps): JSX.Element => {
  const { children, data, isLoading = true, error, emptyMsg, isEmpty } = props

  if (isLoading) return <p>Loading...</p>
  else if (data.length) return <>{children}</>
  else if (isEmpty) return <p>{emptyMsg}</p>
  else if (error) return <p>Something Went Wrong</p>
  else return <></>
}

export default function List(props: Props): JSX.Element {
  const { testId, className = '', ...restProps } = props

  return (
    <div data-testid={testId} className={className}>
      {<RenderContent {...restProps} />}
    </div>
  )
}
