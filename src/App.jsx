import Navbar from "./components/Navbar";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";



import Footer from "./components/Footer";

export default function App() {
  return (
    <>

      <main className="scroll-smooth">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}