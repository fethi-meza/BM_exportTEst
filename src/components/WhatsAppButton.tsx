import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t, isRTL, language } = useLanguage();

  // Set WhatsApp number based on language
  const WHATSAPP_NUMBER = language === 'ar' ? '+2136580000823' : '+33773996582';

  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 group`}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow">
          <MessageCircle className="w-8 h-8 text-white" fill="white" />
        </div>
        
        {/* Tooltip */}
        <div className={`absolute bottom-full ${isRTL ? 'left-0' : 'right-0'} mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
          <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            {t('contact.whatsapp')}
            <div className={`absolute top-full ${isRTL ? 'left-6' : 'right-6'} border-8 border-transparent border-t-foreground`} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
