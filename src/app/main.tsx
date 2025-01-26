import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./provides/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
