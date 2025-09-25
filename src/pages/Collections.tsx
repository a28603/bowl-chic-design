import CollectionCard from "@/components/CollectionCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlColorful from "@/assets/bowl-colorful.jpg";
import bowlClassic from "@/assets/bowl-classic.jpg";

interface CollectionsProps {
  language: 'es' | 'en';
}

const Collections = ({ language }: CollectionsProps) => {
  const text = {
    es: {
      title: "Nuestras Colecciones",
      subtitle: "Cada colección cuenta una historia única, diseñada para diferentes momentos y estilos de vida.",
      cta: "Ver Productos",
      collections: [
        {
          title: "Minimalistas",
          description: "Diseños limpios y elegantes que destacan por su simplicidad y funcionalidad. Perfectos para espacios modernos y minimalistas que valoran la estética sin complicaciones.",
          features: ["Líneas puras", "Colores neutros", "Máxima funcionalidad"]
        },
        {
          title: "Coloridos",
          description: "Bowls vibrantes que añaden personalidad y alegría a cualquier comida. Ideales para quienes buscan expresar su creatividad y llenar sus espacios de energía positiva.",
          features: ["Colores vibrantes", "Diseños alegres", "Perfectos para niños"]
        },
        {
          title: "Clásicos",
          description: "Diseños atemporales que combinan tradición y elegancia en cada pieza. Una inversión segura que nunca pasará de moda y se adapta a cualquier decoración.",
          features: ["Diseño atemporal", "Máxima elegancia", "Versatilidad total"]
        }
      ]
    },
    en: {
      title: "Our Collections",
      subtitle: "Each collection tells a unique story, designed for different moments and lifestyles.",
      cta: "View Products",
      collections: [
        {
          title: "Minimalists",
          description: "Clean and elegant designs that stand out for their simplicity and functionality. Perfect for modern and minimalist spaces that value uncomplicated aesthetics.",
          features: ["Pure lines", "Neutral colors", "Maximum functionality"]
        },
        {
          title: "Colorful",
          description: "Vibrant bowls that add personality and joy to any meal. Ideal for those looking to express their creativity and fill their spaces with positive energy.",
          features: ["Vibrant colors", "Cheerful designs", "Perfect for kids"]
        },
        {
          title: "Classics",
          description: "Timeless designs that combine tradition and elegance in every piece. A safe investment that will never go out of style and adapts to any decoration.",
          features: ["Timeless design", "Maximum elegance", "Total versatility"]
        }
      ]
    }
  };

  const t = text[language];
  const images = [bowlWhite, bowlColorful, bowlClassic];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {t.collections.map((collection, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Collection Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                    <img
                      src={images[index]}
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Collection Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
                    {collection.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {collection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/productos">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {t.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;