import { ArrowRight, MessageCircle, FileText, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-bg-0.jpg';
import heroImage1 from '@/assets/hero-bg-1.jpg';
import heroImage2 from '@/assets/hero-bg-2.jpeg';
const WHATSAPP_NUMBER = '+33773996582';
const PHONE_NUMBER = '+21359300417';

// Array of background images 
const backgroundImages = [
  heroImage,
  heroImage1, //  second image
  heroImage2, //  third image
];

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll images every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          key={currentImageIndex}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          src={backgroundImages[currentImageIndex]}
          alt={`Agricultural export ${currentImageIndex + 1}`}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-10" /> // Overlay for better text visibility bg imges
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-5 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-5 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Company Name */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary-foreground/1 backdrop-blur-sm rounded-full text-primary-foreground/60 text-xs md:text-sm font-medium mb-4 md:mb-6">
              International Export Excellence
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground/70 mb-4 md:mb-6 leading-tight"
          >
            <span className="text-gradient">BM</span> Export
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-3xl text-primary-foreground/60 font-display mb-3 md:mb-4"
          >
            {t('hero.slogan')}
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-lg text-primary-foreground/50 max-w-2xl mx-auto mb-6 md:mb-10 px-2"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-stretch sm:items-center justify-center gap-3 w-full px-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group w-full sm:w-auto"
            >
              {t('hero.cta.contact')}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rtl-flip group-hover:-translate-x-1' : ''}`} />
            </Button>
            
            <Button
              variant="heroOutline"
              size="xl"
              onClick={scrollToContact}
              className="group w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              {t('hero.cta.quote')}
            </Button>
            
            <Button
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto"
              asChild
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('hero.cta.whatsapp')}
              </a>
            </Button>
            
            <Button
              size="xl"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="w-5 h-5" />
                Quick Call
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
