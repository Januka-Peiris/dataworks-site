import { ArrowRight, ShieldCheck, Zap, Layers, BadgeCheck, Building2, Scale, Stethoscope, Cloud, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

export default function SlidesToSolutions() {
  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Compliance by design",
      desc: "Every solution is audit-ready, secure, and built to withstand regulatory scrutiny from day one.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lean, fast delivery",
      desc: "Small, senior teams that move quickly without the layers and overhead of large consultancies.",
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "From slides to systems",
      desc: "Operationalise strategy decks into real data products that work in production.",
    },
    {
      icon: <BadgeCheck className="w-7 h-7" />,
      title: "Budget discipline",
      desc: "Transparent pricing and a pragmatic scope to meet financial requirements.",
    },
  ];

  const industries = [
    { icon: <Building2 className="w-6 h-6" />, name: "Financial Services" },
    { icon: <Scale className="w-6 h-6" />, name: "Public & Regulated" },
    { icon: <Stethoscope className="w-6 h-6" />, name: "Healthcare & Life Sciences" },
    { icon: <Cloud className="w-6 h-6" />, name: "Cloud/SaaS (Regulated)" },
  ];

  return (
    <>
      <PageHeader
        title="From Slides to Solutions"
        description="Turning expensive PowerPoint decks into real-world impact"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Professional Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Operationalise strategy into compliant, cost‑effective data products
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We bridge the gap between advisory decks and running systems for financial services and other highly regulated industries.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Book a call <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">
                  View case studies
                </Link>
              </Button>
            </div>

            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <p className="font-semibold text-foreground mb-3">Why our clients choose us:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground"><strong>Slides talk. Data delivers.</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground"><strong>Because compliance isn't built in PowerPoint.</strong></span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-background border-2 border-blue-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">From theory → production</h3>
                  <p className="text-sm text-muted-foreground">
                    Bridge the gap between advisory decks and running systems—without blowing the budget or timelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-background border-2 border-emerald-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Regulator‑ready outcomes</h3>
                  <p className="text-sm text-muted-foreground">
                    Security, governance, lineage, controls—baked in from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Compelling price point</h3>
                  <p className="text-sm text-muted-foreground">
                    Lean, senior teams deliver faster—so you pay for outcomes, not overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How we deliver real impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capabilities that convert slides into systems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {f.icon}
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  {f.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for highly regulated industries</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with large consultancies for strategy—then deliver the execution.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((i, idx) => (
            <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {i.icon}
                </div>
                <span className="font-semibold text-foreground">{i.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our approach: execution with compliance at the core</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Large consultancies excel at vision. We excel at production. Together, that's powerful—but implementation doesn't have to come with the same overhead.
              </p>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              <div className="flex gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center text-lg font-bold">1</div>
                <div>
                  <p className="font-bold text-lg mb-2">Assess the strategy deck</p>
                  <p className="text-slate-300">Extract the actionable roadmap and regulatory obligations.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center text-lg font-bold">2</div>
                <div>
                  <p className="font-bold text-lg mb-2">Define minimal viable compliance</p>
                  <p className="text-slate-300">Lock in controls, governance, lineage, and security up front.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center text-lg font-bold">3</div>
                <div>
                  <p className="font-bold text-lg mb-2">Build iteratively</p>
                  <p className="text-slate-300">Deliver thin slices to production to create audit evidence early.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center text-lg font-bold">4</div>
                <div>
                  <p className="font-bold text-lg mb-2">Harden & scale</p>
                  <p className="text-slate-300">Prove resilience, cost control, and operational readiness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sitting on a great strategy deck? Let's productionise it.</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Are you looking at a deck with a strong concept and need to make it real? Book a call with one of our specialists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Book a call <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn about us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

