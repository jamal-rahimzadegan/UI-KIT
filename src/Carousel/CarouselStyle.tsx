import styled from 'styled-components';
import { Card } from 'components';
import { BORDER_RADIUS } from 'constant';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: relative;
`;

export const Slide = styled.div`
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: background-image 0.2s ease-in-out;
  background-image: url(${({ url }) => url});
`;

export const BulletContainer = styled(Card)`
  display: flex;
  align-items: center;
  align-self: center;
  padding-bottom: 10px;
  position: absolute;
  bottom: 0;
`;

export const BulletItem = styled(Card)`
  background-color: ${({ theme, i, activeIndex }) => theme[i === activeIndex ? 'APP' : 'BACKGROUND']};
  opacity: ${({ theme, i, activeIndex }) => theme[i === activeIndex ? 1 : 0.3]};
  height: 10px;
  width: 10px;
  margin: 0 2px;
  border-radius: ${() => BORDER_RADIUS.s};
`;

export const ArrowBtn = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.SHADOW};
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: ${() => BORDER_RADIUS['round-pill']};
  position: absolute;
  ${({ dir }) => dir}: 50px;

  .arrow {
    border: solid ${({ theme }) => theme.APP};
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
`;
