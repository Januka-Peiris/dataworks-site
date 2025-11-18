import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'BI → Truth',
    color: 'blue',
    colorClass: 'from-blue-500 to-blue-600',
    description: 'Establish a single source of truth with clean, consistent, governed reporting data.',
    features: [
      'Standardised KPIs',
      'Automated quality checks',
      'Trusted dashboards',
    ],
  },
  {
    number: '02',
    title: 'MI → Insight',
    color: 'emerald',
    colorClass: 'from-emerald-500 to-emerald-600',
    description: 'Understand performance drivers with scenario modelling and predictive forecasting.',
    features: [
      'Driver-based models',
      'Variance analysis',
      'Scenario planning',
    ],
  },
  {
    number: '03',
    title: 'AI → Intelligence',
    color: 'yellow',
    colorClass: 'from-yellow-400 to-yellow-500',
    description: 'Scale AI safely across the organisation with governed, ML-ready data products.',
    features: [
      'AI guardrails',
      'Model monitoring',
      'Automated workflows',
    ],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-32 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            The DataWorks Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Start where you are. Scale when you're ready. A single platform that grows with you.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-yellow-500 -translate-y-1/2 opacity-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br ${step.colorClass} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>

                  <div className="mt-6">
                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${step.colorClass} bg-clip-text text-transparent`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <ArrowRight className={`w-5 h-5 ${step.color === 'blue' ? 'text-blue-500' : step.color === 'emerald' ? 'text-emerald-500' : 'text-yellow-500'} flex-shrink-0`} />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl">
            <p className="text-lg font-semibold">
              One Platform. Three Tiers. Unlimited Potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
