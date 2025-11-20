import { Check, BarChart3, Plug, Shield, DollarSign, Code, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';

const pricingTiers = [
  {
    name: 'DataWorks: BI',
    subtitle: 'For teams that need a single source of truth.',
    description: 'Perfect for organisations needing trusted reporting and dashboards',
    price: '£1,250',
    period: '/month',
    color: 'blue',
    features: [
      'Unlimited Users',
      'Unlimited Dashboards',
      'Connect to Any Data Source',
      'Automated Data Quality Checks',
      '24/7 Support',
    ],
  },
  {
    name: 'DataWorks: MI',
    subtitle: 'For teams that need to understand what drives their business.',
    description: 'For teams requiring predictive analytics and scenario planning',
    price: '£3,750',
    period: '/month',
    color: 'emerald',
    featured: true,
    features: [
      'Everything in BI, plus:',
      'Driver-Based Modeling',
      'Scenario Planning',
      'Predictive Forecasting',
      'Priority Support',
    ],
  },
  {
    name: 'DataWorks: AI',
    subtitle: 'For teams that want to scale AI with a safe, governed foundation.',
    description: 'Complete platform for safe, governed AI at scale',
    price: 'Custom',
    period: '',
    color: 'yellow',
    features: [
      'Everything in MI, plus:',
      'AI Guardrails',
      'Governed Prompt Inputs',
      'ML-Ready Data',
      'Dedicated Success Manager',
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <PageHeader
        subtitle="DataWorks Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the plan that's right for you. All plans come with a 14-day free trial."
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
                All Plans Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">Unlimited Users</h3>
                <p className="text-sm text-muted-foreground">Invite your entire team to collaborate.</p>
              </div>

              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">Unlimited Dashboards</h3>
                <p className="text-sm text-muted-foreground">Create as many dashboards as you need.</p>
              </div>

              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">Connect to Any Data Source</h3>
                <p className="text-sm text-muted-foreground">Connect to all your systems without limits.</p>
              </div>

              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">Automated Data Quality Checks</h3>
                <p className="text-sm text-muted-foreground">Ensure your data is always accurate and reliable.</p>
              </div>

              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Get help from our team of experts whenever you need it.</p>
              </div>

              <div className="bg-secondary/30 border-2 border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">And much more...</h3>
                <p className="text-sm text-muted-foreground">Contact us for a full list of features.</p>
              </div>
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
        description="Start your 14-day free trial today. No credit card required."
        primaryButtonText="Start Your Free Trial"
        secondaryButtonText="Contact Sales"
        variant="light"
      />
    </>
  );
}

