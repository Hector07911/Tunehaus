import BuildPage from "../components/BuildPage";

// ─────────────────────────────────────────────
//  BMW E30 – Configuración de página
//  Para agregar otro auto: copia este archivo,
//  cambia la carpeta y edita solo este objeto.
// ─────────────────────────────────────────────
const config = {
  marca: "BMW",
  modelo: "E24",
  accentColor: "#ff6400",

  // Imagen principal del hero (sin fondo, object-contain)
  heroImage: "/builds/bmw-e30/1.png",

  // Stats que aparecen en el overlay superior derecho
  heroStats: [
    { valor: "450", label: "HP" },
    { valor: "4.5s", label: "0-100" },
    { valor: "290", label: "KM/H" },
    { valor: "M88", label: "L6" },
  ],

  // Secciones de contenido (una por imagen)
  sections: [
    {
      tag: "// 01 DISEÑO SHARKNOSE",
      title: "Pureza Sharknose",
      body: "El BMW E24 Serie 6 es el epítome del diseño coupé de los 80s llevado al extremo digital por el diseñador Khyzyl Saleem. Su trompa afilada e invertida de estilo tiburón esconde un ensanchamiento de carrocería masivo inspirado en los legendarios monstruos de circuito del Grupo 5, rebajando su centro de gravedad al ras del suelo.",
      stats: [
        { label: "Chasis Base", value: "E24 635 CSi" },
        { label: "Carrocería", value: "Custom Group 5 Silhouette" },
      ],
      image: "/builds/bmw-e30/2.jpg",
      imageAlt: "BMW E24 Sharknose Exterior",
      imageStyle: "photo",
      reverse: false,
    },
    {
      tag: "// 02 EL CORAZÓN M88/3",
      title: "Bloque de Leyenda",
      body: "El legendario motor de 6 cilindros en línea, derivado directamente del icónico superdeportivo BMW M1, ha sido afinado en este concepto para entregar una respuesta atmosférica brutal de 450 HP. El flujo de gases se optimiza mediante colectores de competición individuales de acero inoxidable que liberan un rugido metálico puro a altas revoluciones.",
      stats: [
        { label: "Motor", value: "3.5L Inline-6 M88/3" },
        { label: "Colectores", value: "Custom Inox Racing" },
      ],
      image: "/builds/bmw-e30/5.jpg",
      imageAlt: "Motor BMW E24",
      imageStyle: "photo",
      reverse: true,
    },
    {
      tag: "// 03 PRECISIÓN DE PISTA",
      title: "Conducción Pura",
      body: "Para domar el incremento de vías del chasis extendido, la suspensión utiliza un esquema de brazos reforzados con coilovers de competición ajustables en 3 vías. Los pasos de rueda masivos albergan un icónico juego de rines BBS de tres piezas con centros de panal dorados entrelazados y camas pulidas de gran profundidad.",
      stats: [
        { label: "Suspensión", value: "Coilovers Track Spec" },
        { label: "Rines", value: "BBS Custom Deep Dish\"" },
      ],
      image: "/builds/bmw-e30/4.jpg",
      imageAlt: "Detalle Rines BBS BMW E24",
      imageStyle: "photo",
      reverse: false,
    },
  ],

  // Logos de sponsors en el footer
  sponsors: ["Bilstein", "BBS", "Goodyear", "Motul"],
};

export const metadata = {
  title: "BMW E30 | TuneHaus Builds",
  description:
    "Especificaciones completas del build BMW E30 Stage 2 de TuneHaus. Motor M20 preparado, carrocería, suspensión y más.",
};

export default function BmwE30Page() {
  return <BuildPage config={config} />;
}
