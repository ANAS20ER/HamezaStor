
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Star } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { getProductById, Product, products, getAverageRating } from '@/data/products';
import ProductCard from '@/components/ui/product-card';
import ReviewSection from '@/components/reviews/ReviewSection';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      // Simulate API fetch
      setTimeout(() => {
        const foundProduct = getProductById(parseInt(id));
        setProduct(foundProduct || null);
        setLoading(false);
        
        if (foundProduct) {
          // Get related products from the same category
          const related = products
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      }, 300);
    }
  }, [id]);
  
  const addToCart = () => {
    if (product) {
      // In a real app, this would add to cart context
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };
  
  const handleBuyNow = () => {
    if (product) {
      // Add to cart and redirect to checkout
      addToCart();
      navigate('/checkout');
    }
  };
  
  if (loading) {
    return (
      <MainLayout>
        <div className="container py-12">
          <div className="animate-pulse">
            <div className="h-8 w-1/3 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-gray-200 rounded"></div>
              <div>
                <div className="h-8 w-2/3 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-6"></div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  if (!product) {
    return (
      <MainLayout>
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8 text-store-muted">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const averageRating = getAverageRating(product.id);

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mb-6">
          <Link to="/products" className="text-store-muted hover:text-store-accent transition-colors">
            ← Back to Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg overflow-hidden border">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full object-contain aspect-square" 
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="mb-4">
              <span className="inline-block bg-store-light text-store-primary text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(averageRating)
                        ? 'text-store-accent fill-store-accent'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-store-muted">{averageRating} out of 5</span>
            </div>
            
            <div className="text-2xl font-bold text-store-accent mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="prose mb-8">
              <p>{product.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={addToCart} className="gap-2 bg-store-primary hover:bg-store-primary/90">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button onClick={handleBuyNow} variant="outline" className="border-store-primary text-store-primary hover:bg-store-primary/10">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        {product && <ReviewSection productId={product.id} />}
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="product-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
