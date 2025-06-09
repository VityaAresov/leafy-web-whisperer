
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
