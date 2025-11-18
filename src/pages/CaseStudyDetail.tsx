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
      {/* Hero Section - Dark background like Assured */}
      <div className="relative bg-slate-900 text-white py-32 pt-40 overflow-hidden">
        {/* Decorative circles background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>

          {/* Case Study Badge */}
          <div className="mb-8">
            <span className="inline-block bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg px-6 py-3 text-sm font-medium uppercase tracking-wide">
              Case Study
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
            {study.tagline}
          </h1>

          {/* Problem Statement */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              {study.challenge.split('.')[0]}.
            </p>
          </div>
        </div>
      </div>

      {/* About Client Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About {study.company}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">{study.overview}</p>
              <div className="inline-block bg-slate-100 rounded-full px-6 py-2 text-sm font-medium text-slate-700">
                {study.industry}
              </div>
            </div>
            {/* Placeholder for client logo - you can add actual logos later */}
            <div className="w-64 h-32 bg-slate-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-400">{study.company}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{study.challenge}</p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We delivered a comprehensive DataWorks solution tailored to {study.company}'s unique needs:
          </p>
          <ul className="space-y-4">
            {study.solution.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mt-1">
                  {index + 1}
                </div>
                <span className="text-lg text-slate-600 leading-relaxed pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">The Results</h2>
          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            {study.company} achieved measurable, transformative results
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.results.map((result: any, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                  <div className="text-5xl font-bold text-yellow-500 mb-3">{result.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{result.metric}</div>
                  <div className="text-sm text-slate-400">{result.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {study.testimonial && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-12 shadow-lg border-l-4 border-yellow-500">
              <div className="flex flex-col gap-6">
                <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl text-slate-700 leading-relaxed italic">
                  {study.testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 font-bold">
                      {study.testimonial.author.split(',')[0].charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">{study.testimonial.author}</p>
                    <p className="text-sm text-slate-500">{study.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Ready for Similar Results?"
        description="Let's discuss how DataWorks can transform your organisation's data capabilities."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Us"
      />
    </>
  );
}

