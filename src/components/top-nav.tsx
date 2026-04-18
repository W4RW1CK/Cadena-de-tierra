import Image from "next/image";
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
    <nav className="sticky top-4 z-20 mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-14">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950/40 px-3 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_40%,rgba(249,115,22,0.04))]" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-white/5">
            <div className="relative h-10 w-16 overflow-hidden rounded-xl bg-white/5">
              <Image src="/logo.webp" alt="Cadena de Tierra" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Cadena de Tierra</p>
              <p className="text-xs text-slate-400">Compra y redención de caliche</p>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
