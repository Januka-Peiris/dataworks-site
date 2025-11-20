import miIconSvg from './mi-icon.svg?raw';

interface MiIconProps {
  className?: string;
}

export default function MiIcon({ className }: MiIconProps) {
  // Remove fixed width/height, add className, and replace fill color with currentColor
  let svgWithClassName = miIconSvg
    .replace(/width="[^"]*"/, '')
    .replace(/height="[^"]*"/, '')
    .replace(/fill="#[^"]*"/g, 'fill="currentColor"')
    .replace('<svg', `<svg class="${className || ''}"`);
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgWithClassName }}
    />
  );
}
