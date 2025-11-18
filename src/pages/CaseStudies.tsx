import PageHeader from '../components/PageHeader';
import CaseStudyCard from '../components/CaseStudyCard';
import CTABanner from '../components/CTABanner';

const caseStudies = [
  {
    id: 'redarc',
    company: 'RedArc',
    industry: 'Healthcare',
    challenge: 'Fragmented data across multiple systems causing reporting delays and inconsistent metrics.',
    results: [
      { metric: 'Faster Reporting', value: '75%' },
      { metric: 'Data Accuracy', value: '99%' },
    ],
  },
  {
    id: 'frazer-nash',
    company: 'Frazer-Nash',
    industry: 'Engineering',
    challenge: 'Complex project data requiring advanced analytics and predictive modelling capabilities.',
    results: [
      { metric: 'Cost Reduction', value: '40%' },
      { metric: 'Project Visibility', value: '100%' },
    ],
  },
  {
    id: 'ryalto',
    company: 'Ryalto',
    industry: 'Healthcare Tech',
    challenge: 'Scaling data infrastructure to handle billions of data points for user behaviour analysis.',
    results: [
      { metric: 'Data Points', value: '4B' },
      { metric: 'Query Speed', value: '10x' },
    ],
  },
  {
    id: 'vernon',
    company: 'Vernon',
    industry: 'Financial Services',
    challenge: 'Need for audit-ready reporting with complete lineage and compliance controls.',
    results: [
      { metric: 'Audit Time', value: '-60%' },
      { metric: 'Compliance', value: '100%' },
    ],
  },
  {
    id: 'mojo-cx',
    company: 'MOJO-CX',
    industry: 'Customer Experience',
    challenge: 'Siloed customer data preventing holistic view of customer journey and sentiment.',
    results: [
      { metric: 'Zero Touch Orders', value: '98.1%' },
      { metric: 'Lower Costs', value: '65%' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        subtitle="Success Stories"
        title="See DataWorks in Action"
        description="Discover how organisations across industries are transforming their data with DataWorks."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
            Our clients consistently achieve measurable improvements in speed, trust, and value
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-2">75%</div>
              <div className="text-slate-600">Faster Time to Value</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-2">99%</div>
              <div className="text-slate-600">Data Accuracy</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-2">65%</div>
              <div className="text-slate-600">Lower Costs</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Write Your Success Story?"
        description="Join leading organisations that trust DataWorks to transform their data capabilities."
        primaryButtonText="Get Started"
        secondaryButtonText="Talk to Sales"
      />
    </>
  );
}

