import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      {/* Simplified background - no grid lines */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="mb-6 inline-block">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <span className="text-sm font-medium text-white">Assured Insights</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
          DataWorks
        </h1>

        {/* Tagline with highlighted words */}
        <div className="mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-5xl mx-auto">
            The Business <span className="font-bold text-emerald-400">Love</span> it,{' '}
            IT <span className="font-bold text-emerald-400">Trust</span> it,{' '}
            and Auditors <span className="font-bold text-emerald-400">Approve</span> it.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-xl md:text-2xl font-light text-blue-400">Truth.</span>
          <span className="text-xl md:text-2xl font-light text-emerald-400">Insight.</span>
          <span className="text-xl md:text-2xl font-light text-yellow-400">Intelligence.</span>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A complete, governed data platform for reporting, planning & AI.
        </p>

        <p className="text-lg text-slate-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          Fix reporting chaos. Unlock deeper intelligence. Scale AI safely.<br/>
          Transform organisational data into clean, consistent, and actionable intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/products"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link
            to="/products"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">BI Ready</h3>
            <p className="text-slate-400 text-sm">Trusted dashboards & reporting</p>
          </Link>

          <Link
            to="/products"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-emerald-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">MI Ready</h3>
            <p className="text-slate-400 text-sm">Driver-based intelligence</p>
          </Link>

          <Link
            to="/products"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">AI Ready</h3>
            <p className="text-slate-400 text-sm">Governed, safe AI foundation</p>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
