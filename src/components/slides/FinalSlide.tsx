import { motion } from 'framer-motion';

export default function FinalSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-brand-dark relative overflow-hidden">
      
      {/* Cinematic elegant background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-rosegold/20 via-brand-dark to-brand-dark z-0" />

      {/* Falling Rose Petals Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const duration = Math.random() * 5 + 5;
          const delay = Math.random() * 5;
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-brand-rose/60 rounded-tl-full rounded-br-full"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `-10vh`,
              }}
              animate={{
                y: "110vh",
                x: `calc(${Math.random() * 100}vw)`,
                rotate: [0, 180, 360],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>

      {/* Subtle Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen">
         {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-cream/40 rounded-full"
            initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
            animate={{ 
              y: [null, `${Math.random() * 100}vh`],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="z-20 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-cream to-brand-rosegold text-glow mb-8"
        >
          Aku Sayang Kamu<br/>Balques ❤️
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="text-xl md:text-2xl font-serif text-white/80 mt-4"
        >
          Lebih dari kemarin.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4 }}
          className="text-xl md:text-2xl font-serif text-white/80 mt-2"
        >
          Dan akan terus bertambah setiap harinya.
        </motion.p>
      </div>
    </div>
  );
}
