import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
  category?: string;
  image?: string;
}

export default function BlogPostCard({
  id,
  title,
  excerpt,
  author = 'Assured Insights',
  date = 'Coming Soon',
  category,
}: BlogPostCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className="group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
    >
      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-slate-400 text-sm">Image Placeholder</div>
      </div>

      <div className="p-6">
        {category && (
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {category}
          </span>
        )}

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-4">{excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
        </div>

        <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
          Read More
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}

