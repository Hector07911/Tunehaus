import BuildPage from "../components/BuildPage";

const config = {
  marca: "BMW",
  modelo: "M4",
  accentColor: "#ff6400",

  heroImage: "/builds/bmw-m4/1.png",

  heroStats: [
    { valor: "590", label: "HP" },
    { valor: "3.8s", label: "0-100" },
    { valor: "300", label: "KM/H" },
    { valor: "P58", label: "L6" },
  ],

  sections: [
    {
      tag: "// 01 DISEÑO FRONTAL",
      title: "Agresividad Absoluta",
      body: "La identidad visual del M4 ha sido llevada al extremo. La parrilla central sobredimensionada no solo impone respeto, sino que canaliza cantidades masivas de aire hacia los radiadores de alto rendimiento. Un splitter inferior y conductos agresivos completan un paquete aerodinámico pensado 100% para la pista.",
      stats: [
        { label: "Aero", value: "Splitter delantero GT3" },
        { label: "Refrigeración", value: "Air Ducts" },
      ],
      image: "/builds/bmw-m4/2.png",
      imageAlt: "Frente M4",
      imageStyle: "cutout",
      reverse: false,
    },
    {
      tag: "// 02 EL CORAZÓN P58",
      title: "Potencia Pura",
      body: "El legendario motor P58 de 3.0 litros y 6 cilindros en línea. Equipado con tecnología M TwinPower Turbo, produce hasta 590 HP listos para destrozar el asfalto de los circuitos. La respuesta es instantánea y la caja secuencial Xtrac de 6 velocidades lleva las revoluciones a límites que te pegarán al asiento en cada cambio de marcha.",
      stats: [
        { label: "Bloque", value: "3.0L Inline-6" },
        { label: "Escape", value: "Akrapovic Titanium" },
      ],
      image: "/builds/bmw-m4/3.jpg",
      imageAlt: "Motor M4",
      imageStyle: "photo",
      reverse: true,
    },
    {
      tag: "// 03 PRECISIÓN DINÁMICA",
      title: "Pegado al Suelo",
      body: "No sirve de nada la potencia sin control. El trabajo aerodinámico lateral, junto con la suspensión KW Motorsport de 4 vías ajustada al milímetro, aseguran que cada caballo de fuerza se traduzca en agarre. Frenos de acero de competición con piezas de 6 pistones detienen la bestia con fiabilidad sin importar la temperatura.",
      stats: [
        { label: "Suspensión", value: "KW Motorsport 4-Way" },
        { label: "Frenos", value: "Acero de Competición" },
      ],
      image: "/builds/bmw-m4/4.jpg",
      imageAlt: "Detalle M4",
      imageStyle: "photo",
      reverse: false,
    },
  ],

  sponsors: ["BBS", "Akrapovic", "KW", "M Performance"],
};

export const metadata = {
  title: "BMW M4 | TuneHaus Builds",
  description: "Especificaciones completas del build BMW M4 de TuneHaus. Agresividad absoluta y potencia pura.",
};

export default function BmwM4Specs() {
  return <BuildPage config={config} />;
}
