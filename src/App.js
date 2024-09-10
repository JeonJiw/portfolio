import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/ContactMe";
import { ProjectDetail } from "./components/ProjectDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import "./App.css";

function App() {
  const scrollRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <NavBar scrollRef={scrollRef} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner scrollRef={scrollRef} />
                <Skills />
                <Projects />
                <ContactMe ref={scrollRef} />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
