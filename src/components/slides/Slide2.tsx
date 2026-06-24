import { motion } from 'framer-motion';

import b1 from '../../assets/b1.jpeg';

// Using unsplash placeholder if user doesn't have local image yet
const PHOTO_URL = b1;

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-brand-cream/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/40 to-brand-cream/60" />

      {/* Polaroid Photo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10, y: 50 }}
        animate={{ opacity: 1, scale: 1, rotate: -3, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="z-10 p-4 pb-12 bg-white rounded-sm shadow-2xl max-w-[280px] md:max-w-[350px] rotate-[-3deg] border border-gray-100 relative group"
      >
        <div className="overflow-hidden rounded-sm relative aspect-[3/4]">
          <img 
            src={PHOTO_URL} 
            alt="Beautiful" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-brand-pink mix-blend-overlay opacity-20" />
        </div>
        {/* Tape effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 z-20" />
      </motion.div>

      {/* Text Content */}
      <div className="z-10 flex flex-col gap-6 max-w-md text-center md:text-left mt-8 md:mt-0">
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-4xl font-serif text-brand-dark/80 leading-relaxed"
        >
          "Kamu makin hari makin cantik ajaa..."
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-lg md:text-xl font-sans font-light text-brand-dark/60 leading-relaxed"
        >
          Dan aku nggak pernah bosan melihat senyummu.
        </motion.p>
      </div>
    </div>
  );
}
