import { Check, BarChart3, Plug, Shield, DollarSign, Code, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';

const pricingTiers = [
  {
    name: 'DataWorks: BI',
    subtitle: 'Truth',
    description: 'Perfect for organisations needing trusted reporting and dashboards',
    price: '£1,250',
    period: '/month',
    color: 'blue',
    features: [
      'Single source of truth',
      'Certified KPIs and definitions',
      'Automated data quality checks',
      'Reconciliations & lineage',
      'Standardised semantic layer',
      'Trusted dashboards',
      '24/7 support',
    ],
  },
  {
    name: 'DataWorks: MI',
    subtitle: 'Insight',
    description: 'For teams requiring predictive analytics and scenario planning',
    price: '£3,750',
    period: '/month',
    color: 'emerald',
    featured: true,
    features: [
      'Everything in BI, plus:',
      'Driver modelling & assumption libraries',
      'Scenario simulation',
      'Predictive re-forecasting',
      'Variance logic',
      'Reusable intelligence templates',
      'Priority support',
    ],
  },
  {
    name: 'DataWorks: AI',
    subtitle: 'Intelligence',
    description: 'Complete platform for safe, governed AI at scale',
    price: 'Custom',
    period: '',
    color: 'yellow',
    features: [
      'Everything in MI, plus:',
      'AI guardrails & policy enforcement',
      'Governed prompt inputs',
      'Full data lineage',
      'Access controls',
      'ML-ready data products',
      'Dedicated success manager',
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <PageHeader
        subtitle="Pricing"
        title="Flexible Plans for Every Stage"
        description="Start where you are. Scale when you're ready. Transparent pricing with no hidden fees."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-secondary/30 border-2 rounded-2xl p-8 ${
                  tier.featured
                    ? 'border-emerald-500 shadow-2xl scale-105'
                    : 'border-border hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p
                    className={`text-lg font-semibold mb-3 ${
                      tier.color === 'blue'
                        ? 'text-blue-500'
                        : tier.color === 'emerald'
                        ? 'text-emerald-500'
                        : 'text-primary'
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-foreground">
                    {tier.price}
                    {tier.period && <span className="text-xl text-muted-foreground">{tier.period}</span>}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tier.price === 'Custom' ? 'Contact us for pricing' : 'Billed monthly'}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.color === 'blue'
                            ? 'text-blue-500'
                            : tier.color === 'emerald'
                            ? 'text-emerald-500'
                            : 'text-primary'
                        }`}
                      />
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.featured
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-secondary text-foreground hover:bg-secondary/70 border border-border'
                  }`}
                >
                  Contact Sales
                </button>
              </div>
            ))}
          </div>

          {/* What's Included Section */}
          <div className="mt-24 pt-24 border-t border-border">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What's Included in Every Tier
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                All DataWorks tiers include these powerful enterprise capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Unlimited Dashboards */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Unlimited Dashboards</h3>
                    <p className="text-sm text-muted-foreground">Create as many reports and dashboards as you need</p>
                  </div>
                </div>
              </div>

              {/* Unlimited Data Sources */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Plug className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Unlimited Data Sources</h3>
                    <p className="text-sm text-muted-foreground">Connect to all your systems without limits</p>
                  </div>
                </div>
              </div>

              {/* Automated Quality Monitoring */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Automated Quality Monitoring</h3>
                    <p className="text-sm text-muted-foreground">Continuous checks ensure data integrity</p>
                  </div>
                </div>
              </div>

              {/* Cost Optimization Tools */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Cost Optimization Tools</h3>
                    <p className="text-sm text-muted-foreground">See exactly where your budget goes</p>
                  </div>
                </div>
              </div>

              {/* API Creation Tools */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">API Creation Tools</h3>
                    <p className="text-sm text-muted-foreground">Build data APIs without coding</p>
                  </div>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">24/7 Expert Support</h3>
                    <p className="text-sm text-muted-foreground">Always available when you need help</p>
                  </div>
                </div>
              </div>

              {/* Complete Data Lineage */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Complete Data Lineage</h3>
                    <p className="text-sm text-muted-foreground">Track data from source to report</p>
                  </div>
                </div>
              </div>

              {/* Self-Service Analytics */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Self-Service Analytics</h3>
                    <p className="text-sm text-muted-foreground">Empower users to explore data safely</p>
                  </div>
                </div>
              </div>

              {/* Managed Infrastructure */}
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">100% Managed Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">We handle all technical operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-lg">
                <strong className="text-foreground">No hidden costs.</strong> No surprise usage charges. 
                Everything you need is included.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Can I start with one tier and upgrade later?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely. DataWorks is designed for growth. Start with BI, then add MI and AI capabilities as your organisation matures.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  What's included in the managed service?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All tiers include infrastructure management, security updates, monitoring, and 24/7 support. We handle everything so you can focus on insights.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Is there a minimum contract term?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer flexible contract terms. Speak with our team to discuss what works best for your organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        description="Let's discuss your data needs and find the perfect DataWorks tier for your organisation."
        primaryButtonText="Contact Sales"
        secondaryButtonText="Schedule a Call"
        variant="light"
      />
    </>
  );
}

