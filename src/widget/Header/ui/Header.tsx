import { formatDate } from "@/shared/lib/date/formatDate";
import s from "./Header.module.scss";
import { Navbar } from "../components/Navbar/Navbar";
import { useMobile } from "@/shared/lib/hooks/useMobile";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "@/app/provides/ThemeProvider";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  const date = new Date();
  const isMobile = useMobile(600);

  return (
    <>
      <header className={s.header}>
        <div className={s.headerTop}>
          {isMobile ? (
            <div>
              <h1 className={s.title}>ReNews</h1>
              <p className={s.date}>{formatDate({ date })}</p>
            </div>
          ) : (
            <>
              <h1 className={s.title}>ReNews</h1>
              <p className={s.date}>{formatDate({ date })}</p>
            </>
          )}

          <button className={s.theme} onClick={toggleTheme}>
            {isDark ? <FaMoon /> : <LuSun />}
          </button>
        </div>
        <Navbar />
      </header>
    </>
  );
};
