import "./App.css";
import { useState, useEffect } from "react";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
// import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Themes from "./components/Themes/Themes";
// import BarLoader from "react-spinners/BarLoader";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading && (
        <div className="loader__body">
          <p className="loader__title">Santhosh's Portfolio</p>
        </div>
      )}
      {!loading && (
        <>
          <Header />

          <main className="main">
            <Home />
            <Themes />
            <About />
            <Skills />
            {/* <Services /> */}
            <Qualification />
            <Work />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}

export default App;
