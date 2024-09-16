import { Header } from "./features/Header/index";
import "./shared/Styles/global.scss";
import { MainScreen } from "./features/MainScreen/index";
import CatalogScreen from "./features/CatalogScreen/index";
import { AboutScreen } from "./features/AboutSreen";
import { Form } from "./features/Form";
import { Footer } from "./features/Footer";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <CatalogScreen />
      <AboutScreen />
      <Form />
      <Footer />
    </>
  );
}

export default App;
