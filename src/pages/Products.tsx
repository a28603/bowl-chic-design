import ProductCard from "@/components/ProductCard";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlColorful from "@/assets/bowl-colorful.jpg";
import bowlClassic from "@/assets/bowl-classic.jpg";
import bowlCollection1 from "@/assets/bowl-collection-1.jpg";

interface ProductsProps {
  language: 'es' | 'en';
}

const Products = ({ language }: ProductsProps) => {
  const text = {
    es: {
      title: "Todos los Productos",
      subtitle: "Descubre nuestra completa colección de bowls, cada uno diseñado con atención al detalle y fabricado con los mejores materiales.",
      products: [
        {
          name: "Bowl Minimalista Blanco",
          price: "€19.99",
          originalPrice: "€24.99",
          features: ["Food grade", "Microwave safe", "Dishwasher safe"],
          description: "Diseño elegante y funcional, perfecto para el uso diario. Fabricado con cerámica de alta calidad."
        },
        {
          name: "Bowl Clásico Tierra",
          price: "€24.99",
          features: ["Ceramic", "Oven safe", "Food grade"],
          description: "Un diseño atemporal que nunca pasa de moda. Ideal para presentaciones elegantes y comidas especiales."
        },
        {
          name: "Set Bowl Colorido",
          price: "€22.99",
          features: ["Dishwasher safe", "Microwave safe", "BPA free"],
          description: "Añade color y alegría a tu mesa con este vibrante conjunto de bowls modernos."
        },
        {
          name: "Colección Bowl Mixta",
          price: "€34.99",
          features: ["Food grade", "Oven safe", "Microwave safe"],
          description: "Un conjunto versátil que incluye diferentes tamaños y estilos para todas tus necesidades culinarias."
        },
        {
          name: "Bowl Premium Verde",
          price: "€29.99",
          features: ["Hand crafted", "Ceramic", "Food grade"],
          description: "Pieza artesanal única con acabado premium en tono verde natural. Perfecto para ocasiones especiales."
        },
        {
          name: "Bowl Familiar Grande",
          price: "€26.99",
          features: ["Large size", "Microwave safe", "Dishwasher safe"],
          description: "Ideal para compartir comidas en familia. Diseño ergonómico y capacidad generosa."
        }
      ]
    },
    en: {
      title: "All Products",
      subtitle: "Discover our complete bowl collection, each designed with attention to detail and crafted with the finest materials.",
      products: [
        {
          name: "White Minimalist Bowl",
          price: "€19.99",
          originalPrice: "€24.99",
          features: ["Food grade", "Microwave safe", "Dishwasher safe"],
          description: "Elegant and functional design, perfect for daily use. Made with high-quality ceramic."
        },
        {
          name: "Classic Earth Bowl",
          price: "€24.99",
          features: ["Ceramic", "Oven safe", "Food grade"],
          description: "A timeless design that never goes out of style. Ideal for elegant presentations and special meals."
        },
        {
          name: "Colorful Bowl Set",
          price: "€22.99",
          features: ["Dishwasher safe", "Microwave safe", "BPA free"],
          description: "Add color and joy to your table with this vibrant set of modern bowls."
        },
        {
          name: "Mixed Bowl Collection",
          price: "€34.99",
          features: ["Food grade", "Oven safe", "Microwave safe"],
          description: "A versatile set that includes different sizes and styles for all your culinary needs."
        },
        {
          name: "Premium Green Bowl",
          price: "€29.99",
          features: ["Hand crafted", "Ceramic", "Food grade"],
          description: "Unique artisanal piece with premium finish in natural green tone. Perfect for special occasions."
        },
        {
          name: "Large Family Bowl",
          price: "€26.99",
          features: ["Large size", "Microwave safe", "Dishwasher safe"],
          description: "Ideal for sharing family meals. Ergonomic design and generous capacity."
        }
      ]
    }
  };

  const t = text[language];
  const images = [bowlWhite, bowlClassic, bowlColorful, bowlCollection1, bowlWhite, bowlClassic];

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

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="product-grid">
            {t.products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={images[index]}
                features={product.features}
                description={product.description}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;