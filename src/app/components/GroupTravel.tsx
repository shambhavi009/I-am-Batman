import { Users, MapPin, Calendar, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function GroupTravel() {
  const groups = [
    {
      id: 1,
      destination: "Ladakh Bike Trip",
      date: "May 15-22, 2026",
      organizer: "Aditya Kumar",
      currentMembers: 6,
      maxMembers: 10,
      budget: "₹12,000",
      image: "https://images.unsplash.com/photo-1726099232833-11c6dcb0574d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      interests: ["Adventure", "Photography", "Biking"]
    },
    {
      id: 2,
      destination: "Goa Party Weekend",
      date: "Apr 25-27, 2026",
      organizer: "Neha Patel",
      currentMembers: 12,
      maxMembers: 15,
      budget: "₹5,500",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      interests: ["Beach", "Nightlife", "Friends"]
    },
    {
      id: 3,
      destination: "Coorg Coffee Trail",
      date: "May 1-3, 2026",
      organizer: "Rohan Singh",
      currentMembers: 5,
      maxMembers: 8,
      budget: "₹4,200",
      image: "https://images.unsplash.com/photo-1640577485169-cbbd317aa671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      interests: ["Nature", "Hiking", "Photography"]
    },
    {
      id: 4,
      destination: "Rishikesh Yoga Retreat",
      date: "Jun 5-8, 2026",
      organizer: "Priya Sharma",
      currentMembers: 8,
      maxMembers: 12,
      budget: "₹6,800",
      image: "https://images.unsplash.com/photo-1758272959622-d79dc1a3683e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      interests: ["Wellness", "Yoga", "Adventure"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">
            Find Your Travel Squad
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join existing groups or create your own adventure
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all">
            Create New Group
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-xl mb-4">Filter Groups</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Destination</option>
              <option>Goa</option>
              <option>Manali</option>
              <option>Ladakh</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Month</option>
              <option>April 2026</option>
              <option>May 2026</option>
              <option>June 2026</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Budget Range</option>
              <option>Under ₹5,000</option>
              <option>₹5,000 - ₹10,000</option>
              <option>Above ₹10,000</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Interests</option>
              <option>Adventure</option>
              <option>Beach</option>
              <option>Culture</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl mb-2">Active Groups</h3>
          <p className="text-gray-600">Join a group and start your adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <ImageWithFallback
                    src={group.image}
                    alt={group.destination}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl mb-1">{group.destination}</h4>
                      <p className="text-gray-600 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {group.date}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                        {group.organizer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm">Organized by</p>
                        <p className="text-sm">{group.organizer}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{group.currentMembers}/{group.maxMembers} joined</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{group.budget}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${(group.currentMembers / group.maxMembers) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {group.maxMembers - group.currentMembers} spots left
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.interests.map((interest, index) => (
                      <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all text-sm">
                      Join Group
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl mb-4">Can't Find Your Perfect Group?</h3>
          <p className="text-lg mb-6 opacity-90">Create your own and invite fellow travelers to join</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:shadow-xl transition-all">
            Start Your Own Group
          </button>
        </div>
      </div>
    </div>
  );
}
