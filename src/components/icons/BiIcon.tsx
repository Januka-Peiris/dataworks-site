import biIconSvg from './bi-icon.svg?raw';

interface BiIconProps {
  className?: string;
}

export default function BiIcon({ className }: BiIconProps) {
  // Remove fixed width/height, add className, and replace fill color with currentColor
  let svgWithClassName = biIconSvg
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