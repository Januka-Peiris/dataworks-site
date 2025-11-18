import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  id: string;
  company: string;
  industry?: string;
  challenge: string;
  results: {
    metric: string;
    value: string;
  }[];
  image?: string;
}

export default function CaseStudyCard({
  id,
  company,
  industry,
  challenge,
  results,
}: CaseStudyCardProps) {
  return (
    <Link
      to={`/case-studies/${id}`}
      className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
    >
      <div className="mb-6">
        {industry && (
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {industry}
          </span>
        )}
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{company}</h3>
        <p className="text-slate-600 leading-relaxed">{challenge}</p>
      </div>

      <div className="border-t border-slate-200 pt-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {results.map((result, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-emerald-600 mb-1">{result.value}</div>
              <div className="text-sm text-slate-600">{result.metric}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
        Read Case Study
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  );
}

