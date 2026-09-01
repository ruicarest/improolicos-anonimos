import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Actors from "./components/Actors";
import Gallery from "./components/Gallery";
import InstagramSection from "./components/InstagramSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Actors />
        <Gallery />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
