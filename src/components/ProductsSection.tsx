import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';
import olivesImage from '@/assets/product-olives.jpg';
import datesImage from '@/assets/product-dates.jpg';
import datesImage1 from '@/assets/product-dates-1.jpg';
import datesImage2 from '@/assets/product-dates-2.jpg';
import datesImage3 from '@/assets/product-dates-3.jpeg';
import datesImage4 from '@/assets/product-dates-4.jpeg';
import datesImage5 from '@/assets/product-dates-5.jpeg';
import datesImage6 from '@/assets/product-dates-6.jpeg';
import citrusImage from '@/assets/product-citrus.jpg';
import citrusImage1 from '@/assets/product-citrus-1.jpeg';
import citrusImage2 from '@/assets/product-citrus-2.jpeg';
import citrusImage3 from '@/assets/product-citrus-3.jpeg';
import citrusImage4 from '@/assets/product-citrus-4.jpeg';
import citrusImage5 from '@/assets/product-citrus-5.jpeg';
import citrusImage6 from '@/assets/product-citrus-6.jpeg';
import citrusImage7 from '@/assets/product-citrus-7.jpeg';
import grainsImage from '@/assets/product-grains.jpg';
import almondsImage from '@/assets/product-almonds.jpg';
import oliveOilImage from '@/assets/product-olive-oil.jpg';
import oliveOilImage1 from '@/assets/product-olive-oil-1.jpg';
import oliveOilImage2 from '@/assets/product-olive-oil-2.jpg';
import tomatoesImage from '@/assets/product-tomatoes.jpg';
import tomatoesImage1 from '@/assets/product-tomatoes-1.jpg';
import tomatoesImage2 from '@/assets/product-tomatoes-2.jpg';
import tomatoesImage3 from '@/assets/product-tomatoes-3.jpeg';
import tomatoesImage4 from '@/assets/product-tomatoes-4.jpeg';
import tomatoesImage5 from '@/assets/product-tomatoes-5.jpeg';
import figsImage from '@/assets/product-figs.jpg';
import figsImage1 from '@/assets/product-figs-1.jpg';
import figsImage2 from '@/assets/product-figs-2.jpg';
import ProductModal from './ProductModal';

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

const ProductsSection = () => {
  const { t, isRTL } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      image: olivesImage,
      images: [olivesImage, olivesImage, olivesImage], // Add 3 images here
      title: t('products.olives.title'),
      description: t('products.olives.desc'),
      fullDescription: t('products.olives.fullDesc'),
      origin: t('products.olives.origin'),
      packaging: t('products.olives.packaging'),
      availability: t('products.olives.availability'),
    },
    {
      image: datesImage,
      images: [datesImage, datesImage1, datesImage2, datesImage3, datesImage4, datesImage5, datesImage6], // Add 7 images here
      title: t('products.dates.title'),
      description: t('products.dates.desc'),
      fullDescription: t('products.dates.fullDesc'),
      origin: t('products.dates.origin'),
      packaging: t('products.dates.packaging'),
      availability: t('products.dates.availability'),
    },
    {
      image: citrusImage,
      images: [citrusImage, citrusImage1, citrusImage2, citrusImage3, citrusImage4, citrusImage5, citrusImage6, citrusImage7], // Add 8 images here
      title: t('products.citrus.title'),
      description: t('products.citrus.desc'),
      fullDescription: t('products.citrus.fullDesc'),
      origin: t('products.citrus.origin'),
      packaging: t('products.citrus.packaging'),
      availability: t('products.citrus.availability'),
    },
    {
      image: grainsImage,
      images: [grainsImage, grainsImage, grainsImage], // Add 3 images here
      title: t('products.grains.title'),
      description: t('products.grains.desc'),
      fullDescription: t('products.grains.fullDesc'),
      origin: t('products.grains.origin'),
      packaging: t('products.grains.packaging'),
      availability: t('products.grains.availability'),
    },
    {
      image: almondsImage,
      images: [almondsImage, almondsImage, almondsImage], // Add 3 images here
      title: t('products.almonds.title'),
      description: t('products.almonds.desc'),
      fullDescription: t('products.almonds.fullDesc'),
      origin: t('products.almonds.origin'),
      packaging: t('products.almonds.packaging'),
      availability: t('products.almonds.availability'),
    },
    {
      image: oliveOilImage,
      images: [oliveOilImage, oliveOilImage1, oliveOilImage2], // Add 3 images here
      title: t('products.oliveOil.title'),
      description: t('products.oliveOil.desc'),
      fullDescription: t('products.oliveOil.fullDesc'),
      origin: t('products.oliveOil.origin'),
      packaging: t('products.oliveOil.packaging'),
      availability: t('products.oliveOil.availability'),
    },
    {
      image: tomatoesImage,
      images: [tomatoesImage, tomatoesImage1, tomatoesImage2 ,tomatoesImage3 ,tomatoesImage4, tomatoesImage5], // Add 3 images here
      title: t('products.tomatoes.title'),
      description: t('products.tomatoes.desc'),
      fullDescription: t('products.tomatoes.fullDesc'),
      origin: t('products.tomatoes.origin'),
      packaging: t('products.tomatoes.packaging'),
      availability: t('products.tomatoes.availability'),
    },
    {
      image: figsImage,
      images: [figsImage, figsImage1, figsImage2], // Add 3 images here
      title: t('products.figs.title'),
      description: t('products.figs.desc'),
      fullDescription: t('products.figs.fullDesc'),
      origin: t('products.figs.origin'),
      packaging: t('products.figs.packaging'),
      availability: t('products.figs.availability'),
    },
  ];

  return (
    <>
      <section id="products" className="py-12 md:py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <FadeIn className="text-center max-w-2xl mx-auto mb-8 md:mb-16 px-2">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              {t('products.subtitle')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
              {t('products.title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {t('products.viewDetails')}
            </p>
          </FadeIn>

          {/* Products Grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6" staggerDelay={0.08}>
            {products.map((product, index) => (
              <StaggerItem key={index}>
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <div className="aspect-square md:aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className={cn(
                    'absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500',
                    isRTL && 'text-right'
                  )}>
                    <h3 className="font-display text-sm md:text-xl font-bold text-secondary-foreground mb-1 md:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {product.title}
                    </h3>
                    <p className="text-secondary-foreground/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                      {product.description}
                    </p>
                    <span className="hidden md:inline-block mt-3 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      {t('products.clickDetails')} →
                    </span>
                  </div>

                  {/* Default Title Badge */}
                  <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-card/90 backdrop-blur-sm rounded-md md:rounded-lg text-foreground font-medium text-xs md:text-sm shadow-elegant line-clamp-1">
                      {product.title}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductsSection;
