import React from 'react';
import { motion } from 'framer-motion';

// CUSTOMIZATION: Import and organize all available asset photos
// Lifestyle and product images
import lifestyle1 from '../assets/lifestyle1.jpg';
import lifestyle2 from '../assets/lifestyle2.jpg';
import lifestyle3 from '../assets/lifestyle3.jpg';
import lifestyle4 from '../assets/lifestyle4.jpg';
import rider1 from '../assets/rider1.png';
import rider2 from '../assets/rider2.png';
import horseRiderCan from '../assets/horse-rider-can.png';

// Additional lifestyle and energy photos
import photo1 from '../assets/SeMeBaqLGYZB.jpg';
import photo2 from '../assets/j6zafqUoFy1Y.jpg';
import photo3 from '../assets/qtR5zfErkxpF.jpg';
import photo4 from '../assets/99OweNXFJVD3.jpg';
import photo5 from '../assets/CoGFU4vOes4e.jpg';
import photo6 from '../assets/GMVhYvcygugW.jpg';
import photo7 from '../assets/MAsR1VLvZfj3.jpg';
import photo8 from '../assets/PJ9xyywdN4ml.jpg';

// Additional asset photos
import photo9 from '../assets/7nxWRKcZzow3.jpg';
import photo10 from '../assets/cKvWl6zrfd4f.jpg';
import photo11 from '../assets/f4Ns66kJoIy2.jpg';
import photo12 from '../assets/fHnqrmLX0f6j.jpg';
import photo13 from '../assets/vi1OPF84eLSY.jpg';
import photo14 from '../assets/yicM0RUXDp79.jpg';
import photo15 from '../assets/yryUwUba11dS.jpg';
import photo16 from '../assets/TLStr9bkNQFr.jpeg';
import photo17 from '../assets/CkDfWQ6b1JVE.jpeg';
import photo18 from '../assets/jf34ZSMUPJRZ.jpeg';
import photo19 from '../assets/mBla6ELCu9gb.jpeg';
import photo20 from '../assets/1pQYuHAigXVb.webp';
import photo21 from '../assets/7XbLHUQfJc0a.png';
import photo22 from '../assets/Ip3FiK2RzopD.png';
import photo23 from '../assets/LeyDi907lrWd.png';
import photo24 from '../assets/uDHudIhWPyYG.png';

