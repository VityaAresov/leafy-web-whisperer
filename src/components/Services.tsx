import { TreePine, Scissors, Truck, Shield, Leaf, Hammer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Tree Pruning & Trimming",
      description: "Professional pruning to maintain tree health, safety, and aesthetic appeal. Our certified arborists use proper techniques to promote healthy growth.",
      features: ["Crown cleaning", "Deadwood removal", "Structural pruning", "Aesthetic shaping"]
    },
    {
      icon: Truck,
      title: "Tree Removal",
      description: "Safe and efficient tree removal services for dangerous, diseased, or unwanted trees. We handle trees of all sizes with specialized equipment.",
      features: ["Emergency removal", "Stump grinding", "Debris cleanup", "Insurance claims"]
    },
    {
      icon: TreePine,
      title: "Tree Planting",
      description: "Expert tree selection and planting services to enhance your landscape. We help you choose the right species for your location and conditions.",
      features: ["Species selection", "Site preparation", "Proper planting", "Initial care guidance"]
    },
    {
      icon: Shield,
      title: "Tree Health Assessment",
      description: "Comprehensive evaluation of tree health and risk assessment. Our arborists identify potential problems before they become serious issues.",
      features: ["Disease diagnosis", "Pest identification", "Risk assessment", "Treatment plans"]
    },
    {
      icon: Leaf,
      title: "Disease & Pest Control",
      description: "Targeted treatments for tree diseases and pest infestations. We use environmentally responsible methods to restore tree health.",
      features: ["Organic treatments", "Integrated pest management", "Disease prevention", "Soil improvement"]
    },
    {
      icon: Hammer,
      title: "Emergency Services",
      description: "24/7 emergency tree services for storm damage, fallen trees, and hazardous situations. Quick response to protect your property and safety.",
      features: ["Storm damage cleanup", "Hazard mitigation", "Insurance documentation", "24/7 availability"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tree Care Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tree care solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => window.open('/FILE_5943.pdf', '_blank')}
            className="inline-flex items-center justify-center rounded-md border-2 border-green-600 px-8 py-3 text-lg font-medium text-green-600 bg-white transition-colors hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

