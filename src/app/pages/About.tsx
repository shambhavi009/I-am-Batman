import { Card, CardContent } from '../components/ui/card';
import { Target, Heart, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6">
              Where Style Meets <span className="text-red-600">Performance</span>
            </h1>
            <p className="text-xl text-white/80">
              We're on a mission to revolutionize footwear by combining cutting-edge design with uncompromising comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, STRIDE was born from a simple belief: footwear should never force you to choose between style and comfort. Our founders, passionate sneaker enthusiasts and design innovators, set out to create shoes that perform as brilliantly as they look.
            </p>
            <p className="text-gray-700 mb-4">
              Every pair of STRIDE shoes represents countless hours of research, design iteration, and meticulous craftsmanship. We work with world-class athletes, fashion icons, and comfort experts to ensure each release sets a new standard.
            </p>
            <p className="text-gray-700">
              Today, STRIDE is worn by trendsetters, athletes, and everyday heroes across the globe. But we're just getting started.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
              alt="STRIDE Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2">Quality First</h3>
                <p className="text-gray-600">
                  Premium materials and expert craftsmanship in every stitch
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Pushing boundaries with cutting-edge design and technology
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to eco-friendly practices and responsible sourcing
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2">Community</h3>
                <p className="text-gray-600">
                  Building a global family of passionate individuals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            To empower individuals to step confidently into their greatness through footwear that combines unparalleled style, supreme comfort, and sustainable practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-5xl text-red-600 mb-2">500K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl text-red-600 mb-2">50+</p>
              <p className="text-gray-600">Countries Worldwide</p>
            </div>
            <div>
              <p className="text-5xl text-red-600 mb-2">4.8★</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
              { name: 'Marcus Johnson', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
              { name: 'Elena Rodriguez', role: 'Chief Innovation Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
              { name: 'David Kim', role: 'VP of Operations', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
