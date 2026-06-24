import { motion } from 'framer-motion';

export default function Slide6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-[#0a0a1a] relative overflow-hidden">
      
      {/* Night Sky Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "vw",
              top: Math.random() * 100 + "vh",
            }}
            animate={{ 
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
        {/* Shooting Star */}
        <motion.div 
          className="absolute w-[2px] h-[50px] bg-gradient-to-b from-white to-transparent rotate-45"
          initial={{ x: "120vw", y: "-20vh", opacity: 0 }}
          animate={{ x: "-20vw", y: "120vh", opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
        />
      </div>

      {/* Moon glow */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full blur-[50px]" />

      {/* Text Content */}
      <div className="z-10 flex flex-col gap-8 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-2xl md:text-4xl font-serif text-brand-cream/90 leading-relaxed"
        >
          Setiap hari...
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="text-xl md:text-3xl font-serif text-brand-rose/90 leading-relaxed"
        >
          Aku semakin bersyukur karena memilikimu.
        </motion.p>
      </div>
    </div>
  );
}
