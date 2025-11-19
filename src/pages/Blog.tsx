import PageHeader from '../components/PageHeader';
import BlogPostCard from '../components/BlogPostCard';

const blogPosts = [
  {
    id: 'data-governance-guide',
    title: 'The Complete Guide to Data Governance in 2024',
    excerpt: 'Learn how to implement effective data governance that balances control with agility.',
    category: 'Data Governance',
    author: 'Assured Insights Team',
    date: 'Coming Soon',
  },
  {
    id: 'bi-to-ai-journey',
    title: 'From BI to AI: A Practical Roadmap',
    excerpt: 'Discover the step-by-step journey from basic reporting to AI-powered intelligence.',
    category: 'Strategy',
    author: 'Assured Insights Team',
    date: 'Coming Soon',
  },
  {
    id: 'data-quality-automation',
    title: 'Automating Data Quality: Best Practices',
    excerpt: 'How to build automated data quality checks that scale with your organisation.',
    category: 'Best Practices',
    author: 'Assured Insights Team',
    date: 'Coming Soon',
  },
  {
    id: 'modern-data-stack',
    title: 'Building a Modern Data Stack in 2024',
    excerpt: 'The essential components of a modern, scalable data infrastructure.',
    category: 'Technology',
    author: 'Assured Insights Team',
    date: 'Coming Soon',
  },
  {
    id: 'ai-governance',
    title: 'AI Governance: Balancing Innovation and Control',
    excerpt: 'How to scale AI safely while maintaining compliance and trust.',
    category: 'AI & ML',
    author: 'Assured Insights Team',
    date: 'Coming Soon',
  },
  {
    id: 'data-team-structure',
    title: 'Structuring Your Data Team for Success',
    excerpt: 'Organisational models for high-performing data teams.',
    category: 'Leadership',
    author: 'Assured Insights Team',
    date: 'Coming Soon',
  },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        subtitle="Blog"
        title="Insights & Best Practices"
        description="Expert perspectives on data governance, analytics, AI, and more."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-12 md:p-16">
              <span className="inline-block bg-yellow-500 text-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Featured
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to the Assured Insights Blog
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
                We're building a library of articles, guides, and insights to help you get the most
                from your data. Check back soon for our first posts.
              </p>
              <button className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Subscribe for Updates
              </button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center bg-secondary/30 rounded-2xl p-12 bg-background border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">More Content Coming Soon</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We're working on comprehensive guides, case studies, and insights. Subscribe to our
              newsletter to be notified when new content is published.
            </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Subscribe to Newsletter
                </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Data Governance', 'Strategy', 'Best Practices', 'Technology', 'AI & ML', 'Leadership'].map(
              (category) => (
                <button
                  key={category}
                  className="bg-background bg-background border border-border rounded-lg px-4 py-3 text-center font-semibold text-foreground hover:border-yellow-500 hover:text-yellow-600 transition-colors"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

