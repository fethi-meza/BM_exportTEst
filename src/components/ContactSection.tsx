import { useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';

const WHATSAPP_NUMBER = '213658000823';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      type: 'phone' as const,
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            {t('contact.subtitle')}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {t('contact.title')}
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <FadeIn direction={isRTL ? 'right' : 'left'} delay={0.1} className={cn('order-2 lg:order-1', isRTL && 'lg:order-2')}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid gap-3 md:gap-4">
                <Input
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 md:h-12 bg-card border-border/50 focus:border-primary text-sm md:text-base"
                />
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 md:h-12 bg-card border-border/50 focus:border-primary text-sm md:text-base"
                />
              </div>
              <Input
                type="tel"
                placeholder={t('contact.form.phone')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                dir="ltr"
                className={cn(
                  'h-11 md:h-12 bg-card border-border/50 focus:border-primary text-sm md:text-base',
                  isRTL && 'text-left placeholder:text-right'
                )}
              />
              <Textarea
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-card border-border/50 focus:border-primary resize-none text-sm md:text-base"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full text-sm md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                <Send className={cn('w-4 h-4', isRTL && 'rtl-flip')} />
              </Button>
            </form>
          </FadeIn>

          {/* Contact Info & Map */}
          <FadeIn direction={isRTL ? 'left' : 'right'} delay={0.2} className={cn('order-1 lg:order-2 space-y-4 md:space-y-8', isRTL && 'lg:order-1')}>
            {/* Contact Cards */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                {t('contact.info.title')}
              </h3>
              <StaggerContainer staggerDelay={0.1}>
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <div
                      className={cn(
                        'flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-shadow mb-3 md:mb-4',
                        isRTL && 'flex-row-reverse'
                      )}
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      {info.type === 'phone' ? (
                        <span
                          dir="ltr"
                          className={cn('text-foreground text-sm md:text-base tabular-nums', isRTL && 'text-right')}
                        >
                          {info.label}
                        </span>
                      ) : (
                        <span className="text-foreground text-sm md:text-base">{info.label}</span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* WhatsApp Button */}
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full text-sm md:text-base"
              asChild
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                {t('contact.whatsapp')}
              </a>
            </Button>

            {/* Map */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0834669037397!2d10.1658!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzIzLjQiTiAxMMKwMDknNTYuOSJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BM Export Location"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
