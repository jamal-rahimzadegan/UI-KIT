import { useState } from 'react'

type param = { itemPerPage: number; items: any[] }

export function usePagination(param: param) {
  const { itemPerPage, items } = param
  const [currentPage, setCurrentPage] = useState<number>(1)
  const OFFSET: number = currentPage * itemPerPage - itemPerPage

  const slicedItems = items.slice(OFFSET, OFFSET + itemPerPage)

  return {
    slicedItems,
    currentPage,
    setCurrentPage,
  }
}
