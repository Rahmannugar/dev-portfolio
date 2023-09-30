import React from "react";
import Navbar from "./pages/Navbar";
import Top from "./pages/Top";
import LogoSection from "./pages/LogoSection";
import ImageSection from "./pages/ImageSection";
import MiddleSection from "./pages/MiddleSection";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="bg-black text-white w-screen h-screen">
      <Navbar />
      <Top />
      <LogoSection />
      <ImageSection />
      <MiddleSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
