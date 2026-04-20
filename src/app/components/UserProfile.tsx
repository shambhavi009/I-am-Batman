import { User, MapPin, Calendar, Settings, Heart, CreditCard, Award } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function UserProfile() {
  const user = {
    name: "Arjun Mehta",
    email: "arjun.mehta@student.com",
    university: "Delhi University",
    studentId: "DU/2024/12345",
    memberSince: "January 2026",
    tripsCompleted: 5,
    points: 850
  };

  const bookings = [
    {
      id: 1,
      title: "Goa Beach Weekend",
      date: "Apr 25-27, 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      price: 4499
    },
    {
      id: 2,
      title: "Manali Adventure Trek",
      date: "Mar 10-13, 2026",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1755766335131-b0cb1081d567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      price: 3999
    }
  ];

  const badges = [
    { name: "Early Bird", icon: "🐦", description: "Completed 5 trips" },
    { name: "Group Leader", icon: "👑", description: "Organized 2 groups" },
    { name: "Student Saver", icon: "💰", description: "Saved ₹5000+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-2xl mb-1">{user.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{user.email}</p>
                <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  <Award className="w-4 h-4" />
                  <span>Verified Student</span>
                </div>
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500">University</p>
                    <p className="text-sm">{user.university}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500">Member Since</p>
                    <p className="text-sm">{user.memberSince}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <CreditCard className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500">Student ID</p>
                    <p className="text-sm">{user.studentId}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-2 border-2 border-gray-300 py-2 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all">
                <Settings className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl mb-4">Travel Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/80 text-sm mb-1">Trips Completed</p>
                  <p className="text-3xl">{user.tripsCompleted}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Reward Points</p>
                  <p className="text-3xl">{user.points}</p>
                  <p className="text-white/70 text-xs mt-1">150 more for next reward</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-2xl mb-6">Your Bookings</h3>

              <div className="mb-6">
                <div className="flex gap-4 border-b border-gray-200 mb-4">
                  <button className="pb-2 px-4 border-b-2 border-blue-600 text-blue-600">
                    Upcoming
                  </button>
                  <button className="pb-2 px-4 text-gray-600 hover:text-blue-600">
                    Completed
                  </button>
                  <button className="pb-2 px-4 text-gray-600 hover:text-blue-600">
                    Cancelled
                  </button>
                </div>

                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                      <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={booking.image}
                          alt={booking.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="mb-1">{booking.title}</h4>
                            <p className="text-gray-600 text-sm flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {booking.date}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            booking.status === 'Upcoming'
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-green-50 text-green-600'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-lg text-blue-600">₹{booking.price}</span>
                          <div className="flex gap-2">
                            {booking.status === 'Upcoming' && (
                              <>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-sm">
                                  View Details
                                </button>
                                <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:text-red-600 transition-all text-sm">
                                  Cancel
                                </button>
                              </>
                            )}
                            {booking.status === 'Completed' && (
                              <button className="px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-sm">
                                Book Again
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl">Your Achievements</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h4 className="mb-1">{badge.name}</h4>
                    <p className="text-gray-600 text-xs">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Wishlist
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <div className="h-40">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1611322470518-cce1805eb6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Rishikesh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-1">Rishikesh River Rafting</h4>
                    <p className="text-gray-600 text-sm mb-2">₹2,999</p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <div className="h-40">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1567655327379-545b3b3d151e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Jaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-1">Jaipur Heritage Tour</h4>
                    <p className="text-gray-600 text-sm mb-2">₹3,499</p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all text-sm">
                      Book Now
                    </button>
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
