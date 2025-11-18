import { Heart, Shield, CheckCircle } from 'lucide-react';

const stakeholders = [
  {
    icon: Heart,
    title: 'Businesses Love',
    description: 'Actionable insights, aligned KPIs, and trustworthy data that drive confident decision-making across the business.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50',
  },
  {
    icon: Shield,
    title: 'IT Trust',
    description: 'Secure, governed, scalable infrastructure managed end-to-end — reducing operational overhead.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100/50',
  },
  {
    icon: CheckCircle,
    title: 'Auditors Approve',
    description: 'Full lineage, compliance, controls and audit-ready transparency built directly into the platform.',
    color: 'yellow',
    gradient: 'from-yellow-400 to-yellow-500',
    bgGradient: 'from-yellow-50 to-yellow-100/50',
  },
];

export default function StakeholderBenefits() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Built for Everyone Who Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            DataWorks delivers value across your entire organisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${stakeholder.bgGradient} border-2 border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stakeholder.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stakeholder.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {stakeholder.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {stakeholder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

