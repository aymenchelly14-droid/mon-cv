import { useState } from "react";
import { Menu, X } from "lucide-react";
import GithubIcon from "./GithubIcon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Career" },
    { href: "#ai-data", label: "AI / Data" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0d0d12]/60 backdrop-blur-xl z-50 border-b border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-white tracking-tight">
          AYMEN<span className="text-[#a855f7]">.</span>
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-[#a855f7] transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="https://github.com/aymenchelly14-droid" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#a855f7] transition-colors">
            <GithubIcon size={20} />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile : bouton thème + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-[#0d0d12]/95 backdrop-blur-xl border-b border-[#27272a] absolute w-full">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-400 hover:text-[#a855f7]">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}