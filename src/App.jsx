import Navbar from "./components/Navbar";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";



export default function App() {
  return (
    <>
      <Navbar />

      <main className="scroll-smooth">
        <Home />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}