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

      {/* Trusted By Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-12 uppercase tracking-wider font-semibold">
            Trusted by Leading Organisations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {['RedArc', 'Frazer-Nash', 'Ryalto', 'Vernon', 'MOJO-CX'].map((client) => (
              <div key={client} className="text-center">
                <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section - Inspired by Assured Website */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* The Problem */}
            <div className="flex flex-col">
              <span className="inline-block bg-red-500/20 text-red-500 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Data chaos is costing you time, money, and opportunities
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Waiting weeks</strong> for reports that should take minutes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Data infrastructure costs</strong> growing 40% year-over-year with no visibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Data team bottlenecks</strong> preventing business from moving fast
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong className="text-foreground">Audit compliance anxiety</strong> - no clear lineage or controls
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
                DataWorks delivers trust, insight, and intelligence
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Single source of truth</strong> — Everyone speaks the same data language
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="trust" size="sm" />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Connect to any data source</strong> — CRM, ERP, finance systems, and more
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="speed" size="sm" />
                      <Tag theme="control" size="sm" />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Cost visibility & control</strong> — See exactly where your data budget goes
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
                      <strong className="text-foreground">Automated quality checks</strong> — Catch issues before they reach executives
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="trust" size="sm" />
                      <Tag theme="speed" size="sm" />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-lg text-muted-foreground mb-2 block">
                      <strong className="text-foreground">Safe AI foundation</strong> — Scale AI confidently with governed data
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <Tag theme="intelligence" size="sm" />
                      <Tag theme="security" size="sm" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why C-Suite Loves It */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for the C-Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every executive cares about different things. DataWorks delivers for all of them.
            </p>
          </div>

          <div className="space-y-12">
            {/* CFO */}
            <div className="bg-gradient-to-br from-blue-500/10 to-background border-2 border-blue-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">£</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Why CFOs Love It</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Cost Transparency</div>
                      <p className="text-muted-foreground">See exactly where every pound of your data budget goes, with optimization recommendations</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">80-90% Cost Savings</div>
                      <p className="text-muted-foreground">Compared to traditional data solutions - one platform replaces multiple expensive tools</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Predictable Pricing</div>
                      <p className="text-muted-foreground">No surprise bills. Transparent monthly pricing that scales with your business</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Fast ROI</div>
                      <p className="text-muted-foreground">6-month average payback period with measurable efficiency gains</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-background border-2 border-emerald-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Why CTOs Trust It</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-foreground mb-2">99.9% Uptime SLA</div>
                      <p className="text-muted-foreground">Enterprise-grade reliability with 24/7 monitoring and support</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Security & Compliance</div>
                      <p className="text-muted-foreground">Enterprise-grade security built in from day one</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Reduce Team Burden</div>
                      <p className="text-muted-foreground">80% reduction in maintenance effort - we handle infrastructure, you focus on innovation</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Modern Architecture</div>
                      <p className="text-muted-foreground">Cloud-native, scalable platform that grows with your organization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO */}
            <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Why CEOs Approve It</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Results in 100 Days</div>
                      <p className="text-muted-foreground">Not 6 months. Start seeing value within weeks, full deployment in 100 days</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Faster Decision Making</div>
                      <p className="text-muted-foreground">75% faster time to insight - data-driven decisions in hours, not weeks</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Risk Reduction</div>
                      <p className="text-muted-foreground">Complete audit trails and compliance controls reduce regulatory risk</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Competitive Advantage</div>
                      <p className="text-muted-foreground">Organizations with DataWorks move faster and make better decisions than competitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyItMatters />

      {/* Product Overview - Enhanced */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              One Platform. Three Tiers. Unlimited Potential.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start with BI for truth, evolve to MI for insight, scale to AI for intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link
              to="/products"
              className="group bg-gradient-to-br from-blue-500/10 to-background border-2 border-blue-500/30 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">DataWorks: BI</h3>
              <p className="text-blue-500 font-semibold mb-4 text-lg">Truth</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Clean, consistent, governed reporting data powering trusted dashboards.
              </p>
              <div className="text-primary font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more →
              </div>
            </Link>

            <Link
              to="/products"
              className="group bg-gradient-to-br from-emerald-500/10 to-background border-2 border-emerald-500/30 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">DataWorks: MI</h3>
              <p className="text-emerald-500 font-semibold mb-4 text-lg">Insight</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Driver-based models to understand why performance changes.
              </p>
              <div className="text-primary font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more →
              </div>
            </Link>

            <Link
              to="/products"
              className="group bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">DataWorks: AI</h3>
              <p className="text-primary font-semibold mb-4 text-lg">Intelligence</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Safe, governed foundation to scale AI across the organisation.
              </p>
              <div className="text-primary font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                Learn more →
              </div>
            </Link>
          </div>
        </div>
      </section>

      <StakeholderBenefits />

      {/* Quick Pillar Intro */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg mb-4">
            <strong className="text-foreground">Look for color-coded tags</strong> throughout the site
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Tag theme="trust" size="md" />
            <Tag theme="insight" size="md" />
            <Tag theme="intelligence" size="md" />
            <Tag theme="security" size="md" />
            <Tag theme="speed" size="md" />
            <Tag theme="control" size="md" />
          </div>
          <p className="text-muted-foreground mt-4">
            <Link to="/products" className="text-primary hover:text-primary/80 font-semibold">
              Learn more about our six pillars →
            </Link>
          </p>
        </div>
      </section>

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
              className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-50 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-secondary/50 rounded-3xl p-12 border-2 border-border relative">
            <div className="text-6xl text-emerald-500 mb-6">"</div>
            <p className="text-2xl text-foreground leading-relaxed mb-8 italic">
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
                <div className="font-bold text-foreground text-lg">Ryalto</div>
                <div className="text-muted-foreground">Healthcare Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Stats */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The DataWorks Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-2">80-90%</div>
              <div className="text-muted-foreground">Cost Savings</div>
              <div className="text-sm text-muted-foreground mt-2">vs. traditional solutions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-2">100 Days</div>
              <div className="text-muted-foreground">To First Value</div>
              <div className="text-sm text-muted-foreground mt-2">Full deployment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
              <div className="text-sm text-muted-foreground mt-2">Enterprise reliability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground mb-2">75%</div>
              <div className="text-muted-foreground">Faster Insights</div>
              <div className="text-sm text-muted-foreground mt-2">Time to decision</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything executives want to know about DataWorks
            </p>
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How long does implementation take?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                100 days to full deployment. Unlike traditional data projects that take 6-12 months, 
                DataWorks is designed for rapid time to value. You'll see initial results within weeks, 
                with complete rollout in just over 3 months.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What if we have custom data sources?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DataWorks supports custom connectors for any data source. Whether it's a proprietary system, 
                legacy database, or custom API, we can integrate it. Our platform connects to hundreds of 
                standard sources out-of-the-box, and we build custom connectors as needed.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Can non-technical users create their own reports?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. DataWorks includes self-service analytics capabilities. Business users can create 
                dashboards, run queries, and generate reports without writing code or waiting for IT. 
                Your data team sets the governance rules once, then users explore data safely within those guardrails.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                How do you ensure data security and compliance?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DataWorks provides enterprise-grade security built in. We provide end-to-end 
                encryption, role-based access controls, complete audit trails, and data lineage tracking. 
                Every data movement is logged, every transformation is traceable, and access is governed 
                at the most granular level.
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-secondary/50 border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What's the actual pricing model?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Transparent, predictable monthly pricing with no surprise bills. DataWorks: BI starts at 
                £1,250/month, MI at £3,750/month, and AI is custom-priced based on your needs. 
                Unlike traditional solutions with complex usage-based billing, you know exactly what you'll pay.
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
                Do you offer a free trial or proof of concept?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer guided demos and proof-of-concept projects for qualified enterprises. This allows 
                you to see DataWorks in action with your actual data before committing. Contact our team 
                to discuss your specific requirements.
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
        title="Ready to Transform Your Data?"
        description="Get clean, consistent, and actionable intelligence. Start with BI, evolve to MI, scale to AI."
        primaryButtonText="Get Started"
        secondaryButtonText="Schedule a Demo"
      />
    </>
  );
}
