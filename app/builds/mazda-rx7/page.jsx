import Image from "next/image";
import Link from "next/link";
import Img1 from "../Mazda.Rx7/Img1.png";
import Img2 from "../Mazda.Rx7/Img2.jpg";
import Img3 from "../Mazda.Rx7/Img3.jpg";
import Img4 from "../Mazda.Rx7/Img4.jpg";

export default function MazdaRX7Specs() {
  const images = [Img1, Img2, Img3, Img4];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] pb-24">
      {/* Header with back button */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-12 pb-8">
        <Link href="/builds" className="inline-flex items-center gap-2 text-[#888] hover:text-[#ff6400] uppercase tracking-widest text-sm transition-colors duration-300" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          <span>&larr;</span> VOLVER A BUILDS
        </Link>
      </div>

      {/* Hero Title Area */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-20 relative">
        <h1 className="text-[12vw] md:text-[8rem] text-white leading-[0.8] tracking-tight relative z-10" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          <span className="text-3xl md:text-5xl text-[#555] block mb-2 tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>MAZDA</span>
          RX7 <span className="text-[#ff6400]">FD</span>
        </h1>

        {/* Stage tag */}
        <div className="mt-8 inline-block border border-[#333] px-6 py-3 relative z-10 bg-[#0a0a0a]">
          <p className="text-white text-xl tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            <span className="text-[#ff6400] mr-2">BUILD_</span>STAGE 3
          </p>
        </div>

        {/* Background ambient light */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-[#ff6400] opacity-5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      </div>

      {/* Gallery Section */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {images.map((img, index) => (
            <div key={index} className={`relative group overflow-hidden ${index === 0 || index === 3 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'} border border-[#222]`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src={img}
                alt={`Mazda RX7 Image ${index + 1}`}
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                placeholder="blur"
                priority={index === 0}
              />

              {/* Image Number Overlay */}
              <div className="absolute bottom-6 right-6 z-20">
                <span className="text-white/50 text-4xl font-bold tracking-tighter" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spec sheet bottom area */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-24 flex flex-col md:flex-row gap-12 border-t border-[#222] pt-12">
        <div className="md:w-1/3">
          <h3 className="text-2xl text-white mb-6 tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace" }}>// ESPECIFICACIONES</h3>
          <p className="text-[#888] leading-relaxed font-sans">
            Un icono de los años 90. Este Mazda RX7 ha sido modificado cuidadosamente para mantener su espíritu original mientras se incrementa drásticamente su rendimiento con un turbo de mayor tamaño y un sistema de escape completo.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 gap-8 text-white font-sans">
          <div className="border-l border-[#ff6400] pl-6">
            <span className="text-[#555] text-sm uppercase tracking-widest block mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Motor</span>
            <span className="text-xl font-bold">13B-REW Rotary</span>
          </div>
          <div className="border-l border-[#ff6400] pl-6">
            <span className="text-[#555] text-sm uppercase tracking-widest block mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Aspiración</span>
            <span className="text-xl font-bold">Single Turbo</span>
          </div>
          <div className="border-l border-[#ff6400] pl-6">
            <span className="text-[#555] text-sm uppercase tracking-widest block mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Potencia</span>
            <span className="text-xl font-bold">450 WHP</span>
          </div>
          <div className="border-l border-[#ff6400] pl-6">
            <span className="text-[#555] text-sm uppercase tracking-widest block mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>Transmisión</span>
            <span className="text-xl font-bold">Manual 5 vel.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
