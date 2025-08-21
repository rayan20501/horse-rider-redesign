import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Flame } from 'lucide-react';
import horseRiderLogo from '../assets/horse-rider-logo.png';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60); // 3 seconds total (100 / 2 * 60ms = 3000ms)

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Floating Sparkles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.img
                src={horseRiderLogo}
                alt="Horse Rider Energy"
                className="w-32 h-32 mx-auto"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bebas-neue font-black text-white mb-4"
            >
              <motion.span
                className="block text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                HORSE RIDER
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                ENERGY
              </motion.span>
            </motion.h1>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-400 text-lg mb-8 font-medium"
            >
              Cargando energía española...
            </motion.p>

            {/* Loading Spinner */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 mx-auto relative">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-red-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Spinning Ring */}
                <motion.div
                  className="absolute inset-2 border-4 border-transparent border-t-red-500 border-r-blue-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap className="w-6 h-6 text-yellow-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "300px" }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mx-auto bg-gray-800 rounded-full h-2 overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mt-4 text-white font-bold text-xl"
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Loading Messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="mt-4 text-gray-500 text-sm"
            >
              {progress < 30 && "Preparando la energía..."}
              {progress >= 30 && progress < 60 && "Cargando sabor español..."}
              {progress >= 60 && progress < 90 && "Activando el poder..."}
              {progress >= 90 && "¡Listo para la acción!"}
            </motion.div>
          </div>

          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent"
            animate={{
              borderImage: [
                "linear-gradient(0deg, #ef4444, #3b82f6) 1",
                "linear-gradient(90deg, #ef4444, #3b82f6) 1",
                "linear-gradient(180deg, #ef4444, #3b82f6) 1",
                "linear-gradient(270deg, #ef4444, #3b82f6) 1",
                "linear-gradient(360deg, #ef4444, #3b82f6) 1"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

