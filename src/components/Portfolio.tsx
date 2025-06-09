
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tree Removal", "Pruning", "Planting", "Emergency"];

  const portfolioItems = [
    {
      id: 1,
      title: "Large Oak Tree Removal",
      category: "Tree Removal",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      description: "Safe removal of 80-foot oak tree near residential property"
    },
    {
      id: 2,
      title: "Commercial Property Pruning",
      category: "Pruning",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      description: "Comprehensive pruning of mature pine trees at office complex"
    },
    {
      id: 3,
      title: "Maple Tree Planting Project",
      category: "Planting",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop",
      description: "Strategic planting of 20 maple trees for new subdivision"
    },
    {
      id: 4,
      title: "Storm Damage Cleanup",
      category: "Emergency",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop",
      description: "Emergency removal of storm-damaged trees after severe weather"
    },
    {
      id: 5,
      title: "Crown Reduction Service",
      category: "Pruning",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      description: "Professional crown reduction to clear power lines safely"
    },
    {
      id: 6,
      title: "Diseased Tree Removal",
      category: "Tree Removal",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop",
      description: "Removal of diseased elm trees to prevent spread"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See examples of our professional tree care services and satisfied customers
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer animate-fade-in">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
