import { observer } from "mobx-react-lite";
import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { useEffect } from "react";
import { NewsList } from "@/widget/NewsList";
import s from "./Main.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const Main = observer(() => {
  const { newsDate, getNewsAction } = newsStore;
  useEffect(() => {
    getNewsAction();
  }, []);

  const NEWS = newsDate?.state === "fulfilled" ? newsDate.value.news : [];

  return (
    <div>
      <div className={s.wrapper}>
        {newsDate?.state === "pending" && <Skeleton count={18} />}

        {newsDate?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList news={NEWS} />
        )}
        
      </div>
    </div>
  );
});
