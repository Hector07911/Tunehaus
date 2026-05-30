"use client";
import { useState } from "react";
import CarGallery from "./components/CarGallery";

const MARCAS = [
  { id: "todos", label: "TODOS" },
  { id: "bmw", label: "BMW" },
  { id: "nissan", label: "NISSAN" },
  { id: "honda", label: "HONDA" },
  { id: "mazda", label: "MAZDA" },
];

const FILTROS_POR_MARCA = {
  todos: ["TODOS", "STAGE 1", "STAGE 2", "STAGE 3", "STAGE 4"],
  bmw: ["TODOS", "E30", "E46", "E92", "M3", "M4", "STAGE 3+"],
  nissan: ["TODOS", "R32", "R33", "R34", "R35", "370Z"],
  honda: ["TODOS", "NSX", "CIVIC TYPE R", "S2000", "INTEGRA"],
  mazda: ["TODOS", "RX7 FC", "RX7 FD", "RX8", "MX5"],
};

const BUILDS_COUNT = {
  todos: 87,
  bmw: 24,
  nissan: 22,
  honda: 18,
  mazda: 23,
};

export default function BuildsHeader() {
  const [marcaActiva, setMarcaActiva] = useState("todos");
  const [filtroActivo, setFiltroActivo] = useState("TODOS");

  const handleMarca = (id) => {
    setMarcaActiva(id);
    setFiltroActivo("TODOS");
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        padding: "120px 40px 32px",
        minHeight: "100vh",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      {/* TAG SUPERIOR */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "10px",
          letterSpacing: "4px",
          color: "#ff6400",
          textAlign: "center",
          marginBottom: "14px",
        }}
      >
        // TODAS LAS MARCAS 
      </div>

      {/* TÍTULO — cambia según marca activa */}
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(52px, 8vw, 80px)",
          letterSpacing: "3px",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: "12px",
          transition: "all 0.3s ease",
        }}
      >
        <span style={{ color: "#fff" }}>BUILDS</span> 
      </div>

      {/* CONTADOR */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "12px",
          letterSpacing: "2px",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          marginBottom: "36px",
        }}
      >
        {BUILDS_COUNT[marcaActiva]} BUILDS ACTIVOS // STAGE 1 → STAGE 4
      </div>

      {/* SELECTOR DE MARCAS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}
      >
        {MARCAS.map((m) => (
          <button
            key={m.id}
            onClick={() => handleMarca(m.id)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "16px",
              letterSpacing: "2px",
              padding: "8px 22px",
              border: marcaActiva === m.id
                ? "1px solid #ff6400"
                : "1px solid rgba(255,255,255,0.12)",
              background: marcaActiva === m.id
                ? "#ff6400"
                : "transparent",
              color: marcaActiva === m.id
                ? "#000"
                : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (marcaActiva !== m.id) {
                e.currentTarget.style.borderColor = "#ff6400";
                e.currentTarget.style.color = "#ff6400";
              }
            }}
            onMouseLeave={(e) => {
              if (marcaActiva !== m.id) {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.4)";
              }
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* DIVISOR */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.05)",
          marginBottom: "16px",
        }}
      />

      {/* FILTROS POR MODELO — cambian según marca */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        {FILTROS_POR_MARCA[marcaActiva].map((f) => (
          <button
            key={f}
            onClick={() => setFiltroActivo(f)}
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "5px 14px",
              border: filtroActivo === f
                ? "1px solid rgba(255,100,0,0.6)"
                : "1px solid rgba(255,255,255,0.07)",
              background: filtroActivo === f
                ? "rgba(255,100,0,0.08)"
                : "transparent",
              color: filtroActivo === f
                ? "#ff6400"
                : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* LEYENDA DE STAGES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "28px",
          flexWrap: "wrap",
        }}
      >
        {[
          { color: "#ff6400", label: "STAGE 1–2 // OEM+" },
          { color: "#fff", label: "STAGE 3 // MODIFICADO" },
          { color: "rgba(255,255,255,0.25)", label: "STAGE 4 // EXTREMO" },
        ].map((l) => (
          <div
            key={l.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: l.color,
                flexShrink: 0,
              }}
            />
            {l.label}
          </div>
        ))}
      </div>

      {/* GALERÍA DE AUTOS */}
      <div style={{ marginTop: "40px" }}>
        <CarGallery marcaActiva={marcaActiva} filtroActivo={filtroActivo} />
      </div>

    </div>
  );
}
