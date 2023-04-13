import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uiSlice from '@src/store/slices/ui-slice' // handle with state management
import { TOAST_SET } from './toast-set'
import T from './style'

interface Props {
  position?: ToastPositionType
}

declare global {
  interface Window {
    toast: {
      show: (payload: ToastPayload) => void
      hide: Function
    }
  }
}

export default function Toast(props: Props) {
  const TIMEOUT: number = 3000
  const { position } = props
  const dispatch = useDispatch()
  const { shouldShow, type, title, body } = useSelector(
    (state: RootState) => state.ui.toast,
  )
  const defaultToastData = TOAST_SET[type as Toast['type']]

  const makeToastGlobal = () => {
    ;(window as any).toast = {
      hide: () => dispatch(uiSlice.hideToast()),
      show: (payload: ToastPayload) => {
        return dispatch(uiSlice.showToast({ ...payload, shouldShow: true }))
      },
    }
  }

  const closeToast = () => window.toast.hide()

  useEffect(makeToastGlobal, [])

  useEffect(() => {
    // We will automatically close the toast
    if (!shouldShow) return
    const closingTimeout = setTimeout(closeToast, TIMEOUT)
    return () => clearTimeout(closingTimeout)
  }, [shouldShow])

  return shouldShow ? (
    <T.Wrapper className={position}>
      <T.Content bgColor={defaultToastData.bgColor}>
        <T.TextWrapper>
          <T.Title>{title || defaultToastData.title} </T.Title>
          <T.Body>{body || defaultToastData.desc} </T.Body>
        </T.TextWrapper>
        <button onClick={closeToast}>×</button>
      </T.Content>
    </T.Wrapper>
  ) : (
    <></>
  )
}
