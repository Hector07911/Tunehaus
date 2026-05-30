import Image from "next/image";
import Link from "next/link";

export default function BmwM4Specs() {
  const images = [
    "/builds/bmw-m4/1.png",
    "/builds/bmw-m4/2.png",
    "/builds/bmw-m4/3.jpg",
    "/builds/bmw-m4/4.jpg"
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white font-sans relative overflow-x-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-[#222] to-transparent opacity-20 pointer-events-none z-0"></div>

      {/* 1. HERO SECTION */}
      <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-end max-w-7xl mx-auto">
        
        {/* Botón de volver - debajo del navbar (64px + 16px margen) */}
        <div className="absolute top-[80px] left-8 md:left-12 z-20">
          <Link href="/builds" className="inline-flex items-center text-[#888] font-bold uppercase tracking-[0.2em] text-xs hover:text-[#ff6400] transition-colors duration-300">
            <span className="mr-2">&larr;</span> VOLVER A BUILDS
          </Link>
        </div>

        {/* Texto de marca - debajo del botón */}
        <div className="absolute top-[108px] left-8 md:left-12 z-10">
          <p className="text-[#555] tracking-[0.5em] font-light text-sm">BMW M4</p>
        </div>

        {/* GIANT M4 TEXT IN BACKGROUND */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 w-full overflow-hidden">
          <span className="text-[25rem] md:text-[40rem] font-black text-white whitespace-nowrap leading-none tracking-tighter select-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            M4
          </span>
        </div>

        {/* Hero Specs Overlay */}
        <div className="absolute top-1/3 right-8 md:right-12 z-20 text-right hidden md:block">
          <ul className="text-[#888] text-sm tracking-[0.2em] font-light space-y-4">
            <li>503 <span className="text-white font-bold">HP</span></li>
            <li>3.8s <span className="text-white font-bold">0-100</span></li>
            <li>290 <span className="text-white font-bold">KM/H</span></li>
            <li>S58 <span className="text-white font-bold">L6</span></li>
          </ul>
        </div>

        {/* Main Car Image (1.png - Frontal/Perfil sin fondo) */}
        <div className="relative w-full h-[400px] md:h-[600px] z-10 flex justify-center items-end">
          <Image
            src={images[0]}
            alt="BMW M4 Hero"
            fill
            className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)] pb-10"
            priority
          />
        </div>
      </div>

      {/* CONTENIDO DESLIZABLE HACIA ABAJO */}
      <div className="w-full bg-[#0a0a0a] relative z-20">
        
        {/* 2. SECCIÓN FRENTE (Image 2.png) */}
        <div className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center gap-12">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
             {/* Glow sutil para imagen sin fondo */}
             <div className="absolute inset-0 bg-white opacity-5 blur-[100px] rounded-full"></div>
             <Image 
               src={images[1]} 
               alt="Frente M4" 
               fill 
               className="object-contain drop-shadow-2xl z-10" 
             />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12">
            <span className="text-[#ff6400] font-mono tracking-widest text-sm mb-4 block">// 01 DISEÑO FRONTAL</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">
              Agresividad Absoluta
            </h2>
            <p className="text-[#888] leading-relaxed font-light text-lg mb-8">
              La identidad visual del M4 ha sido llevada al extremo. La parrilla central sobredimensionada no solo impone respeto, sino que canaliza cantidades masivas de aire hacia los radiadores de alto rendimiento. Un splitter inferior y conductos agresivos completan un paquete aerodinámico pensado 100% para la pista.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-[#222] pt-6">
               <div>
                 <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">Aero</span>
                 <span className="font-bold">M Performance Lip</span>
               </div>
               <div>
                 <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">Refrigeración</span>
                 <span className="font-bold">Air Ducts Optimizados</span>
               </div>
            </div>
          </div>
        </div>

        {/* 3. SECCIÓN MOTOR (Image 3.jpg) */}
        <div className="w-full bg-[#111] border-y border-[#222]">
          <div className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Imagen a la derecha */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] overflow-hidden border border-[#333]">
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image 
                src={images[2]} 
                alt="Motor M4" 
                fill 
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out z-0" 
              />
            </div>
            {/* Texto a la izquierda */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12">
              <span className="text-[#ff6400] font-mono tracking-widest text-sm mb-4 block">// 02 EL CORAZÓN S58</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">
                Potencia Pura
              </h2>
              <p className="text-[#888] leading-relaxed font-light text-lg mb-8">
                El legendario motor S58 de 3.0 litros y 6 cilindros en línea. Equipado con tecnología Twin-Power Turbo, produce 503 HP listos para destrozar el asfalto. La respuesta es instantánea y el régimen de revoluciones llega a límites que te pegarán al asiento en cada cambio de marcha.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#333] pt-6">
                <div>
                  <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">Bloque</span>
                  <span className="font-bold">3.0L Inline-6</span>
                </div>
                <div>
                  <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">Escape</span>
                  <span className="font-bold">Akrapovic Titanium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SECCIÓN DETALLE (Image 4.jpg) */}
        <div className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] overflow-hidden border border-[#222]">
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image 
              src={images[3]} 
              alt="Detalle M4" 
              fill 
              className="object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out z-0" 
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12">
            <span className="text-[#ff6400] font-mono tracking-widest text-sm mb-4 block">// 03 PRECISIÓN DINÁMICA</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">
              Pegado al Suelo
            </h2>
            <p className="text-[#888] leading-relaxed font-light text-lg mb-8">
              No sirve de nada la potencia sin control. El trabajo aerodinámico lateral, junto con la suspensión KW V4 Clubsport ajustada al milímetro, aseguran que cada caballo de fuerza se traduzca en agarre. Frenos M Carbon Ceramic detienen la bestia con fiabilidad sin importar la temperatura.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-[#222] pt-6">
               <div>
                 <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">Suspensión</span>
                 <span className="font-bold">KW V4 Clubsport</span>
               </div>
               <div>
                 <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">Frenos</span>
                 <span className="font-bold">M Carbon Ceramic</span>
               </div>
            </div>
          </div>
        </div>

        {/* Brand Logos Footer */}
        <div className="w-full border-t border-[#222] py-16 mt-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500 text-white">
            <span className="text-3xl font-black italic tracking-tighter">BBS</span>
            <span className="text-3xl font-bold uppercase tracking-widest">Akrapovic</span>
            <span className="text-4xl font-black tracking-tighter" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>KW</span>
            <span className="text-3xl font-bold tracking-widest font-serif italic">M Performance</span>
          </div>
        </div>

      </div>
    </div>
  );
}
