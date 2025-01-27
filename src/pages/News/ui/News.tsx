import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { NewsList } from "@/widget/NewsList";
import { useEffect, useState } from "react";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { observer } from "mobx-react-lite";
import { Categories } from "@/shared/ui/Categories/Categories";
import { Input } from "@/shared/ui/Input/Input";
const News = observer(() => {
  const { newsData, categoriesData, getNewsAction, getCategoriesAction } =
    newsStore;

  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = 15;
  const pageSize = 18;

  const NEWS = newsData?.state === "fulfilled" ? newsData.value.news : [];
  const category = currentCategory === "All" ? null : currentCategory;

  const categories: string[] =
    categoriesData?.state === "fulfilled"
      ? ["All", ...categoriesData?.value.categories]
      : [];

  useEffect(() => {
    getNewsAction(currentPage, pageSize, category);
  }, [currentPage, currentCategory]);

  useEffect(() => {
    getCategoriesAction();
  }, []);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const handleNextPage = (nextPage: number) => {
    setCurrentPage(nextPage);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Categories
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      />
      <Input />
      <div>
        {newsData?.state === "pending" && <Skeleton count={18} />}
        {newsData?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList news={NEWS} />
        )}
      </div>

      <Pagination
        totalPage={totalPage}
        setCurrentPage={handleNextPage}
        currentPage={currentPage}
      />
    </main>
  );
});

export default News;
