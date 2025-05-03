
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/data/mockData";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<string>("All");
  
  const years = ["All", ...Array.from(new Set(galleryItems.map(item => item.year)))];
  
  const filteredGalleryItems = yearFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.year === yearFilter);

  const openImage = (url: string, caption: string) => {
    setSelectedImage(url);
    setSelectedCaption(caption);
  };

  return (
    <div>
      <HeroSection 
        title="Gallery" 
        subtitle="Photos and memories from TPL events and matches"
        ctaText=""
        ctaLink=""
        bgImage="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Photo Gallery" 
            subtitle="Captured moments from TPL matches and events"
          />
          
          <div className="mt-8 flex flex-wrap gap-3 mb-8">
            {years.map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-full transition-colors ${
                  yearFilter === year 
                    ? "bg-tpl-navy text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setYearFilter(year)}
              >
                {year}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGalleryItems.map((item) => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer card-hover group"
                onClick={() => openImage(item.url, item.caption)}
              >
                <div className="relative h-60">
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium text-sm">{item.caption}</p>
                      <div className="flex justify-between mt-1 text-xs text-gray-300">
                        <span>{item.year}</span>
                        <span>{item.event}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-black/70"
            >
              ✕
            </button>
            {selectedImage && (
              <div>
                <img 
                  src={selectedImage} 
                  alt={selectedCaption || "Gallery image"} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                {selectedCaption && (
                  <div className="bg-black/70 p-4">
                    <p className="text-white text-center">{selectedCaption}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Dialog>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-tpl-navy mb-6">Submit Your Photos</h2>
            <p className="text-lg text-gray-700 mb-8">
              Did you capture some exciting moments from TPL matches? Share your photos with us and they might be featured in our gallery!
            </p>
            <button className="btn-primary">Upload Photos</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
