export function JsonLd({ data }: { data: object }) {
  return (
<<<<<<< HEAD
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
=======
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
  );
}
