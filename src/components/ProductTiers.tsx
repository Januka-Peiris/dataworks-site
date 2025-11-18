import { Database, TrendingUp, Sparkles, Check } from 'lucide-react';

const tiers = [
  {
    name: 'DataWorks: BI',
    subtitle: 'Truth',
    description: 'Clean, consistent, governed data powering trusted dashboards.',
    color: 'blue',
    colorClass: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
    icon: Database,
    capabilities: [
      'Single source of truth',
      'Certified KPIs and definitions',
      'Automated data quality checks',
      'Reconciliations & lineage',
      'Standardised semantic layer',
    ],
    outcomes: [
      'Faster reporting cycles',
      'Trusted dashboards',
      'Aligned metrics across teams',
      'Eliminated reporting chaos',
    ],
  },
  {
    name: 'DataWorks: MI',
    subtitle: 'Insight',
    description: 'Driver-based models to understand why performance changes.',
    color: 'emerald',
    colorClass: 'from-emerald-500 to-emerald-600',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
    icon: TrendingUp,
    capabilities: [
      'Driver modelling & assumption libraries',
      'Scenario simulation',
      'Predictive re-forecasting',
      'Variance logic',
      'Reusable intelligence templates',
    ],
    outcomes: [
      'Faster planning cycles',
      'Transparent logic',
      'Clear performance drivers',
      'Proactive decision making',
    ],
  },
  {
    name: 'DataWorks: AI',
    subtitle: 'Intelligence',
    description: 'A safe, governed foundation to scale AI across the organisation.',
    color: 'yellow',
    colorClass: 'from-yellow-400 to-yellow-500',
    borderColor: 'border-yellow-500/20',
    bgColor: 'bg-yellow-500/5',
    icon: Sparkles,
    capabilities: [
      'AI guardrails & policy enforcement',
      'Governed prompt inputs',
      'Full data lineage',
      'Access controls',
      'ML-ready data products',
    ],
    outcomes: [
      'Confident AI adoption',
      'Automated insights & workflows',
      'Reduced risk',
      'Scalable intelligence',
    ],
  },
];

export default function ProductTiers() {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Three Tiers. One Platform.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Start with BI for trust, evolve to MI for insight, scale to AI for intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative bg-white border-2 ${tier.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105`}
            >
              <div className={`absolute inset-0 ${tier.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {tier.name}
                </h3>
                <div className={`text-3xl font-bold bg-gradient-to-r ${tier.colorClass} bg-clip-text text-transparent mb-4`}>
                  {tier.subtitle}
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {tier.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                    Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {tier.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${tier.color === 'blue' ? 'text-blue-500' : tier.color === 'emerald' ? 'text-emerald-500' : 'text-yellow-500'} flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-700 text-sm leading-relaxed">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                    Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {tier.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 ${tier.color === 'blue' ? 'bg-blue-500' : tier.color === 'emerald' ? 'bg-emerald-500' : 'bg-yellow-500'} rounded-full flex-shrink-0 mt-2`}></div>
                        <span className="text-slate-700 text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
