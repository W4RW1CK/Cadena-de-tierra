import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/compra", label: "Compra" },
  { href: "/redencion", label: "Redención" },
  { href: "/estado", label: "Estado" },
];

export function TopNav() {
  return (
    <nav className="sticky top-4 z-20 mx-auto w-full max-w-7xl px-6 md:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_40%,rgba(249,115,22,0.06))]" />
        <div className="relative flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
