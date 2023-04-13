import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 14px;
  position: fixed;
  z-index: 10;

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  ${(props: any) => {
    switch (props.className) {
      case 'top-right':
        return `
          top: 12px;
          right: 12px;
          transition: transform 0.6s ease-in-out;
          animation: toast-in-right 0.6s;
      `
      case 'bottom-right':
        return `
          bottom: 12px;
          right: 12px;
          transition: transform 0.6s ease-in-out;
          animation: toast-in-right 0.6s;
      `
      case 'top-left':
        return `
          top: 12px;
          left: 12px;
          transition: transform 0.6s ease-in;
          animation: toast-in-left 0.6s;
      `
      default:
        return `
          bottom: 12px;
          left: 12px;
          transition: transform 0.6s ease-in;
          animation: toast-in-left 0.6s;
        `
    }
  }}
`

const Content = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  transition: 0.3s ease;
  pointer-events: auto;
  overflow: hidden;
  width: 300px;
  max-height: 100px;
  border-radius: 5px;
  box-shadow: 0 0 10px #555;
  height: 70px;
  min-width: 300px;
  padding: 10px;
  background: ${(props: any) => props.bgColor || 'aqua'};
  color: black;
`

const TextWrapper = styled.div`
  width: 90%;
`

const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  margin-bottom: 8px;
`

const Body = styled.p`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`

export default {
  Wrapper,
  Content,
  TextWrapper,
  Title,
  Body,
}
