import React from "react";
import { lazy, Suspense } from "react";
import Testimonials from "../components/Testimonials";
import Loader from "../components/Loader";
import FAQ from "../components/FAQ";

const Header = lazy(() => import("../components/Header"));
const Services = lazy(() => import("../components/Services"));

const MainPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Services />
      <FAQ />
      <Testimonials />
    </Suspense>
  );
};

export default MainPage;
