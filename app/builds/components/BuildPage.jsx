import Image from "next/image";
import Link from "next/link";

/**
 * BuildPage – componente reutilizable para páginas de especificaciones de autos.
 *
 * @param {Object} config
 * @param {string}   config.marca          - Nombre de la marca (ej. "BMW")
 * @param {string}   config.modelo         - Nombre del modelo (ej. "E30")
 * @param {string}   config.heroImage      - Ruta a la imagen hero (object-contain, sin fondo)
 * @param {Object[]} config.heroStats      - Array de stats del hero overlay: [{ valor, label }]
 * @param {string}   config.accentColor    - Color hex de acento (default "#ff6400")
 * @param {Object[]} config.sections       - Secciones de contenido (ver abajo)
 * @param {string[]} config.sponsors       - Nombres de sponsors para el footer
 *
 * Estructura de cada sección en config.sections:
 * {
 *   tag: string,          // ej. "// 01 DISEÑO EXTERIOR"
 *   title: string,        // ej. "Clásico Extremo"
 *   body: string,         // párrafo descriptivo
 *   stats: [{ label, value }],  // 2-4 stats rápidos
 *   image: string,        // ruta a la imagen
 *   imageAlt: string,     // alt text
 *   imageStyle: "cutout" | "photo",  // cutout = object-contain sin fondo, photo = object-cover con hover
 *   reverse: boolean,     // alterna la dirección de la fila
 * }
 */
export default function BuildPage({ config }) {
  const {
    marca,
    modelo,
    heroImage,
    heroStats = [],
    accentColor = "#ff6400",
    sections = [],
    sponsors = [],
  } = config;

  return (
    <div className="build-page w-full bg-[#0a0a0a] text-white font-sans relative overflow-x-hidden">

      {/* Ambient bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-[#222] to-transparent opacity-20 pointer-events-none z-0" />

      {/* ── HERO ── */}
      <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-end max-w-7xl mx-auto">

        {/* Back link */}
        <div className="absolute top-[80px] left-8 md:left-12 z-20" style={{ '--accent-color': accentColor }}>
          <Link
            href="/builds"
            className="back-link inline-flex items-center text-[#888] font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-300 hover:text-[var(--accent-color)]"
          >
            <span className="mr-2">&larr;</span> VOLVER A BUILDS
          </Link>
        </div>

        {/* Breadcrumb label */}
        <div className="absolute top-[108px] left-8 md:left-12 z-10">
          <p className="text-[#555] tracking-[0.5em] font-light text-sm">
            {marca} {modelo}
          </p>
        </div>

        {/* Giant watermark text */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 w-full overflow-hidden">
          <span
            className="text-[25rem] md:text-[40rem] font-black text-white whitespace-nowrap leading-none tracking-tighter select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {modelo}
          </span>
        </div>

        {/* Hero stats overlay */}
        {heroStats.length > 0 && (
          <div className="absolute top-1/3 right-8 md:right-12 z-20 text-right hidden md:block">
            <ul className="text-[#888] text-sm tracking-[0.2em] font-light space-y-4">
              {heroStats.map((s, i) => (
                <li key={i}>
                  {s.valor}{" "}
                  <span className="text-white font-bold">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hero car image */}
        <div className="relative w-full h-[400px] md:h-[600px] z-10 flex justify-center items-end">
          <Image
            src={heroImage}
            alt={`${marca} ${modelo} Hero`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.9)] pb-10"
            priority
          />
        </div>
      </div>

      {/* ── SECTIONS ── */}
      <div className="w-full bg-[#0a0a0a] relative z-20">
        {sections.map((sec, idx) => {
          const isPhoto = sec.imageStyle === "photo";
          const isReverse = sec.reverse ?? idx % 2 !== 0;
          const isDarker = idx % 2 !== 0;

          return (
            <div
              key={idx}
              className={`w-full ${isDarker ? "bg-[#111] border-y border-[#222]" : ""}`}
            >
              <div
                className={`w-full max-w-7xl mx-auto px-4 py-24 md:py-32 border-t border-[#1a1a1a] flex flex-col ${
                  isReverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12`}
              >
                {/* Image */}
                <div
                  className={`w-full md:w-1/2 relative h-[300px] md:h-[500px] ${
                    isPhoto ? "overflow-hidden border border-[#333]" : ""
                  }`}
                >
                  {isPhoto ? (
                    <>
                      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500 z-10" />
                      <Image
                        src={sec.image}
                        alt={sec.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out z-0"
                      />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-white opacity-5 blur-[100px] rounded-full" />
                      <Image
                        src={sec.image}
                        alt={sec.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain drop-shadow-2xl z-10"
                      />
                    </>
                  )}
                </div>

                {/* Text */}
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-center px-4 ${
                    isReverse ? "md:pl-12" : "md:px-12"
                  }`}
                >
                  <span
                    className="font-mono tracking-widest text-sm mb-4 block"
                    style={{ color: accentColor }}
                  >
                    {sec.tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">
                    {sec.title}
                  </h2>
                  <p className="text-[#888] leading-relaxed font-light text-lg mb-8">
                    {sec.body}
                  </p>
                  {sec.stats && sec.stats.length > 0 && (
                    <div
                      className="grid grid-cols-2 gap-4 border-t pt-6"
                      style={{ borderColor: "#222" }}
                    >
                      {sec.stats.map((st, si) => (
                        <div key={si}>
                          <span className="block text-xs text-[#555] uppercase tracking-widest mb-1">
                            {st.label}
                          </span>
                          <span className="font-bold">{st.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Sponsors footer */}
        {sponsors.length > 0 && (
          <div className="w-full border-t border-[#222] py-16 mt-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500 text-white">
              {sponsors.map((s, i) => (
                <span
                  key={i}
                  className="text-3xl font-black tracking-widest uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
