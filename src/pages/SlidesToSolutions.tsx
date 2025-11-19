import { ArrowRight, ShieldCheck, Zap, Layers, BadgeCheck, Building2, Scale, Stethoscope, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '../components/PageHeader';

export default function SlidesToSolutions() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Compliance by design",
      desc: "Every solution is audit-ready, secure, and built to withstand regulatory scrutiny from day one.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lean, fast delivery",
      desc: "Small, senior teams that move quickly without the layers and overhead of large consultancies.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "From slides to systems",
      desc: "Operationalise strategy decks into real data products that work in production.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Budget discipline",
      desc: "Transparent pricing and a pragmatic scope to meet financial requirements.",
    },
  ];

  const industries = [
    { icon: <Building2 className="w-5 h-5" />, name: "Financial Services" },
    { icon: <Scale className="w-5 h-5" />, name: "Public & Regulated" },
    { icon: <Stethoscope className="w-5 h-5" />, name: "Healthcare & Life Sciences" },
    { icon: <Cloud className="w-5 h-5" />, name: "Cloud/SaaS (Regulated)" },
  ];

  return (
    <>
      <PageHeader
        title="From Slides to Solutions"
        description="Turning expensive PowerPoint decks into real-world impact"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Operationalise strategy into compliant, cost‑effective data products
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We bridge the gap between advisory decks and running systems for financial services and other highly regulated industries.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Book a call <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">Taglines we stand by:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li><em>Slides talk. Data delivers.</em></li>
                <li><em>Because compliance isn't built in PowerPoint.</em></li>
              </ul>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">From theory ➜ production</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We bridge the gap between advisory decks and running systems—without blowing the budget or timelines.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Regulator‑ready outcomes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Security, governance, lineage, controls—baked in from day one.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Compelling price point</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Lean, senior teams deliver faster—so you pay for outcomes, not overhead.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-secondary/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Capabilities that convert slides into systems</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="p-2 rounded-xl bg-primary/10">{f.icon}</div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Built for highly regulated industries</h2>
          <span className="text-sm text-muted-foreground">We partner with large consultancies for strategy—then deliver.</span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((i, idx) => (
            <Card key={idx}>
              <CardContent className="p-4 flex items-center gap-2 text-sm font-medium">
                <span className="p-2 rounded-xl bg-primary/10">{i.icon}</span>
                {i.name}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our approach: execution with compliance at the core</h2>
            <p className="text-muted-foreground mb-6">
              Large consultancies excel at vision. We excel at production. Together, that's powerful—but implementation doesn't have to come with the same overhead.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>From deck to delivery — a simple path</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">1</div>
                <div>
                  <p className="font-medium">Assess the strategy deck</p>
                  <p className="text-muted-foreground">Extract the actionable roadmap and regulatory obligations.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">2</div>
                <div>
                  <p className="font-medium">Define minimal viable compliance</p>
                  <p className="text-muted-foreground">Lock in controls, governance, lineage, and security up front.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">3</div>
                <div>
                  <p className="font-medium">Build iteratively</p>
                  <p className="text-muted-foreground">Deliver thin slices to production to create audit evidence early.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">4</div>
                <div>
                  <p className="font-medium">Harden & scale</p>
                  <p className="text-muted-foreground">Prove resilience, cost control, and operational readiness.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Sitting on a great strategy deck? Let's productionise it.</h2>
              <p className="text-muted-foreground">Are you looking at a deck with a strong concept and need to make it real? Book a call with one of our specialists.</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  Book a call <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

