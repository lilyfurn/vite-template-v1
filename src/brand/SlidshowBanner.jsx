import { useState, useEffect } from "react";

const SlideshowBanner = () => {
  const slides = [
    {
      title: "Innovative Technology",
      description:
        "At Laibel Labs, we create cutting-edge blockchain and AI solutions to empower businesses worldwide.",
      image: "/images/slide1.jpg",
    },
    {
      title: "Trusted Expertise",
      description:
        "With over a decade of experience, our team has been recognized as industry leaders in technology innovation.",
      image: "/images/slide2.jpg",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Our solutions are tailored to meet unique business needs, ensuring success and scalability.",
      image: "/images/slide3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl font-extrabold text-white">
              {slide.title}
            </h2>
            <p className="mt-4 text-lg text-gray-200">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index
                ? "bg-white"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlideshowBanner;
