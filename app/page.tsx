import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-white mb-8">DenverHacks</h1>
        <p className="text-neutral-400 mb-8">
          A Next.js project with TypeScript, Tailwind CSS, and shadcn/ui
        </p>
        <Link
          href="/demo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          View Kinetic Team Component
        </Link>
      </div>
    </main>
  );
}
