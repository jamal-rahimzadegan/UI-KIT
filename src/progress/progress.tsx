import React from 'react'

type ProgressType = React.DetailedHTMLProps<
  React.ProgressHTMLAttributes<HTMLProgressElement>,
  HTMLProgressElement
>

interface Props extends ProgressType {
  label?: string
}

export function Progress(props: Props): JSX.Element {
  const { label, ...restProps } = props

  return (
    <StyledProgress>
      {label ? <label>{label}</label> : null}
      <progress {...restProps} />
    </StyledProgress>
  )
}
