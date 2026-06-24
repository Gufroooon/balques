import { motion } from 'framer-motion';

const TIMELINE = [
  { title: "Pertama Bertemu", desc: "Momen di mana semuanya dimulai.", date: "Suatu hari yang indah" },
  { title: "Pertama Chat", desc: "Berawal dari obrolan sederhana, menjadi candu.", date: "Tengah malam" },
  { title: "Sekarang", desc: "Mencintaimu semakin dalam setiap harinya.", date: "Hari ini & selamanya" },
];

export default function Slide7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-[#fdf2f8] relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/30 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-rosegold/20 rounded-full blur-[80px]" />

      <h2 className="text-3xl md:text-4xl font-serif text-brand-rosegold mb-12 z-10 text-center">
        Perjalanan Kita
      </h2>

      <div className="relative w-full max-w-lg z-10">
        {/* Timeline Line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-brand-rose to-brand-rosegold"
        />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + (i * 0.5) }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-rosegold rounded-full z-10 shadow-[0_0_10px_rgba(183,110,121,0.5)]" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 p-4 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <span className="text-sm text-brand-rosegold/80 font-sans tracking-widest uppercase">{item.date}</span>
                <h3 className="text-xl font-serif text-brand-dark mt-1">{item.title}</h3>
                <p className="text-brand-dark/60 font-sans font-light mt-2 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
