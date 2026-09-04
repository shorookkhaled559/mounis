import Image from "next/image";

interface ArticleVisualProps {
  src: string;
  alt: string;
}

export function ArticleVisual({ src, alt }: ArticleVisualProps) {
  return (
    <div className="featured-visual">
      <Image
        src={src}
        alt={alt}
        width={960}
        height={420}
        priority
        sizes="(max-width: 900px) 100vw, 720px"
      />
    </div>
  );
}
