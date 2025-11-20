import { Database, TrendingUp, Sparkles, Check } from 'lucide-react';
import Tag, { TagTheme } from './Tag';

const tiers = [
  {
    name: 'DataWorks: BI',
    subtitle: 'Truth',
    description: 'Get trusted dashboards and reports powered by clean, consistent, and governed data.',
    color: 'blue',
    colorClass: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
    icon: Database,
    capabilities: [
      { text: 'Connect all your data sources — CRM, finance, marketing, operations', tags: ['trust' as TagTheme, 'speed' as TagTheme] },
      { text: 'Create a single source of truth with certified KPIs everyone trusts', tags: ['trust' as TagTheme, 'control' as TagTheme] },
      { text: 'Automate data quality checks to catch issues before they reach executives', tags: ['trust' as TagTheme, 'speed' as TagTheme, 'security' as TagTheme] },
      { text: 'Generate audit-ready reports with complete lineage & reconciliations', tags: ['trust' as TagTheme, 'control' as TagTheme] },
      { text: 'Empower business users with self-service dashboards — no coding required', tags: ['insight' as TagTheme, 'speed' as TagTheme] },
    ],
    outcomes: [
      'Reduce reporting time from weeks to minutes',
      'Align the entire business on the same data',
      'Eliminate reporting errors and chaos',
      'Pass audits with confidence and ease',
    ],
  },
  {
    name: 'DataWorks: MI',
    subtitle: 'Insight',
    description: 'Leverage driver-based models to understand why performance changes.',
    color: 'emerald',
    colorClass: 'from-emerald-500 to-emerald-600',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/5',
    icon: TrendingUp,
    capabilities: [
      { text: 'Run what-if scenarios to predict business outcomes before committing', tags: ['insight' as TagTheme, 'intelligence' as TagTheme] },
      { text: 'Use driver-based modeling to see exactly what influences your metrics', tags: ['insight' as TagTheme] },
      { text: 'Automatically adapt to changing conditions with predictive re-forecasting', tags: ['insight' as TagTheme, 'intelligence' as TagTheme, 'speed' as TagTheme] },
      { text: 'Instantly explain performance gaps with variance analysis', tags: ['insight' as TagTheme, 'speed' as TagTheme] },
      { text: 'Ensure consistent analysis with reusable intelligence templates', tags: ['insight' as TagTheme, 'speed' as TagTheme, 'control' as TagTheme] },
    ],
    outcomes: [
      'Make smarter decisions, faster',
      'Deeply understand your performance drivers',
      'Plan and forecast with greater confidence',
      'Identify trends before your competitors',
    ],
  },
  {
    name: 'DataWorks: AI',
    subtitle: 'Intelligence',
    description: 'Build on a safe, governed foundation to scale AI across your business.',
    color: 'yellow',
    colorClass: 'from-yellow-400 to-yellow-500',
    borderColor: 'border-yellow-500/20',
    bgColor: 'bg-yellow-500/5',
    icon: Sparkles,
    capabilities: [
      { text: 'Deploy AI safely with built-in guardrails and policy enforcement', tags: ['intelligence' as TagTheme, 'security' as TagTheme, 'control' as TagTheme] },
      { text: 'Get consistent, trustworthy AI results with governed prompt inputs', tags: ['intelligence' as TagTheme, 'trust' as TagTheme, 'security' as TagTheme] },
      { text: 'Track AI decisions with complete lineage for full transparency', tags: ['trust' as TagTheme, 'control' as TagTheme, 'security' as TagTheme] },
      { text: 'Protect sensitive data at every level with role-based access controls', tags: ['security' as TagTheme, 'control' as TagTheme] },
      { text: 'Accelerate model development with ML-ready data products', tags: ['intelligence' as TagTheme, 'speed' as TagTheme] },
    ],
    outcomes: [
      'Scale AI with confidence and control',
      'Automate insights and workflows',
      'Minimize regulatory and compliance risks',
      'Unlock a significant competitive advantage',
    ],
  },
];

export default function ProductTiers() {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            The DataWorks Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Start with BI for a single source of truth, evolve to MI for deep insights, and scale to AI for transformative intelligence.
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
                  <ul className="space-y-4">
                    {tier.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${tier.color === 'blue' ? 'text-blue-500' : tier.color === 'emerald' ? 'text-emerald-500' : 'text-yellow-500'} flex-shrink-0 mt-0.5`} />
                        <div className="flex-1">
                          <span className="text-slate-700 text-sm leading-relaxed block mb-2">
                            {capability.text}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {capability.tags.map((tag, tagIndex) => (
                              <Tag key={tagIndex} theme={tag} size="sm" />
                            ))}
                          </div>
                        </div>
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
