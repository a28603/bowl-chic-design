import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  language: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const text = {
    es: {
      home: "Home",
      products: "Productos",
      collections: "Colecciones",
      cta: "Comprar ahora",
      logo: "Bowl Collection"
    },
    en: {
      home: "Home",
      products: "Products", 
      collections: "Collections",
      cta: "Shop now",
      logo: "Bowl Collection"
    }
  };

  const t = text[language];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-light tracking-wide text-foreground">
            {t.logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.home}
            </Link>
            <Link 
              to="/productos" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/productos') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.products}
            </Link>
            <Link 
              to="/colecciones" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/colecciones') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {t.collections}
            </Link>
          </nav>

          {/* Right side - Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              {t.cta}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className={`block text-sm font-medium ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link 
              to="/productos" 
              className={`block text-sm font-medium ${
                isActive('/productos') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.products}
            </Link>
            <Link 
              to="/colecciones" 
              className={`block text-sm font-medium ${
                isActive('/colecciones') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.collections}
            </Link>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button
                onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-1 text-sm text-muted-foreground"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                {t.cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;