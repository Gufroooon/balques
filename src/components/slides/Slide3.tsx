import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';

import b2 from '../../assets/b2.jpeg';

const PHOTO_URL2 = b2;

export default function Slide3() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-6 bg-brand-rose/20 relative overflow-hidden">
      
      {/* Animated Flowers Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-brand-rosegold"
            initial={{ 
              x: Math.random() * 100 + "vw", 
              y: Math.random() * 100 + "vh",
              rotate: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              rotate: 360 
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <Flower size={Math.random() * 30 + 20} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/60 to-transparent" />

      {/* Photo 2 */}
      <motion.div 
        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="z-10 relative"
      >
        <div className="w-[260px] h-[360px] md:w-[320px] md:h-[420px] rounded-t-full rounded-b-xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
          <img 
            src={PHOTO_URL2} 
            alt="Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-rosegold mix-blend-overlay opacity-30" />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="z-10 flex flex-col gap-6 max-w-md text-center md:text-right mt-8 md:mt-0">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-4xl font-serif text-brand-dark/80 leading-relaxed"
        >
          Terima kasih sudah hadir di hidup aku.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-lg md:text-xl font-sans font-light text-brand-dark/60 leading-relaxed"
        >
          Kamu membuat hari-hariku jauh lebih berwarna.
        </motion.p>
      </div>
    </div>
  );
}
