import { motion } from 'framer-motion';

import b4 from '../../assets/b4.jpeg';
import b5 from '../../assets/b5.jpeg';
import b6 from '../../assets/b6.jpeg';

const SCRAPBOOK_PHOTOS = [
  {
    url: b4,
    caption: "Mukaa lucuu kamuuuu 💖",
    rotation: -4,
    x: -40,
    y: -20
  },
  {
    url: b5,
    caption: "Senyum favoritkuuuu ✨",
    rotation: 3,
    x: 40,
    y: 10
  },
  {
    url: b6,
    caption: "Senyum manisnyaaa 🌸",
    rotation: -2,
    x: -10,
    y: 50
  }
];

export default function Slide5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-[#faf8f5] relative overflow-hidden">
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 text-3xl md:text-4xl font-serif text-brand-rosegold/80 z-20"
      >
        Kepingan Memori
      </motion.h2>

      <div className="relative w-full max-w-2xl h-[60vh] flex items-center justify-center mt-12">
        {SCRAPBOOK_PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation * 3 }}
            animate={{ opacity: 1, scale: 1, rotate: photo.rotation, x: photo.x, y: photo.y }}
            transition={{ duration: 1, delay: i * 0.3, type: "spring" }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 0, 
              zIndex: 30,
              boxShadow: "0 0 30px rgba(254, 205, 211, 0.6)" 
            }}
            whileTap={{ scale: 1.1, rotate: 0, zIndex: 30 }}
            className="absolute p-3 pb-10 bg-white shadow-xl cursor-pointer group border border-gray-100 transition-all duration-300 w-[180px] md:w-[240px]"
          >
            <div className="w-full aspect-square overflow-hidden mb-2">
              <img 
                src={photo.url} 
                alt="Memori" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm rotate-[-2deg] shadow-sm z-10" />
            
            {/* Caption (Visible on Hover/Tap) */}
            <div className="absolute bottom-3 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-serif text-brand-dark/80 text-sm md:text-base italic">
                {photo.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
