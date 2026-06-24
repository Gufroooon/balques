import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2 } from 'lucide-react'; // Placeholder for the 3D rose

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds loading
    const interval = 50;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit at 100% before cinematic transition
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Use progress to calculate flower bloom scale and rotation
  const scale = 0.5 + (progress / 100) * 1.5;
  const rotate = (progress / 100) * 180;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark z-40 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Flower Animation container */}
        <motion.div 
          className="relative w-48 h-48 flex items-center justify-center"
          animate={{ scale, rotate }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          {/* Replace this icon with an actual image of a rose if available */}
          <Flower2 
            className="w-full h-full text-brand-rose drop-shadow-[0_0_15px_rgba(254,205,211,0.5)]" 
            strokeWidth={1}
          />
        </motion.div>

        {/* Loading text and bar */}
        <div className="mt-16 flex flex-col items-center gap-4 w-64">
          <span className="text-white/60 font-sans tracking-[0.3em] uppercase text-xs font-light">
            Memulai Kenangan...
          </span>
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 bg-brand-rose"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          <span className="text-white/40 font-mono text-xs">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Cinematic Petals effect at 100% */}
      <AnimatePresence>
        {progress === 100 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-brand-rose/20 blur-[100px] rounded-full mix-blend-screen" />
            {/* Generate random glowing particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"
                initial={{ 
                  x: "50vw", y: "50vh", 
                  opacity: 1, scale: Math.random() * 2 + 1 
                }}
                animate={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  opacity: 0,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
