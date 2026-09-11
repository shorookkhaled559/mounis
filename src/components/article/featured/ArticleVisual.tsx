import Image from "next/image";

interface ArticleVisualProps {
  src: string;
  alt: string;
}

export function ArticleVisual({ src, alt }: ArticleVisualProps) {
  return (
<<<<<<< HEAD
    <div className="mx-0 my-5 aspect-[96/42] w-full max-w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] shadow-md">
=======
    <div className="featured-visual">
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      <Image
        src={src}
        alt={alt}
        width={960}
        height={420}
        priority
        sizes="(max-width: 900px) 100vw, 720px"
<<<<<<< HEAD
        className="block h-full w-full max-w-full object-cover"
=======
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
      />
    </div>
  );
}
