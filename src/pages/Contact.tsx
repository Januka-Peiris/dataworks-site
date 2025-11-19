import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <PageHeader
        subtitle="Contact Us"
        title="Let's Talk About Your Data"
        description="Get in touch to learn how DataWorks can transform your organisation's data capabilities."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-secondary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-secondary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-secondary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-secondary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                    placeholder="+44 20 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-border bg-secondary rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your data needs..."
                  />
                </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-12 leading-relaxed">
                We're here to answer any questions you have about DataWorks and how it can help your
                organisation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <a
                      href="mailto:hello@assuredinsights.com"
                      className="text-emerald-500 hover:text-emerald-400"
                    >
                      hello@assuredinsights.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+44 (0) 20 1234 5678</p>
                    <p className="text-sm text-muted-foreground mt-1">Monday - Friday, 9am - 6pm GMT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      London, United Kingdom
                      <br />
                      <span className="text-sm text-muted-foreground">Office details available upon request</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 pt-12 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/products" className="block text-primary hover:text-primary/80">
                    Explore Products →
                  </a>
                  <a href="/pricing" className="block text-primary hover:text-primary/80">
                    View Pricing →
                  </a>
                  <a href="/case-studies" className="block text-primary hover:text-primary/80">
                    Read Case Studies →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-2">
                How quickly can we get started?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We can typically begin implementation within 2 weeks of initial contact. Our team works
                to deliver value within the first 100 days.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Do you offer demos?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! We offer personalized demos tailored to your use case. Contact us to schedule one.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-2">
                What industries do you work with?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DataWorks serves organisations across healthcare, finance, engineering, technology, and
                more. Our platform is industry-agnostic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

