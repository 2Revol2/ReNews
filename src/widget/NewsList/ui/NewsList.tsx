import { NewsItem } from "@/entities/NewsItem/ui/NewsItem";
import { News } from "@/shared/api/news/types";
import s from './NewsList.module.scss'
interface NewsListProps {
  news: News[];
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
