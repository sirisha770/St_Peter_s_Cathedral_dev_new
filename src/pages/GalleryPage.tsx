import { useState } from "react";
import { Camera, X } from "lucide-react";

import churchHeroImage from "@/assets/church-hero.jpg";
import reconstructionImage from "@/assets/reconstruction.jpg";
import congregationImage from "@/assets/gallery/congregation.jpg";
import altarImage from "@/assets/gallery/altar.jpg";
import outreachImage from "@/assets/gallery/outreach.jpg";
import choirImage from "@/assets/gallery/choir.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["All", "Church", "Events", "Reconstruction", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    { src: "/images/29.jpg", title: "St. Peters Church Blessed Virgin Mary", category: "Church" },
    { src: "/images/13.jpg", title: "St. Peters Church Sacred place", category: "Church" },
    { src: "/images/61.jpg", title: "Beautiful Church Altar", category: "Church" },
    { src: "/images/55.jpg", title: "Sunday Worship Service", category: "Events" },
    { src: "/images/49.jpg", title: "Church Youth Fellowship Gathering", category: "Youth Ministry" },
    { src: "/images/70.jpg", title: "Reconstruction Progress", category: "Reconstruction" },
    { src: "/images/62.jpg", title: "Sacred Altar", category: "Church" },
    { src: "/images/63.jpg", title: "Holy Tabernacle", category: "Church" },
    { src: "/images/64.jpg", title: "Mass Celebration", category: "Church" },
    { src: "/images/57.jpg", title: "Youth Christmas Moments", category: "Church" },
    { src: "/images/30.jpg", title: "Grotto Church", category: "Church" },
    { src: "/images/12.jpg", title: "Prayer Of Burial", category: "Community" },






  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy via-navy to-navy-dark"
        style={{
          backgroundImage: "url('/images/66.jpg')", backgroundSize: "100% auto", backgroundPosition: "center", width: "100%", height: "450px",
        }}
      >
        <div className="container-church px-4 text-center">
          {/* <Camera className="w-16 h-16 mx-auto mb-6 text-gold" /> */}
          {/* <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Photo  <span className="text-gradient-gold">Gallery</span>
          </h1> */}
          {/* <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore moments of faith, community, and our reconstruction journey
            through these cherished photographs.
          </p> */}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-church px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                  ? "bg-gold text-navy-dark"
                  : "bg-muted text-muted-foreground hover:bg-gold/20 hover:text-gold"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item.src)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer card-church p-0"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-1 bg-gold/90 text-navy-dark text-xs font-medium rounded mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
