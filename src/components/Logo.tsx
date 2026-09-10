interface LogoProps {
  className?: string;
  bg?: string;
  fg?: string;
}

/** Brand mark: rounded-square "DG" badge with an accent corner dot, matching the site favicon. */
export default function Logo({ className = 'h-9 w-9', bg = '#14130F', fg = '#F7F5F1' }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Dharmik Gor logo">
      <rect width="64" height="64" rx="14" fill={bg} />
      <circle cx="47.5" cy="14.5" r="3.4" fill="#C87D42" />
      <text
        x="32"
        y="41"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill={fg}
        textAnchor="middle"
      >
        DG
      </text>
    </svg>
  );
}
