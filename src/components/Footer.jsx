import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Star } from 'lucide-react';
import horseRiderLogo from '../assets/horse-rider-logo.png';

const Footer = () => {
  // CUSTOMIZATION: Modify social media links here
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  // CUSTOMIZATION: Add or modify quick links here
  const quickLinks = [
    { name: 'Acerca de Nosotros', href: '#historia' },
    { name: 'Productos', href: '#producto' },
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Francolí Exclusivo', href: '#exclusividad' },
    { name: 'Prensa', href: '#contacto' }
  ];

  // CUSTOMIZATION: Add or modify support links here
  const supportLinks = [
    { name: 'Contáctanos', href: '#contacto' },
    { name: 'Preguntas Frecuentes', href: '#contacto' },
    { name: 'Información de Envío', href: '#contacto' },
    { name: 'Devoluciones', href: '#contacto' },
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Privacidad', href: '#' }
  ];

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <footer id="footer" className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-red-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pulse-red-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              {/* CUSTOMIZATION: Replace logo here */}
              <motion.img 
                src={horseRiderLogo} 
                alt="Horse Rider Energy" 
                className="h-12 w-auto"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              />
              <span className="font-orbitron font-bold text-xl text-white neon-glow-animation">
                HORSE RIDER
              </span>
            </div>
            {/* CUSTOMIZATION: Modify brand description here */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              Libera tu poder interior con Horse Rider Energy. La bebida energética premium española 
              creada para campeones que nunca se conforman con lo ordinario.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 group glow-animation hover-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-lg text-white mb-6 neon-glow-animation">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    whileHover={{ x: 5, color: '#ef4444' }}
                    className="text-gray-400 hover:text-red-500 transition-all duration-200 flex items-center gap-2 hover-neon cursor-pointer"
                  >
                    <Star className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-lg text-white mb-6 neon-glow-animation">Soporte</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    whileHover={{ x: 5, color: '#ef4444' }}
                    className="text-gray-400 hover:text-red-500 transition-all duration-200 flex items-center gap-2 hover-neon cursor-pointer"
                  >
                    <Star className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - REMOVED "Noticias Exclusivas" section as requested */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-lg text-white mb-6 neon-glow-animation">Contacto Francolí</h3>
            <div className="space-y-4">
              {/* CUSTOMIZATION: Update contact information here */}
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-red-500 glow-animation" />
                <a href="mailto:info@horserider.es" className="text-gray-400 hover:text-red-500 transition-colors">
                  info@horserider.es
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-red-500 glow-animation" />
                <span className="text-gray-400">+34 977 123 456</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-red-500 mt-1 glow-animation" />
                <span className="text-gray-400">
                  Francolí, Tarragona<br />
                  España, 43006<br />
                  Ubicación Exclusiva
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          {/* CUSTOMIZATION: Update copyright text here */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Horse Rider Energy España. Todos los derechos reservados. Exclusivo en Francolí.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 hover-neon">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 hover-neon">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 hover-neon">
              Política de Cookies
            </a>
          </div>
        </motion.div>

        {/* Animated Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-2xl lg:text-4xl font-bebas-neue text-red-500/20 neon-glow-animation"
          >
            HORSE RIDER ENERGY • FRANCOLÍ EXCLUSIVO • ENERGÍA ESPAÑOLA • SABOR PREMIUM • 
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

/*
FOOTER CUSTOMIZATION GUIDE:

REMOVED ELEMENTS (as requested):
- "Noticias Exclusivas" newsletter signup section
- "CONSIGUE LA TUYA AHORA" CTA section with the large button

REMAINING ELEMENTS:
1. BRAND SECTION:
   - Logo and brand description
   - Social media links (Facebook, Twitter, Instagram, YouTube)

2. QUICK LINKS:
   - Navigation links with smooth scrolling
   - Modify quickLinks array (lines 18-25)

3. SUPPORT LINKS:
   - Help and legal links
   - Modify supportLinks array (lines 28-35)

4. CONTACT INFO:
   - Email: info@horserider.es (as requested)
   - Phone and address information
   - Update contact details in lines 148-168

5. CUSTOMIZATION OPTIONS:
   - Social links: Modify socialLinks array (lines 8-13)
   - Colors: Red (#ef4444) and blue accents
   - Animations: Hover effects and glow animations
   - Text: All Spanish text can be modified in respective sections

6. SMOOTH SCROLLING:
   - All internal links use smooth scrolling
   - Links to section IDs (home, producto, historia, etc.)
*/

