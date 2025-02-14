import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { NewsList } from "@/widget/NewsList";
import { useEffect, useState } from "react";
import { Pagination } from "@/widget/Pagination";
import { observer } from "mobx-react-lite";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGE } from "@/shared/const/consts";
import { NewsType } from "@/shared/api/news/types";
import { usePagination } from "@/shared/lib/hooks/usePagination";
import { useNavigate } from "react-router-dom";
const News = observer(() => {
  const {
    newsData,
    categoriesData,
    getNewsAction,
    getCategoriesAction,
    setCurrentNewsAction,
  } = newsStore;

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

  // переход на страницу новости
  const navigate = useNavigate();
  const viewNewsDetails = (news: NewsType) => {
    setCurrentNewsAction(news);
    navigate(`/news/${news.id}`);
  };

  return (
    <main>
      <Categories
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      />

      <Search keyword={keywords} setKeyword={setKeywords} />
      <div>
        {newsData?.state === "pending" && <Skeleton count={18} />}
        {newsData?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList viewNewsDetails={viewNewsDetails} news={NEWS} />
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
