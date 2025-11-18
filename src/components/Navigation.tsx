import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-900">DataWorks</span>
            <span className="text-sm text-slate-500">by Assured Insights</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/products"
              className={`font-medium transition-colors ${
                isActive('/products')
                  ? 'text-emerald-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Products
            </Link>
            <Link
              to="/pricing"
              className={`font-medium transition-colors ${
                isActive('/pricing')
                  ? 'text-emerald-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/case-studies"
              className={`font-medium transition-colors ${
                isActive('/case-studies')
                  ? 'text-emerald-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about')
                  ? 'text-emerald-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`font-medium transition-colors ${
                isActive('/blog')
                  ? 'text-emerald-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/products"
                className={`font-medium transition-colors ${
                  isActive('/products')
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/pricing"
                className={`font-medium transition-colors ${
                  isActive('/pricing')
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className={`font-medium transition-colors ${
                  isActive('/case-studies')
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={`font-medium transition-colors ${
                  isActive('/blog')
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors w-fit"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
