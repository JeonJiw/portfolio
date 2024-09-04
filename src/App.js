import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/ContactMe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import "./App.css";

function App() {
  const scrollRef = useRef(null);

  return (
    <div className="App">
      <NavBar scrollRef={scrollRef} />
      <Banner scrollRef={scrollRef} />
      <Skills />
      <Projects />
      <ContactMe ref={scrollRef} />
      <Footer />
    </div>
  );
}

export default App;
