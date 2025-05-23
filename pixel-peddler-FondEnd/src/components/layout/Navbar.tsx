
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-store-primary mr-8">HamezaStore</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-store-accent transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-store-accent transition-colors">
              Products
            </Link>
            <Link to="/orders" className="text-sm font-medium hover:text-store-accent transition-colors">
              Orders
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5 hover:text-store-accent transition-colors" />
            <span className="absolute -top-2 -right-2 bg-store-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
          
          <Link to="/login">
            <User className="h-5 w-5 hover:text-store-accent transition-colors" />
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t container py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-store-accent transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-store-accent transition-colors">
              Products
            </Link>
            <Link to="/orders" className="text-sm font-medium hover:text-store-accent transition-colors">
              Orders
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
