import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AiIcon from './icons/AiIcon';
import BiIcon from './icons/BiIcon';
import MiIcon from './icons/MiIcon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-background to-secondary animated-gradient pt-16">
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="mb-8 inline-block">
          <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <span className="text-sm font-medium text-foreground">Assured Insights</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight fade-in" style={{ animationDelay: '0.2s' }}>
          The Last Data Platform You'll Ever Need
        </h1>

        {/* Tagline with highlighted words */}
        <div className="mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-light leading-relaxed max-w-5xl mx-auto">
            Your Complete Data Platform. <br />{' '}
            <span className="font-bold text-primary">One</span> Source of Truth.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12 fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="text-xl md:text-2xl font-light text-blue-400">Reporting.</span>
          <span className="text-xl md:text-2xl font-light text-primary">Planning.</span>
          <span className="text-xl md:text-2xl font-light text-primary/80">AI.</span>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '0.8s' }}>
          DataWorks is a fully-managed data platform that gives you clean, consistent, and actionable intelligence.
        </p>

        <p className="text-lg text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '1s' }}>
          Stop firefighting data issues. Start making data-driven decisions.<br/>
          DataWorks provides the foundation for all your data needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '1.2s' }}>
          <Button asChild size="lg" className="text-base">
            <Link to="/contact" className="flex items-center gap-2">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link to="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link
            to="/products"
            className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group hover:-translate-y-2 transform fade-in"
            style={{ animationDelay: '2s' }}
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
              <BiIcon className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">BI Ready</h3>
            <p className="text-muted-foreground text-sm">Connect your favorite BI tool and get instant insights.</p>
          </Link>

          <Link
            to="/products"
            className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group hover:-translate-y-2 transform fade-in"
            style={{ animationDelay: '2.2s' }}
          >
            <div className="w-16 h-16 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/30">
              <MiIcon className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">MI Ready</h3>
            <p className="text-muted-foreground text-sm">Go beyond BI with driver-based intelligence and planning.</p>
          </Link>

          <Link
            to="/products"
            className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group hover:-translate-y-2 transform fade-in"
            style={{ animationDelay: '2.4s' }}
          >
            <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/40 transition-colors">
              <AiIcon className="w-10 h-10 text-primary/80" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">AI Ready</h3>
            <p className="text-muted-foreground text-sm">Build, train, and deploy AI models on a governed foundation.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}