import { NewsType } from "@/shared/api/news/types";
import { Image } from "@/shared/ui/Image/Image";
import s from "./CurrentNews.module.scss";
import { formatTimeAgo } from "@/shared/lib/date/formatTimeAgo";
interface CurrentNewsProps {
  news: NewsType;
}

export const CurrentNews = ({ news }: CurrentNewsProps) => {
  return (
    <section className={s.details}>
      <div className={s.wrapper}>
        <div>
          <h3 className={s.title}>{news.title}</h3>
          <div className={s.info}>
            <p className={s.time}>
              {formatTimeAgo(news.published)} by {news.author}
            </p>
            <ul>
              {news.category.map((item, index) => {
                return <li className={s.category} key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <Image image={news.image} />
        <p className={s.description}>
          {news.description}
          <a href={news.url} target="_blank">
            read more
          </a>
        </p>
      </div>
    </section>
  );
};
