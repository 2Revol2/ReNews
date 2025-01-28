export const usePagination = (
  maxSize: number = 15,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number
) => {
  const handlePage = (nextPage: number) => {
    setCurrentPage(nextPage);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage <= maxSize) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
  };

  return { handlePage, handleNextPage, handlePrevPage };
};
