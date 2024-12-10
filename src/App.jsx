import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skills";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
