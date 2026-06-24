import { motion, type Variants } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface Slide1Props {
  onNext: () => void;
}

export default function Slide1({ onNext }: Slide1Props) {
  const title = "Hai Cantikku ❤️";
  const subtitle = "Aku punya sesuatu yang ingin aku sampaikan...";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-6">
      <div className="absolute inset-0 bg-brand-pink/50 backdrop-blur-3xl z-0" />
      
      <div className="z-10 flex flex-col items-center text-center max-w-2xl">
        <motion.div variants={container} initial="hidden" animate="visible" className="mb-12">
          <h1 className="text-4xl md:text-6xl text-brand-rosegold mb-6 font-serif">
            {title.split("").map((char, index) => (
              <motion.span variants={child} key={index}>
                {char}
              </motion.span>
            ))}
          </h1>
          
          <h2 className="text-lg md:text-2xl text-brand-dark/70 font-sans font-light mt-8">
            {subtitle.split("").map((char, index) => (
              <motion.span variants={child} key={index}>
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          onClick={onNext}
          className="group relative px-8 py-4 bg-brand-rosegold text-white rounded-full font-sans tracking-widest text-sm uppercase overflow-hidden shadow-lg hover:shadow-brand-rosegold/50 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-3">
            Buka Pesan <MailOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-brand-rosegold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </div>
  );
}
