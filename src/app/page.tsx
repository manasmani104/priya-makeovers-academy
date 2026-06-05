import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Academy from "@/components/sections/Academy";
import StudentSuccess from "@/components/sections/StudentSuccess";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Academy />
      <StudentSuccess />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
