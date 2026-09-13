import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <nav className="relative max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Left: logo + brand (desktop) / hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 -ml-2 text-slate-800"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo mark */}
          <div className="hidden md:flex w-9 h-9 rounded-lg bg-brand-gradient items-center justify-center text-white font-bold text-sm">
            DS
          </div>
        </div>

        {/* Center on desktop / brand-centered on mobile */}
        <div className="md:hidden flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <div className="w-7 h-7 rounded-md bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
            DS
          </div>
          <span className="font-bold text-slate-900">
            Dev<span className="text-brand-gradient">Stack</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 mr-auto ml-2">
          <span className="font-bold text-lg text-slate-900">
            Dev<span className="text-brand-gradient">Stack</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={i === 0 ? "text-pink-600" : "hover:text-slate-900 transition-color"}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden sm:block text-sm font-medium text-slate-700 p-3 hover:text-pink-600">
            Sign in
          </button>
          <button className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-brand-gradient hover:opacity-80 ition-opacity">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 py-4">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className={i === 0 ? "text-pink-600" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
