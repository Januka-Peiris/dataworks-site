import { Zap, Shield, Scaling } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Speed to Insight',
    description: 'Go from raw data to actionable insights in minutes, not months. DataWorks automates the heavy lifting so you can focus on what matters.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Unbreakable Trust',
    description: 'Build confidence in your data with automated quality checks, data lineage, and a single source of truth for all your KPIs.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Scaling,
    title: 'Scalable Control',
    description: 'Get the control you need to manage data across the organization, with the scalability to grow as your business grows.',
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
            Why DataWorks?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            In today's market, data is your biggest asset. But it's not enough to just have data. You need to be able to use it. DataWorks gives you the speed, trust, and control you need to turn your data into a competitive advantage.
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
