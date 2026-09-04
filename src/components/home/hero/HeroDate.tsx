interface HeroDateProps {
  gregorian: string;
  hijri: string;
  isoDate: string;
}

export function HeroDate({ gregorian, hijri, isoDate }: HeroDateProps) {
  return (
    <p className="hero-date">
      <time dateTime={isoDate}>{gregorian}</time>
      <span className="meta-dot" />
      <span>{hijri}</span>
    </p>
  );
}
