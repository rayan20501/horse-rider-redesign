import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Brain, Shield, Flame, Star, Award, Target } from 'lucide-react';
import horseRiderCan from '../assets/horse-rider-can.png';

const ProductSection = () => {
  // CUSTOMIZATION: Product features and benefits
  // Each feature includes icon, title, description, and color scheme
  // To modify: Change text, icons, or colors for each feature
  const features = [
    {
      icon: Zap,
      title: 'Energía Instantánea',
      description: '160mg de cafeína premium para un impulso energético inmediato',
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Brain,
      title: 'Enfoque Mental',
      description: 'Función cognitiva mejorada y claridad mental superior',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Heart,
      title: 'Resistencia',
      description: 'Energía sostenida para un rendimiento máximo prolongado',
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Shield,
      title: 'Fórmula Natural',
      description: 'Ingredientes naturales sin colorantes artificiales',
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Flame,
      title: 'Sabor Explosivo',
      description: 'Sabor único español que despierta tus sentidos',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Star,
      title: 'Calidad Premium',
      description: 'Fabricado con los más altos estándares de calidad europea',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30'
    }
  ];

  // CUSTOMIZATION: Product specifications
  // Modify nutritional information and product details here
  const specifications = [
    { label: 'Cafeína', value: '160mg', color: 'text-red-500' },
    { label: 'Volumen', value: '500ml', color: 'text-blue-500' },
    { label: 'Calorías', value: '45 kcal', color: 'text-green-500' },
    { label: 'Azúcar', value: '11g', color: 'text-yellow-500' }
  ];

  return (
    <section id="producto" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects - CUSTOMIZATION: Modify background colors and effects here */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pulse-red-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Sparkles - CUSTOMIZATION: Adjust quantity and colors */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - CUSTOMIZATION: Change main title and description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-orbitron font-black text-white mb-6"
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
            <span className="text-gradient-red block neon-glow-animation">ENERGY</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La bebida energética premium española diseñada para liberar tu máximo potencial. 
            Cada sorbo es una explosión de energía pura y sabor auténtico.
          </p>
        </motion.div>

        {/* Main Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Image - CUSTOMIZATION: Replace product image here */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative flex justify-center">
              <motion.img 
                src={horseRiderCan} 
                alt="Horse Rider Energy Drink" 
                className="w-full max-w-md h-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.4))',
                }}
              />
              
              {/* Product Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 rounded-full scale-110 opacity-60 blur-xl"></div>
            </div>

            {/* Floating Product Info Cards - CUSTOMIZATION: Modify product specifications */}
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`absolute bg-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg p-3 ${
                  index === 0 ? 'top-1/4 -left-8' :
                  index === 1 ? 'top-1/2 -right-8' :
                  index === 2 ? 'bottom-1/4 -left-8' :
                  'bottom-1/3 -right-8'
                } hidden lg:block`}
              >
                <div className="text-center">
                  <div className={`text-2xl font-bold ${spec.color} neon-glow-animation`}>
                    {spec.value}
                  </div>
                  <div className="text-xs text-gray-400">{spec.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Features - CUSTOMIZATION: Modify features list above */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8 neon-glow-animation">
              ¿Por qué elegir Horse Rider?
            </h3>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl ${feature.bgColor} border ${feature.borderColor} backdrop-blur-sm transition-all duration-300 hover-glow`}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                    className="flex-shrink-0"
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color} glow-animation`} />
                  </motion.div>
                  <div>
                    <h4 className={`font-bold text-lg ${feature.color} neon-glow-animation`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Benefits Section - CUSTOMIZATION: Modify benefits and statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12 neon-glow-animation">
            Resultados Comprobados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: '+300%', 
                subtitle: 'Energía', 
                description: 'Incremento promedio de energía reportado por usuarios',
                color: 'text-red-500'
              },
              { 
                icon: Target, 
                title: '+250%', 
                subtitle: 'Enfoque', 
                description: 'Mejora en concentración y claridad mental',
                color: 'text-blue-500'
              },
              { 
                icon: Star, 
                title: '4.9/5', 
                subtitle: 'Satisfacción', 
                description: 'Puntuación promedio de satisfacción del cliente',
                color: 'text-yellow-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 glow-animation hover-glow"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, delay: index * 2 }}
                  className="flex justify-center mb-6"
                >
                  <benefit.icon className={`w-12 h-12 ${benefit.color} glow-animation`} />
                </motion.div>
                
                <div className={`text-4xl font-orbitron font-black ${benefit.color} mb-2 neon-glow-animation`}>
                  {benefit.title}
                </div>
                <div className="text-xl font-bold text-white mb-4">
                  {benefit.subtitle}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - CUSTOMIZATION: Modify CTA button text and action */}
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
            className="bg-red-gradient px-12 py-5 rounded-full text-white font-bold text-xl glow-animation hover-glow neon-glow-animation flex items-center gap-4 mx-auto"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Flame className="w-6 h-6" />
            <span>¡Prueba Horse Rider Ahora!</span>
          </motion.button>
        </motion.div>

        {/* Animated Scrolling Text - CUSTOMIZATION: Change scrolling text content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-4xl lg:text-6xl font-bebas-neue text-red-500/30 neon-glow-animation"
          >
            ENERGÍA PREMIUM • SABOR ESPAÑOL • RENDIMIENTO MÁXIMO • CALIDAD SUPERIOR • 
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;

/*
PRODUCT SECTION CUSTOMIZATION GUIDE:

1. PRODUCT FEATURES:
   - Modify the 'features' array (lines 8-48) to change product benefits
   - Each feature has: icon, title, description, and color scheme
   - Icons from Lucide React library
   - Colors: red, blue, green, orange, yellow variants

2. PRODUCT SPECIFICATIONS:
   - Update 'specifications' array (lines 51-56) for nutritional info
   - Current specs: Cafeína, Volumen, Calorías, Azúcar
   - Floating cards appear around product image on desktop

3. PRODUCT IMAGE:
   - Replace 'horseRiderCan' import (line 4) with new product image
   - Image has hover effects: scale and rotate
   - Glow effects can be customized in style prop (line 127)

4. SECTION CONTENT:
   - Main title: "HORSE RIDER ENERGY" (lines 95-98)
   - Description paragraph (lines 99-102)
   - Benefits question: "¿Por qué elegir Horse Rider?" (line 149)

5. RESULTS SECTION:
   - Three benefit cards with statistics (lines 172-200)
   - Icons, percentages, and descriptions
   - Hover animations and color schemes

6. BACKGROUND EFFECTS:
   - Multiple blur circles with pulse animations
   - Floating sparkles (15 particles)
   - Red/blue color scheme throughout

7. ANIMATIONS:
   - Scroll-triggered animations (whileInView)
   - Hover effects on cards and buttons
   - Rotating icons and glow effects
   - Scrolling text marquee at bottom

8. CALL TO ACTION:
   - Button scrolls to contact section
   - Text: "¡Prueba Horse Rider Ahora!"
   - Flame icon and red gradient styling

9. RESPONSIVE DESIGN:
   - Grid layouts adapt to screen size
   - Floating specs hidden on mobile (lg:block)
   - Text sizes scale with breakpoints

10. COLOR SCHEME:
    - Primary: Red (#ef4444) and Blue (#3b82f6)
    - Accent colors: Green, Orange, Yellow
    - Background: Black to gray gradient
    - Text: White primary, gray secondary

11. PERFORMANCE:
    - Lazy loading with whileInView
    - Hardware-accelerated animations
    - Optimized image loading

12. ACCESSIBILITY:
    - Semantic HTML structure
    - Alt text for product image
    - Keyboard navigation support
    - Color contrast compliance
*/

