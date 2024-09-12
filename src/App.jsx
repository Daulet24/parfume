import { Header } from "./features/Header/index";
import "./shared/Styles/global.scss";
import { MainScreen } from "./features/MainScreen/index";
import CatalogScreen from "./features/CatalogScreen/index";
import { AboutScreen } from "./features/AboutSreen";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CatalogScreen />
      <AboutScreen />
    </>
  );
}

export default App;
