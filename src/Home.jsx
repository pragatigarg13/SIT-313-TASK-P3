import About from "./About";
import Projects from "./Projects";
import Photos from "./Photos";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedTutorials from "./FeaturedTutorials";
import Subscribe from "./Subscribe";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <About />
      <Projects />
      <Photos />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
      <Contact />
    </>
  );
}

export default Home;