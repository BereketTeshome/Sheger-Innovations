import { Outlet } from "react-router";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

const LandingPageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