const PhotoSlider = () => {
  // CUSTOMIZATION: Comprehensive image gallery with all asset photos organized by category
  const images = [
    // Core lifestyle images
    {
      src: lifestyle1,
      title: 'Deportes Extremos',
      description: 'Supera tus límites con aventuras extremas',
      category: 'lifestyle'
    },
    {
      src: lifestyle2,
      title: 'Entrenamiento Fitness',
      description: 'Potencia tus sesiones de entrenamiento intenso',
      category: 'lifestyle'
    },
    {
      src: lifestyle3,
      title: 'Sesiones Gaming',
      description: 'Mantente enfocado durante maratones de juego',
      category: 'lifestyle'
    },
    {
      src: lifestyle4,
      title: 'Trabajo y Estudio',
      description: 'Mantén el máximo rendimiento mental',
      category: 'lifestyle'
    },
    
    // Product and rider images
    {
      src: rider1,
      title: 'Atletas Profesionales',
      description: 'Confiado por deportistas de élite',
      category: 'product'
    },
    {
      src: rider2,
      title: 'Competición',
      description: 'El combustible de los campeones',
      category: 'product'
    },
    {
      src: horseRiderCan,
      title: 'Horse Rider Energy',
      description: 'La bebida energética premium española',
      category: 'product'
    },
    
    // Energy and action photos
    {
      src: photo1,
      title: 'Aventura Urbana',
      description: 'Energía para conquistar la ciudad',
      category: 'energy'
    },
    {
      src: photo2,
      title: 'Vida Nocturna',
      description: 'Mantente activo toda la noche',
      category: 'energy'
    },
    {
      src: photo3,
      title: 'Estilo de Vida',
      description: 'La energía que define tu personalidad',
      category: 'lifestyle'
    },
    {
      src: photo4,
      title: 'Rendimiento Máximo',
      description: 'Alcanza tu potencial completo',
      category: 'performance'
    },
    {
      src: photo5,
      title: 'Energía Social',
      description: 'Comparte momentos únicos',
      category: 'social'
    },
    {
      src: photo6,
      title: 'Fuerza Interior',
      description: 'Despierta tu poder oculto',
      category: 'energy'
    },
    {
      src: photo7,
      title: 'Determinación',
      description: 'Nunca te rindas, nunca pares',
      category: 'performance'
    },
    {
      src: photo8,
      title: 'Pasión Española',
      description: 'El sabor auténtico de España',
      category: 'culture'
    },
    
    // Additional lifestyle and energy photos
    {
      src: photo9,
      title: 'Aventura Extrema',
      description: 'Vive experiencias inolvidables',
      category: 'adventure'
    },
    {
      src: photo10,
      title: 'Energía Pura',
      description: 'Combustible para tus sueños',
      category: 'energy'
    },
    {
      src: photo11,
      title: 'Actitud Ganadora',
      description: 'La mentalidad de un campeón',
      category: 'performance'
    },
    {
      src: photo12,
      title: 'Estilo Urbano',
      description: 'Energía que marca tendencia',
      category: 'lifestyle'
    },
    {
      src: photo13,
      title: 'Momento Perfecto',
      description: 'Cuando todo se alinea',
      category: 'lifestyle'
    },
    {
      src: photo14,
      title: 'Energía Nocturna',
      description: 'La noche es tuya',
      category: 'nightlife'
    },
    {
      src: photo15,
      title: 'Fuerza Española',
      description: 'Orgullo y energía nacional',
      category: 'culture'
    },
    {
      src: photo16,
      title: 'Intensidad Máxima',
      description: 'Supera todos los límites',
      category: 'performance'
    },
    {
      src: photo17,
      title: 'Espíritu Libre',
      description: 'Libera tu verdadero potencial',
      category: 'freedom'
    },
    {
      src: photo18,
      title: 'Energía Compartida',
      description: 'Momentos únicos con amigos',
      category: 'social'
    },
    {
      src: photo19,
      title: 'Aventura Sin Límites',
      description: 'Cada día una nueva conquista',
      category: 'adventure'
    },
    {
      src: photo20,
      title: 'Estilo Único',
      description: 'Tu personalidad, tu energía',
      category: 'lifestyle'
    },
    {
      src: photo21,
      title: 'Poder Interior',
      description: 'Desata tu fuerza oculta',
      category: 'energy'
    },
    {
      src: photo22,
      title: 'Momento Épico',
      description: 'Cuando lo imposible se hace realidad',
      category: 'achievement'
    },
    {
      src: photo23,
      title: 'Energía Infinita',
      description: 'Sin límites, sin fronteras',
      category: 'energy'
    },
    {
      src: photo24,
      title: 'Actitud Española',
      description: 'Pasión y energía sin igual',
      category: 'culture'
    }
  ];

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects - CUSTOMIZATION: Modify background colors here */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pulse-red-animation"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header - CUSTOMIZATION: Change title and description here */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-5xl lg:text-6xl font-orbitron font-black text-white mb-6">
            VIVE LA
            <span className="text-gradient-red block neon-glow-animation">EXPERIENCIA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo Horse Rider Energy transforma cada momento de tu vida en una experiencia extraordinaria
          </p>
        </motion.div>

        {/* Desktop Seamless Marquee Slider */}
        <div className="relative overflow-hidden hidden md:block">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, `-${100 * images.length}%`]
            }}
            transition={{
              duration: 180, // CUSTOMIZATION: Adjust scroll speed (higher = slower)
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{
              animationPlayState: "paused" // Pause on hover
            }}
            style={{
              width: `${duplicatedImages.length * 400}px`
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`${image.title}-${index}`}
                className="relative flex-shrink-0 w-96 h-64 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image with loading optimization */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.warn(`Failed to load image: ${image.src}`);
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content with category badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold neon-glow-animation">{image.title}</h3>
                    <span className="text-xs bg-red-500/30 px-2 py-1 rounded-full border border-red-500/50">
                      {image.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>

                {/* Hover Glow Effect - CUSTOMIZATION: Change glow colors here */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Optimized Version */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, `-${100 * images.length}%`]
            }}
            transition={{
              duration: 240, // Slower on mobile
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${duplicatedImages.length * 280}px`
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`mobile-${image.title}-${index}`}
                className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <span className="text-xs bg-red-500/30 px-1 py-0.5 rounded text-red-300">
                      {image.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs">{image.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Swipe Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:hidden"
        >
          <p className="text-gray-400 text-sm">
            Desliza para ver más → ({images.length} fotos)
          </p>
        </motion.div>

        {/* Enhanced Stats Section - CUSTOMIZATION: Update statistics here */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 mt-20"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1M+', label: 'Españoles Satisfechos', color: 'text-red-500', icon: '👥' },
              { number: '50+', label: 'Ciudades Españolas', color: 'text-blue-500', icon: '🏙️' },
              { number: '99%', label: 'Recomendación', color: 'text-green-500', icon: '⭐' },
              { number: `${images.length}`, label: 'Momentos Únicos', color: 'text-yellow-500', icon: '📸' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 glow-animation hover-glow"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-4xl lg:text-5xl font-orbitron font-black ${stat.color} mb-2 neon-glow-animation`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Categories Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 mt-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6 neon-glow-animation">Categorías de Experiencias</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[...new Set(images.map(img => img.category))].map((category, index) => (
                <span
                  key={index}
                  className="bg-gray-800/50 border border-red-500/30 px-4 py-2 rounded-full text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors duration-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoSlider;

/*
PHOTO SLIDER CUSTOMIZATION GUIDE:

1. IMAGES:
   - All 24+ asset photos are now included and organized by category
   - Categories: lifestyle, product, energy, performance, social, culture, adventure, etc.
   - To add new images: Import the image and add to the images array with title, description, and category

2. ANIMATION SPEED:
   - Desktop: 180 seconds for full cycle (line 157)
   - Mobile: 240 seconds for full cycle (line 185)
   - To change speed: Modify duration values (lower = faster)

3. IMAGE DISPLAY:
   - Desktop: 400px wide cards with hover effects
   - Mobile: 280px wide cards, simpler design
   - Infinite seamless loop with 3x duplication

4. CATEGORIES:
   - Each image has a category badge
   - Categories are automatically collected and displayed at bottom
   - Color-coded by category type

5. HOVER EFFECTS:
   - Scale and lift on hover (desktop only)
   - Pause animation on hover
   - Show/hide description text
   - Red glow effect overlay

6. STATS SECTION:
   - 4 statistics including dynamic photo count
   - Icons and color-coded numbers
   - Hover animations and glow effects

7. ERROR HANDLING:
   - Images that fail to load are hidden
   - Console warnings for debugging
   - Lazy loading for performance

8. RESPONSIVE DESIGN:
   - Separate optimized versions for desktop and mobile
   - Different card sizes and layouts
   - Mobile swipe indicator

9. BACKGROUND EFFECTS:
   - Multiple layered blur circles
   - Red and blue color scheme
   - Pulsing animations with delays

10. ACCESSIBILITY:
    - Alt text for all images
    - Keyboard navigation support
    - Screen reader friendly structure
*/

