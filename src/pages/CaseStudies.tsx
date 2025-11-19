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
        subtitle="Client Success Stories"
        title="Real Results from Real Organisations"
        description="See how organisations across industries are transforming their data with DataWorks. Each story represents measurable business impact and lasting change."
      />

      {/* Main Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Why These Stories Matter */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Why These Stories Matter
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Every organisation faces unique data challenges. These case studies show how DataWorks 
            adapts to deliver exactly what each business needs—whether it's speed, trust, or insight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Built for Trust</h3>
              <p className="text-muted-foreground">
                Every solution includes governance, lineage, and audit trails—so your data is always defensible.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Rapid Value</h3>
              <p className="text-muted-foreground">
                Our clients see results in weeks, not months—with solutions that scale as they grow.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Measurable Impact</h3>
              <p className="text-muted-foreground">
                From cost savings to faster decisions—every deployment delivers quantifiable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
            Our clients consistently achieve measurable improvements in speed, trust, and value
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-yellow-600 mb-2">75%</div>
              <div className="text-muted-foreground">Faster Time to Value</div>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-yellow-600 mb-2">99%</div>
              <div className="text-muted-foreground">Data Accuracy</div>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-yellow-600 mb-2">65%</div>
              <div className="text-muted-foreground">Lower Costs</div>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
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

