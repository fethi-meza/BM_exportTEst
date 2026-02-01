import { Wheat, Ship, Package, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Wheat,
      title: t('services.agri.title'),
      description: t('services.agri.desc'),
      color: 'bg-primary',
    },
    {
      icon: Ship,
      title: t('services.logistics.title'),
      description: t('services.logistics.desc'),
      color: 'bg-secondary',
    },
    {
      icon: Package,
      title: t('services.packaging.title'),
      description: t('services.packaging.desc'),
      color: 'bg-accent',
    },
    {
      icon: FileCheck,
      title: t('services.documentation.title'),
      description: t('services.documentation.desc'),
      color: 'bg-primary',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            {t('services.subtitle')}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {t('services.title')}
          </h2>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div
                className={cn(
                  'group p-4 md:p-8 bg-card rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full',
                  isRTL && 'text-right'
                )}
              >
                {/* Background Gradient on Hover */}
                <div className={cn(
                  'absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500',
                  service.color
                )} />
                
                {/* Icon */}
                <div className={cn(
                  'w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 transition-transform duration-500 group-hover:scale-110',
                  service.color,
                  service.color === 'bg-accent' ? 'text-accent-foreground' : 'text-primary-foreground'
                )}>
                  <service.icon className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-3 md:mt-6 h-0.5 md:h-1 w-8 md:w-12 bg-accent rounded-full transition-all duration-500 group-hover:w-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
