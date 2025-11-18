import Hero from '../components/Hero';
import WhyItMatters from '../components/WhyItMatters';
import StakeholderBenefits from '../components/StakeholderBenefits';
import CTABanner from '../components/CTABanner';
import { CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-wider font-semibold">
            Trusted by Leading Organisations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['RedArc', 'Frazer-Nash', 'Ryalto', 'Vernon', 'MOJO-CX'].map((client) => (
              <div key={client} className="text-center">
                <div className="text-xl font-bold text-slate-400">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section - Inspired by Assured Website */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Problem */}
            <div>
              <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Data chaos is costing you time, trust, and opportunities
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-slate-600">
                    Inconsistent KPIs across departments creating confusion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-slate-600">
                    Manual reconciliations wasting hours every week
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-slate-600">
                    Siloed data preventing holistic decision-making
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-slate-600">
                    AI initiatives stalling due to data quality concerns
                  </span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                The Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                DataWorks delivers trust, insight, and intelligence
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">Single source of truth</strong> — Everyone speaks the same data language
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">Automated quality checks</strong> — Trust your data without manual reconciliation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">Complete governance</strong> — Audit-ready with full lineage and controls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">Safe AI foundation</strong> — Scale AI confidently with governed data
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyItMatters />

      {/* Product Overview - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              One Platform. Three Tiers. Unlimited Potential.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Start with BI for truth, evolve to MI for insight, scale to AI for intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link
              to="/products"
              className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">DataWorks: BI</h3>
              <p className="text-blue-600 font-semibold mb-4 text-lg">Truth</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Clean, consistent, governed reporting data powering trusted dashboards.
              </p>
              <div className="text-emerald-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more →
              </div>
            </Link>

            <Link
              to="/products"
              className="group bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">DataWorks: MI</h3>
              <p className="text-emerald-600 font-semibold mb-4 text-lg">Insight</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Driver-based models to understand why performance changes.
              </p>
              <div className="text-emerald-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more →
              </div>
            </Link>

            <Link
              to="/products"
              className="group bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">DataWorks: AI</h3>
              <p className="text-yellow-600 font-semibold mb-4 text-lg">Intelligence</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Safe, governed foundation to scale AI across the organisation.
              </p>
              <div className="text-emerald-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more →
              </div>
            </Link>
          </div>
        </div>
      </section>

      <StakeholderBenefits />

      {/* Results/Stats Section - Enhanced from Assured Website */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results. Real Impact.
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              See how organisations are transforming their data capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">98.1%</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">Zero Touch Orders</div>
              <div className="text-sm text-emerald-200">Automated processing at scale</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">65%</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">Lower Costs</div>
              <div className="text-sm text-emerald-200">Reduction in delivery costs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">75%</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">Faster Time to Value</div>
              <div className="text-sm text-emerald-200">Results within 100 days</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-slate-50 rounded-3xl p-12 border-2 border-slate-200 relative">
            <div className="text-6xl text-emerald-500 mb-6">"</div>
            <p className="text-2xl text-slate-700 leading-relaxed mb-8 italic">
              Since teaming up with Assured, our data has surged from two to four billion points. 
              This massive increase helped us deeply analyse user behaviour. Assured's expertise in 
              merging diverse data sources put us ahead of the competition. They're committed to 
              long-term partnerships, offering flexible solutions that genuinely aim for success. 
              Trustworthy and innovative, they turn complex data into valuable insights, giving us a 
              real edge in the market.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg">Ryalto</div>
                <div className="text-slate-600">Healthcare Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Stats */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose DataWorks?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Managed Platform</div>
              <div className="text-sm text-slate-500 mt-2">We handle everything</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">100 Days</div>
              <div className="text-slate-600">To First Value</div>
              <div className="text-sm text-slate-500 mt-2">Results in weeks, not months</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime SLA</div>
              <div className="text-sm text-slate-500 mt-2">Always available</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Support</div>
              <div className="text-sm text-slate-500 mt-2">We're here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Data?"
        description="Get clean, consistent, and actionable intelligence. Start with BI, evolve to MI, scale to AI."
        primaryButtonText="Get Started"
        secondaryButtonText="Schedule a Demo"
      />
    </>
  );
}
