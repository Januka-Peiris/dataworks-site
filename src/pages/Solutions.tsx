import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import Tag from '../components/Tag';
import { CheckCircle, TrendingUp, Users, BarChart3, ShoppingCart, Code, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const departments = [
  {
    name: 'Finance',
    icon: BarChart3,
    color: 'blue',
    description: 'Transform financial reporting, planning, and compliance',
    tier: 'BI + MI',
    challenges: [
      'Manual reconciliations consuming hours of valuable time',
      'Inconsistent numbers between systems creating trust issues',
      'Slow month-end close processes delaying strategic decisions',
      'Difficulty forecasting accurately in volatile conditions',
    ],
    solutions: [
      { text: 'Automated reconciliations across all financial systems', tags: ['trust', 'speed'] },
      { text: 'Single source of truth for all financial metrics', tags: ['trust', 'control'] },
      { text: 'Driver-based budgeting and scenario planning', tags: ['insight', 'intelligence'] },
      { text: 'Complete audit trails for compliance', tags: ['control', 'security'] },
    ],
    outcomes: '3-day month-end close, 75% faster budget planning, zero reconciliation errors',
  },
  {
    name: 'Operations',
    icon: Users,
    color: 'emerald',
    description: 'Optimize processes, resources, and performance',
    tier: 'BI + MI',
    challenges: [
      'No real-time visibility into operational performance',
      'Bottlenecks and inefficiencies hidden in manual processes',
      'Unable to predict resource needs or capacity issues',
      'Data scattered across multiple legacy systems',
    ],
    solutions: [
      { text: 'Real-time operational dashboards for every team', tags: ['insight', 'speed'] },
      { text: 'Predictive analytics for resource planning', tags: ['insight', 'intelligence'] },
      { text: 'Process efficiency tracking and optimization', tags: ['insight', 'control'] },
      { text: 'Unified view across all operational systems', tags: ['trust', 'insight'] },
    ],
    outcomes: '40% faster issue resolution, 30% improvement in resource utilization',
  },
  {
    name: 'Human Resources',
    icon: Users,
    color: 'purple',
    description: 'Data-driven talent management and workforce planning',
    tier: 'BI + MI',
    challenges: [
      'Employee data siloed across HR, payroll, and performance systems',
      'Difficulty predicting attrition and retention risks',
      'Manual headcount planning and budgeting processes',
      'No visibility into diversity and inclusion metrics',
    ],
    solutions: [
      { text: 'Unified employee data across all HR systems', tags: ['trust', 'insight'] },
      { text: 'Predictive attrition modeling and early warning', tags: ['insight', 'intelligence'] },
      { text: 'Workforce planning with scenario modeling', tags: ['insight', 'intelligence'] },
      { text: 'Real-time DEI dashboards and compliance tracking', tags: ['trust', 'control'] },
    ],
    outcomes: '20% reduction in attrition, 50% faster headcount planning',
  },
  {
    name: 'Marketing',
    icon: ShoppingCart,
    color: 'yellow',
    description: 'Measure ROI, optimize campaigns, and prove impact',
    tier: 'BI + MI',
    challenges: [
      'Unable to prove marketing ROI to leadership',
      'Campaign data scattered across multiple platforms',
      'No clear attribution for leads and revenue',
      'Difficulty optimizing spend across channels',
    ],
    solutions: [
      { text: 'Multi-touch attribution across all channels', tags: ['insight', 'trust'] },
      { text: 'Real-time campaign performance dashboards', tags: ['insight', 'speed'] },
      { text: 'Predictive lead scoring and conversion modeling', tags: ['insight', 'intelligence'] },
      { text: 'Budget optimization with scenario analysis', tags: ['insight', 'control'] },
    ],
    outcomes: '35% improvement in marketing ROI, 60% faster campaign reporting',
  },
  {
    name: 'Sales',
    icon: TrendingUp,
    color: 'orange',
    description: 'Accelerate revenue with data-driven selling',
    tier: 'BI + MI',
    challenges: [
      'Inconsistent pipeline data creating forecast uncertainty',
      'No visibility into deal health or risks',
      'Manual sales reporting stealing selling time',
      'Unable to identify best performing tactics and channels',
    ],
    solutions: [
      { text: 'Real-time pipeline visibility for every rep and leader', tags: ['insight', 'speed'] },
      { text: 'Predictive deal scoring and risk alerts', tags: ['insight', 'intelligence'] },
      { text: 'Automated sales reporting and forecasting', tags: ['trust', 'speed'] },
      { text: 'Performance analytics by rep, region, and product', tags: ['insight', 'control'] },
    ],
    outcomes: '25% increase in forecast accuracy, 15% improvement in close rates',
  },
  {
    name: 'IT & Engineering',
    icon: Code,
    color: 'slate',
    description: 'Infrastructure visibility, cost control, and governance',
    tier: 'All Tiers',
    challenges: [
      'No visibility into cloud infrastructure costs',
      'Data requests overwhelming the engineering team',
      'Compliance and security audit anxiety',
      'Difficulty scaling data infrastructure safely',
    ],
    solutions: [
      { text: 'Complete infrastructure cost visibility and optimization', tags: ['insight', 'control'] },
      { text: 'Self-service analytics reduces data team burden by 80%', tags: ['speed', 'control'] },
      { text: 'Built-in governance and compliance controls', tags: ['security', 'control'] },
      { text: 'Safe AI deployment with automated guardrails', tags: ['intelligence', 'security'] },
    ],
    outcomes: '40% reduction in infrastructure costs, 80% less data team burden',
  },
];

export default function Solutions() {
  return (
    <>
      <PageHeader
        subtitle="Solutions"
        title="DataWorks for Every Department"
        description="Purpose-built capabilities for Finance, Operations, HR, Marketing, Sales, and IT teams"
      />

      {/* Department Sections */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Department. Your Data. Your Way.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every department has unique data challenges. DataWorks delivers tailored solutions 
              while maintaining a single, unified platform.
            </p>
          </div>

          <div className="space-y-20">
            {departments.map((dept, index) => (
              <div key={index} className={`${index % 2 === 0 ? '' : 'bg-secondary/30 -mx-6 px-6 py-12 rounded-3xl'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left: Header & Challenges */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className={`w-16 h-16 rounded-xl flex items-center justify-center`}
                        style={{
                          backgroundColor: dept.color === 'blue' ? '#3b82f6' :
                                         dept.color === 'emerald' ? '#10b981' :
                                         dept.color === 'purple' ? '#a855f7' :
                                         dept.color === 'yellow' ? '#fbbf24' :
                                         dept.color === 'orange' ? '#f97316' :
                                         '#64748b'
                        }}
                      >
                        <dept.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">{dept.name}</h3>
                        <p className="text-muted-foreground">{dept.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full">
                        Best for: {dept.tier}
                      </span>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-foreground mb-4">Common Challenges:</h4>
                      <ul className="space-y-3">
                        {dept.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-red-500 text-sm font-bold">✕</span>
                            </div>
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Solutions & Outcomes */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-4">How DataWorks Helps:</h4>
                    <ul className="space-y-4 mb-8">
                      {dept.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <span className="text-foreground block mb-2">{solution.text}</span>
                            <div className="flex flex-wrap gap-1">
                              {solution.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} theme={tag as any} size="sm" />
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
                      <div className="text-sm font-semibold text-emerald-500 uppercase tracking-wide mb-2">
                        Typical Results
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed">
                        {dept.outcomes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Department Benefits */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              One Platform. Zero Silos.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When every department uses DataWorks, the entire organisation benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border-2 border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Shared Metrics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Everyone speaks the same data language. No more conflicting reports or "version of truth" debates.
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Cross-Functional Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect the dots between departments. See how marketing impacts sales, how ops affects finance.
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Faster Decisions</h3>
              <p className="text-muted-foreground leading-relaxed">
                When everyone has the same trusted data, decisions happen faster without endless reconciliation meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Which Tier for Your Department */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Which DataWorks Tier is Right for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products" className="bg-gradient-to-br from-blue-500/10 to-background border-2 border-blue-500/30 rounded-2xl p-8 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-3">DataWorks: BI</h3>
              <p className="text-blue-500 font-semibold mb-4">Best for: Reporting & Dashboards</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>✓ Finance reporting & reconciliation</li>
                <li>✓ Operations dashboards</li>
                <li>✓ HR metrics & compliance</li>
                <li>✓ Sales pipeline visibility</li>
              </ul>
              <div className="text-primary font-semibold">Learn more →</div>
            </Link>

            <Link to="/products" className="bg-gradient-to-br from-emerald-500/10 to-background border-2 border-emerald-500/30 rounded-2xl p-8 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-3">DataWorks: MI</h3>
              <p className="text-emerald-500 font-semibold mb-4">Best for: Planning & Forecasting</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>✓ Budget planning & scenarios</li>
                <li>✓ Demand forecasting</li>
                <li>✓ Workforce planning</li>
                <li>✓ Revenue forecasting</li>
              </ul>
              <div className="text-primary font-semibold">Learn more →</div>
            </Link>

            <Link to="/products" className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-3">DataWorks: AI</h3>
              <p className="text-primary font-semibold mb-4">Best for: AI & Automation</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>✓ Predictive analytics</li>
                <li>✓ Anomaly detection</li>
                <li>✓ Lead scoring</li>
                <li>✓ Process automation</li>
              </ul>
              <div className="text-primary font-semibold">Learn more →</div>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Department?"
        description="See how DataWorks can solve your specific data challenges. Schedule a demo tailored to your needs."
        primaryButtonText="Schedule Demo"
        secondaryButtonText="Contact Sales"
      />
    </>
  );
}

