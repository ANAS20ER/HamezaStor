
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Review, getProductReviews, getAverageRating } from '@/data/products';

interface ReviewSectionProps {
  productId: number;
}

const ReviewSection = ({ productId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>(getProductReviews(productId));
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const { toast } = useToast();
  const averageRating = getAverageRating(productId);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be sent to an API
    const newReview: Review = {
      id: reviews.length + 100, // Just for demo
      productId,
      author: name,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([...reviews, newReview]);
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    
    // Reset form
    setName('');
    setComment('');
    setRating(5);
    setShowReviewForm(false);
  };

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.round(averageRating)
                    ? 'text-store-accent fill-store-accent'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="font-semibold">{averageRating} out of 5</span>
          <span className="text-store-muted ml-2">({reviews.length} reviews)</span>
        </div>
      </div>
      
      {!showReviewForm && (
        <Button 
          onClick={() => setShowReviewForm(true)}
          className="mb-8"
        >
          Write a Review
        </Button>
      )}
      
      {showReviewForm && (
        <div className="mb-10 bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="mb-4">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="rating">Rating</Label>
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer ${
                      star <= rating
                        ? 'text-store-accent fill-store-accent'
                        : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="comment">Your Review</Label>
              <Textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="mt-1"
                rows={4}
              />
            </div>
            
            <div className="flex gap-2">
              <Button type="submit">Submit Review</Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setShowReviewForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
      
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{review.author}</h3>
                <span className="text-sm text-store-muted">{review.date}</span>
              </div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? 'text-store-accent fill-store-accent'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-store-muted">No reviews yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
