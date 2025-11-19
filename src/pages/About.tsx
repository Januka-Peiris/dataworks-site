import { Users, Target, Heart, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';

export default function About() {
  return (
    <>
      <PageHeader
        subtitle="About Us"
        title="Assured Insights"
        description="Transforming how organisations work with data through innovation, expertise, and partnership."
      />

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Assured Insights, we believe data should be an enabler, not an obstacle. Too many
              organisations struggle with fragmented systems, inconsistent metrics, and a lack of trust
              in their data.
            </p>
            <p>
              That's why we created <strong className="text-foreground">DataWorks</strong> — a complete, governed data platform
              that brings together truth, insight, and intelligence in one unified solution.
            </p>
            <p>
              Our mission is simple: help organisations turn their data into a strategic asset that
              drives confident decision-making, faster planning, and safe AI adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Outcome-First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We focus on delivering business value, not just technical solutions.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work alongside your team, sharing knowledge and building capabilities.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Everything we build is governed, traceable, and audit-ready from day one.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Speed</h3>
              <p className="text-muted-foreground leading-relaxed">
                We deliver results in 100 days, not 6 months. Time to value matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering as a Service - 20% focus */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-secondary/50 to-background border-2 border-border rounded-3xl p-12 md:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="inline-block bg-emerald-500/20 text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Additional Services
                </span>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Data Engineering as a Service
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Need a dedicated data engineering team? We offer data engineering-as-a-service to
                  complement DataWorks or support custom data initiatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">What We Offer</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Highly specialised data engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Tech stack implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Data pipeline development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Ongoing support & maintenance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Benefits</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Cost of one FTE for a full team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Results in first 100 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>No hiring challenges or delays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Flexible engagement models</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                  Learn More About Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Scaffold */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data experts, engineers, and strategists dedicated to your success
            </p>
          </div>

          <div className="bg-background rounded-2xl p-12 text-center border-2 border-border">
            <p className="text-muted-foreground text-lg">
              Team profiles coming soon. Meet the experts behind DataWorks.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Work Together"
        description="Whether you need DataWorks or data engineering services, we're here to help transform your data capabilities."
        primaryButtonText="Contact Us"
        secondaryButtonText="Book a Call"
        variant="light"
      />
    </>
  );
}

