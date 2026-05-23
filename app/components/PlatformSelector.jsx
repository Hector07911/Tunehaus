"use client";

import { useState } from "react";

const cars = [
  { left: 'BMW', right: 'E30', sub: 'Elige tu base. Cada modelo es un<br>punto de partida.', img: '/e30.png' },
  { left: 'HONDA', right: 'NSX', sub: 'La evolución natural. Más potencia,<br>misma esencia clásica.', img: '/nsx.png' },
  { left: 'NISSAN', right: 'GTR', sub: 'Precisión y equilibrio. El referente<br>de una generación.', img: '/gtr.png' },
  { left: 'NISSAN', right: '370Z', sub: 'Más que un auto, es una<br>extensión de mi personalidad.', img: '/nissan370.png' },
];

export default function PlatformSelector() {
  const [cur, setCur] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const go = (i) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCur((i + cars.length) % cars.length);
      setIsFading(false);
    }, 180);
  };

  const currentCar = cars[cur];

  return (
    <div className="slide-container mx-auto my-12">
      <div className="slide" id="slide">
        {/* Tag superior izquierdo */}
        <div className="tag">// SELECCIONA TU PLATAFORMA</div>

        {/* Título dividido: BMW ←→ E30 */}
        <div className="title-block">
          <span className="title-left" style={{ opacity: isFading ? 0 : 1 }}>{currentCar.left}</span>
          <span className="title-right" style={{ opacity: isFading ? 0 : 1 }}>{currentCar.right}</span>
        </div>

        {/* Auto en SVG */}
        <div className="car-layer">
          <img
            src={currentCar.img}
            alt={`BMW ${currentCar.right}`}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.9))',
              opacity: isFading ? 0 : 1,
              transition: 'opacity 0.2s'
            }}
          />
        </div>

        {/* Línea decorativa morada */}
        <div className="accent-line"></div>

        {/* Subtítulo centrado bajo el auto */}
        <div className="subtitle-block">
          <p id="sub" style={{ opacity: isFading ? 0 : 1 }} dangerouslySetInnerHTML={{ __html: currentCar.sub }}></p>
        </div>

        {/* Flechas prev / next */}
        <div className="nav">
          <button className="arr" id="prev" onClick={() => go(cur - 1)}>&#8592;</button>
          <button className="arr" id="next" onClick={() => go(cur + 1)}>&#8594;</button>
        </div>

        {/* Indicadores (dots) */}
        <div className="dots" id="dots">
          {cars.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === cur ? 'active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
