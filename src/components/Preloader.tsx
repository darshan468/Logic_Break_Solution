import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-lb-black flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Animated Background Glow */}
          <div className="absolute w-[400px] h-[400px] bg-lb-gold/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-6 z-10"
          >
            {/* Glowing Logo Frame */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-lb-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-lb-charcoal p-2 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="LOGIC BREAK SOLUTION Logo"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  // Fallback logo text if image is not loaded
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lb-gold/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Brand Title */}
            <div className="text-center space-y-1">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wider">
                LOGIC BREAK <span className="text-lb-gold">SOLUTION</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 font-medium tracking-widest uppercase">
                Digital Agency & Custom Software
              </p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-64 sm:w-80 mt-4 space-y-2">
              <div className="h-1.5 w-full bg-lb-charcoal rounded-full overflow-hidden border border-white/10 p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-lb-gold via-lb-gold-light to-amber-300 rounded-full shadow-[0_0_12px_#d4af37]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 font-mono">
                <span>LOADING ASSETS</span>
                <span className="text-lb-gold font-bold">{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
