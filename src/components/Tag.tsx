interface TagProps {
  theme: 'trust' | 'insight' | 'intelligence' | 'security' | 'speed' | 'control';
  size?: 'sm' | 'md' | 'lg';
}

const tagStyles = {
  trust: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-300',
    label: 'Trust',
  },
  insight: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
    border: 'border-emerald-300',
    label: 'Insight',
  },
  intelligence: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-yellow-300',
    label: 'Intelligence',
  },
  security: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    border: 'border-purple-300',
    label: 'Security',
  },
  speed: {
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    border: 'border-orange-300',
    label: 'Speed',
  },
  control: {
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-300',
    label: 'Control',
  },
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export default function Tag({ theme, size = 'sm' }: TagProps) {
  const style = tagStyles[theme];
  const sizeStyle = sizeStyles[size];

  return (
    <span
      className={`inline-block font-semibold rounded-full border ${style.bg} ${style.text} ${style.border} ${sizeStyle}`}
    >
      {style.label}
    </span>
  );
}

// Export individual theme info for use elsewhere
export { tagStyles };
export type TagTheme = 'trust' | 'insight' | 'intelligence' | 'security' | 'speed' | 'control';

