// @ts-nocheck
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius.extraSmall};
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Style the active/current link */

  .page-index {
    margin: 0 5px;
    color: ${({ theme }) => theme.colors.mediumGrey};
  }

  .active-page {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.brand};
  }
`

const Arrow = styled.button`
  color: ${({ theme }) => theme.colors.brand};
  margin: 0 5px;
  display: flex;
  align-items: center;

  .paginate-icon {
    margin: 0 7px;
  }

  .prev {
    transform: rotate(90deg);
  }

  .next {
    transform: rotate(-90deg);
  }
`

export default {
  Wrapper,
  Arrow,
}
