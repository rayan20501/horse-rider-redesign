import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Star, Award } from 'lucide-react';

const StorySection = () => {
  const storyPoints = [
    {
      icon: Flame,
      title: 'Nacido en España',
      description: 'Creado en el corazón de España con la pasión y el espíritu emprendedor español.',
      year: '2020'
    },
    {
      icon: Star,
      title: 'Fórmula Perfecta',
      description: 'Años de investigación para crear la fórmula energética perfecta con sabor único.',
      year: '2021'
    },
    {
      icon: Award,
      title: 'Reconocimiento Nacional',
      description: 'Premiada como la mejor bebida energética española por expertos del sector.',
      year: '2023'
    },
    {
      icon: ArrowRight,
      title: 'Expansión Global',
      description: 'Llevando el sabor y la energía española a todo el mundo.',
      year: '2024'
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Parallax Background Effects */}
      <div className="absolute inset-0 parallax">
        <div className="parallax-layer absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pulse-red-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Animated Background Lines - Hidden on Mobile */}
        <div className="absolute inset-0 hidden md:block">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
              style={{
                top: `${10 + i * 12}%`,
                left: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-orbitron font-black text-white mb-6">
            NUESTRA
            <span className="text-gradient-red block neon-glow-animation">HISTORIA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde las tierras españolas hasta convertirse en la bebida energética premium que revoluciona el mercado mundial
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 to-red-500 glow-animation"></div>

          <div className="space-y-16">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center flex-col md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 text-center md:${index % 2 === 0 ? 'text-right md:pr-8' : 'text-left md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 glow-animation hover-glow"
                  >
                    <div className={`flex items-center gap-3 mb-4 justify-center md:${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <point.icon className="w-6 h-6 text-red-500 glow-animation" />
                      <h3 className="text-xl md:text-2xl font-bold text-white neon-glow-animation">{point.title}</h3>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                      {point.description}
                    </p>
                    <div className="text-red-500 font-bold text-lg neon-glow-animation">
                      {point.year}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 md:w-16 md:h-16 bg-red-gradient rounded-full flex items-center justify-center border-4 border-white glow-animation pulse-red-animation relative z-10"
                >
                  <point.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>

                {/* Spacer for opposite side - Hidden on mobile */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Scrolling Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-6xl lg:text-8xl font-bebas-neue text-red-500/20 neon-glow-animation"
          >
            HORSE RIDER ENERGY • ENERGÍA ESPAÑOLA • SABOR ÚNICO • RENDIMIENTO MÁXIMO • 
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-gradient px-12 py-5 rounded-full text-white font-bold text-xl glow-animation hover-glow neon-blue-glow-animation flex items-center gap-3 mx-auto"
          >
            <span>Únete a Nuestra Historia</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;

