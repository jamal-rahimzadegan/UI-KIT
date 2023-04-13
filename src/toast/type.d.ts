type ToastType = {
  shouldShow: boolean
  type: 'success' | 'error' | 'info' | 'warn'
  title: string
  body: string
}

type ToastPositionType =
  | 'top-right'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'

type ToastPayload = {
  title: string
  body: string
  type: ToastType['type']
}

type ToastSet = {
  [key in ToastType['type']]: {
    bgColor: string
    icon: string
    title: string
    desc: string
  }
}
