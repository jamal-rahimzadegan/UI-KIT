type Toast = {
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
  type: Toast['type']
}

type ToastSet = {
  [key in Toast['type']]: {
    bgColor: string
    icon: string
    title: string
    desc: string
  }
}
