import { Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/ContactMe";
import { ProjectDetail } from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const basename = process.env.PUBLIC_URL || "";
  const isLocalhost = window.location.hostname === "localhost";
  const isRoot = !window.location.pathname.includes("/project");

  return (
    //github pages deploy -> with basename
    // <Router basename={basename}>
    //{/* //localhost -> this <Router> */}

    <div className="App">
      <ScrollToTop />
      {isRoot && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <ContactMe />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
