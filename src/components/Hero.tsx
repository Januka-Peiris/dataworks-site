import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="mb-8 inline-block">
          <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <span className="text-sm font-medium text-foreground">Assured Insights</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight">
          DataWorks
        </h1>

        {/* Tagline with highlighted words */}
        <div className="mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-light leading-relaxed max-w-5xl mx-auto">
            The Business <span className="font-bold text-primary">Love</span> it,{' '}
            IT <span className="font-bold text-primary">Trust</span> it,{' '}
            and Auditors <span className="font-bold text-primary">Approve</span> it.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-xl md:text-2xl font-light text-blue-400">Truth.</span>
          <span className="text-xl md:text-2xl font-light text-primary">Insight.</span>
          <span className="text-xl md:text-2xl font-light text-primary/80">Intelligence.</span>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A complete, governed data platform for reporting, planning & AI.
        </p>

        <p className="text-lg text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
          Fix reporting chaos. Unlock deeper intelligence. Scale AI safely.<br/>
          Transform organisational data into clean, consistent, and actionable intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <Link to="/contact" className="flex items-center gap-2">
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link to="/products">
              Learn More
            </Link>
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link
            to="/products"
            className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">BI Ready</h3>
            <p className="text-muted-foreground text-sm">Trusted dashboards & reporting</p>
          </Link>

          <Link
            to="/products"
            className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
              <div className="w-6 h-6 bg-primary rounded"></div>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">MI Ready</h3>
            <p className="text-muted-foreground text-sm">Driver-based intelligence</p>
          </Link>

          <Link
            to="/products"
            className="bg-secondary/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/40 transition-colors">
              <div className="w-6 h-6 bg-primary/80 rounded"></div>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">AI Ready</h3>
            <p className="text-muted-foreground text-sm">Governed, safe AI foundation</p>
          </Link>
        </div>

        <div className="mt-32">
          <p className="text-sm text-muted-foreground mb-12 uppercase tracking-wider font-semibold">
            Trusted by Leading Organisations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
            {['RedArc', 'Frazer-Nash', 'Ryalto', 'Vernon', 'MOJO-CX'].map((client) => (
              <div key={client} className="text-center">
                <div className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
