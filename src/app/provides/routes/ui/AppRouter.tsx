import { Main } from "@/pages/Main";
import { News } from "@/pages/News";
import { Paths } from "@/shared/config/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path={Paths.MAIN} element={<Main />} />
        <Route path={Paths.NEWS} element={<News />} />
      </Routes>
    </Suspense>
  );
};
