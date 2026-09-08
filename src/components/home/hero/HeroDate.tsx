interface HeroDateProps {
  gregorian: string;
  hijri: string;
  isoDate: string;
}

export function HeroDate({ gregorian, hijri, isoDate }: HeroDateProps) {
  return (
    <p className="flex flex-wrap items-center gap-[0.55rem] mt-4 mb-0 text-[var(--muted)] text-[0.92rem]">
      <time dateTime={isoDate}>{gregorian}</time>
      <span className="w-[3px] h-[3px] rounded-full bg-[var(--muted)] inline-block" />
      <span>{hijri}</span>
    </p>
  );
}
