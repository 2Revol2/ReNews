import { observer } from "mobx-react-lite";
import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { useEffect } from "react";
import { NewsList } from "@/widget/NewsList";
import s from "./Main.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const Main = observer(() => {
  const { latestNews, getLatestNewsAction } = newsStore;

  useEffect(() => {
    getLatestNewsAction();
  }, []);

  const NEWS = latestNews?.state === "fulfilled" ? latestNews.value.news : [];

  return (
    <main>
      <div>
        <div className={s.title}>
          <h3>Latest News</h3>
        </div>

        {latestNews?.state === "pending" && <Skeleton count={18} />}

        {latestNews?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList news={NEWS} />
        )}
      </div>
    </main>
  );
});
