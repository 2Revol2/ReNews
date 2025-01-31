import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { observer } from "mobx-react-lite";
import s from "./NewsDetails.module.scss";
import { Link } from "react-router-dom";
import { CurrentNews } from "@/entities/News";
export const NewsDetails = observer(() => {
  const { currentNews } = newsStore;

  if (!currentNews) {
    return (
      <div className={s.problem}>
        <h2>Oops! Something went wrong</h2>
        <Link className={s.link} to="/news">go to news page</Link>
      </div>
    );
  }
  return (
    <main className={s.news}>
      <CurrentNews news={currentNews} />
    </main>
  );
});
