import Button from "./components/Button";
import PageOne from "./components/Overlay";
import { setHtmlLanguage } from "./components/description/translations";
import Footer from "./components/footer";
import ContactPage from "./pages/contact";
import Galeria from "./pages/galeria";
import Pespectives from "./pages/pespective";
import Services from "./pages/services";
import Sobre from "./pages/sobre";
import { Main } from "./styles/styles";

const App = () => {
  setHtmlLanguage();
  return (
    <>
      <Main>
        <Button />
        <PageOne />
        <Sobre />
        <Galeria />
        <Pespectives />
        <Services />
        <ContactPage />
        <Footer />
      </Main>
    </>
  );
};

export default App;
