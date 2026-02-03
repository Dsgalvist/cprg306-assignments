import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <div className="space-x-2">
        <Link href="/week-2">Go to Week 2 →</Link>
        <Link href="/week-3">Go to Week 3 →</Link>
        <Link href="/week-4">Go to Week 4 →</Link>
      </div>
    </main>
  );
}