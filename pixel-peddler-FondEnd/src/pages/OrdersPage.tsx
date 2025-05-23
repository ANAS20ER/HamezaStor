
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ChevronRight } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-123456',
    date: '2025-05-20',
    status: 'Delivered',
    total: 109.98,
    items: [
      { id: 1, name: 'Premium UI Kit', quantity: 1, price: 49.99 },
      { id: 4, name: 'Dashboard UI Kit', quantity: 1, price: 59.99 }
    ]
  },
  {
    id: 'ORD-123455',
    date: '2025-04-15',
    status: 'Processing',
    total: 29.99,
    items: [
      { id: 6, name: 'Illustration Pack', quantity: 1, price: 29.99 }
    ]
  }
];

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Simulate loading orders
    setTimeout(() => {
      setOrders(mockOrders);
    }, 500);
  }, []);

  return (
    <MainLayout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
        
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Order {order.id}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-store-muted mt-1">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <p className="font-medium">${order.total.toFixed(2)}</p>
                    <button className="text-store-accent hover:text-store-accent/70 transition-colors flex items-center gap-1 text-sm">
                      <Download className="h-4 w-4" />
                      Invoice
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-4">Order Items</h4>
                  <div className="space-y-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-store-muted">Qty: {item.quantity}</p>
                        </div>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 flex justify-end">
                  <Link 
                    to={`/orders/${order.id}`}
                    className="text-store-accent hover:text-store-accent/70 transition-colors flex items-center gap-1 text-sm"
                  >
                    View Order Details
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 mx-auto text-store-muted mb-6" />
            <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
            <p className="text-store-muted mb-8">You haven't placed any orders yet.</p>
            <Link 
              to="/products" 
              className="text-store-accent hover:underline"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default OrdersPage;
