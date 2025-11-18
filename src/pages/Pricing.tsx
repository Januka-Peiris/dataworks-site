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
                  <div className="text-4xl font-bold text-slate-900">
                    {tier.price}
                    {tier.period && <span className="text-xl text-slate-600">{tier.period}</span>}
                  </div>
                  <div className="text-sm text-slate-500">
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

          {/* What's Included Section */}
          <div className="mt-24 pt-24 border-t border-slate-200">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                What's Included in Every Tier
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                All DataWorks tiers include these powerful enterprise capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Unlimited Dashboards */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Unlimited Dashboards</h3>
                    <p className="text-sm text-slate-600">Create as many reports and dashboards as you need</p>
                  </div>
                </div>
              </div>

              {/* Unlimited Data Sources */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Plug className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Unlimited Data Sources</h3>
                    <p className="text-sm text-slate-600">Connect to all your systems without limits</p>
                  </div>
                </div>
              </div>

              {/* Automated Quality Monitoring */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Automated Quality Monitoring</h3>
                    <p className="text-sm text-slate-600">Continuous checks ensure data integrity</p>
                  </div>
                </div>
              </div>

              {/* Cost Optimization Tools */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Cost Optimization Tools</h3>
                    <p className="text-sm text-slate-600">See exactly where your budget goes</p>
                  </div>
                </div>
              </div>

              {/* API Creation Tools */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">API Creation Tools</h3>
                    <p className="text-sm text-slate-600">Build data APIs without coding</p>
                  </div>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">24/7 Expert Support</h3>
                    <p className="text-sm text-slate-600">Always available when you need help</p>
                  </div>
                </div>
              </div>

              {/* Complete Data Lineage */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Complete Data Lineage</h3>
                    <p className="text-sm text-slate-600">Track data from source to report</p>
                  </div>
                </div>
              </div>

              {/* Self-Service Analytics */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Self-Service Analytics</h3>
                    <p className="text-sm text-slate-600">Empower users to explore data safely</p>
                  </div>
                </div>
              </div>

              {/* Managed Infrastructure */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">100% Managed Infrastructure</h3>
                    <p className="text-sm text-slate-600">We handle all technical operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 text-lg">
                <strong className="text-slate-900">No hidden costs.</strong> No surprise usage charges. 
                Everything you need is included.
              </p>
            </div>
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

