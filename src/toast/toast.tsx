import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uiSlice from '@src/store/slices/ui-slice'
import { TOAST_SET } from './constant'
import './style.css'

interface Props {
  type?: 'success' | 'error' | 'info' | 'warn'
  position?: 'top-right' | 'bottom-right' | 'top-center' | 'bottom-center'
  title?: string
  body?: string
}

export type ToastInfo = {
  bgColor: string
  icon: string
  title: string
  desc: string
}

declare global {
  interface Window {
    toast: {
      show: Function
      hide: Function
    }
  }
}

export type ToastSet = Record<Props['type'], ToastInfo>

export default function Toast(props: Props) {
  const { type = 'error', position } = props
  const toast: ToastInfo = TOAST_SET[type]
  const { isToastVisible = true } = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch()
  const timeout: number = 3000

  const makeToastGlobal = () => {
    ;(window as any).toast = {
      show: () => dispatch(uiSlice.showToast(true)),
      hide: () => dispatch(uiSlice.showToast(false)),
    }
  }

  const closeToast = () => dispatch(uiSlice.showToast(false))

  useEffect(() => {
    if (isToastVisible) setTimeout(closeToast, timeout)
  }, [isToastVisible])

  useEffect(makeToastGlobal, [])

  if (!isToastVisible) return <></>

  return (
    <div className={`notification-container ${position}`}>
      <div
        style={{ background: toast.bgColor }}
        className={`notification-content ${position}`}
      >
        <section>
          <p className='notification-title'>{toast.title}</p>
          <p className='notification-message'>{toast.desc}</p>
        </section>
        <button onClick={closeToast}>×</button>
      </div>
    </div>
  )
}
