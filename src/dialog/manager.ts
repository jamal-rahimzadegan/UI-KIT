import { MouseEvent } from 'react'

class DialogManager {
  private dialog: HTMLDialogElement | null

  constructor() {
    this.dialog = null
  }

  private getDialog() {
    if (this.dialog) return
    this.dialog = document.querySelector('dialog')
  }

  show() {
    this.getDialog()
    this.dialog!.showModal()
  }

  close() {
    this.dialog!.close()
  }

  closeOnBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = this.dialog!.getBoundingClientRect()
    const isClickedOutsideOfDialog =
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom

    if (isClickedOutsideOfDialog) this.dialog!.close()
  }
}

export default new DialogManager()
