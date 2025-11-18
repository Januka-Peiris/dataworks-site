import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: 'dark' | 'light';
}

export default function CTABanner({
  title,
  description,
  primaryButtonText = "Let's Talk",
  secondaryButtonText = 'Learn More',
  variant = 'dark',
}: CTABannerProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-24 ${
        isDark
          ? 'bg-slate-900 text-white'
          : 'bg-gradient-to-br from-slate-50 to-white text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className={`group px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 ${
              isDark
                ? 'bg-white text-slate-900 hover:bg-slate-100'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {primaryButtonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isDark
                ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
            }`}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}

