import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Star, Award, Flame } from 'lucide-react';
import horseRiderCan from '../assets/horse-rider-can.png';
import horseRiderLogo from '../assets/horse-rider-logo.png';
import lifestyle1 from '../assets/lifestyle1.jpg';
import lifestyle2 from '../assets/lifestyle2.jpg';
import lifestyle3 from '../assets/lifestyle3.jpg';
import lifestyle4 from '../assets/lifestyle4.jpg';

const ProductGallery = () => {
  const galleryItems = [
    {
      src: horseRiderCan,
      title: 'Lata Premium',
      description: 'Diseño elegante con acabado metálico',
      category: 'Producto',
      featured: true
    },
    {
      src: lifestyle1,
      title: 'Deportes Extremos',
      description: 'Energía para aventuras extremas',
      category: 'Lifestyle'
    },
    {
      src: lifestyle2,
      title: 'Fitness & Training',
      description: 'Potencia tus entrenamientos',
      category: 'Lifestyle'
    },
    {
      src: lifestyle3,
      title: 'Gaming Sessions',
      description: 'Mantén el focus en competición',
      category: 'Gaming'
    },
    {
      src: lifestyle4,
      title: 'Trabajo & Estudio',
      description: 'Rendimiento mental superior',
      category: 'Productividad'
    },
    {
      src: horseRiderLogo,
      title: 'Logo Oficial',
      description: 'Marca registrada española',
      category: 'Branding'
    }
  ];

  const categories = ['Todos', 'Producto', 'Lifestyle', 'Gaming', 'Productividad', 'Branding'];
  const [activeCategory, setActiveCategory] = React.useState('Todos');

  const filteredItems = activeCategory === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pulse-red-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '2s'}}></div>
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
            GALERÍA
            <span className="text-gradient-red block neon-glow-animation">PREMIUM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora cada detalle de Horse Rider Energy y descubre cómo transforma cada momento de tu vida
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-gradient text-white glow-animation neon-glow-animation'
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-red-500/50 hover:text-red-500'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 glow-animation hover-glow ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Zoom Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm p-2 rounded-full glow-animation"
                >
                  <ZoomIn className="w-6 h-6 text-white" />
                </motion.div>

                {/* Featured Badge */}
                {item.featured && (
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 glow-animation"
                  >
                    <Star className="w-4 h-4" />
                    Premium
                  </motion.div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">
                      {item.category}
                    </span>
                    {item.category === 'Producto' && <Award className="w-4 h-4 text-yellow-500" />}
                    {item.category === 'Lifestyle' && <Flame className="w-4 h-4 text-red-500" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 neon-glow-animation">{item.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '500+', label: 'Fotos Premium', icon: Star },
            { number: '50+', label: 'Sesiones Fotográficas', icon: Award },
            { number: '25+', label: 'Localizaciones', icon: Flame },
            { number: '100%', label: 'Calidad Profesional', icon: ZoomIn }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 glow-animation hover-glow"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, delay: index * 2 }}
                className="flex justify-center mb-4"
              >
                <stat.icon className="w-8 h-8 text-red-500 glow-animation" />
              </motion.div>
              <div className="text-3xl font-orbitron font-black text-red-500 mb-2 neon-glow-animation">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
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
            className="bg-red-gradient px-12 py-5 rounded-full text-white font-bold text-xl glow-animation hover-glow neon-glow-animation"
          >
            Ver Galería Completa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;

