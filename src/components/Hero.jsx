import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, Flame } from 'lucide-react';
import horseRiderCan from '../assets/horse-rider-can.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-flow-animation opacity-20"></div>
      
      {/* Enhanced Background Effects for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Red Glowing Floating Sparkles for Mobile */}
      <div className="absolute inset-0 md:hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.4)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Red Glowing Floating Sparkles for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.9), 0 0 30px rgba(239, 68, 68, 0.5)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 glow-animation"
            >
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-red-400 text-sm font-medium">Energía Premium Española</span>
            </motion.div>

            {/* Main Heading with Modern, Energetic Font - CUSTOMIZATION: Change font family in CSS or here */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl lg:text-8xl font-black text-white leading-tight"
              style={{ 
                fontFamily: "'Orbitron', 'Bebas Neue', 'Arial Black', sans-serif", // Modern, energetic font
                fontWeight: 900,
                letterSpacing: '0.02em'
              }}
            >
              {/* CUSTOMIZATION: Change main heading text here */}
              <motion.span
                className="block neon-glow-animation"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                LIBERA TU
              </motion.span>
              <span className="text-gradient-red block text-7xl lg:text-9xl neon-glow-animation">PODER</span>
              <motion.span
                className="block text-gradient-blue neon-blue-glow-animation"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                INTERIOR
              </motion.span>
            </motion.h1>

            {/* Static Subtitle - No Animation on Text (CUSTOMIZATION: Change subtitle text here) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Energía inmediata, sabor premium y actitud imparable.
            </motion.p>

            {/* Features with Static Text but Animated Icons (CUSTOMIZATION: Modify features here) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Zap, text: '160mg Cafeína', color: 'text-red-500' },
                { icon: Star, text: 'Sabor Español', color: 'text-blue-500' },
                { icon: Flame, text: 'Energía Explosiva', color: 'text-red-500' }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {/* Animated Icons */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="glow-animation"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </motion.div>
                  {/* Static Text */}
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Removed "Únete a Nuestra Historia" button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* CUSTOMIZATION: Change button text and links here */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center space-x-2 glow-animation hover-glow neon-glow-animation"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>¡Consíguela ahora!</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2, borderColor: '#3b82f6' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 px-8 py-4 rounded-full text-blue-500 font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 neon-blue-glow-animation"
                onClick={() => document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Descubre Más
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Clean, prominent can - minimal animation (CUSTOMIZATION: Replace image source here) */}
              <img 
                src={horseRiderCan} 
                alt="Horse Rider Energy Drink" 
                className="w-full max-w-3xl h-auto drop-shadow-2xl"
                style={{ 
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
                  filter: 'brightness(1.05) contrast(1.05)'
                }}
              />
              
              {/* Subtle glow effect - no blur (CUSTOMIZATION: Modify glow colors here) */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 rounded-full scale-110 opacity-60"></div>
            </div>

            {/* Simplified Floating Elements - Minimal Animation (CUSTOMIZATION: Modify product info here) */}
            <div className="absolute top-1/4 -left-16 bg-red-500/20 backdrop-blur-sm border border-red-500/40 rounded-lg p-4 hidden lg:block">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">160mg</div>
                <div className="text-sm text-red-400">Cafeína</div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -right-16 bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 rounded-lg p-4 hidden lg:block">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500ml</div>
                <div className="text-sm text-blue-400">Premium</div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/4 bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-3 hidden lg:block">
              <div className="text-center">
                <div className="text-xl font-bold text-white">Español</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator (CUSTOMIZATION: Modify colors and animation here) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center glow-animation"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-red-500 rounded-full mt-2 pulse-red-animation"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

/*
HERO SECTION CUSTOMIZATION GUIDE:

1. FONTS:
   - Main heading uses Orbitron for modern, energetic look
   - To change: Modify fontFamily style in the h1 element (line 85)
   - Available options: 'Orbitron', 'Bebas Neue', 'Arial Black', 'Roboto Condensed'

2. COLORS:
   - Red sparkles: rgba(239, 68, 68, 0.8) - Change in sparkle elements
   - Blue accents: rgba(59, 130, 246, 0.9) - Change in gradient classes
   - Background effects: Modify bg-red-500/10 and bg-blue-500/10 classes

3. SPARKLES:
   - Mobile: 35 sparkles (line 24)
   - Desktop: 50 sparkles (line 44)
   - To adjust quantity: Change Array(number) values
   - To modify glow: Change boxShadow values in style props

4. TEXT CONTENT:
   - Main heading: Lines 95-109 ("LIBERA TU PODER INTERIOR")
   - Subtitle: Line 118 ("Energía inmediata, sabor premium...")
   - Features: Lines 130-134 (160mg Cafeína, Sabor Español, Energía Explosiva)
   - Button text: Lines 157 and 165

5. ANIMATIONS:
   - Text is now static (no wave motion)
   - Icons still animate (rotation)
   - To disable icon animation: Remove animate prop from motion.div (line 147)

6. BUTTONS:
   - "¡Consíguela ahora!" scrolls to contact section
   - "Descubre Más" scrolls to product section
   - To change scroll targets: Modify getElementById values (lines 161, 171)

7. PRODUCT IMAGE:
   - Current: horseRiderCan from assets
   - To change: Replace import and src on lines 4 and 185
   - Glow effects: Modify boxShadow style (line 188)

8. FLOATING INFO CARDS:
   - 160mg Cafeína (line 195)
   - 500ml Premium (line 202)
   - Español (line 209)
   - To modify: Change text content and positioning classes
*/

