export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_25%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 md:px-10 md:py-12">{children}</div>
    </main>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.22em] text-orange-300">{eyebrow}</p>
      <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
      <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}

export function MetricCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-orange-400">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{helper}</p>
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 text-sm leading-6 text-slate-300">{children}</div>
    </div>
  );
}
