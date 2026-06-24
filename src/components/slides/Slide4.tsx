import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

import b3 from '../../assets/b3.jpeg';

const PHOTO_URL3 = b3;

export default function Slide4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 px-6 bg-brand-cream/50 relative overflow-hidden">
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/30"
            initial={{ 
              x: Math.random() * 100 + "vw", 
              y: "110vh",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: "-10vh",
              x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            <Heart size={Math.random() * 40 + 20} fill="currentColor" stroke="none" />
          </motion.div>
        ))}
      </div>

      {/* Photo 3 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="z-10 relative"
      >
        <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(183,110,121,0.3)] border-[8px] border-white/80 relative">
          <img 
            src={PHOTO_URL3} 
            alt="Smile" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="z-10 flex flex-col gap-4 max-w-md text-center mt-4">
        {[
          "Aku suka cara kamu tertawa.",
          "Aku suka cara kamu bercerita.",
          "Aku suka semua hal tentang kamu."
        ].map((text, i) => (
          <motion.p 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + (i * 0.5) }}
            className={`font-serif text-brand-dark/80 leading-relaxed ${i === 2 ? 'text-2xl md:text-3xl text-brand-rosegold mt-4' : 'text-xl md:text-2xl'}`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
