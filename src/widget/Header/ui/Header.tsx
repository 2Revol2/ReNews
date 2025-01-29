import { formatDate } from "@/shared/lib/date/formatDate";
import s from "./Header.module.scss";
import { Navbar } from "../components/Navbar/Navbar";
import { useMobile } from "@/shared/lib/hooks/useMobile";
import { useTheme } from "@/app/provides/ThemeProvider";
import { ThemeButton } from "@/features/theme";

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

          <ThemeButton isDark={isDark} toggleTheme={toggleTheme} />
        </div>
        <Navbar />
      </header>
    </>
  );
};
