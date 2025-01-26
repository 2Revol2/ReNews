import { Header } from "@/widget/Header";
import { AppRouter } from "./provides/routes";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
};
