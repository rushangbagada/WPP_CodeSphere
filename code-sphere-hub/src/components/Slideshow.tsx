
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Sample images with proper URLs
const slideImages = [
  { 
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
    caption: "Code Your Future",
    description: "Unlock your potential with cutting-edge programming skills"
  },
  { 
    src: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
    caption: "Learn Advanced Algorithms",
    description: "Master the fundamentals of computer science and problem-solving"
  },
  { 
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
    caption: "Build Amazing Projects",
    description: "Create real-world applications with expert guidance"
  },
  { 
    src: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
    caption: "Join Our Community",
    description: "Connect with peers and mentors in a supportive environment"
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(slideImages.length).fill(false));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageLoad = (index: number) => {
    const newLoaded = [...isLoaded];
    newLoaded[index] = true;
    setIsLoaded(newLoaded);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-purple/30 bg-black/20 h-[500px] md:h-[550px]">
        {slideImages.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 absolute inset-0 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {!isLoaded[index] && (
              <div className="absolute inset-0 bg-gradient-to-r from-code-dark to-code-dark-light animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-brand-purple/50 border-t-brand-purple rounded-full animate-spin"></div>
              </div>
            )}
            
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-70"
              style={{ display: isLoaded[index] ? 'block' : 'none' }}
              onLoad={() => handleImageLoad(index)}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-purple-light to-brand-cyan animate-pulse-soft">
                  {slide.caption}
                </h2>
                <p className="text-xl text-gray-300 mb-6">{slide.description}</p>
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan  font-semibold hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-colors border border-brand-purple/30 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-colors border border-brand-purple/30 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brand-purple w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
