import React from "react";
import { Header } from "./features/Header/index";
import "../src/shared/styles/global.scss";
import { MainScreen } from "./features/MainScreen/index";
import { CatalogScreen } from "./features/CatalogScreen/index";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CatalogScreen />
    </>
  );
}

export default App;
