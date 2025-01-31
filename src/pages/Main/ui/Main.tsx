import { observer } from "mobx-react-lite";
import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { useEffect } from "react";
import { NewsList } from "@/widget/NewsList";
import s from "./Main.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { useNavigate } from "react-router-dom";
import { NewsType } from "@/shared/api/news/types";

const Main = observer(() => {
  const { latestNews, getLatestNewsAction, setLatestCurrentNews } = newsStore;

  useEffect(() => {
    getLatestNewsAction();
  }, []);
  const NEWS = latestNews?.state === "fulfilled" ? latestNews.value.news : [];

  // переход на страницу новости
  const navigate = useNavigate();
  const viewNewsDetails = (news: NewsType) => {
    setLatestCurrentNews(news);
    navigate(`/latest-news/${news.id}`);
  };

  return (
    <main>
      <div>
        <h3 className={s.title}>Latest News</h3>

        {latestNews?.state === "pending" && <Skeleton count={18} />}

        {latestNews?.state === "fulfilled" && NEWS.length > 0 && (
          <NewsList viewNewsDetails={viewNewsDetails} news={NEWS} />
        )}
      </div>
    </main>
  );
});

export default Main;
