import { X } from "lucide-react";

interface PopupGalleryProps {
  images: string[];
  onClose: () => void;
}

export const PopupGallery = ({ images, onClose }: PopupGalleryProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-rose-500 hover:bg-rose-600 text-white p-1.5 rounded-full transition-colors z-20"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 gap-4 p-6 md:grid-cols-4 lg:gap-6">
          {images.map((src, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg border-2 border-gray-100 hover:border-gray-300 transition-all"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
