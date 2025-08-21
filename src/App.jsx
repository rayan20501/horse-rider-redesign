import React, { useState } from 'react';

// CUSTOMIZATION: Import all page components
// To add new sections: Import the component here and add it to the main section below
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import PhotoSlider from './components/PhotoSlider';
import StorySection from './components/StorySection';
import ExclusivitySection from './components/ExclusivitySection';
import ProductGallery from './components/ProductGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  // CUSTOMIZATION: Preloader state management
  // Set to false to disable preloader entirely
  const [isLoading, setIsLoading] = useState(true);

  // Handle preloader completion
  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App bg-black text-white overflow-x-hidden">
      {/* CUSTOMIZATION: Preloader Component
          - Shows loading animation on first visit
          - To disable: Remove this line or set isLoading to false initially
          - To customize: Edit components/Preloader.jsx */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* CUSTOMIZATION: Main Website Content
          - Only shows after preloader completes
          - All sections are organized in semantic order */}
      {!isLoading && (
        <>
          {/* CUSTOMIZATION: Fixed Header with Navigation
              - Sticky navigation bar
              - Logo and menu items
              - Smooth scrolling to sections
              - Edit: components/Header.jsx */}
          <Header />
          
          {/* CUSTOMIZATION: Main Content Sections
              - Each section has an ID for navigation
              - Sections can be reordered, removed, or added
              - To add new section: Import component and add here */}
          <main>
            {/* Hero Section - Landing area with main CTA
                ID: "home" - Used for navigation */}
            <Hero />
            
            {/* Product Information Section
                ID: "producto" - Product details and features */}
            <ProductSection />
            
            {/* Photo Gallery Slider
                ID: "galeria" - Lifestyle and product images */}
            <PhotoSlider />
            
            {/* Brand Story Section
                ID: "historia" - Company background and values */}
            <StorySection />
            
            {/* Exclusivity/Availability Section
                ID: "exclusividad" - Location-based availability */}
            <ExclusivitySection />
            
            {/* Product Gallery
                Additional product showcase */}
            <ProductGallery />
            
            {/* Contact Form Section
                ID: "contacto" - Contact form with email functionality */}
            <ContactSection />
          </main>
          
          {/* CUSTOMIZATION: Footer
              - Company information and links
              - Social media links
              - Contact information
              - Edit: components/Footer.jsx */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

/*
APP.JSX CUSTOMIZATION GUIDE:

1. SECTION ORDER:
   - Sections appear in the order listed in the <main> element
   - To reorder: Move the component tags to desired positions
   - To remove: Delete or comment out unwanted sections

2. ADDING NEW SECTIONS:
   - Create new component in components/ folder
   - Import at top of file
   - Add component tag in desired position within <main>
   - Add ID attribute for navigation if needed

3. PRELOADER:
   - Controlled by isLoading state
   - Shows animated loading screen on first visit
   - To disable: Set useState(false) or remove preloader logic
   - To customize: Edit components/Preloader.jsx

4. NAVIGATION IDs:
   - Each section should have an ID for smooth scrolling
   - Current IDs: home, producto, galeria, historia, exclusividad, contacto
   - Header navigation uses these IDs for scrolling

5. STYLING:
   - Main container uses: bg-black text-white overflow-x-hidden
   - Global styles in App.css
   - Component-specific styles in individual components

6. RESPONSIVE DESIGN:
   - All components are responsive
   - Mobile-first approach with Tailwind CSS
   - Test on different screen sizes

7. PERFORMANCE:
   - Components use lazy loading where appropriate
   - Images optimized with loading="lazy"
   - Animations use hardware acceleration

8. ACCESSIBILITY:
   - Semantic HTML structure
   - Alt text for images
   - Keyboard navigation support
   - Screen reader friendly

9. SEO CONSIDERATIONS:
   - Use semantic HTML tags (main, section, header, footer)
   - Add meta tags in index.html
   - Proper heading hierarchy (h1, h2, h3)

10. MAINTENANCE:
    - Each component is self-contained
    - Inline comments explain customization options
    - Consistent naming conventions
    - Clear file organization
*/

