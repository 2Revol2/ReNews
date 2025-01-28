import { NewsItem } from "@/entities/News";
import { NewsType } from "@/shared/api/news/types";
import s from "./NewsList.module.scss";
interface NewsListProps {
  news: NewsType[];
}
export const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={s.list}>
      {news.map((item) => {
        return (
          <li className={s.news} key={item.id}>
            <NewsItem news={item} />
          </li>
        );
      })}
    </ul>
  );
};
