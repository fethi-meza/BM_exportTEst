import { Clock, Award, Truck, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const WhyChooseSection = () => {
  const { t, isRTL } = useLanguage();

  const reasons = [
    {
      icon: Clock,
      title: t('why.experience.title'),
      description: t('why.experience.desc'),
      number: '01',
    },
    {
      icon: Award,
      title: t('why.quality.title'),
      description: t('why.quality.desc'),
      number: '02',
    },
    {
      icon: Truck,
      title: t('why.delivery.title'),
      description: t('why.delivery.desc'),
      number: '03',
    },
    {
      icon: DollarSign,
      title: t('why.pricing.title'),
      description: t('why.pricing.desc'),
      number: '04',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-secondary-foreground/10 text-secondary-foreground rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            {t('why.subtitle')}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            {t('why.title')}
          </h2>
        </FadeIn>

        {/* Reasons Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8" staggerDelay={0.1}>
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div
                className={cn(
                  'group relative p-4 md:p-8 rounded-xl md:rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 hover:border-accent/50 transition-all duration-500 h-full',
                  isRTL && 'text-right'
                )}
              >
                {/* Number */}
                <span className="absolute top-2 right-2 md:top-4 md:right-4 text-2xl md:text-5xl font-display font-bold text-secondary-foreground/10 group-hover:text-accent/20 transition-colors">
                  {reason.number}
                </span>
                
                {/* Icon */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-accent flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-5 h-5 md:w-7 md:h-7 text-accent-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-sm md:text-xl font-bold mb-1 md:mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {reason.title}
                </h3>
                <p className="text-secondary-foreground/70 text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseSection;
