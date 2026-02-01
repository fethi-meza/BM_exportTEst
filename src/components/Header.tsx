import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#products', label: t('nav.products') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-card/95 backdrop-blur-lg shadow-elegant py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">BM</span>
            </div>
            <span className={cn(
              'font-display text-xl font-bold transition-colors',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}>
              Export
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative group',
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Language Switcher, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(
                  'p-2 rounded-lg transition-all duration-300 relative',
                  isScrolled 
                    ? 'bg-muted/50 hover:bg-muted text-foreground border border-border/50'
                    : 'bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20'
                )}
                aria-label="Toggle theme"
              >
                <Sun className={cn(
                  "h-4 w-4 transition-all",
                  theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
                )} />
                <Moon className={cn(
                  "absolute top-2 left-2 h-4 w-4 transition-all",
                  theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                )} />
              </button>
            )}

            <LanguageSwitcher />
            
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-primary-foreground')} />
              ) : (
                <Menu className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-primary-foreground')} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute left-0 right-0 top-full bg-card/95 backdrop-blur-lg shadow-elegant transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
