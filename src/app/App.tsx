import { Header } from "@/widget/Header";
import { AppRouter } from "./provides/routes";
import "./themes/dark.scss";
import { useTheme } from "./provides/ThemeProvider";

export const App = () => {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
};
