import { Target, Shield, FileCheck } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Outcome-First',
    description: 'We focus on decisions and workflows that matter most to your business, then align the platform to them.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Operationally Sound',
    description: 'Reliable operations, clear ownership and strong governance so IT can support the business without running out.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: FileCheck,
    title: 'Audit-Ready',
    description: 'Traceable data journeys, consistent controls and reporting that stands up to scrutiny.',
    color: 'yellow',
    gradient: 'from-yellow-400 to-yellow-500',
  },
];

export default function WhyItMatters() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Why it Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Data is no longer a by-product — it's a strategic asset. But value only appears when you combine speed, trust and control. DataWorks brings these together so you can lead, not lag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {pillar.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

