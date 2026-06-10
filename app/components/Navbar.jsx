import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-black text-white site-header">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <h1 className="title-35 font-bold flex items-baseline gap-3">
              <span className="brand-tune">TUNE</span>
              <span className="brand-haus">HAUS</span>
            </h1>
          </div>
        </Link>
        
        {/* Hamburger button for mobile */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link href="/builds" className="nav-li">// BUILDS</Link></li>
          <li className="nav-li">// PLATAFORMAS</li>
          <li className="nav-li">// STAGES</li>
          <li className="nav-li">// COMUNIDADES</li>
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="absolute top-full left-0 right-0 bg-black md:hidden flex flex-col items-center gap-4 py-6 px-6 text-sm font-medium border-t border-gray-800">
            <li><Link href="/builds" className="nav-li" onClick={() => setIsMenuOpen(false)}>// BUILDS</Link></li>
            <li className="nav-li">// PLATAFORMAS</li>
            <li className="nav-li">// STAGES</li>
            <li className="nav-li">// COMUNIDADES</li>
          </ul>
        )}
      </nav>
    </header>
  );
}
