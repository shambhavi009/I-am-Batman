import { Menu, User, Heart, X } from 'lucide-react';
import { useState } from 'react';

export function Header({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🎒</span>
            </div>
            <h1 className="text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              WanderBuddy
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Explore
            </button>
            <button
              onClick={() => onNavigate('group-travel')}
              className={`transition-colors ${currentPage === 'group-travel' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Group Travel
            </button>
            <button
              onClick={() => onNavigate('deals')}
              className={`transition-colors ${currentPage === 'deals' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Student Deals
            </button>
            <button
              onClick={() => onNavigate('wishlist')}
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => { onNavigate('home'); setMenuOpen(false); }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Explore
              </button>
              <button
                onClick={() => { onNavigate('group-travel'); setMenuOpen(false); }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Group Travel
              </button>
              <button
                onClick={() => { onNavigate('deals'); setMenuOpen(false); }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Student Deals
              </button>
              <button
                onClick={() => { onNavigate('wishlist'); setMenuOpen(false); }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Wishlist
              </button>
              <button
                onClick={() => { onNavigate('profile'); setMenuOpen(false); }}
                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Profile
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
