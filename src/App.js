import { Contacto } from "./components/contacto/Contacto";
import { Footer } from "./components/footer/Footer";
import { Inicio } from "./components/inicio/Inicio";
import { Lenguajes } from "./components/lenguajes/Lenguajes";
import { NavBar } from "./components/navbar/NavBar";
import { Proyectos } from "./components/proyectos/Proyectos";
import { SobreMi } from "./components/sobre-mi/SobreMi";
import { Observer } from "../src/helpers/observer";

function App() {
  window.addEventListener("DOMContentLoaded", (event) => {
    Observer();
  });

  return (
    <>
      <NavBar />
      <Inicio />
      <SobreMi />
      <Lenguajes />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
