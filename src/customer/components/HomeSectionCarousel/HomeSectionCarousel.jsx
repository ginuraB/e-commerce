import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false); // State to control the visibility of the left arrow

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    setActiveIndex(prevIndex => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
      setShowLeftArrow(newIndex > 0); // Hide the left arrow if we are at the first slide
      return newIndex;
    });
  };

  const slideNext = () => {
    setActiveIndex(prevIndex => {
      const newIndex = prevIndex < 7 ? prevIndex + 1 : 7;
      setShowLeftArrow(true); // Show the left arrow once we've moved from the first slide
      return newIndex;
    });
  };

  const syncactiveIndex = ({ item }) => setActiveIndex(item);

  const items = Array(8).fill(<HomeSectionCard />);

  return (
    <div className="px-6 lg:px-10 py-10 bg-gray-50">
      <h2 className="text-xl lg:text-2xl font-semibold mb-5 text-center text-gray-800">
        Featured Products
      </h2>
      <div className="relative">
        <AliceCarousel
          items={items}
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncactiveIndex}
          activeIndex={activeIndex}
          renderPrevButton={() =>
            showLeftArrow && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg transition"
                style={{ zIndex: 10 }}
                onClick={slidePrev}
                aria-label="Previous Slide"
              >
                <ArrowLeftIcon />
              </button>
            )
          }
          renderNextButton={() => (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg transition"
              style={{ zIndex: 10 }}
              onClick={slideNext}
              aria-label="Next Slide"
            >
              <ArrowRightIcon />
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
