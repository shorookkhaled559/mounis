interface HeroDateProps {
  gregorian: string;
  hijri: string;
  isoDate: string;
}

export function HeroDate({ gregorian, hijri, isoDate }: HeroDateProps) {
  return (
    <p className="hero-date mt-4 mb-0 flex flex-wrap items-center gap-[0.55rem] text-[0.92rem] text-[var(--muted)] rtl:flex-row-reverse">
      <time dateTime={isoDate}>{gregorian}</time>
      <span className="inline-block h-[3px] w-[3px] rounded-full bg-[var(--muted)]" />
      <span>{hijri}</span>
    </p>
  );
}
