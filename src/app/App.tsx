import { Main } from "@/pages/Main";
import { Header } from "@/widget/Header";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};
