import { Header } from "../Header/index";
import "../../shared/Styles/global.scss";
import { MainScreen } from "../MainScreen/index";
import { AboutScreen } from "../AboutSreen/index";
import { Form } from "../Form";
import { Footer } from "../Footer";
// import { CatalogPage } from "../CatalogPage";
import { CatalogScreen } from "../CatalogScreen/index";

export function MainPage() {
  return (
    <>
      <div className="container">
        <Header />
        <MainScreen />
        <CatalogScreen />
        <AboutScreen />
        <Form />
        <Footer />
      </div>
    </>
  );
}
