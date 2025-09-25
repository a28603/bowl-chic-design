import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import CollectionCard from "@/components/CollectionCard";
import heroBowl from "@/assets/hero-bowl.jpg";
import bowlCollection1 from "@/assets/bowl-collection-1.jpg";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlColorful from "@/assets/bowl-colorful.jpg";
import bowlClassic from "@/assets/bowl-classic.jpg";

interface HomeProps {
  language: 'es' | 'en';
}

const Home = ({ language }: HomeProps) => {
  const text = {
    es: {
      hero: {
        title: "Bowl Collection",
        subtitle: "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
        cta: "Explorar Colección"
      },
      products: {
        title: "Productos Destacados",
        items: [
          {
            name: "Bowl Minimalista",
            price: "€19.99",
            originalPrice: "€24.99",
            features: ["Food grade", "Microwave safe", "Dishwasher safe"],
            description: "Diseño elegante y funcional, perfecto para el uso diario. Fabricado con materiales de alta calidad."
          },
          {
            name: "Bowl Clásico",
            price: "€24.99",
            features: ["Ceramic", "Oven safe", "Food grade"],
            description: "Un diseño atemporal que nunca pasa de moda. Ideal para presentaciones elegantes."
          },
          {
            name: "Bowl Colorido",
            price: "€22.99",
            features: ["Dishwasher safe", "Microwave safe", "BPA free"],
            description: "Añade color y alegría a tu mesa con este vibrante diseño moderno."
          }
        ]
      },
      collections: {
        title: "Nuestras Colecciones",
        items: [
          {
            title: "Minimalistas",
            description: "Diseños limpios y elegantes que destacan por su simplicidad y funcionalidad."
          },
          {
            title: "Coloridos",
            description: "Bowls vibrantes que añaden personalidad y alegría a cualquier comida."
          },
          {
            title: "Clásicos", 
            description: "Diseños atemporales que combinan tradición y elegancia en cada pieza."
          }
        ]
      },
      promotion: {
        text: "Oferta especial del fin de semana:",
        discount: "15% de descuento"
      }
    },
    en: {
      hero: {
        title: "Bowl Collection",
        subtitle: "Explore our bowl collection that combines style and practicality, perfect for any table.",
        cta: "Explore Collection"
      },
      products: {
        title: "Featured Products",
        items: [
          {
            name: "Minimalist Bowl",
            price: "€19.99",
            originalPrice: "€24.99",
            features: ["Food grade", "Microwave safe", "Dishwasher safe"],
            description: "Elegant and functional design, perfect for daily use. Made with high-quality materials."
          },
          {
            name: "Classic Bowl",
            price: "€24.99",
            features: ["Ceramic", "Oven safe", "Food grade"],
            description: "A timeless design that never goes out of style. Ideal for elegant presentations."
          },
          {
            name: "Colorful Bowl",
            price: "€22.99",
            features: ["Dishwasher safe", "Microwave safe", "BPA free"],
            description: "Add color and joy to your table with this vibrant modern design."
          }
        ]
      },
      collections: {
        title: "Our Collections",
        items: [
          {
            title: "Minimalists",
            description: "Clean and elegant designs that stand out for their simplicity and functionality."
          },
          {
            title: "Colorful",
            description: "Vibrant bowls that add personality and joy to any meal."
          },
          {
            title: "Classics",
            description: "Timeless designs that combine tradition and elegance in every piece."
          }
        ]
      },
      promotion: {
        text: "Special weekend offer:",
        discount: "15% off"
      }
    }
  };

  const t = text[language];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="hero-title">
                  {t.hero.title}
                </h1>
                <p className="hero-subtitle max-w-lg">
                  {t.hero.subtitle}
                </p>
              </div>
              
              {/* Promotion Banner */}
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm">
                <span>{t.promotion.text}</span>
                <span className="font-medium">{t.promotion.discount}</span>
              </div>

              <Link to="/productos">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t.hero.cta}
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                <img
                  src={heroBowl}
                  alt="Hero Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              {t.products.title}
            </h2>
          </div>

          <div className="product-grid">
            <ProductCard
              name={t.products.items[0].name}
              price={t.products.items[0].price}
              originalPrice={t.products.items[0].originalPrice}
              image={bowlWhite}
              features={t.products.items[0].features}
              description={t.products.items[0].description}
              language={language}
            />
            <ProductCard
              name={t.products.items[1].name}
              price={t.products.items[1].price}
              image={bowlClassic}
              features={t.products.items[1].features}
              description={t.products.items[1].description}
              language={language}
            />
            <ProductCard
              name={t.products.items[2].name}
              price={t.products.items[2].price}
              image={bowlColorful}
              features={t.products.items[2].features}
              description={t.products.items[2].description}
              language={language}
            />
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              {t.collections.title}
            </h2>
          </div>

          <div className="collection-grid">
            <CollectionCard
              title={t.collections.items[0].title}
              description={t.collections.items[0].description}
              image={bowlWhite}
            />
            <CollectionCard
              title={t.collections.items[1].title}
              description={t.collections.items[1].description}
              image={bowlColorful}
            />
            <CollectionCard
              title={t.collections.items[2].title}
              description={t.collections.items[2].description}
              image={bowlClassic}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;