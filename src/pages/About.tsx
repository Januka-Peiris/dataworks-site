import { Users, Target, Heart, Zap, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';

export default function About() {
  return (
    <>
      <PageHeader
        subtitle="About DataWorks"
        title="We're on a Mission to Make Data Simple"
        description="We believe that data should be a source of truth, not a source of frustration. That's why we built DataWorks, a platform that helps you get the most out of your data."
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

      {/* Data Engineering as a Service */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Looking for a More Hands-On Approach?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In addition to our DataWorks platform, we also offer Data Engineering as a Service to help you with your custom data initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">Data Engineering as a Service</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of data experts can help you with everything from data strategy to pipeline development and ongoing support.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Data Strategy & Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Data Pipeline Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Custom Data Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Ongoing Support & Maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">The DataWorks Platform</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our all-in-one data platform is the fastest way to get a single source of truth for your business.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>All-in-One Data Platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Fully Managed & Supported</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Simple, Transparent Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>14-Day Free Trial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        description="Start your 14-day free trial of DataWorks today. No credit card required."
        primaryButtonText="Start Your Free Trial"
        secondaryButtonText="Contact Sales"
        variant="light"
      />
    </>
  );
}

