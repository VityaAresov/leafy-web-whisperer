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
    // Ваш массив данных portfolioItems остается без изменений
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
     // ... и остальные ваши проекты
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Функция для открытия pop-up
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedImageIndex(0); // Сбрасываем индекс на 0 при открытии нового проекта
  };

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
              onClick={() => handleItemClick(item)} // Используем новую функцию
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
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
            {selectedItem && (
              <>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 z-50 bg-gray-100/70 backdrop-blur-sm rounded-full p-1.5 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className="p-6">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      {selectedItem.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[450px]">
                      <div className="lg:col-span-3 h-full rounded-lg overflow-hidden shadow-md">
                        <img
                          src={selectedItem.additionalImages[selectedImageIndex]}
                          alt={`${selectedItem.title} - Image ${selectedImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="hidden lg:flex flex-col gap-3 h-full overflow-y-auto pr-1">
                        {selectedItem.additionalImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`w-full aspect-[16/10] rounded-md overflow-hidden transition-all duration-200 focus:outline-none group ${
                              selectedImageIndex === index
                                ? 'ring-2 ring-green-500 ring-offset-2'
                                : 'opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                          </button>
                        ))}
                      </div>
                    </div>

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

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedItem.detailedDescription}</p>
                    </div>

                    <div className="lg:hidden">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Gallery</h4>
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedItem.additionalImages.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedItem.title} - Image ${index + 1}`} className="w-full h-full object-cover"/>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
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
