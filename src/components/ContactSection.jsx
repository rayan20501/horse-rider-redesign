import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Email configuration for Hostinger
      // To change the recipient email, modify the 'to' field below
      const emailData = {
        to: 'info@horserider.es', // Change this email address as needed
        from: formData.email,
        subject: `Nuevo mensaje de contacto de ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #dc2626; margin-bottom: 20px; text-align: center;">Nuevo Mensaje de Contacto - Horse Rider</h2>
              
              <div style="margin-bottom: 20px; padding: 15px; background-color: #fef2f2; border-left: 4px solid #dc2626; border-radius: 5px;">
                <h3 style="margin: 0 0 10px 0; color: #991b1b;">Información del Contacto:</h3>
                <p style="margin: 5px 0; color: #374151;"><strong>Nombre:</strong> ${formData.name}</p>
                <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${formData.email}</p>
              </div>
              
              <div style="margin-bottom: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
                <h3 style="margin: 0 0 15px 0; color: #374151;">Mensaje:</h3>
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  Este mensaje fue enviado desde el formulario de contacto de Horse Rider Energy
                </p>
                <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                  Fecha: ${new Date().toLocaleString('es-ES')}
                </p>
              </div>
            </div>
          </div>
        `
      };

      // Send email using Hostinger's email service
      // This is a placeholder for the actual email sending implementation
      // You'll need to implement the email sending logic based on your Hostinger setup
      
      // Option 1: Using a backend API endpoint (recommended)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      // Option 2: Using EmailJS (alternative client-side solution)
      // Uncomment the following lines if you prefer to use EmailJS
      // Make sure to install emailjs-com: npm install emailjs-com
      /*
      import emailjs from 'emailjs-com';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'info@horserider.es', // Change this email as needed
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
      );
      */

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitError('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente a info@horserider.es');
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl pulse-red-animation"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pulse-red-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bebas-neue font-black text-center mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(239, 68, 68, 0.5)",
                "0 0 40px rgba(239, 68, 68, 0.8)",
                "0 0 20px rgba(239, 68, 68, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="block text-white neon-glow-animation">CONSIGUE LA</span>
            <span className="block text-gradient-red neon-glow-animation">TUYA AHORA</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            ¿Listo para experimentar la energía más pura de España? Contáctanos y descubre cómo Horse Rider Energy puede transformar tu rendimiento.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-500/10 via-blue-500/10 to-red-500/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-red-500/30 glow-animation">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 glow-animation" />
                <h3 className="text-2xl font-bold text-white mb-4 neon-glow-animation">¡Mensaje Enviado!</h3>
                <p className="text-gray-300 text-lg">
                  Gracias por contactarnos. Te responderemos pronto a <span className="text-red-500 font-semibold">info@horserider.es</span>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-300 text-center"
                  >
                    {submitError}
                  </motion.div>
                )}

                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-red-500" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-500" />
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-yellow-500" />
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-yellow-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos cómo Horse Rider Energy puede ayudarte a alcanzar tus objetivos..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-red-gradient px-12 py-4 rounded-full text-white font-bold text-xl glow-animation hover-glow neon-glow-animation flex items-center gap-4 mx-auto transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center pt-6 border-t border-gray-700"
                >
                  <p className="text-gray-400 text-sm mb-2">
                    También puedes contactarnos directamente en:
                  </p>
                  <a 
                    href="mailto:info@horserider.es" 
                    className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    info@horserider.es
                  </a>
                </motion.div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Animated Scrolling Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden"
        >
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-4xl lg:text-6xl font-bebas-neue text-red-500/30 neon-glow-animation"
          >
            CONTÁCTANOS HOY • ENERGÍA PREMIUM • SABOR ESPAÑOL • RENDIMIENTO MÁXIMO • 
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

/*
EMAIL CONFIGURATION INSTRUCTIONS:

1. To change the recipient email address:
   - Modify the 'to' field in the emailData object (line 25)
   - Current recipient: info@horserider.es

2. Backend Implementation Required:
   - Create an API endpoint at '/api/send-email' that handles POST requests
   - Use Hostinger's SMTP settings or email API
   - Example SMTP settings for Hostinger:
     * Host: smtp.hostinger.com
     * Port: 587 (STARTTLS) or 465 (SSL)
     * Username: your-email@yourdomain.com
     * Password: your-email-password

3. Alternative: EmailJS Implementation
   - Uncomment the EmailJS code section (lines 45-62)
   - Install emailjs-com: npm install emailjs-com
   - Sign up at emailjs.com and get your service ID, template ID, and public key
   - Replace the placeholder values in the code

4. Email Template Customization:
   - Modify the HTML template in the emailData.html field
   - Change colors, styling, or content as needed
   - The current template uses Horse Rider branding colors

5. Error Handling:
   - Customize error messages in the submitError state
   - Add additional validation as needed
   - Consider adding success/failure analytics tracking
*/

