import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.newArrival);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">New Collection 2026</Badge>
            <h1 className="text-5xl md:text-7xl mb-6">
              Step Into
              <br />
              <span className="text-red-600">Greatness</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Premium footwear designed for those who refuse to blend in. Elevate your style, maximize your comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked styles that define this season. Discover our editor's top choices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.bestSeller && (
                    <Badge className="absolute top-4 left-4 bg-red-600">Best Seller</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 group-hover:text-red-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <p className="text-xl">${product.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl mb-4">Limited Time Offer</h2>
          <p className="text-xl mb-6">Get 20% off on all sneakers this week only!</p>
          <p className="text-sm mb-8">Use code: <span className="bg-white text-red-600 px-3 py-1 rounded">STRIDE20</span></p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link to="/shop">Shop Sale</Link>
          </Button>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fresh drops that just landed. Be the first to rock the latest styles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newArrivals.slice(0, 3).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-black">New</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 group-hover:text-red-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                  <p className="text-xl">${product.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Men', 'Women', 'Sports', 'Casual', 'Sneakers'].map((category) => (
            <Link
              key={category}
              to={`/shop?category=${category.toLowerCase()}`}
              className="group relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl group-hover:scale-110 transition-transform">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Best Sellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customer favorites that keep selling out. Don't miss your chance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestSellers.slice(0, 3).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-red-600">
                      <Star className="w-3 h-3 mr-1" /> {product.rating}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 group-hover:text-red-600 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.reviews} reviews</p>
                    <p className="text-xl">${product.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Join the STRIDE Community</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, special promotions, and style tips delivered to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
