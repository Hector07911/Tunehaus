import BuildPage from "../components/BuildPage";

const config = {
  marca: "MAZDA",
  modelo: "RX7",
  accentColor: "#ff6400",

  heroImage: "/builds/mazda-rx7/main.png",

  heroStats: [
    { valor: "450", label: "WHP" },
    { valor: "4.2s", label: "0-100" },
    { valor: "280", label: "KM/H" },
    { valor: "13B-REW", label: "ROTARY" },
  ],

  sections: [
    {
      tag: "// 01 LEYENDA DE TOKYO DRIFT",
      title: "Kit VeilSide Fortune",
      body: "Inmortalizado en el cine como el legendario auto de Han en Rápidos y Furiosos. Este kit de carrocería ensancha el chasis en casi 30 centímetros, incorporando paneles aerodinámicos curvos y ópticas Fortune específicas que cambiaron la cultura JDM para siempre.",
      stats: [
        { label: "Cultura", value: "Han's Hero Car" },
        { label: "Diseño", value: "VeilSide Fortune" },
      ],
      image: "/builds/mazda-rx7/gallery-2.jpg",
      imageAlt: "Frente RX7",
      imageStyle: "photo",
      reverse: false,
    },
    {
      tag: "// 02 EL ESPÍRITU ROTATIVO",
      title: "13B-REW Turbo",
      body: "Un bloque legendario modificado con un turbo single Garrett masivo que reemplaza el sistema secuencial de fábrica. Este 13B-REW alcanza las 9,000 RPM produciendo 450 caballos de fuerza a las ruedas con una sinfonía metálica inconfundible.",
      stats: [
        { label: "Aspiración", value: "Single Turbo Garrett" },
        { label: "Escape", value: "Full Titanium System" },
      ],
      image: "/builds/mazda-rx7/gallery-3.jpg",
      imageAlt: "Motor RX7",
      imageStyle: "photo",
      reverse: true,
    },
    {
      tag: "// 03 PRECISIÓN JAPONESA",
      title: "Estilo y Control",
      body: "Un chasis ensanchado que requiere un ajuste milimétrico de la geometría. Equipado con coilovers de alto rendimiento y rines VeilSide Andrew de gran anchura y labio profundo pulido, este conjunto transfiere la potencia del motor rotativo directamente al suelo con una postura imponente en las calles.",
      stats: [
        { label: "Suspensión", value: "VeilSide Andrew / Deep Dish" },
        { label: "Carrocería", value: "Ensanchado Esculpido" },
      ],
      image: "/builds/mazda-rx7/gallery-4.jpg",
      imageAlt: "Detalle RX7",
      imageStyle: "photo",
      reverse: false,
    },
  ],

  sponsors: ["RAYS", "Bride", "TEIN", "GReddy"],
};

export const metadata = {
  title: "Mazda RX7 | TuneHaus Builds",
  description: "Especificaciones completas del build Mazda RX7 de TuneHaus. Leyenda de Tokyo Drift con Kit VeilSide Fortune.",
};

export default function MazdaRX7Specs() {
  return <BuildPage config={config} />;
}
