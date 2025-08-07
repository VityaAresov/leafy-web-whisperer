
import { CheckCircle, Award, Users, TreePine } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Arborist Tree Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience, we're your trusted local tree care specialists
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Certified Arborists Committed to Excellence
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Arborist Tree Care started as a small family business with a deep respect for trees and the people who care for them.
             Today, we’re a trusted team focused on honest work, expert care, 
             and doing what’s best for both our customers and their trees.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">ISA Certified Arborists on staff</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Fully licensed and insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Emergency 24/7 services available</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Eco-friendly practices</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">13+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <TreePine className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">3000+</p>
                <p className="text-sm text-gray-600">Trees Serviced</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Yb2JWGgz_0E"
                  title="About TreeCare Pro - Professional Tree Services"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Watch our story and see why customers trust Arborist Tree Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
