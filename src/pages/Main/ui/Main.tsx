import { observer } from "mobx-react-lite";
import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { useEffect, useState } from "react";
import { NewsList } from "@/widget/NewsList";
import s from "./Main.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Pagination } from "@/shared/ui/Pagination/Pagination";

export const Main = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { newsDate, getNewsAction } = newsStore;
  const totalPage = 15;
  const pageSize = 18;

  useEffect(() => {
    getNewsAction(currentPage, pageSize);
  }, [currentPage]);

  const NEWS = newsDate?.state === "fulfilled" ? newsDate.value.news : [];

  return (
    <div>
      <div className={s.wrapper}>
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
    </div>
  );
});
