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
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-2 shadow-xl backdrop-blur-xl">
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
    </nav>
  );
}
