
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

// Mock cart data - in a real app, this would come from context or state management
const cartItems = [
  {
    id: 1,
    name: "Premium UI Kit",
    price: 49.99,
    quantity: 1,
  },
  {
    id: 4,
    name: "Dashboard UI Kit",
    price: 59.99,
    quantity: 1,
  }
];

interface CardInfo {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
}

const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });
  
  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      
      // This is just a demo - in a real app you would validate with a payment gateway
      if (cardInfo.number && cardInfo.name && cardInfo.expiry && cardInfo.cvc) {
        // Success! Order placed.
        navigate('/order-confirmation');
      } else {
        // Error message
        toast({
          title: "Payment failed",
          description: "Please check your card details and try again.",
          variant: "destructive",
        });
      }
    }, 1500);
  };
  
  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  
  return (
    <MainLayout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-10">
                {/* Billing Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-6">Billing Information</h2>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" required />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" required />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment Method */}
                <div>
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="number">Card Number</Label>
                          <Input 
                            id="number" 
                            name="number"
                            value={cardInfo.number}
                            onChange={handleCardInfoChange}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="name">Name on Card</Label>
                          <Input 
                            id="name" 
                            name="name"
                            value={cardInfo.name}
                            onChange={handleCardInfoChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input 
                              id="expiry" 
                              name="expiry"
                              value={cardInfo.expiry}
                              onChange={handleCardInfoChange}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input 
                              id="cvc" 
                              name="cvc"
                              value={cardInfo.cvc}
                              onChange={handleCardInfoChange}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="saveCard" />
                          <label
                            htmlFor="saveCard"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Save this card for future purchases
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Submit Button (visible on mobile) */}
                <div className="lg:hidden">
                  <Button 
                    type="submit"
                    className="w-full bg-store-accent hover:bg-store-accent/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Complete Order"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="divide-y">
                {cartItems.map(item => (
                  <div key={item.id} className="py-3 flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-store-muted">Qty: {item.quantity}</p>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-b my-4 py-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-store-muted">Subtotal</span>
                  <span>${getSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-store-muted">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-store-muted">Tax</span>
                  <span>${(getSubtotal() * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${(getSubtotal() * 1.1).toFixed(2)}</span>
              </div>
              
              {/* Submit Button (hidden on mobile) */}
              <div className="mt-6 hidden lg:block">
                <Button 
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-store-accent hover:bg-store-accent/90"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  {isLoading ? "Processing..." : "Complete Order"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;
