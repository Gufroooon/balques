import { motion } from 'framer-motion';

const SakuraPetal = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 30 35" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* A simple elegant petal shape with a cleft */}
    <path d="M15 32C15 32 6 35 2 28C-2 21 0 10 15 0C30 10 32 21 28 28C24 35 15 32 15 32Z" />
  </svg>
);

const SakuraFlower = ({ className }: { className?: string }) => (
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

export default function SakuraFalling() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[100]">
      {[...Array(25)].map((_, i) => {
        const isFlower = i % 5 === 0;
        const startX = Math.random() * 120 - 10; // -10vw to 110vw
        const duration = Math.random() * 4 + 4; // 4s to 8s
        const delay = Math.random() * 2; // 0s to 2s
        const size = isFlower ? Math.random() * 15 + 15 : Math.random() * 10 + 10;
        
        return (
          <motion.div
            key={i}
            className={`absolute text-brand-rose ${isFlower ? 'opacity-80' : 'opacity-60'}`}
            style={{
              left: `${startX}vw`,
              top: `-10vh`,
              width: size,
              height: size,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: ["0vh", "120vh"],
              x: [
                `${startX}vw`, 
                `${startX + (Math.random() * 20 - 10)}vw`, 
                `${startX + (Math.random() * 40 - 20)}vw`
              ],
              rotate: [0, Math.random() * 360, Math.random() * 720],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration,
              delay,
              ease: "linear",
            }}
          >
            {isFlower ? <SakuraFlower /> : <SakuraPetal />}
          </motion.div>
        );
      })}
    </div>
  );
}
