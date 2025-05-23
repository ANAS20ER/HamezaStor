
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, ArrowRight } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';

const OrderConfirmationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <MainLayout>
      <div className="container max-w-3xl py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="text-xl mb-6 text-store-muted">Your order has been placed successfully.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-store-muted mb-2">Order Number</p>
            <p className="text-xl font-semibold">{orderNumber}</p>
          </div>
          
          <div className="border-t border-b py-6 mb-8">
            <div className="max-w-sm mx-auto">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Order Total:</span>
                <span className="font-semibold">$109.98</span>
              </div>
              
              <div className="flex justify-between mb-4">
                <span className="font-medium">Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="font-medium">Payment Method:</span>
                <span>Credit Card (****1234)</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/orders">
                <FileText className="h-4 w-4" />
                View Order Details
              </Link>
            </Button>
            
            <Button asChild className="bg-store-accent hover:bg-store-accent/90 gap-2">
              <Link to="/products">
                Continue Shopping
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderConfirmationPage;
