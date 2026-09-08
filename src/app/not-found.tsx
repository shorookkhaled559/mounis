import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-[min(calc(100%-1.5rem),42rem)] mx-auto px-3 py-6 pb-12 box-border">
      <main id="main" className="grid gap-[0.85rem]">
        <h1 className="m-0 text-[1.7rem]">الصفحة غير موجودة</h1>
        <p className="text-[var(--muted)] max-w-full my-0 mt-[0.65rem] break-words">Page not found.</p>
        <p>
          <Link href="/ar">العودة إلى مؤنس</Link>
        </p>
      </main>
    </div>
  );
}
