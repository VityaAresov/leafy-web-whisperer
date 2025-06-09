
import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine, Shield, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Tree Care <span className="text-green-600">You Can Trust</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert tree services including pruning, removal, and health assessments. 
              Serving your community with 15+ years of experience and certified arborists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                View Services
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <TreePine className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">500+ Trees</p>
                <p className="text-xs text-gray-600">Successfully Cared For</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Fully Insured</p>
                <p className="text-xs text-gray-600">Licensed & Bonded</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">15+ Years</p>
                <p className="text-xs text-gray-600">Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
              alt="Professional tree care services"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
