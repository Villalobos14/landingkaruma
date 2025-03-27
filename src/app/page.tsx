import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <About/>
      <Work/>
      <Team/>
      <Footer/>
    </>
  );
}
