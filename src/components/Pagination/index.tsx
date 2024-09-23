import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import './styles.scss';

type PaginationProps = {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  page: number;
  data?: [];
}

export function Pagination({ handleNextPage, handlePreviousPage, page, data }: PaginationProps) {
  return (
    <div className="pagination-container">
      <button
        className='previous-page-button'
        onClick={handlePreviousPage}
        title='previous page button'
        type='button'
        disabled={page <= 1}
      >
        <CaretLeft size={24} />
      </button>
      <span>{page}</span>
      <button
        className='next-page-button'
        onClick={handleNextPage}
        title='next page button'
        type='button'
        disabled={!data}
      >
        <CaretRight size={24} />
      </button>
    </div>
  )
}