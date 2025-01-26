import s from "./Pagination.module.scss";
interface PaginationProps {
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

export const Pagination = ({
  totalPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const handleNextPage = () => {
    if (currentPage <= 15) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
                onClick={() => setCurrentPage(index + 1)}
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
