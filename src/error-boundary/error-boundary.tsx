import {Component, ErrorInfo} from 'react'

interface Props {
  fallback: JSX.Element
  children: any
}

export default class ErrorBoundary extends Component<Props> {
  state = { hasError: true }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}
