import { Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';

const pricingTiers = [
  {
    name: 'DataWorks: BI',
    subtitle: 'Truth',
    description: 'Perfect for organisations needing trusted reporting and dashboards',
    price: 'Custom',
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
    price: 'Custom',
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-2xl p-8 ${
                  tier.featured
                    ? 'border-emerald-500 shadow-2xl scale-105'
                    : 'border-slate-200 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p
                    className={`text-lg font-semibold mb-3 ${
                      tier.color === 'blue'
                        ? 'text-blue-600'
                        : tier.color === 'emerald'
                        ? 'text-emerald-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-slate-900">{tier.price}</div>
                  <div className="text-sm text-slate-500">Contact us for pricing</div>
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
                            : 'text-yellow-500'
                        }`}
                      />
                      <span className="text-slate-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.featured
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Contact Sales
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  How is DataWorks priced?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  DataWorks pricing is customised based on your organisation's size, data volume, and
                  requirements. Contact our sales team for a tailored quote.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Can I start with one tier and upgrade later?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Absolutely. DataWorks is designed for growth. Start with BI, then add MI and AI capabilities as your organisation matures.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What's included in the managed service?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  All tiers include infrastructure management, security updates, monitoring, and 24/7 support. We handle everything so you can focus on insights.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Is there a minimum contract term?
                </h3>
                <p className="text-slate-600 leading-relaxed">
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

