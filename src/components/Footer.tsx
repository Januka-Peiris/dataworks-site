import { Database, TrendingUp, Sparkles, Mail, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DataWorks</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Truth. Insight. Intelligence.
            </p>
            <p className="text-sm text-slate-500">
              by Assured Insights
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  DataWorks: BI
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  DataWorks: MI
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  DataWorks: AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="space-y-4 mb-6">
              <a href="mailto:hello@assuredinsights.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@assuredinsights.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Assured Insights. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
