import { Globe, Shield, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: t('about.expertise.title'),
      description: t('about.expertise.desc'),
    },
    {
      icon: Shield,
      title: t('about.quality.title'),
      description: t('about.quality.desc'),
    },
    {
      icon: Award,
      title: t('about.global.title'),
      description: t('about.global.desc'),
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <FadeIn direction={isRTL ? 'right' : 'left'} className={cn(isRTL && 'lg:order-2')}>
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              {t('about.subtitle')}
            </span>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-10">
              {t('about.description')}
            </p>

            {/* Feature List */}
            <StaggerContainer className="space-y-3 md:space-y-6" staggerDelay={0.15}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div
                    className={cn(
                      'flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card shadow-card hover:shadow-elegant transition-shadow duration-300',
                      isRTL && 'flex-row-reverse text-right'
                    )}
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-0.5 md:mb-1 text-sm md:text-base">{feature.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Visual Element */}
          <FadeIn direction={isRTL ? 'left' : 'right'} delay={0.2} className={cn('relative mt-6 lg:mt-0', isRTL && 'lg:order-1')}>
            <div className="relative">
              {/* Stats Cards */}
              <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-6" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="p-5 md:p-8 bg-card rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-2 md:mb-3">15+</div>
                    <div className="text-muted-foreground text-sm md:text-base font-medium">Years Experience</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-5 md:p-8 bg-primary rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-2 md:mb-3">50+</div>
                    <div className="text-primary-foreground/90 text-sm md:text-base font-medium">Countries Served</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-5 md:p-8 bg-secondary rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mb-2 md:mb-3">1000+</div>
                    <div className="text-secondary-foreground/90 text-sm md:text-base font-medium">Happy Clients</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-5 md:p-8 bg-accent rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-3xl md:text-5xl font-display font-bold text-accent-foreground mb-2 md:mb-3">100%</div>
                    <div className="text-accent-foreground/90 text-sm md:text-base font-medium">Quality Assured</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
