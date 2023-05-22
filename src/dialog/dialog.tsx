import React, { ReactNode } from 'react'
import D from './style'

interface Props {
  cb?: Function
  className?: string
  children: ReactNode
  title: string
  desc: string
}

function UI(props: Props): JSX.Element {
  const { children, className = '' } = props

  return (
    <D.Container className={className} onClick={manager.closeOnBackdropClick}>
      <>{children}</>
    </D.Container>
  )
}

class DialogManager {
  get dialog(): HTMLDialogElement {
    return document.querySelector('dialog') as HTMLDialogElement
  }

  show() {
    this.dialog.showModal()
  }

  close() {
    this.dialog.close()
  }

  closeOnBackdropClick = () => {
    const dialog = this.dialog

    dialog!.addEventListener('click', (e: any) => {
      const dialogDimensions = dialog!.getBoundingClientRect()
      const isClickedOutsideOfDialog =
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom

      if (isClickedOutsideOfDialog) dialog!.close()
    })
  }
}

const manager = new DialogManager()

export default {
  UI,
  manager,
}
