import Link from "next/link";

export default function NotFound() {
  return (
<<<<<<< HEAD
    <div className="mx-auto box-border w-full max-w-[min(calc(100%-1.5rem),42rem)] px-3 py-6 pb-12">
      <main id="main" className="grid gap-[0.85rem]">
        <h1 className="m-0 text-[1.7rem]">الصفحة غير موجودة</h1>
        <p className="my-0 mt-[0.65rem] max-w-full break-words text-[var(--muted)]">
          Page not found.
        </p>
=======
    <div className="page-wrap page-narrow">
      <main id="main" className="legal-page">
        <h1>الصفحة غير موجودة</h1>
        <p className="lede">Page not found.</p>
>>>>>>> a2b2fbeca1813caecb2179cd3949f7b9f57cf47c
        <p>
          <Link href="/ar">العودة إلى مؤنس</Link>
        </p>
      </main>
    </div>
  );
}
