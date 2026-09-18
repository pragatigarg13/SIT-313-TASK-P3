import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Photos from "./Photos";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedTutorials from "./FeaturedTutorials";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Photos />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;