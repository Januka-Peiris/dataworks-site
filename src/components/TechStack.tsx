import { Shield, Server, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'End-to-End Governance',
    description: 'Complete data lineage, access controls, and quality assurance across your entire data estate.',
  },
  {
    icon: Server,
    title: 'Fully Managed Platform',
    description: 'No infrastructure overhead. We handle deployment, scaling, and maintenance.',
  },
  {
    icon: Lock,
    title: 'Multi-Tenant Control',
    description: 'Secure isolation with granular access controls and audit trails.',
  },
];

export default function TechStack() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Built on Modern, Proven Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Powered by industry-leading tools and best practices for data engineering.
          </p>
        </div>


        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why DataWorks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-400 text-sm">Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
