import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import FinalSlide from './slides/FinalSlide';

import SakuraFalling from './effects/SakuraFalling';

const TOTAL_SLIDES = 8;

export default function MainExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const touchStartY = useRef(0);

  const goToNext = () => {
    if (isAnimating || currentSlide === TOTAL_SLIDES - 1) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 1000); // Prevent rapid scrolling
  };

  const goToPrev = () => {
    if (isAnimating || currentSlide === 0) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) goToNext();
      else if (e.deltaY < -50) goToPrev();
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isAnimating]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    
    if (diff > 50) goToNext();
    else if (diff < -50) goToPrev();
  };

  // The slides array
  const slides = [
    <Slide1 key="s1" onNext={goToNext} />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
    <Slide4 key="s4" />,
    <Slide5 key="s5" />,
    <Slide6 key="s6" />,
    <Slide7 key="s7" />,
    <FinalSlide key="s8" />
  ];

  return (
    <div 
      className="relative w-full h-screen bg-brand-pink text-brand-dark overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
          <SakuraFalling />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <button 
          onClick={goToPrev}
          className={`p-3 rounded-full glass-panel transition-all duration-300 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-white/20'}`}
        >
          <ChevronUp className="w-6 h-6 text-brand-rosegold" />
        </button>
        
        {/* Indicators */}
        <div className="flex flex-col items-center gap-2 py-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <div 
              key={i} 
              className={`w-2 rounded-full transition-all duration-500 ${currentSlide === i ? 'h-8 bg-brand-rosegold' : 'h-2 bg-brand-rosegold/30'}`} 
            />
          ))}
        </div>

        <button 
          onClick={goToNext}
          className={`p-3 rounded-full glass-panel transition-all duration-300 ${currentSlide === TOTAL_SLIDES - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-white/20'}`}
        >
          <ChevronDown className="w-6 h-6 text-brand-rosegold" />
        </button>
      </div>
    </div>
  );
}
