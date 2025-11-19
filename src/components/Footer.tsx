import { Database, TrendingUp, Sparkles, Mail, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-foreground">DataWorks</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Truth. Insight. Intelligence.
            </p>
            <p className="text-sm text-muted-foreground">
              by Assured Insights
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-foreground">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  DataWorks: BI
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  DataWorks: MI
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  DataWorks: AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-foreground">Connect</h4>
            <div className="space-y-4 mb-6">
              <a href="mailto:hello@assuredinsights.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@assuredinsights.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors border border-border">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors border border-border">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Assured Insights. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
