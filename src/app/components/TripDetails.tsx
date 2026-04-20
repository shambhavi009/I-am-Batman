import { MapPin, Clock, Users, Mountain, Calendar, Heart, Star, Check, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { useState } from 'react';

export function TripDetails({ tripId, onBack, onAddToWishlist }: { tripId: number; onBack: () => void; onAddToWishlist: (tripId: number) => void }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const trip = {
    id: tripId,
    title: "Himalayan Trek Adventure",
    location: "Manali, Himachal Pradesh",
    price: 3999,
    originalPrice: 4999,
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    groupSize: 12,
    minAge: 18,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1755766335131-b0cb1081d567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1611322470518-cce1805eb6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1567655327379-545b3b3d151e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ],
    description: "Experience the breathtaking beauty of the Himalayas on this budget-friendly trek perfect for students and young adventurers. Trek through pine forests, camp under the stars, and make memories that last a lifetime.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Base Camp",
        details: "Arrive in Manali, meet your group, trek to base camp (2 hours), bonfire & introductions"
      },
      {
        day: "Day 2",
        title: "Summit Trek",
        details: "Early morning trek to summit, packed lunch at viewpoint, photography session, return to camp"
      },
      {
        day: "Day 3",
        title: "Departure",
        details: "Sunrise view, breakfast, trek back to Manali, departure"
      }
    ],
    included: [
      "2 nights accommodation in tents",
      "All meals (breakfast, lunch, dinner)",
      "Professional trek guide",
      "First aid & safety equipment",
      "Group photos & memories"
    ],
    excluded: [
      "Transport to/from Manali",
      "Personal expenses",
      "Travel insurance"
    ],
    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        date: "March 2026",
        comment: "Amazing experience! The trek was challenging but so worth it. Made great friends and the guides were super helpful.",
        avatar: "PS"
      },
      {
        name: "Rahul Verma",
        rating: 5,
        date: "February 2026",
        comment: "Best trip ever! Perfect for students on a budget. Highly recommend WanderBuddy.",
        avatar: "RV"
      }
    ]
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist(tripId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 mb-2"
          >
            ← Back to trips
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="md:col-span-2 h-96 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={trip.images[0]}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={trip.images[1]}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={trip.images[2]}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl mb-2">{trip.title}</h1>
                  <p className="text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {trip.location}
                  </p>
                </div>
                <button
                  onClick={handleWishlist}
                  className={`p-3 rounded-full transition-all ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'}`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{trip.rating}</span>
                </div>
                <span className="text-gray-600">({trip.reviews} reviews)</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm">{trip.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mountain className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Difficulty</p>
                    <p className="text-sm">{trip.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Group Size</p>
                    <p className="text-sm">Max {trip.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Min Age</p>
                    <p className="text-sm">{trip.minAge}+</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl mb-3">About This Trip</h3>
                <p className="text-gray-700 leading-relaxed">{trip.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl mb-4">Itinerary</h3>
              <div className="space-y-4">
                {trip.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      <span className="text-sm">{item.day}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-600 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Included
                  </h4>
                  <ul className="space-y-2">
                    {trip.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-600 mb-3">Not Included</h4>
                  <ul className="space-y-2">
                    {trip.excluded.map((item, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl mb-4">Reviews ({trip.reviews})</h3>
              <div className="space-y-4">
                {trip.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4>{review.name}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-600 text-sm">Student Special - 20% Off</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-blue-600">₹{trip.price}</span>
                    <span className="text-gray-400 line-through">₹{trip.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">per person</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm mb-2">Cost Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Price</span>
                      <span>₹4,999</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Student Discount (20%)</span>
                      <span>-₹1,000</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-blue-200">
                      <span>Total</span>
                      <span>₹3,999</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all mb-3">
                  Book Now
                </button>

                <button className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-all">
                  Contact Support
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm mb-3">Why Book With Us?</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Instant confirmation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Free cancellation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>24/7 support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
