import React, { ReactNode } from 'react'
import manager from './manager'
import D from './style'

interface Props {
  cb?: Function
  className?: string
  children: ReactNode
}

function DialogUI(props: Props): JSX.Element {
  return <D.Container {...props} onClick={manager.closeOnBackdropClick} />
}

export default {
  UI: DialogUI,
  manager,
}
