import Image from "next/image";

interface ArticleVisualProps {
  src: string;
  alt: string;
}

export function ArticleVisual({ src, alt }: ArticleVisualProps) {
  return (
    <div className="mx-0 my-5 aspect-[96/42] w-full max-w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] shadow-md">
      <Image
        src={src}
        alt={alt}
        width={960}
        height={420}
        priority
        sizes="(max-width: 900px) 100vw, 720px"
        className="block h-full w-full max-w-full object-cover"
      />
    </div>
  );
}
