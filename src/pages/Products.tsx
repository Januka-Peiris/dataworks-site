import PageHeader from '../components/PageHeader';
import ProductTiers from '../components/ProductTiers';
import ComparisonTable from '../components/ComparisonTable';
import Journey from '../components/Journey';
import CTABanner from '../components/CTABanner';
import PillarLegend from '../components/PillarLegend';
import Tag from '../components/Tag';
import { Database, TrendingUp, Sparkles, CheckCircle, ArrowRight, Users, Building, Cpu, Plug, DollarSign, Zap, Shield, BarChart3, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <PageHeader
        subtitle="DataWorks"
        title="Three Tiers. One Platform."
        description="Start with BI for trust, evolve to MI for insight, scale to AI for intelligence. A single platform that grows with your organisation."
      />

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                One Platform for Your Entire Data Journey
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                DataWorks isn't just another data tool. It's a complete, governed platform that 
                evolves with your organisation — from basic reporting to advanced AI.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Start Where You Are</div>
                    <div className="text-slate-600">Begin with BI, add capabilities as you grow</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Fully Managed</div>
                    <div className="text-slate-600">We handle infrastructure, you focus on insights</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Built-In Governance</div>
                    <div className="text-slate-600">Trust, lineage, and compliance from day one</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">DataWorks: BI</div>
                    <div className="text-sm text-slate-600">Trusted reporting foundation</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="text-slate-600">Add when ready</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border-2 border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">DataWorks: MI</div>
                    <div className="text-sm text-slate-600">Predictive intelligence</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-8">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="text-slate-600">Scale to AI</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">DataWorks: AI</div>
                    <div className="text-sm text-slate-600">Safe, governed AI at scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who Uses What */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Every Team</h3>
              <p className="text-slate-600 mb-4">Finance, Ops, HR, Execs — everyone gets trusted data</p>
              <div className="text-sm text-blue-600 font-semibold">→ DataWorks: BI</div>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <Building className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Strategic Teams</h3>
              <p className="text-slate-600 mb-4">FP&A, Strategy, Planning — deep insights and forecasting</p>
              <div className="text-sm text-emerald-600 font-semibold">→ DataWorks: MI</div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <Cpu className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Innovation Teams</h3>
              <p className="text-slate-600 mb-4">AI/ML, Innovation Labs — safe AI deployment at scale</p>
              <div className="text-sm text-yellow-600 font-semibold">→ DataWorks: AI</div>
            </div>
          </div>
        </div>
      </section>

      <ProductTiers />

      {/* Platform Capabilities Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How DataWorks Delivers Value
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Powerful capabilities that turn your data into a competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Integration */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Plug className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect Any Data Source</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Plug into your CRM, ERP, finance systems, marketing tools, and more. No data silo left behind.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="speed" size="sm" />
                <Tag theme="control" size="sm" />
              </div>
            </div>

            {/* Cost Optimization */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Cost Visibility</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                See exactly where every pound of your data budget goes, with intelligent optimization recommendations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="insight" size="sm" />
                <Tag theme="control" size="sm" />
              </div>
            </div>

            {/* API Creation */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Data APIs Instantly</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Expose trusted data to any system without coding. Enable integration without developer bottlenecks.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="speed" size="sm" />
                <Tag theme="trust" size="sm" />
              </div>
            </div>

            {/* Data Quality */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Quality Checks</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Catch data issues before they reach executives. Continuous monitoring ensures trust at every level.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="trust" size="sm" />
                <Tag theme="security" size="sm" />
              </div>
            </div>

            {/* Self-Service Dashboards */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Self-Service Analytics</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Business users create their own reports and dashboards. Free your data team from endless ad-hoc requests.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="speed" size="sm" />
                <Tag theme="insight" size="sm" />
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning-Fast Queries</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Get answers in seconds, not hours. Optimized infrastructure means faster decisions across the board.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="speed" size="sm" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors"
            >
              Schedule a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <PillarLegend />

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how organisations use each tier to solve specific challenges
            </p>
          </div>

          <div className="space-y-8">
            {/* BI Use Cases */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">DataWorks: BI Use Cases</h3>
                  <p className="text-blue-600">Building trust in your data</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-semibold text-slate-900 mb-2">Executive Dashboards</div>
                  <div className="text-sm text-slate-600 mb-3">Real-time KPIs everyone trusts</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="trust" size="sm" />
                    <Tag theme="insight" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-semibold text-slate-900 mb-2">Financial Reporting</div>
                  <div className="text-sm text-slate-600 mb-3">Automated reconciliations & controls</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="trust" size="sm" />
                    <Tag theme="control" size="sm" />
                    <Tag theme="speed" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-semibold text-slate-900 mb-2">Operational Analytics</div>
                  <div className="text-sm text-slate-600 mb-3">Monitor performance across teams</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="insight" size="sm" />
                    <Tag theme="control" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-semibold text-slate-900 mb-2">Customer Analytics</div>
                  <div className="text-sm text-slate-600 mb-3">Unified view of customer data</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="trust" size="sm" />
                    <Tag theme="insight" size="sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* MI Use Cases */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">DataWorks: MI Use Cases</h3>
                  <p className="text-emerald-600">Understanding what drives your business</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="font-semibold text-slate-900 mb-2">Budget Planning</div>
                  <div className="text-sm text-slate-600 mb-3">Scenario modeling & forecasting</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="insight" size="sm" />
                    <Tag theme="intelligence" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="font-semibold text-slate-900 mb-2">Sales Performance</div>
                  <div className="text-sm text-slate-600 mb-3">Driver-based analysis of revenue</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="insight" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="font-semibold text-slate-900 mb-2">Cost Optimization</div>
                  <div className="text-sm text-slate-600 mb-3">Identify cost drivers & savings</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="insight" size="sm" />
                    <Tag theme="speed" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="font-semibold text-slate-900 mb-2">Demand Forecasting</div>
                  <div className="text-sm text-slate-600 mb-3">Predict future trends & needs</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="insight" size="sm" />
                    <Tag theme="intelligence" size="sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Use Cases */}
            <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">DataWorks: AI Use Cases</h3>
                  <p className="text-yellow-600">Scaling AI safely across your organisation</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="font-semibold text-slate-900 mb-2">Anomaly Detection</div>
                  <div className="text-sm text-slate-600 mb-3">Automatically spot unusual patterns</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="intelligence" size="sm" />
                    <Tag theme="security" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="font-semibold text-slate-900 mb-2">Predictive Maintenance</div>
                  <div className="text-sm text-slate-600 mb-3">Prevent issues before they happen</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="intelligence" size="sm" />
                    <Tag theme="insight" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="font-semibold text-slate-900 mb-2">Customer Churn</div>
                  <div className="text-sm text-slate-600 mb-3">Predict & prevent customer loss</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="intelligence" size="sm" />
                    <Tag theme="insight" size="sm" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="font-semibold text-slate-900 mb-2">Process Automation</div>
                  <div className="text-sm text-slate-600 mb-3">AI-powered workflow automation</div>
                  <div className="flex flex-wrap gap-1">
                    <Tag theme="intelligence" size="sm" />
                    <Tag theme="speed" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />
      <Journey />

      {/* Technical Foundation - Enhanced */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Foundation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Built on modern, proven technology with security and governance at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="font-semibold mb-2">Uptime SLA</div>
              <div className="text-sm text-slate-400">Always available when you need it</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="font-semibold mb-2">Monitoring</div>
              <div className="text-sm text-slate-400">Proactive issue detection</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="font-semibold mb-2">Managed</div>
              <div className="text-sm text-slate-400">We handle infrastructure</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">End-to-End Governance</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Complete data lineage, access controls, and quality assurance across your entire data estate.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Full data lineage tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Role-based access controls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Automated quality checks
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Cloud-native infrastructure that scales with your needs, handling billions of data points.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Auto-scaling infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  High-performance queries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Multi-region support
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Security First</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Enterprise-grade security with encryption, audit trails, and compliance built in.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Complete audit trails
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Compliance ready
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Integrates With Your Existing Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              DataWorks connects seamlessly with your current tools and data sources
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Databases', 'Cloud Storage', 'SaaS Apps', 'ERPs',
              'CRMs', 'Marketing Tools', 'BI Tools', 'Data Warehouses'
            ].map((integration) => (
              <div key={integration} className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-emerald-300 transition-all">
                <div className="font-semibold text-slate-900">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to See DataWorks in Action?"
        description="Schedule a personalized demo to see how DataWorks can transform your organisation's data capabilities."
        primaryButtonText="Book a Demo"
        secondaryButtonText="Contact Sales"
      />
    </>
  );
}
