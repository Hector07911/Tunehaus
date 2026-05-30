import Image from "next/image";
import Link from "next/link";
import PlatformSelector from "./components/PlatformSelector";


export default function Home() {
  return (
    <>

      {/* Hero section: full-screen video background. Add public/hero.mp4 to use it. */}
      <section className="hero-fullscreen hero-offset">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-sub">// MAZDA RX7 • STAGE 3</p>
            <h2 className="hero-title">
              WIDE<br />
              <span style={{ color: 'var(--brand-orange)' }}>BODY</span><br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.85)', color: 'transparent' }}>BUILD</span>
            </h2>
            <p className="nav-li" style={{ color: 'var(--brand-gris)' }}>
              ROTARY // STAGE 2 // 450HP
            </p>
          </div>
        </div>
      </section>
      <PlatformSelector />
      <section className="bg-black py-24 flex flex-col items-center justify-center text-center px-4">
        <p className="nav-li text-[var(--brand-orange)] text-sm tracking-widest mb-6 uppercase">
          // NO ES UN CATÁLOGO. ES UNA OBSESIÓN.
        </p>
        <h2 className="hero-title text-center text-white mb-8" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: '0.9' }}>
          DONDE LOS<br />
          <span style={{ color: 'var(--brand-orange)' }}>BUILDS</span><br />
          TOMAN VIDA
        </h2>
        
        <div className="w-16 h-[2px] bg-[var(--brand-orange)] mb-10"></div>
        
        <p className="text-[var(--brand-gris)] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
          Cada modificación tiene un propósito.<br />
          Aquí no vendemos autos &mdash; mostramos lo que pasa<br />
          cuando la ingeniería se convierte en <span className="text-white font-normal">arte.</span>
        </p>
        
        <Link href="/builds" className="border border-[var(--brand-orange)] text-[var(--brand-orange)] bg-transparent py-4 px-8 tracking-widest text-sm transition-all duration-300 hover:bg-[var(--brand-orange)] hover:text-black uppercase inline-flex items-center gap-4 cursor-pointer">
          VER TODOS LOS BUILDS <span className="text-lg">&rarr;</span>
        </Link>
      </section>

      {/* Final Image Section */}
      <section className="w-full bg-black flex justify-center items-center overflow-hidden">
        <Image 
          src="/imgfinal.jpg" 
          alt="BMW M" 
          width={1920} 
          height={1080} 
          className="w-full h-auto object-cover max-w-[1920px]" 
          quality={100}
        />
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-16 pb-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Social Icons Left */}
          <div className="flex gap-6 mb-8 md:mb-0">
             <a href="#" className="text-white hover:text-gray-400 transition-colors">
               {/* Facebook Icon */}
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                 <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.54-4.5-10.02-10-10.02z" />
               </svg>
             </a>
             <a href="#" className="text-white hover:text-gray-400 transition-colors">
               {/* Instagram Icon */}
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                 <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.27.06-2.14.26-2.9.56-.78.3-1.44.73-2.1 1.39-.66.66-1.09 1.32-1.39 2.1-.3.76-.5 1.63-.56 2.9C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.14.56 2.9.3.78.73 1.44 1.39 2.1.66.66 1.32 1.09 2.1 1.39.76.3 1.63.5 2.9.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.56.78-.3 1.44-.73 2.1-1.39.66-.66 1.09-1.32 1.39-2.1.3-.76.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9-.3-.78-.73-1.44-1.39-2.1-.66-.66-1.32-1.09-2.1-1.39-.76-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm3.96-9.14a1.44 1.44 0 112.88 0 1.44 1.44 0 01-2.88 0z" />
               </svg>
             </a>
          </div>
          
          {/* YouTube Right */}
          <div>
            <a href="#" className="text-white hover:text-gray-400 flex items-center gap-1 transition-colors">
              {/* YouTube Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.99 15V9l5.52 3-5.52 3z" />
              </svg>
              <span className="font-bold text-2xl tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>YouTube</span>
            </a>
          </div>
        </div>
        <div className="mt-16 mb-4 text-center text-[10px] md:text-[11px] text-[#888] tracking-[0.25em] uppercase font-medium">
          TODOS LOS DERECHOS RESERVADOS
        </div>
      </footer>
    </>
  );
}
