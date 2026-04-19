export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b14] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.14),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.10),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-8 md:px-10 md:py-12 xl:px-14">{children}</div>
    </main>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="animate-fade-up relative overflow-hidden rounded-[40px] bg-white/[0.03] px-8 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-12 md:py-14">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,transparent_70%,rgba(249,115,22,0.05))]" />
      <div className="relative space-y-5">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-300/80">{eyebrow}</p>
        <h1 className="max-w-5xl text-4xl font-semibold leading-[1] md:text-6xl">{title}</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{description}</p>
      </div>
    </div>
  );
}

export function MetricCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="group animate-fade-up-delay-1 relative overflow-hidden rounded-[32px] bg-white/[0.035] px-6 py-6 shadow-[0_14px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(249,115,22,0.12)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_55%,rgba(249,115,22,0.05))] opacity-80" />
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.16em] text-slate-400">{label}</p>
        <p className="mt-5 text-4xl font-semibold text-orange-400 md:text-5xl">{value}</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{helper}</p>
      </div>
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="animate-fade-up-delay-2 relative overflow-hidden rounded-[32px] bg-white/[0.035] px-7 py-7 shadow-[0_14px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:shadow-[0_20px_70px_rgba(59,130,246,0.10)]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.04),transparent_45%,rgba(59,130,246,0.05))]" />
      <div className="relative">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-5 text-sm leading-7 text-slate-300">{children}</div>
      </div>
    </div>
  );
}
