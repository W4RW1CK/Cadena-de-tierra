export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b14] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.2),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.18),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.12),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 md:px-10 md:py-12">{children}</div>
    </main>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,transparent_70%,rgba(249,115,22,0.08))]" />
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-orange-300">{eyebrow}</p>
        <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{description}</p>
      </div>
    </div>
  );
}

export function MetricCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-400/20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%,rgba(249,115,22,0.08))] opacity-80" />
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.16em] text-slate-400">{label}</p>
        <p className="mt-4 text-4xl font-semibold text-orange-400 md:text-5xl">{value}</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{helper}</p>
      </div>
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),transparent_45%,rgba(59,130,246,0.06))]" />
      <div className="relative">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-4 text-sm leading-6 text-slate-300">{children}</div>
      </div>
    </div>
  );
}
