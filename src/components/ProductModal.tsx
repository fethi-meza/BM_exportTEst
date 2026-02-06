import { X, Package, Truck, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  image: string;
  images?: string[]; // Additional images for carousel
  title: string;
  description: string;
  fullDescription: string;
  origin: string;
  packaging: string;
  availability: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { t, isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Create images array (use provided images or fallback to single image repeated 3 times)
  const productImages = product?.images || [product?.image, product?.image, product?.image];

  // Reset image index when modal opens
  useEffect(() => {
    if (!isOpen || !product) return;
    setCurrentImageIndex(0);
  }, [isOpen, product]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  if (!isOpen || !product) return null;

  const whatsappMessage = encodeURIComponent(
    `${t('whatsapp.message')} - ${product.title}`
  );
  const whatsappLink = `https://wa.me/213658000823?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-secondary/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          'relative bg-card rounded-t-2xl md:rounded-2xl shadow-elegant w-full h-screen md:h-[600px] md:max-w-4xl overflow-hidden animate-scale-in',
          isRTL && 'text-right'
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        </button>

        {/* Mobile drag handle */}
        <div className="flex md:hidden justify-center pt-2 pb-1">
          <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row overflow-y-auto md:overflow-hidden h-full">
          {/* Image Carousel */}
          <div className="md:w-1/2 flex-shrink-0 relative group h-48 md:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={productImages[currentImageIndex]}
                alt={`${product.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentImageIndex 
                      ? "bg-primary w-6" 
                      : "bg-background/60 hover:bg-background/80"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-4 md:p-8 overflow-y-auto flex-1">
            <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
              {product.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Details */}
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex items-start gap-2 md:gap-3">
                <Package className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground block text-sm md:text-base">
                    {t('products.modal.origin')}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm">
                    {product.origin}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground block text-sm md:text-base">
                    {t('products.modal.packaging')}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm">
                    {product.packaging}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Truck className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground block text-sm md:text-base">
                    {t('products.modal.availability')}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm">
                    {product.availability}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('products.modal.inquire')}
                </a>
              </Button>
              <Button variant="outline" onClick={onClose} className="flex-1">
                {t('products.modal.close')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
