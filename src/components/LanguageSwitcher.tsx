import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, label: 'EN', flag: '🇬🇧' },
    { code: 'fr' as const, label: 'FR', flag: '🇫🇷' },
    { code: 'ar' as const, label: 'AR', flag: '🇸🇦' },
  ];

  return (
    <div className="flex items-center gap-0.5 md:gap-1 bg-card/80 backdrop-blur-sm rounded-full p-0.5 md:p-1 shadow-elegant">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            'flex items-center gap-1 md:gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300',
            language === lang.code
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          )}
        >
          <span className="text-sm md:text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
