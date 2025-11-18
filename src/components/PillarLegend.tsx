import { Shield, Eye, Sparkles, Lock, Zap, Settings } from 'lucide-react';

const pillars = [
  {
    theme: 'trust' as const,
    icon: Shield,
    title: 'Trust',
    description: 'Data quality, governance, single source of truth',
    color: 'blue',
    examples: ['Data Quality', 'Governance', 'Reconciliation', 'Certified KPIs'],
  },
  {
    theme: 'insight' as const,
    icon: Eye,
    title: 'Insight',
    description: 'Analytics, understanding, business intelligence',
    color: 'emerald',
    examples: ['Analytics', 'Reporting', 'Driver Models', 'Forecasting'],
  },
  {
    theme: 'intelligence' as const,
    icon: Sparkles,
    title: 'Intelligence',
    description: 'AI, automation, predictive capabilities',
    color: 'yellow',
    examples: ['AI/ML', 'Automation', 'Predictions', 'Smart Workflows'],
  },
  {
    theme: 'security' as const,
    icon: Lock,
    title: 'Security',
    description: 'Compliance, audit-ready, access controls',
    color: 'purple',
    examples: ['Compliance', 'Audit Trails', 'Encryption', 'Access Controls'],
  },
  {
    theme: 'speed' as const,
    icon: Zap,
    title: 'Speed',
    description: 'Fast deployment, time to value, efficiency',
    color: 'orange',
    examples: ['100 Day Delivery', 'Quick Setup', 'Fast Queries', 'Rapid ROI'],
  },
  {
    theme: 'control' as const,
    icon: Settings,
    title: 'Control',
    description: 'Access management, permissions, oversight',
    color: 'slate',
    examples: ['Access Control', 'Permissions', 'Data Lineage', 'Monitoring'],
  },
];

export default function PillarLegend() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Six Pillars of Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything we build is designed around these core principles. 
            Look for these color-coded tags throughout to understand how each feature delivers value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.theme}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 bg-${pillar.color}-500 rounded-lg flex items-center justify-center`}
                  style={{
                    backgroundColor:
                      pillar.color === 'blue'
                        ? '#3b82f6'
                        : pillar.color === 'emerald'
                        ? '#10b981'
                        : pillar.color === 'yellow'
                        ? '#fbbf24'
                        : pillar.color === 'purple'
                        ? '#a855f7'
                        : pillar.color === 'orange'
                        ? '#f97316'
                        : '#64748b',
                  }}
                >
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wide text-${pillar.color}-400`}
                  >
                    {pillar.theme}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">{pillar.description}</p>

              <div className="space-y-2">
                <div className="text-sm text-slate-400 font-semibold">Examples:</div>
                <div className="flex flex-wrap gap-2">
                  {pillar.examples.map((example) => (
                    <span
                      key={example}
                      className="text-xs px-2 py-1 bg-white/10 rounded-full text-slate-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4">
            <p className="text-slate-300 text-lg">
              <strong className="text-white">Look for these tags</strong> throughout the site to see 
              how each feature maps to these pillars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

