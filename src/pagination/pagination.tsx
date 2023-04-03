import React from 'react'
import { Button, Icon } from '@src/components'
import P from './style'

interface Props {
  entriesCount: number
  itemPerPage: number
  currentPageNumber: number
  onPaginate: (page: number) => void
}

export default function Pagination(props: Props): JSX.Element {
  const { entriesCount, onPaginate, itemPerPage, currentPageNumber } = props

  const numberOfPages: number = (() => {
    const pageDivision = entriesCount / itemPerPage
    const hasOddPageCount = entriesCount % itemPerPage > 0
    return hasOddPageCount ? pageDivision + 1 : pageDivision
  })()

  return entriesCount > itemPerPage ? (
    <P.Wrapper>
      {/*<Btn isTransparent className="pagination__arrow" disabled={currentPageNumber < 2} onClick={() => paginate(1)}>*/}
      {/*  <BsChevronDoubleLeft />*/}
      {/*</Btn>*/}
      <P.Arrow
        disabled={currentPageNumber < 2}
        onClick={() => onPaginate(currentPageNumber - 1)}
      >
        <Icon name='chevron-down-solid' className='paginate-icon prev' />
        previous
      </P.Arrow>
      {Array.from({ length: numberOfPages })
        .map((el, i) => ++i)
        .map((page) => (
          <Button
            key={page}
            className={
              'page-index ' + (currentPageNumber === page ? 'active-page' : '')
            }
            onClick={() => onPaginate(page)}
          >
            {page}
          </Button>
        ))}
      <P.Arrow
        onClick={() => onPaginate(currentPageNumber + 1)}
        disabled={currentPageNumber === numberOfPages}
      >
        next
        <Icon name='chevron-down-solid' className='paginate-icon next' />
      </P.Arrow>
      {/*<Btn*/}
      {/*  className="pagination__arrow"*/}
      {/*  disabled={currentPageNumber === numberOfPages}*/}
      {/*  onClick={() => paginate(numberOfPages)}*/}
      {/*  isTransparent*/}
      {/*>*/}
      {/*  <BsChevronDoubleRight />*/}
      {/*</Btn>*/}
    </P.Wrapper>
  ) : (
    <></>
  )
}


// function UsageExample() {
//   const ITEM_PER_PAGE: number = 5
//   const items: any[] = Array.from({ length: 21 })
//   const [currentPage, setCurrentPage] = useState<number>(1)
//   const OFFSET: number = currentPage * ITEM_PER_PAGE - ITEM_PER_PAGE
//   const slicedItems: any[] = items.slice(OFFSET, OFFSET + ITEM_PER_PAGE)

//   const handlePaginate = (page: number) => {
//     setCurrentPage(page)
//   }

//   return (
//     <>
//       {slicedItems.map((product, i) => (
//         <div className='p-3'>Item - {i}</div>
//       ))}
//       <Pagination
//         entriesCount={items.length}
//         itemPerPage={ITEM_PER_PAGE}
//         currentPageNumber={currentPage}
//         onPaginate={handlePaginate}
//       />
//     </>
//   )
// }
