import { NewsType } from "@/shared/api/news/types";
import s from "./NewsItem.module.scss";
import { Image } from "@/shared/ui/Image/Image";
import { formatTimeAgo } from "@/shared/lib/date/formatTimeAgo";

interface NewsProps {
  news: NewsType;
  viewNewsDetails: (news: NewsType) => void;
}

export const NewsItem = ({ news, viewNewsDetails }: NewsProps) => {
  return (
    <div className={s.banner} onClick={() => viewNewsDetails(news)}>
      <Image image={news.image} />
      <h3 className={s.title}>{news.title}</h3>
      <p className={s.info}>
        {formatTimeAgo(news.published)} by {news.author}
      </p>
    </div>
  );
};
