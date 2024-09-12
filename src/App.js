import { Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ContactMe } from "./components/ContactMe";
import { ProjectDetail } from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #skills, #projects)
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the # from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const isRoot = !location.pathname.includes("/project");

  return (
    //github pages deploy -> with basename
    // <Router basename={basename}>
    //{/* //localhost -> this <Router> */}

    <div className="App">
      <ScrollToTop />
      <NavBar />
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
