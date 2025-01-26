import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { NewsList } from "@/widget/NewsList";
import { useEffect, useState } from "react";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { observer } from "mobx-react-lite";
export const News = observer(() => {
  const { newsDate, getNewsAction } = newsStore;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = 15;
  const pageSize = 18;

  const NEWS = newsDate?.state === "fulfilled" ? newsDate.value.news : [];

  useEffect(() => {
    getNewsAction(currentPage, pageSize);
  }, [currentPage]);

  return (
    <main>
      <div>
        {newsDate?.state === "pending" && <Skeleton count={18} />}
        {newsDate?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList news={NEWS} />
        )}
      </div>

      <Pagination
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
});
