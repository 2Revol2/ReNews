import s from "./Pagination.module.scss";
interface PaginationProps {
  totalPage: number;
  handleCurrentPage: (nextPage: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  currentPage: number;
}

export const Pagination = ({
  totalPage,
  handleCurrentPage,
  handleNextPage,
  handlePrevPage,
  currentPage,
}: PaginationProps) => {
  return (
    <div className={s.pagination}>
      <button
        onClick={handlePrevPage}
        className={s.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <ul className={s.list}>
        {[...new Array(totalPage)].map((_, index) => {
          return (
            <li key={index}>
              <button
                disabled={currentPage === index + 1}
                onClick={() => handleCurrentPage(index + 1)}
                className={s.button}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        disabled={currentPage >= totalPage}
        onClick={handleNextPage}
        className={s.arrow}
      >
        {">"}
      </button>
    </div>
  );
};
