import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import CTABanner from '../components/CTABanner';

const caseStudyData: Record<string, any> = {
  redarc: {
    company: 'RedArc',
    industry: 'Healthcare',
    tagline: 'Transforming healthcare data into trusted insights',
    overview:
      'RedArc needed to consolidate fragmented data across multiple systems to improve reporting speed and ensure consistent metrics across the organisation.',
    challenge:
      'Data was siloed across legacy systems, causing significant delays in reporting and inconsistent KPIs across departments. Manual reconciliation was time-consuming and error-prone.',
    solution: [
      'Implemented DataWorks: BI to create a single source of truth',
      'Automated data quality checks and reconciliations',
      'Standardised KPI definitions across all departments',
      'Built trusted dashboards with real-time data',
    ],
    results: [
      { metric: 'Faster Reporting', value: '75%', description: 'Reduction in time to produce reports' },
      { metric: 'Data Accuracy', value: '99%', description: 'Improvement in data quality scores' },
      { metric: 'User Adoption', value: '95%', description: 'Of staff using new dashboards' },
    ],
    testimonial: {
      quote:
        'DataWorks transformed how we use data. What used to take weeks now takes hours, and everyone trusts the numbers.',
      author: 'Data Director, RedArc',
    },
  },
  'frazer-nash': {
    company: 'Frazer-Nash',
    industry: 'Engineering',
    tagline: 'Engineering precision meets data intelligence',
    overview:
      'Frazer-Nash required advanced analytics and predictive modelling to manage complex engineering projects.',
    challenge:
      'Complex project data required sophisticated analysis. Existing tools couldn\'t handle the scale or provide the predictive insights needed.',
    solution: [
      'Deployed DataWorks: MI for driver-based modelling',
      'Built scenario simulation capabilities',
      'Implemented predictive re-forecasting',
      'Created reusable intelligence templates',
    ],
    results: [
      { metric: 'Cost Reduction', value: '40%', description: 'In project overruns' },
      { metric: 'Project Visibility', value: '100%', description: 'Real-time project status' },
      { metric: 'Planning Speed', value: '3x', description: 'Faster planning cycles' },
    ],
    testimonial: {
      quote:
        'The predictive capabilities have given us unprecedented visibility into project outcomes.',
      author: 'Operations Director, Frazer-Nash',
    },
  },
  ryalto: {
    company: 'Ryalto',
    industry: 'Healthcare Tech',
    tagline: 'Scaling data infrastructure for billions of insights',
    overview:
      'Ryalto needed to scale their data infrastructure to handle billions of data points for user behaviour analysis.',
    challenge:
      'Data volume surged from 2 billion to 4 billion points. Existing infrastructure couldn\'t scale, and query performance was suffering.',
    solution: [
      'Implemented DataWorks: BI + MI for scale',
      'Built ML-ready data foundation',
      'Optimised query performance',
      'Enabled real-time analytics',
    ],
    results: [
      { metric: 'Data Points', value: '4B', description: 'Managed daily' },
      { metric: 'Query Speed', value: '10x', description: 'Faster than before' },
      { metric: 'Infrastructure Costs', value: '-45%', description: 'Through optimisation' },
    ],
    testimonial: {
      quote:
        'Assured\'s expertise in merging diverse data sources put us ahead of the competition. They turn complex data into valuable insights.',
      author: 'CTO, Ryalto',
    },
  },
  vernon: {
    company: 'Vernon',
    industry: 'Financial Services',
    tagline: 'Audit-ready reporting with complete compliance',
    overview:
      'Vernon required audit-ready reporting with complete data lineage and compliance controls for regulatory requirements.',
    challenge:
      'Financial regulations demanded complete audit trails and data lineage. Manual processes were slow and risky.',
    solution: [
      'Deployed DataWorks: BI with full governance',
      'Implemented end-to-end lineage tracking',
      'Built audit-ready reporting',
      'Automated compliance checks',
    ],
    results: [
      { metric: 'Audit Time', value: '-60%', description: 'Reduction in audit preparation' },
      { metric: 'Compliance', value: '100%', description: 'Pass rate on audits' },
      { metric: 'Risk Reduction', value: 'Significant', description: 'Minimised compliance risk' },
    ],
    testimonial: {
      quote: 'The audit trails and lineage have made regulatory compliance straightforward.',
      author: 'Compliance Officer, Vernon',
    },
  },
  'mojo-cx': {
    company: 'MOJO-CX',
    industry: 'Customer Experience',
    tagline: 'Unifying customer data for better experiences',
    overview:
      'MOJO-CX needed to unify siloed customer data to gain a holistic view of customer journeys and sentiment.',
    challenge:
      'Customer data was fragmented across multiple touchpoints, preventing a unified view of the customer journey.',
    solution: [
      'Implemented DataWorks: BI for data consolidation',
      'Built unified customer view',
      'Automated customer insights',
      'Enabled real-time sentiment analysis',
    ],
    results: [
      { metric: 'Zero Touch Orders', value: '98.1%', description: 'Automated processing' },
      { metric: 'Lower Costs', value: '65%', description: 'Cost of delivery' },
      { metric: 'Customer Satisfaction', value: '+35%', description: 'Improvement in CSAT' },
    ],
    testimonial: {
      quote:
        'DataWorks gave us the complete customer view we needed to deliver exceptional experiences.',
      author: 'Head of CX, MOJO-CX',
    },
  },
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = id ? caseStudyData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-emerald-600 hover:text-emerald-700">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>

          <div className="mb-4">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium">
              {study.industry}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">{study.company}</h1>
          <p className="text-2xl text-slate-300 max-w-3xl">{study.tagline}</p>
        </div>
      </div>

      {/* Results Banner */}
      <section className="py-16 bg-emerald-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {study.results.map((result: any, index: number) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{result.value}</div>
                <div className="text-emerald-100 font-semibold mb-1">{result.metric}</div>
                <div className="text-sm text-emerald-200">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{study.overview}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{study.challenge}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
            <ul className="space-y-4">
              {study.solution.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {study.testimonial && (
            <div className="bg-slate-50 rounded-2xl p-12 border-l-4 border-emerald-500">
              <p className="text-2xl text-slate-700 leading-relaxed mb-6 italic">
                "{study.testimonial.quote}"
              </p>
              <p className="text-slate-600 font-semibold">— {study.testimonial.author}</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Ready for Similar Results?"
        description="Let's discuss how DataWorks can transform your organisation's data capabilities."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Us"
      />
    </>
  );
}

