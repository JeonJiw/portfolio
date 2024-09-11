import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
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
  const basename = process.env.PUBLIC_URL;
  const { id } = useParams();
  const isRoot = !window.location.pathname.includes("/project");
  return (
    // <Router basename={basename}>
    <Router>
      <ScrollToTop />
      <div className="App">
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
    </Router>
  );
}

export default App;
