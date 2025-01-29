import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import s from "./ThemeButton.module.scss";

interface ThemeButtonProps {
  isDark: boolean;
  toggleTheme: () => void;
}
export const ThemeButton = ({ isDark, toggleTheme }: ThemeButtonProps) => {
  return (
    <button className={s.theme} onClick={toggleTheme}>
      {isDark ? <FaMoon /> : <LuSun />}
    </button>
  );
};
