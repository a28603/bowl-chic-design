import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  description: string;
  language: 'es' | 'en';
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  features, 
  description, 
  language 
}: ProductCardProps) => {
  const text = {
    es: {
      details: "Ver detalles"
    },
    en: {
      details: "View details"
    }
  };

  const t = text[language];

  return (
    <div className="group">
      {/* Product Image */}
      <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {originalPrice && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {language === 'es' ? 'Oferta especial' : 'Special offer'}
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-light tracking-wide text-foreground">
          {name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-border text-muted-foreground"
            >
              {feature}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-light text-foreground">
            {price}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          {t.details}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;