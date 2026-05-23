import Link from "next/link";

export default function Navbar() {
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
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li><Link href="/builds" className="nav-li">// BUILDS</Link></li>
          <li className="nav-li">// PLATAFORMAS</li>
          <li className="nav-li">// STAGES</li>
          <li className="nav-li">// COMUNIDADES</li>
        </ul>
      </nav>
    </header>
  );
}
