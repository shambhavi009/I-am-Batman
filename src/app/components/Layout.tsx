import { Link, Outlet, useLocation } from 'react-router';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Layout() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-3xl tracking-tight">
              STRIDE<span className="text-red-600">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/') ? 'text-red-600' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/shop') ? 'text-red-600' : ''
                }`}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/about') ? 'text-red-600' : ''
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/contact') ? 'text-red-600' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-red-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/cart"
                className="relative hover:text-red-600 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden hover:text-red-600 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4">
              <Input
                type="search"
                placeholder="Search for shoes..."
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/') ? 'text-red-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/shop') ? 'text-red-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/about') ? 'text-red-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`hover:text-red-600 transition-colors ${
                  isActive('/contact') ? 'text-red-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl mb-4">
                STRIDE<span className="text-red-600">.</span>
              </h3>
              <p className="text-white/60 text-sm">
                Premium footwear for those who dare to stand out. Style meets comfort.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <Link to="/shop" className="hover:text-red-600 transition-colors">
                  Shop All
                </Link>
                <Link to="/shop?category=sneakers" className="hover:text-red-600 transition-colors">
                  Sneakers
                </Link>
                <Link to="/shop?category=sports" className="hover:text-red-600 transition-colors">
                  Sports
                </Link>
                <Link to="/about" className="hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="mb-4">Customer Service</h4>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <Link to="/contact" className="hover:text-red-600 transition-colors">
                  Contact Us
                </Link>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Shipping Info
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Returns
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Size Guide
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4">Stay Updated</h4>
              <p className="text-sm text-white/60 mb-4">
                Subscribe to get special offers and updates.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-red-600 hover:bg-red-700">Join</Button>
              </div>
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 STRIDE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-600 transition-colors" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="hover:text-red-600 transition-colors" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className="hover:text-red-600 transition-colors" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
