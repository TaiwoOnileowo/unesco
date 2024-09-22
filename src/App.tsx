import About from "./components/About";
import Executives from "./components/Executives";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import WhatWeDo from "./components/WhatWeDo";

const App = () => {
  return (
    <div className="min-h-screen w-full relative ">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Quote />
      <Executives/>
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
