import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className={cn(
          'flex flex-col items-center gap-4 md:gap-6 md:flex-row md:justify-between',
          isRTL && 'md:flex-row-reverse'
        )}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-sm md:text-lg">BM</span>
            </div>
            <div>
              <span className="font-display text-lg md:text-xl font-bold">Export</span>
              <p className="text-secondary-foreground/60 text-xs md:text-sm">{t('footer.tagline')}</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-secondary-foreground/60 text-xs md:text-sm text-center">
            © {currentYear} BM Export. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
