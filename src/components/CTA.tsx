import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Ready to get started?</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Modernise Your Data Today
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your organisation with clean, consistent, and actionable intelligence. Start with BI, evolve to MI, scale to AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Sales
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10x</div>
            <div className="text-slate-400">Faster Reporting</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-slate-400">Data Trust</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
