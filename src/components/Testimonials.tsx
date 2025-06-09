import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000); // Auto-scroll every 4 seconds

      return () => clearInterval(autoScroll);
    }
  }, [emblaApi]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown Resident",
      rating: 5,
      text: "TreeCare Pro did an amazing job removing a large dead tree from our backyard. Their team was professional, efficient, and cleaned up everything perfectly. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Commercial Property Manager",
      rating: 5,
      text: "We've been using TreeCare Pro for our office complex for 3 years. Their regular maintenance keeps our trees healthy and beautiful. Great service and fair pricing.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Homeowner",
      rating: 5,
      text: "After the storm, TreeCare Pro responded within 2 hours to remove a fallen tree from our driveway. They were quick, safe, and reasonably priced. True professionals!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Suburban Homeowner",
      rating: 5,
      text: "The team did excellent work pruning our old maple trees. They explained everything they were doing and left our yard cleaner than they found it. Will definitely use again.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "Property Developer",
      rating: 5,
      text: "TreeCare Pro helped us with landscape planning for our new development. Their expertise in tree selection and placement was invaluable. Very knowledgeable team!",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Restaurant Owner",
      rating: 5,
      text: "They saved our beautiful oak tree that was showing signs of disease. The treatment was effective and the tree is thriving again. Excellent diagnostic skills and care.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          <Carousel
            ref={emblaRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-0 bg-white h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <Quote className="h-8 w-8 text-green-600 mr-3" />
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                      <div className="flex items-center mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center mr-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-lg font-bold text-gray-900">4.9/5</span>
            </div>
            <div className="text-gray-600">
              Based on <strong>200+</strong> customer reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
