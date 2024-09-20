import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatalogPage from "./features/CatalogPage";
import { Inform } from "./features/Inform/index.jsx";
import { Header } from "./features/Header";
import { MainPage } from "./features/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/inform",
    element: <Inform />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/MainPage",
    element: <MainPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
