
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const ProductCard = ({ id, name, price, imageUrl, category }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden card-hover border-store-accent/20">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg truncate hover:text-store-accent transition-colors">{name}</h3>
        </Link>
        <div className="flex items-baseline mt-1 mb-2">
          <span className="text-store-accent font-semibold">${price.toFixed(2)}</span>
        </div>
        <div>
          <span className="inline-block bg-store-light text-store-accent text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full gap-2 hover:bg-store-accent hover:text-white transition-all duration-300 border-store-accent/50">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
