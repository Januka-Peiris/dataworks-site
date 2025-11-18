import { Database, TrendingUp, Sparkles } from 'lucide-react';

const comparisonData = [
  {
    category: 'Core Purpose',
    bi: 'Deliver clean, consistent, governed reporting data across the organisation.',
    mi: 'Explain performance through deeper drivers, scenario logic, and forward-looking analysis.',
    ai: 'Enable safe, predictive intelligence with governed, trustworthy AI capabilities.',
  },
  {
    category: 'Primary Outcome',
    bi: { text: 'Truth:', highlight: 'A single, reliable version of every KPI.', color: 'blue' },
    mi: { text: 'Insight:', highlight: "Understanding what's happening and why.", color: 'emerald' },
    ai: { text: 'Intelligence:', highlight: 'Predictive, automated, data-driven decisioning.', color: 'yellow' },
  },
  {
    category: 'Solves For',
    bi: 'Reporting chaos, inconsistent KPIs, manual reconciliations, siloed spreadsheets.',
    mi: 'Manual analysis, spreadsheet modelling, slow planning cycles, fragmented insights.',
    ai: 'AI risk, unreliable inputs, lack of lineage/control, difficulty scaling AI safely.',
  },
  {
    category: 'Data Source Connectivity',
    bi: 'Connect CRM, ERP, finance, marketing, operations — all standard business systems.',
    mi: 'All BI sources plus planning tools, forecasting systems, and driver databases.',
    ai: 'All MI sources plus ML platforms, feature stores, and real-time event streams.',
  },
  {
    category: 'Cost Optimization',
    bi: 'See exactly where data budget goes. Optimize query costs and storage spend.',
    mi: 'Model cost drivers. Predict budget impact of scenarios and forecast resource needs.',
    ai: 'Monitor ML compute costs. Optimize inference spend. Track ROI per AI use case.',
  },
  {
    category: 'API Development',
    bi: 'Create data APIs without coding. Expose trusted metrics to any system instantly.',
    mi: 'Build forecast APIs. Expose scenario results. Share driver models programmatically.',
    ai: 'Deploy ML models as APIs. Manage versioning. Monitor model performance in production.',
  },
  {
    category: 'Data Foundation',
    bi: 'Standardised semantic layer with aligned definitions and metrics.',
    mi: 'Advanced modelling layer with drivers, assumptions, causality, and scenarios.',
    ai: 'ML-ready, fully-governed data foundation with strong lineage, access control, and quality.',
  },
  {
    category: 'Governance & Quality',
    bi: 'Automated cleansing, validation, reconciliations, and quality scoring.',
    mi: 'Variance logic, assumption management, driver libraries, scenario governance.',
    ai: 'End-to-end lineage, audit trails, data contracts, policy enforcement, access governance.',
  },
  {
    category: 'Self-Service Capabilities',
    bi: 'Business users create dashboards and reports. No coding required.',
    mi: 'Analysts run what-if scenarios. Explore driver impacts. Build forecasts independently.',
    ai: 'Data scientists deploy models safely. Experiment with guardrails. Monitor in production.',
  },
  {
    category: 'Team Collaboration',
    bi: 'Shared dashboards. Centralized metrics. Everyone sees the same numbers.',
    mi: 'Shared assumptions. Version-controlled scenarios. Collaborative planning workflows.',
    ai: 'Model registry. Experiment tracking. Team-wide visibility into AI deployments.',
  },
  {
    category: 'Key Features',
    bi: 'Single source of truth, refreshed KPIs, certified dashboards, governed metrics.',
    mi: 'Predictive re-forecasting, driver-based models, reusable insights, scenario simulation.',
    ai: 'AI guardrails, safe-AI controls, governed prompts, model monitoring, explainability tooling.',
  },
  {
    category: 'Who Uses It',
    bi: 'Execs, finance, ops, HR, BI authors, reporting teams.',
    mi: 'Finance planning, strategy/insights functions, FP&A, commercial teams.',
    ai: 'AI/ML teams, innovation labs, automation teams, risk & compliance.',
  },
  {
    category: 'What It Enables',
    bi: 'Accurate dashboards, rapid reporting cycles, trusted cross-org numbers.',
    mi: 'Faster planning cycles, deeper intelligence, more proactive decision making.',
    ai: 'Intelligent agents, anomaly detection, automated workflows, smarter operations.',
  },
  {
    category: 'Value Delivered',
    bi: { text: 'Trust', highlight: '— The entire organisation speaks the same language.', color: 'blue' },
    mi: { text: 'Insight', highlight: '— Know what drives your business and how to respond.', color: 'emerald' },
    ai: { text: 'Intelligence', highlight: '— Scale AI safely and confidently.', color: 'yellow' },
  },
  {
    category: 'Example Journey',
    bi: { text: 'Trust:', highlight: 'Every metric aligns. No more reporting chaos.', color: 'blue' },
    mi: { text: 'Sight:', highlight: "Understand what's happening and what will happen next.", color: 'emerald' },
    ai: { text: 'Scale:', highlight: 'Deliver safe, governed AI across the organisation.', color: 'yellow' },
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Compare DataWorks Tiers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how each tier addresses different needs across your organisation
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-4 gap-0">
              {/* Header */}
              <div className="bg-slate-100 p-6 border-b border-slate-200 font-semibold text-slate-900">
                Category
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-6 h-6 text-white" />
                  <h3 className="text-white font-bold text-lg">DataWorks: BI</h3>
                </div>
                <p className="text-blue-100 text-sm">Truth</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <h3 className="text-white font-bold text-lg">DataWorks: MI</h3>
                </div>
                <p className="text-emerald-100 text-sm">Insight</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6 text-white" />
                  <h3 className="text-white font-bold text-lg">DataWorks: AI</h3>
                </div>
                <p className="text-yellow-100 text-sm">Intelligence</p>
              </div>

              {/* Rows */}
              {comparisonData.map((row, index) => (
                <>
                  <div
                    key={`category-${index}`}
                    className={`p-6 border-b border-slate-200 font-semibold text-slate-900 ${
                      index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                    }`}
                  >
                    {row.category}
                  </div>
                  <div
                    key={`bi-${index}`}
                    className={`p-6 border-b border-slate-200 ${
                      index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'
                    }`}
                  >
                    {typeof row.bi === 'string' ? (
                      <p className="text-slate-700 leading-relaxed">{row.bi}</p>
                    ) : (
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-bold text-blue-600">{row.bi.text}</span>{' '}
                        {row.bi.highlight}
                      </p>
                    )}
                  </div>
                  <div
                    key={`mi-${index}`}
                    className={`p-6 border-b border-slate-200 ${
                      index % 2 === 0 ? 'bg-emerald-50/30' : 'bg-white'
                    }`}
                  >
                    {typeof row.mi === 'string' ? (
                      <p className="text-slate-700 leading-relaxed">{row.mi}</p>
                    ) : (
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-bold text-emerald-600">{row.mi.text}</span>{' '}
                        {row.mi.highlight}
                      </p>
                    )}
                  </div>
                  <div
                    key={`ai-${index}`}
                    className={`p-6 border-b border-slate-200 ${
                      index % 2 === 0 ? 'bg-yellow-50/30' : 'bg-white'
                    }`}
                  >
                    {typeof row.ai === 'string' ? (
                      <p className="text-slate-700 leading-relaxed">{row.ai}</p>
                    ) : (
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-bold text-yellow-600">{row.ai.text}</span>{' '}
                        {row.ai.highlight}
                      </p>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-8">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 p-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">{row.category}</h3>
              </div>
              <div className="p-6 space-y-6">
                {/* BI Card */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    <h4 className="font-bold text-slate-900">DataWorks: BI</h4>
                  </div>
                  {typeof row.bi === 'string' ? (
                    <p className="text-slate-700 text-sm leading-relaxed">{row.bi}</p>
                  ) : (
                    <p className="text-slate-700 text-sm leading-relaxed">
                      <span className="font-bold text-blue-600">{row.bi.text}</span> {row.bi.highlight}
                    </p>
                  )}
                </div>

                {/* MI Card */}
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-bold text-slate-900">DataWorks: MI</h4>
                  </div>
                  {typeof row.mi === 'string' ? (
                    <p className="text-slate-700 text-sm leading-relaxed">{row.mi}</p>
                  ) : (
                    <p className="text-slate-700 text-sm leading-relaxed">
                      <span className="font-bold text-emerald-600">{row.mi.text}</span> {row.mi.highlight}
                    </p>
                  )}
                </div>

                {/* AI Card */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-bold text-slate-900">DataWorks: AI</h4>
                  </div>
                  {typeof row.ai === 'string' ? (
                    <p className="text-slate-700 text-sm leading-relaxed">{row.ai}</p>
                  ) : (
                    <p className="text-slate-700 text-sm leading-relaxed">
                      <span className="font-bold text-yellow-600">{row.ai.text}</span> {row.ai.highlight}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

