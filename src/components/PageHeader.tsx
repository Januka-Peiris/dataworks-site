interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <div className="bg-background border-b border-border py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {subtitle && (
          <div className="mb-4">
            <span className="inline-block bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-6 py-2 text-sm font-medium">
              {subtitle}
            </span>
          </div>
        )}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

