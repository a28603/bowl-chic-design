interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
}

const CollectionCard = ({ title, description, image }: CollectionCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Collection Image */}
      <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Collection Info */}
      <div className="space-y-3">
        <h3 className="text-2xl font-light tracking-wide text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;