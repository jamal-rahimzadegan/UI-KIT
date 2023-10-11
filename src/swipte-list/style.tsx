import styled, { css } from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const ContentContainer = styled.div`
  min-height: 100px;
`

const BulletContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

const BulletItem = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? 'red' : 'grey')};
  opacity: ${({ isActive }) => (isActive ? 0.8 : 0.3)};
  height: 10px;
  width: 10px;
  margin: 0 2px;
  border-radius: 100px;
`

const ArrowBtn = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100px;
  position: absolute;
  ${({ dir }) => dir}: 10px;

  .arrow {
    border: solid red;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
  }

  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`

export { Container, ContentContainer, BulletContainer, BulletItem, ArrowBtn }
