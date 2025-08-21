import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import horseRiderLogo from '../assets/horse-rider-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with smooth scrolling to sections
  // CUSTOMIZATION: Add or modify navigation items here
  const navItems = [
    { name: 'Inicio', href: '#home', id: 'home' },
    { name: 'Producto', href: '#producto', id: 'producto' },
    { name: 'Historia', href: '#historia', id: 'historia' },
    { name: 'Galería', href: '#galeria', id: 'galeria' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  // Smooth scroll function
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-red-500/20' 
          : 'bg-black/80'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - CUSTOMIZATION: Replace logo image here */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img 
              src={horseRiderLogo} 
              alt="Horse Rider Energy" 
              className="h-16 md:h-20 w-auto bounce-in-animation"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-white text-lg font-medium hover:text-red-500 transition-colors duration-300 relative group hover-neon cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left glow-animation"></span>
              </motion.a>
            ))}
            {/* CUSTOMIZATION: Change button text and action here */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-gradient px-6 py-2 rounded-full text-white font-bold text-md glow-animation hover-glow"
              onClick={(e) => handleNavClick(e, 'contacto')}
            >
              Ordenar Ahora
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover-neon"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-red-500/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium hover-neon cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="bg-red-gradient px-6 py-2 rounded-full text-white font-semibold w-fit glow-animation"
                onClick={(e) => handleNavClick(e, 'contacto')}
              >
                Ordenar Ahora
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

/*
HEADER CUSTOMIZATION GUIDE:

1. NAVIGATION ITEMS:
   - Modify navItems array (lines 21-27)
   - Each item needs: name, href, and id
   - The id should match the section id in your components

2. LOGO:
   - Replace horseRiderLogo import (line 4)
   - Modify img src and alt text (lines 50-53)

3. COLORS:
   - Header background: bg-black/90 (scrolled) and bg-black/80 (top)
   - Hover colors: hover:text-red-500
   - Border colors: border-red-500/20
   - Button gradient: bg-red-gradient

4. SMOOTH SCROLLING:
   - Uses scrollIntoView with smooth behavior
   - Automatically closes mobile menu after navigation
   - Handles both desktop and mobile navigation

5. ANIMATIONS:
   - Logo hover: scale and rotate
   - Nav items: scale and y-axis movement on hover
   - Underline animation on hover

6. RESPONSIVE DESIGN:
   - Desktop: horizontal navigation
   - Mobile: hamburger menu with slide-down navigation
   - Logo size adjusts: h-16 on mobile, h-20 on desktop
*/

