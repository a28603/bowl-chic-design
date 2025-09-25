import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const text = {
    es: {
      contact: "Contacto",
      navigation: "Navegación",
      home: "Home",
      products: "Productos",
      collections: "Colecciones",
      email: "hola@bowlcollection.com",
      phone: "+34 123 456 789",
      address: "Madrid, España",
      follow: "Síguenos",
      rights: "© 2024 Bowl Collection. Todos los derechos reservados."
    },
    en: {
      contact: "Contact",
      navigation: "Navigation",
      home: "Home",
      products: "Products", 
      collections: "Collections",
      email: "hello@bowlcollection.com",
      phone: "+34 123 456 789",
      address: "Madrid, Spain",
      follow: "Follow us",
      rights: "© 2024 Bowl Collection. All rights reserved."
    }
  };

  const t = text[language];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-wide text-foreground mb-4">
              Bowl Collection
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {language === 'es' 
                ? "Descubre bowls elegantes que combinan diseño y funcionalidad para transformar cada comida en una experiencia especial."
                : "Discover elegant bowls that combine design and functionality to transform every meal into a special experience."
              }
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4">{t.contact}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t.email}</p>
              <p>{t.phone}</p>
              <p>{t.address}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-foreground mb-4">{t.navigation}</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.home}
              </Link>
              <Link 
                to="/productos" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.products}
              </Link>
              <Link 
                to="/colecciones" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.collections}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            {t.rights}
          </p>
          
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground mr-2">{t.follow}</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;