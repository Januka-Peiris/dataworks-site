import PageHeader from '../components/PageHeader';
import ProductTiers from '../components/ProductTiers';
import ComparisonTable from '../components/ComparisonTable';
import Journey from '../components/Journey';
import CTABanner from '../components/CTABanner';
import PillarLegend from '../components/PillarLegend';
import Tag from '../components/Tag';
import BiIcon from '../components/icons/BiIcon';
import MiIcon from '../components/icons/MiIcon';
import AiIcon from '../components/icons/AiIcon';
import { CheckCircle, ArrowRight, Plug, Shield, BarChart3, Code, Database, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <PageHeader
        subtitle="The DataWorks Platform"
        title="Your All-in-One Data Solution"
        description="DataWorks is a fully-managed data platform that gives you clean, consistent, and actionable intelligence. Stop firefighting data issues and start making data-driven decisions."
      />

      {/* Value Proposition Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Last Data Platform You'll Ever Need
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                DataWorks is a single, unified platform that grows with you. Start with the essentials, and add more power as you need it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">All-in-One Solution</div>
                    <div className="text-muted-foreground">Replace multiple point solutions with a single, easy-to-use platform.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Fully Managed</div>
                    <div className="text-muted-foreground">We handle the infrastructure, so you can focus on your data.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Grows with You</div>
                    <div className="text-muted-foreground">Start with BI, and add MI and AI capabilities as your needs evolve.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 border-2 border-border rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border-2 border-blue-500/30">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BiIcon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">DataWorks: BI</div>
                    <div className="text-sm text-muted-foreground">Get a single source of truth for your business.</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-500/10 rounded-xl border-2 border-emerald-500/30">
                  <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MiIcon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">DataWorks: MI</div>
                    <div className="text-sm text-muted-foreground">Understand what's driving your business.</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border-2 border-primary/30">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <AiIcon useWhite className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">DataWorks: AI</div>
                    <div className="text-sm text-muted-foreground">Scale AI with a safe, governed foundation.</div>
                  </div>
                </div>
              </div>
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
              Everything You Need to Become Data-Driven
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              DataWorks provides a complete set of tools to help you collect, clean, and analyze your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Integration */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Plug className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Integration</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Connect to all your data sources, no matter where they live.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="speed" size="sm" />
                <Tag theme="control" size="sm" />
              </div>
            </div>

            {/* Data Modeling */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Modeling</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Create a single source of truth for your business with our powerful data modeling tools.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="trust" size="sm" />
                <Tag theme="control" size="sm" />
              </div>
            </div>

            {/* Data Visualization */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Build beautiful, interactive dashboards to explore your data and share your insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="insight" size="sm" />
                <Tag theme="speed" size="sm" />
              </div>
            </div>

            {/* Data Governance */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Governance</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Ensure your data is secure, compliant, and trustworthy with our built-in governance features.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="trust" size="sm" />
                <Tag theme="security" size="sm" />
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Build, train, and deploy machine learning models on a safe, governed foundation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="intelligence" size="sm" />
                <Tag theme="speed" size="sm" />
              </div>
            </div>

            {/* Data API */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data API</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Expose your trusted data to any system or application with our powerful Data API.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag theme="speed" size="sm" />
                <Tag theme="control" size="sm" />
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Our Customers Use DataWorks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DataWorks is a flexible platform that can be used to solve a wide range of data challenges.
            </p>
          </div>

          <div className="space-y-8">
            {/* BI Use Cases */}
            <div className="bg-gradient-to-br from-blue-500/10 to-background border-2 border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BiIcon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">DataWorks: BI</h3>
                  <p className="text-blue-500">For a single source of truth</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Executive Dashboards</div>
                  <p className="text-sm text-muted-foreground">Get a real-time view of your business with our interactive dashboards.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Financial Reporting</div>
                  <p className="text-sm text-muted-foreground">Automate your financial reporting and close your books faster.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Sales & Marketing Analytics</div>
                  <p className="text-sm text-muted-foreground">Understand your customers better and optimize your sales and marketing efforts.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Operational Analytics</div>
                  <p className="text-sm text-muted-foreground">Monitor your operations in real time and identify areas for improvement.</p>
                </div>
              </div>
            </div>

            {/* MI Use Cases */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-background border-2 border-emerald-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <MiIcon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">DataWorks: MI</h3>
                  <p className="text-emerald-500">To understand what's driving your business</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Financial Planning & Analysis</div>
                  <p className="text-sm text-muted-foreground">Create more accurate forecasts and budgets with our driver-based models.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Sales Forecasting</div>
                  <p className="text-sm text-muted-foreground">Predict your sales with greater accuracy and optimize your sales strategy.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Demand Planning</div>
                  <p className="text-sm text-muted-foreground">Forecast demand for your products and services and optimize your inventory.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Customer Lifetime Value</div>
                  <p className="text-sm text-muted-foreground">Understand the value of your customers and optimize your retention efforts.</p>
                </div>
              </div>
            </div>

            {/* AI Use Cases */}
            <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <AiIcon useWhite className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">DataWorks: AI</h3>
                  <p className="text-primary">To scale AI with a safe, governed foundation</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Predictive Maintenance</div>
                  <p className="text-sm text-muted-foreground">Predict equipment failures before they happen and reduce downtime.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Customer Churn Prediction</div>
                  <p className="text-sm text-muted-foreground">Identify customers who are likely to churn and take action to retain them.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Fraud Detection</div>
                  <p className="text-sm text-muted-foreground">Detect and prevent fraudulent transactions in real time.</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="font-semibold text-foreground mb-2">Personalization</div>
                  <p className="text-sm text-muted-foreground">Deliver personalized experiences to your customers at scale.</p>
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
              An Enterprise-Grade Platform You Can Trust
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              DataWorks is built on a modern, scalable, and secure architecture, so you can be confident that your data is in good hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Scalability</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                DataWorks is built to handle petabytes of data and thousands of users, so you can be confident that it will grow with your business.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Security</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                DataWorks is built with security in mind, so you can be confident that your data is safe and secure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                DataWorks is a fully-managed platform with a 99.9% uptime SLA, so you can be confident that it will always be available when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Connect to Your Entire Data Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DataWorks connects to hundreds of data sources, so you can get a complete view of your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Salesforce', 'HubSpot', 'Marketo', 'Zendesk',
              'Stripe', 'QuickBooks', 'NetSuite', 'SAP',
              'Snowflake', 'BigQuery', 'Redshift', 'Azure',
              'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle',
            ].map((integration) => (
              <div key={integration} className="bg-background border-2 border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="font-semibold text-foreground">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started with DataWorks?"
        description="Schedule a demo to see how DataWorks can help you solve your specific data challenges."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="View Pricing"
      />
    </>
  );
}
