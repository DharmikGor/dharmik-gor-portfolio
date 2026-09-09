import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  supporting?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, supporting, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-display-md font-display font-semibold text-ink">{title}</h2>
      </Reveal>
      {supporting && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">{supporting}</p>
        </Reveal>
      )}
    </div>
  );
}
