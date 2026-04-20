import { Search, MapPin, Calendar, IndianRupee, TrendingDown, Users, Clock, Mountain } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface Trip {
  id: number;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  tag?: string;
  difficulty?: string;
  groupSize?: number;
}

export function HomePage({ onTripClick }: { onTripClick: (tripId: number) => void }) {
  const featuredTrips: Trip[] = [
    {
      id: 1,
      title: "Himalayan Trek Adventure",
      location: "Manali, Himachal Pradesh",
      price: 3999,
      duration: "3 Days",
      image: "https://images.unsplash.com/photo-1755766335131-b0cb1081d567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Under ₹5000",
      difficulty: "Moderate",
      groupSize: 12
    },
    {
      id: 2,
      title: "Goa Beach Weekend",
      location: "Goa",
      price: 4499,
      duration: "2 Days",
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Student Deal",
      difficulty: "Easy",
      groupSize: 20
    },
    {
      id: 3,
      title: "Rishikesh River Rafting",
      location: "Rishikesh, Uttarakhand",
      price: 2999,
      duration: "2 Days",
      image: "https://images.unsplash.com/photo-1611322470518-cce1805eb6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Weekend Trip",
      difficulty: "Easy",
      groupSize: 15
    },
    {
      id: 4,
      title: "Jaipur Heritage Tour",
      location: "Jaipur, Rajasthan",
      price: 3499,
      duration: "3 Days",
      image: "https://images.unsplash.com/photo-1567655327379-545b3b3d151e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tag: "Cultural",
      difficulty: "Easy",
      groupSize: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[500px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1524416117929-2dd85b124635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h2 className="text-4xl md:text-6xl text-white mb-4 text-center">
            Adventure Awaits, Budget Friendly
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 text-center">
            Travel more. Spend less. Make memories.
          </p>

          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                  <option>Budget</option>
                  <option>Under ₹3000</option>
                  <option>₹3000 - ₹5000</option>
                  <option>Above ₹5000</option>
                </select>
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl mb-2">Budget-Friendly Packages</h3>
            <p className="text-gray-600">Curated trips designed for students</p>
          </div>
          <button className="hidden md:block text-blue-600 hover:text-blue-700">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredTrips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => onTripClick(trip.id)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {trip.tag && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {trip.tag}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h4 className="text-lg mb-2">{trip.title}</h4>
                <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {trip.location}
                </p>

                <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    {trip.difficulty}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {trip.groupSize}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-blue-600">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm">Great Deal</span>
                  </div>
                  <div className="text-xl text-orange-600">
                    ₹{trip.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-3xl md:text-4xl mb-4">Student Special Discount</h3>
          <p className="text-xl mb-6 opacity-90">Get flat 20% off on all weekend trips with valid student ID</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:shadow-xl transition-all">
            Claim Your Discount
          </button>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-2">Why Choose WanderBuddy?</h3>
          <p className="text-gray-600 mb-8">Built by students, for students</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl mb-2">Best Prices</h4>
              <p className="text-gray-600">Exclusive student discounts and group deals</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl mb-2">Travel Together</h4>
              <p className="text-gray-600">Meet like-minded travelers and make friends</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl mb-2">Verified Trips</h4>
              <p className="text-gray-600">All trips curated and safety verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
