import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap page-narrow">
      <main id="main" className="legal-page">
        <h1>الصفحة غير موجودة</h1>
        <p className="lede">Page not found.</p>
        <p>
          <Link href="/ar">العودة إلى مؤنس</Link>
        </p>
      </main>
    </div>
  );
}
