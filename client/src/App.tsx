import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PortfolioLayout from "./components/layout/PortfolioLayout";

import Hero from "./sections/Hero";
//import About from "./sections/About";
//import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

import ProjectDetails from "./pages/ProjectDetails";

import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import DevelopmentProcess from "./components/about/DevelopmentProcess";
import ContactSection from "./sections/ContactSection";
const Home = () => {
  return (
    <>
      <Hero />

      {/* <About /> */}
      <AboutSection/>
      {/* <Skills /> */}
      <SkillsSection/>
      <DevelopmentProcess/>
      <Education />

      <Projects />
      <ContactSection/>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<PortfolioLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />

          <Route
  path="/projects/:slug"
  element={<ProjectDetails />}
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;