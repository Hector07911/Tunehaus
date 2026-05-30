import Image from "next/image";
import Link from "next/link";

const CAR_DATA = [
  { id: "bmw-e30", marca: "bmw", modelo: "E30", stage: "STAGE 2", img: "/e30.png" },
  { id: "bmw-m4", marca: "bmw", modelo: "M4", stage: "COMPETITION", img: "/bmwM4.png" },
  { id: "nissan-gtr", marca: "nissan", modelo: "R35", stage: "STAGE 3", img: "/gtr.png" },
  { id: "nissan-370z", marca: "nissan", modelo: "370Z", stage: "STAGE 1", img: "/nissan370.png" },
  { id: "honda-nsx", marca: "honda", modelo: "NSX", stage: "STAGE 4", img: "/nsx.png" },
  { id: "mazda-rx7", marca: "mazda", modelo: "RX7", stage: "STAGE 3", img: "/builds/mazda-rx7/main.png" },
];

export default function CarGallery({ marcaActiva, filtroActivo }) {
  // Filtrar los autos según la marca y filtro (si no es TODOS)
  const filteredCars = CAR_DATA.filter((car) => {
    const matchMarca = marcaActiva === "todos" || car.marca === marcaActiva;
    const matchFiltro = filtroActivo === "TODOS" || car.modelo === filtroActivo || car.stage === filtroActivo;
    return matchMarca && matchFiltro;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col gap-32">
      {filteredCars.length > 0 ? (
        filteredCars.map((car, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={car.id}
              className={`relative w-full flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-12 group`}
            >
              {/* Marca de agua de fondo */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-bold text-white opacity-[0.03] pointer-events-none select-none tracking-tighter"
                style={{ fontFamily: "'Bebas Neue', sans-serif", zIndex: 0 }}
              >
                {car.modelo}
              </div>

              {/* Contenedor de la Imagen */}
              <div className="w-full md:w-3/5 relative z-10 flex justify-center">
                {/* Acento decorativo detrás del auto */}
                <div className={`absolute top-1/2 ${isEven ? 'left-10' : 'right-10'} -translate-y-1/2 w-3/4 h-3/4 bg-[#ff6400] opacity-5 blur-[100px] rounded-full`}></div>

                <Image
                  src={car.img}
                  alt={`${car.marca} ${car.modelo}`}
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700 ease-out"
                />
              </div>

              {/* Contenedor de Información */}
              <div className={`w-full md:w-2/5 flex flex-col justify-center relative z-10 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                {/* Etiqueta superior */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#ff6400] text-sm tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                    // 0{index + 1}
                  </span>
                  <div className="h-[1px] w-24 bg-gradient-to-r from-[#ff6400] to-transparent"></div>
                </div>

                {/* Título Principal */}
                <h3 className="text-7xl md:text-8xl lg:text-[10rem] text-white leading-[0.8] mb-4 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  <span className="text-3xl md:text-4xl text-[#555] block mb-2 tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{car.marca.toUpperCase()}</span>
                  {car.modelo}
                </h3>

                {/* Stage tag */}
                <div className="inline-block border border-[#333] px-4 py-2 mb-8 self-start">
                  <p className="text-white text-lg tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                    <span className="text-[#ff6400] mr-2">BUILD_</span>{car.stage}
                  </p>
                </div>

                {/* Botón de acción */}
                <Link href={`/builds/${car.id}`} className="relative overflow-hidden group/btn self-start border border-[#ff6400] bg-transparent text-[#ff6400] px-8 py-4 text-sm tracking-widest flex items-center gap-3 uppercase transition-all duration-300" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                  <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">VER ESPECIFICACIONES</span>
                  <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300 group-hover/btn:translate-x-2 inline-block">&rarr;</span>
                  <div className="absolute inset-0 bg-[#ff6400] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center py-32 border border-[#222] border-dashed">
          <p className="text-[#888] text-xl tracking-widest" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            // NO SE ENCONTRARON BUILDS PARA ESTE FILTRO
          </p>
        </div>
      )}
    </div>
  );
}
