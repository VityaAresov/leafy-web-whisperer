
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
    <main className="min-h-screen" role="main">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Index;
