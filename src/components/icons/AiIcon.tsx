import aiIconSvg from './ai-icon.svg?raw';
import aiIconWhite from './ai-icon-white.png';

interface AiIconProps {
  className?: string;
  useWhite?: boolean;
}

export default function AiIcon({ className, useWhite = false }: AiIconProps) {
  // If white version is requested, use the PNG
  if (useWhite) {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={aiIconWhite} 
          alt="AI Icon"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    );
  }

  // Otherwise use the SVG with color replacement
  let svgWithClassName = aiIconSvg
    .replace(/width="[^"]*"/, '')
    .replace(/height="[^"]*"/, '')
    // Replace the specific AI icon color first
    .replace(/fill="#E7B008"/gi, 'fill="currentColor"')
    // Then replace any other hex colors, but not "none"
    .replace(/fill="#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})"/g, 'fill="currentColor"')
    .replace('<svg', `<svg class="${className || ''}"`);
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgWithClassName }}
    />
  );
}
