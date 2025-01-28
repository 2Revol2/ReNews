import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { NewsList } from "@/widget/NewsList";
import { useEffect, useState } from "react";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { observer } from "mobx-react-lite";
import { Categories } from "@/shared/ui/Categories/Categories";
import { Input } from "@/shared/ui/Input/Input";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGE } from "@/shared/const/consts";
import { NewsType } from "@/shared/api/news/types";
import { usePagination } from "@/shared/lib/hooks/usePagination";
const News = observer(() => {
  const { newsData, categoriesData, getNewsAction, getCategoriesAction } =
    newsStore;

  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keywords, setKeywords] = useState<string>("");

  const debouncedKeyword = useDebounce(keywords, 1500);
  const { handlePage, handleNextPage, handlePrevPage } = usePagination(
    PAGE_SIZE,
    setCurrentPage,
    currentPage
  );

  const NEWS: NewsType[] =
    newsData?.state === "fulfilled" ? newsData.value.news : [];
    
  const categories: string[] =
    categoriesData?.state === "fulfilled"
      ? ["All", ...categoriesData?.value.categories]
      : [];

  const category = currentCategory === "All" ? null : currentCategory;

  useEffect(() => {
    getNewsAction(currentPage, PAGE_SIZE, category, debouncedKeyword);
  }, [currentPage, currentCategory, debouncedKeyword]);

  useEffect(() => {
    getCategoriesAction();
  }, []);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  return (
    <main>
      <Categories
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      />

      <Input keyword={keywords} setKeyword={setKeywords} />
      <div>
        {newsData?.state === "pending" && <Skeleton count={18} />}
        {newsData?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList news={NEWS} />
        )}
      </div>

      <Pagination
        totalPage={TOTAL_PAGE}
        handleCurrentPage={handlePage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
      />
    </main>
  );
});

export default News;
