import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import MainPage from "./pages/MainPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
