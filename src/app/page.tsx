import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import FaqAccordion from "@/components/FaqAccordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 w-full">
        <Hero />
        <LogoCarousel />
        <About />
        <Services />
        <Solutions />
        <Portfolio />
        <WhyChooseUs />
        <ProcessTimeline />
        <FaqAccordion />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
