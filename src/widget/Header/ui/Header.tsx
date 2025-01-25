import { formatDate } from "@/shared/lib/date/formatDate";
import s from "./Header.module.scss";

export const Header = () => {
  console.log();
  const date = new Date();
  return (
    <header className={s.header}>
      <h1 className={s.title}>ReNews</h1>
      <p className={s.date}>{formatDate({ date })}</p>
      <p>Тема</p>
    </header>
  );
};
