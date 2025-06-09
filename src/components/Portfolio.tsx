import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Images } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = ["All", "Tree Removal", "Pruning", "Planting", "Emergency"];

  const portfolioItems = [
    {
      id: 1,
      title: "Large Oak Tree Removal",
      category: "Tree Removal",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      description: "Safe removal of 80-foot oak tree near residential property",
      detailedDescription: "This challenging project involved the careful removal of an 80-foot oak tree that was threatening a residential property. Our certified arborists used specialized equipment and techniques to safely dismantle the tree in sections, ensuring no damage to the nearby house or landscaping.",
      duration: "2 days",
      location: "Residential Property, Green Valley",
      additionalImages: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Commercial Property Pruning",
      category: "Pruning",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      description: "Comprehensive pruning of mature pine trees at office complex",
      detailedDescription: "Annual maintenance pruning of 25 mature pine trees at a commercial office complex. The work included crown thinning, deadwood removal, and structural pruning to improve tree health and reduce wind resistance while maintaining the aesthetic appeal of the landscape.",
      duration: "1 week",
      location: "Corporate Office Complex, Business District",
      additionalImages: [
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Maple Tree Planting Project",
      category: "Planting",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop",
      description: "Strategic planting of 20 maple trees for new subdivision",
      detailedDescription: "Complete landscape installation for a new residential subdivision featuring 20 Red Maple trees. The project included soil preparation, proper spacing calculations, installation of root barriers, and establishment of an irrigation system to ensure optimal growth.",
      duration: "3 days",
      location: "New Subdivision, Maple Heights",
      additionalImages: [
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1462400362591-9ca55235346a?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Storm Damage Cleanup",
      category: "Emergency",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop",
      description: "Emergency removal of storm-damaged trees after severe weather",
      detailedDescription: "24-hour emergency response to severe storm damage affecting multiple properties. Our team safely removed fallen trees from roadways, cleared debris from power lines, and assessed remaining trees for safety hazards. Work was coordinated with local utilities and emergency services.",
      duration: "Emergency - 12 hours",
      location: "Multiple locations, Storm-affected area",
      additionalImages: [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Crown Reduction Service",
      category: "Pruning",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      description: "Professional crown reduction to clear power lines safely",
      detailedDescription: "Precision crown reduction work to provide clearance from electrical power lines while maintaining tree health and structure. The project required close coordination with the utility company and careful attention to proper pruning cuts to prevent future problems.",
      duration: "1 day",
      location: "Residential Street, Oakwood",
      additionalImages: [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1440342359438-84a27d6c95ba?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Diseased Tree Removal",
      category: "Tree Removal",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop",
      description: "Removal of diseased elm trees to prevent spread",
      detailedDescription: "Identification and removal of Dutch Elm Disease infected trees to prevent spread to healthy specimens. The work included proper disposal of infected material, soil treatment, and recommendations for replacement plantings with disease-resistant species.",
      duration: "2 days",
      location: "City Park, Heritage District",
      additionalImages: [
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ]
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
            <div 
              key={item.id} 
              className="group cursor-pointer animate-fade-in"
              onClick={() => setSelectedItem(item)}
            >
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

        {/* Portfolio Detail Modal with Gallery */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Gallery Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Main Image */}
                    <div className="lg:col-span-2">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={selectedItem.additionalImages[selectedImageIndex]}
                          alt={`${selectedItem.title} - Image ${selectedImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                        {selectedItem.additionalImages.slice(0, 4).map((image, index) => (
                          <div 
                            key={index} 
                            className={`aspect-video overflow-hidden rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedImageIndex === index 
                                ? 'ring-2 ring-green-500 opacity-100' 
                                : 'opacity-70 hover:opacity-100'
                            }`}
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <img
                              src={image}
                              alt={`${selectedItem.title} - Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      
                      {selectedItem.additionalImages.length > 4 && (
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                          <Images className="h-4 w-4" />
                          <span className="text-sm font-medium">Show all {selectedItem.additionalImages.length} photos</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Category</h4>
                      <p className="text-green-700">{selectedItem.category}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Duration</h4>
                      <p className="text-blue-700">{selectedItem.duration}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Location</h4>
                      <p className="text-purple-700">{selectedItem.location}</p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedItem.detailedDescription}</p>
                  </div>

                  {/* Image Carousel for Mobile */}
                  <div className="lg:hidden">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Gallery</h4>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedItem.additionalImages.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`${selectedItem.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
