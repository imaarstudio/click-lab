import Hero from "./sections/Hero";
import Clients from "./sections/Clients";
import WhyUs from "./sections/WhyUs";
import Works from "./sections/Works";
import Testimonials from "./sections/Testimonials";
import Stats from "./sections/Stats";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Statement from "./sections/Statement";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <WhyUs />
      <Works />
      <Statement />
      <Testimonials />
      <Stats />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
