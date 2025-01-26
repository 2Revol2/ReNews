import { formatDate } from "@/shared/lib/date/formatDate";
import s from "./Header.module.scss";
import { Navbar } from "../components/Navbar/Navbar";

export const Header = () => {
  console.log();
  const date = new Date();
  return (
    <>
      <header className={s.header}  >
        <div className={s.headerTop}>
          <h1 className={s.title}>ReNews</h1>
          <p className={s.date}>{formatDate({ date })}</p>
          <p>Переключатель</p>
        </div>
        <Navbar/>
      </header>
    </>
  );
};
