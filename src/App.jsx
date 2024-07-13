import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import MainPage from "./pages/MainPage";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
