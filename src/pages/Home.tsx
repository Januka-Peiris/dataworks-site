import Hero from '../components/Hero';
import WhyItMatters from '../components/WhyItMatters';
import StakeholderBenefits from '../components/StakeholderBenefits';
import CTABanner from '../components/CTABanner';
import Tag from '../components/Tag';
import { CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />



      {/* Problem/Solution Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* The Problem */}
            <div className="flex flex-col">
              <span className="inline-block bg-red-500/20 text-red-500 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your data is a mess. Your team is burned out.
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Manual reporting</strong> is slow, error-prone, and drains your team's time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Inconsistent KPIs</strong> lead to conflicting reports and wasted meetings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Data team bottlenecks</strong> slow down decision-making and frustrate business users.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Lack of governance</strong> creates security risks and compliance headaches.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="flex flex-col">
              <span className="inline-block bg-emerald-500/20 text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                The Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                DataWorks: Your All-in-One Data Platform
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Automated Reporting</strong> — Get real-time dashboards and reports, and free up your team for higher-value work.
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="speed" size="sm" />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Single Source of Truth</strong> — Unify your data and get consistent, reliable KPIs across the business.
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="trust" size="sm" />
                      <Tag theme="control" size="sm" />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Self-Service Analytics</strong> — Empower your business users to explore data and get their own insights.
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="insight" size="sm" />
                      <Tag theme="speed" size="sm" />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Built-in Governance</strong> — Protect your data with enterprise-grade security and compliance features.
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="security" size="sm" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits by Role Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for Your Entire Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DataWorks provides the data and tools each team needs to succeed.
            </p>
          </div>

          <div className="space-y-12">
            {/* Finance */}
            <div className="bg-gradient-to-br from-blue-500/10 to-background border-2 border-blue-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">£</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">For Finance Teams</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Automated Financial Reporting</div>
                      <p className="text-muted-foreground">Eliminate manual data entry and get real-time visibility into your financial performance.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Improved Forecasting</div>
                      <p className="text-muted-foreground">Use driver-based models to create more accurate forecasts and budgets.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Enhanced Compliance</div>
                      <p className="text-muted-foreground">Simplify audits with a single source of truth for all your financial data.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Increased Profitability</div>
                      <p className="text-muted-foreground">Identify cost-saving opportunities and optimize pricing with a deeper understanding of your data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-background border-2 border-emerald-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">For Sales & Marketing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Deeper Customer Insights</div>
                      <p className="text-muted-foreground">Get a 360-degree view of your customers to personalize marketing campaigns and increase sales.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Improved Lead Scoring</div>
                      <p className="text-muted-foreground">Use data to identify your most qualified leads and focus your sales efforts.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Increased Campaign ROI</div>
                      <p className="text-muted-foreground">Measure the effectiveness of your marketing campaigns and optimize your spend.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Shorter Sales Cycles</div>
                      <p className="text-muted-foreground">Arm your sales team with the data they need to close deals faster.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">For Operations Teams</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Improved Efficiency</div>
                      <p className="text-muted-foreground">Identify bottlenecks and streamline your processes with real-time operational data.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Reduced Costs</div>
                      <p className="text-muted-foreground">Optimize inventory levels, reduce waste, and lower your operating costs.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Increased Quality</div>
                      <p className="text-muted-foreground">Monitor quality metrics in real time and identify issues before they become problems.</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Enhanced Scalability</div>
                      <p className="text-muted-foreground">Scale your operations with a data platform that grows with your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyItMatters />



      {/* Results/Stats Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results. Real Impact.
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              DataWorks helps you ship faster, reduce costs, and make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">75%</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">Faster Insights</div>
              <div className="text-sm text-emerald-200">Go from data to decision in minutes, not weeks.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">80-90%</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">Cost Savings</div>
              <div className="text-sm text-emerald-200">Replace multiple expensive tools with a single platform.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">100 Days</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">To First Value</div>
              <div className="text-sm text-emerald-200">Get up and running in weeks, not months.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold mb-2">99.9%</div>
              <div className="text-emerald-100 text-lg font-semibold mb-2">Uptime SLA</div>
              <div className="text-sm text-emerald-200">Enterprise-grade reliability and support.</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-50 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Here are some of the most common questions we get about DataWorks.
            </p>
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What is DataWorks?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DataWorks is an all-in-one data platform that helps you collect, clean, and analyze your data. It provides a single source of truth for your business, so you can make better decisions, faster.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Who is DataWorks for?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DataWorks is for any business that wants to become more data-driven. It's designed to be used by everyone in your organization, from business users to data scientists.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How is DataWorks different from other data tools?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DataWorks is an all-in-one platform that replaces multiple point solutions. It's also designed to be much easier to use, so you don't need a team of data engineers to get started.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How long does it take to get started?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You can be up and running with DataWorks in a matter of days, not months. Our team will help you connect your data sources and get your first dashboards set up.
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How much does DataWorks cost?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DataWorks has a simple, transparent pricing model that scales with your business. We offer a free trial so you can see the value for yourself before you commit.
              </p>
              <Link 
                to="/pricing" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80"
              >
                See detailed pricing →
              </Link>
            </div>

            {/* Question 6 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How can I learn more?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The best way to learn more is to schedule a demo with our team. We'll show you how DataWorks can help you solve your specific data challenges.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80"
              >
                Schedule a demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to See DataWorks in Action?"
        description="Schedule a demo to see how DataWorks can help you solve your specific data challenges."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="View Pricing"
      />
    </>
  );
}
