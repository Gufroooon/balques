import { motion } from 'framer-motion';

interface IntroScreenProps {
  onStart: () => void;
}

const SakuraIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50,15 C45,5 35,0 25,0 C10,0 0,15 0,30 C0,40 5,50 15,60 L50,50 L15,60 C5,70 0,85 10,95 C20,105 35,100 45,90 L50,50 L45,90 C55,100 70,105 80,95 C90,85 85,70 75,60 L50,50 L75,60 C85,50 90,40 90,30 C90,15 80,0 65,0 C55,0 45,5 50,15 Z" />
    <circle cx="50" cy="50" r="8" fill="#ffb7c5" />
  </svg>
);

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark z-50 cursor-pointer"
      onClick={onStart}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-6"
      >
        <SakuraIcon className="w-16 h-16 text-rose-300" />
        <p className="text-white/70 font-sans tracking-[0.2em] uppercase text-sm font-light">
          Tap anywhere to begin
        </p>
      </motion.div>
    </motion.div>
  );
}
