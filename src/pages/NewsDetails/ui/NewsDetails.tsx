import { newsStore } from "@/shared/lib/store/api/news-store/news-store";
import { observer } from "mobx-react-lite";
import s from "./NewsDetails.module.scss";
import { Image } from "@/shared/ui/Image/Image";
import { Link } from "react-router-dom";
import { CurrentNews } from "@/entities/News";
export const NewsDetails = observer(() => {
  const { currentNews } = newsStore;

  if (!currentNews) {
    return (
      <div>
        <h2>Opps something went wrong</h2>
        <Link to="/news">go to news page</Link>
      </div>
    );
  }
  return (
    <section className={s.news}>
      <CurrentNews news={currentNews} />
    </section>
  );
});
