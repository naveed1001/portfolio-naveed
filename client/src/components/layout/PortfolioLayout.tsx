import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import BackToTop from "../common/BackToTop";

const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
};

export default PortfolioLayout;