import { Instagram, Twitter, Facebook, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-[#D4C5A9]" strokeWidth={1.5} />
              <h3 style={{ fontSize: '1.5rem', color: '#D4C5A9' }}>
                Nature's Path
              </h3>
            </div>
            <p className="text-[#9CA3AF]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              Ancient wisdom for modern wellness. Crafted by hand, grown with love.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[#D4C5A9]" style={{ fontSize: '1.25rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-[#9CA3AF] hover:text-white transition-colors" style={{ fontSize: '1rem' }}>
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors" style={{ fontSize: '1rem' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors" style={{ fontSize: '1rem' }}>
                  Visit Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors" style={{ fontSize: '1rem' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[#D4C5A9]" style={{ fontSize: '1.25rem' }}>
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#2D5016] flex items-center justify-center hover:bg-[#3a6b1d] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#2D5016] flex items-center justify-center hover:bg-[#3a6b1d] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#2D5016] flex items-center justify-center hover:bg-[#3a6b1d] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4B5563] pt-8 text-center">
          <p className="text-[#9CA3AF]" style={{ fontSize: '0.95rem' }}>
            © 2026 Nature's Path. All ingredients grown with intention. All beverages crafted with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
