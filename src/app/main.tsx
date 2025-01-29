import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import "./themes/normal.scss";
import "./themes/dark.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./provides/ErrorBoundary";
import { ThemeProvider } from "./provides/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
