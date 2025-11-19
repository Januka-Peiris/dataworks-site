import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">assured.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
                <Link
                  to="/products"
                  className={`font-medium transition-colors ${
                    isActive('/products')
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  DataWorks
                </Link>
                <Link
                  to="/services"
                  className={`font-medium transition-colors ${
                    isActive('/services')
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/solutions"
                  className={`font-medium transition-colors ${
                    isActive('/solutions')
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  Solutions
                </Link>
            <Link
              to="/pricing"
              className={`font-medium transition-colors ${
                isActive('/pricing')
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/case-studies"
              className={`font-medium transition-colors ${
                isActive('/case-studies')
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about')
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
                  <Link
                    to="/products"
                    className={`font-medium transition-colors ${
                      isActive('/products')
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    DataWorks
                  </Link>
                  <Link
                    to="/services"
                    className={`font-medium transition-colors ${
                      isActive('/services')
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/solutions"
                    className={`font-medium transition-colors ${
                      isActive('/solutions')
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Solutions
                  </Link>
              <Link
                to="/pricing"
                className={`font-medium transition-colors ${
                  isActive('/pricing')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className={`font-medium transition-colors ${
                  isActive('/case-studies')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Button asChild className="w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
