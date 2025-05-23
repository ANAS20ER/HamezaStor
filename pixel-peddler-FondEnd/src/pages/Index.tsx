
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/product-card';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  
  useEffect(() => {
    // Simulate loading data
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-store-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury Handbags for Every Occasion</h1>
            <p className="text-lg mb-8 text-gray-200">
              Discover our exclusive collection of designer handbags crafted with premium materials and timeless style
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-store-accent hover:bg-store-accent/90">
                <Link to="/products">Shop Collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-store-accent opacity-10 rounded-bl-full transform translate-x-1/4"></div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Featured Bags</h2>
          <p className="text-store-muted mb-8">Handpicked styles from our exclusive collection</p>
          
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View All Handbags</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Style</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products?category=tote-bags" className="group">
              <div className="bg-store-light rounded-lg p-8 text-center transition-all hover:bg-store-accent hover:text-white">
                <h3 className="text-xl font-semibold">Tote Bags</h3>
                <p className="mt-2 text-sm opacity-80">Spacious everyday companions</p>
              </div>
            </Link>
            
            <Link to="/products?category=crossbody" className="group">
              <div className="bg-store-light rounded-lg p-8 text-center transition-all hover:bg-store-accent hover:text-white">
                <h3 className="text-xl font-semibold">Crossbody</h3>
                <p className="mt-2 text-sm opacity-80">Hands-free convenience and style</p>
              </div>
            </Link>
            
            <Link to="/products?category=clutches" className="group">
              <div className="bg-store-light rounded-lg p-8 text-center transition-all hover:bg-store-accent hover:text-white">
                <h3 className="text-xl font-semibold">Clutches</h3>
                <p className="mt-2 text-sm opacity-80">Elegant evening essentials</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quality & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose HamezaStore</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-store-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-store-accent">
                  <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-700">All our handbags are crafted with the finest materials and meticulous attention to detail.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-store-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-store-accent">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Authenticated Products</h3>
              <p className="text-gray-700">We guarantee the authenticity of every item sold on our online store.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-store-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-store-accent">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <path d="M2 10h20"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-700">Your transactions are protected with industry-leading security technology.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Customer Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-store-accent text-white rounded-full flex items-center justify-center">SJ</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-store-accent fill-store-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"My tote bag from HamezaStore is the perfect everyday companion. The quality is outstanding and it holds everything I need!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-store-accent text-white rounded-full flex items-center justify-center">ML</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michelle Lee</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= 5
                            ? 'text-store-accent fill-store-accent'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"I've received so many compliments on my crossbody bag! The design is unique and the craftsmanship is exceptional."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-store-accent text-white rounded-full flex items-center justify-center">AT</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Alicia Thomas</h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= 4
                            ? 'text-store-accent fill-store-accent'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"The clutch I purchased for my sister's wedding was perfect. Fast shipping and beautiful packaging too!"</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
