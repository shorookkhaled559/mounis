import Image from "next/image";

interface ArticleVisualProps {
  src: string;
  alt: string;
}

export function ArticleVisual({ src, alt }: ArticleVisualProps) {
  return (
    <div className="my-5 mx-0 bg-[var(--surface)] border border-[var(--line)] rounded-lg overflow-hidden aspect-[96/42] shadow-md w-full max-w-full">
      <Image
        src={src}
        alt={alt}
        width={960}
        height={420}
        priority
        sizes="(max-width: 900px) 100vw, 720px"
        className="w-full h-full object-cover block max-w-full"
      />
    </div>
  );
}
