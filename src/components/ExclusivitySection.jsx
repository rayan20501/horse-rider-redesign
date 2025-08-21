import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Crown, Sparkles, Map } from 'lucide-react';

const ExclusivitySection = () => {
  // Configuration for exclusive locations
  // Each location includes its name, description, status, and styling.
  // The 'mapLink' property provides the Google Maps URL for the 'Ver el mapa' button.
  const locations = [
    {
      name: 'Mallorca',
      description: 'Descubre nuestra presencia exclusiva en tiendas seleccionadas de Mallorca. Una experiencia única te espera.',
      status: 'Disponible',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/40',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Mallorca'
    },
    {
      name: 'Valencia',
      description: 'Encuéntranos en los puntos premium de Valencia. Calidad y exclusividad garantizadas en cada sorbo.',
      status: 'Disponible',
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/40',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Valencia'
    },
    {
      name: 'Tarragona & Reus',
      description: 'Exclusivo a través de Francolí. Un privilegio reservado para los verdaderos conocedores del sabor premium en Tarragona y Reus.',
      status: 'Exclusivo Francolí',
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/40',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Tarragona+y+Reus'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl pulse-red-animation"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pulse-3xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pulse-3xl" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/60 rounded-full"
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
        {/* Main Exclusivity Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Crown Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-8"
          >
            <Crown className="w-20 h-20 text-yellow-500 glow-animation neon-glow-animation" />
          </motion.div>

          {/* Main Exclusivity Text */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-bebas-neue font-black text-center mb-8"
          >
            <motion.span
              className="block text-white neon-glow-animation"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 40px rgba(239, 68, 68, 0.8)",
                  "0 0 20px rgba(239, 68, 68, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              DISPONIBLE Y
            </motion.span>
            <motion.span
              className="block text-gradient-red neon-glow-animation"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 30px rgba(239, 68, 68, 0.6)",
                  "0 0 50px rgba(239, 68, 68, 0.9)",
                  "0 0 30px rgba(239, 68, 68, 0.6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              EXCLUSIVO EN
            </motion.span>
            <motion.span
              className="block text-gradient-blue neon-blue-glow-animation text-5xl md:text-7xl lg:text-9xl"
              animate={{ 
                scale: [1, 1.08, 1],
                textShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.6)",
                  "0 0 50px rgba(59, 130, 246, 0.9)",
                  "0 0 30px rgba(59, 130, 246, 0.6)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              FRANCOLÍ
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            La experiencia energética más exclusiva de España, disponible únicamente en Francolí. 
            Un privilegio reservado para los verdaderos conocedores del sabor premium.
          </motion.p>
        </motion.div>

        {/* Location Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative p-8 rounded-2xl border ${location.borderColor} ${location.bgColor} backdrop-blur-sm transition-all duration-300 glow-animation hover-glow`}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, delay: index * 2 }}
                  className="flex justify-center mb-6"
                >
                  <MapPin className={`w-12 h-12 ${location.color} glow-animation`} />
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-4 ${location.color} neon-glow-animation`}>
                  {location.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {location.description}
                </p>
                
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${location.bgColor} ${location.color} border ${location.borderColor}`}>
                  {location.status}
                </div>
                
                {/* Google Maps Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 border ${location.borderColor} hover:border-opacity-60`}
                  onClick={() => window.open(location.mapLink, '_blank')}
                >
                  <Map className="w-5 h-5" />
                  Ver el mapa
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clarification Text - This section can be removed or modified as needed based on the new exclusivity details. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-6 h-6 text-yellow-500 glow-animation" />
              <h4 className="text-xl font-bold text-white neon-glow-animation">Información Importante</h4>
              <Star className="w-6 h-6 text-yellow-500 glow-animation" />
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-red-500 font-semibold">Nota:</span> La disponibilidad puede variar. Consulta los puntos de venta autorizados para obtener la información más reciente.
            </p>
          </div>
        </motion.div>

        {/* Call to Action - This section can be removed or modified as needed. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-gradient px-12 py-5 rounded-full text-white font-bold text-xl glow-animation hover-glow neon-glow-animation flex items-center gap-4 mx-auto"
            onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Francoli', '_blank')}
          >
            <MapPin className="w-6 h-6" />
            <span>Cómo Llegar a Francolí</span>
          </motion.button>
        </motion.div>

        {/* Animated Scrolling Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-4xl lg:text-6xl font-bebas-neue text-red-500/30 neon-glow-animation"
          >
            EXCLUSIVO FRANCOLÍ • EXPERIENCIA ÚNICA • SABOR PREMIUM • ENERGÍA ESPAÑOLA • 
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusivitySection;


