"use client";
import { useState } from "react";
import StudioNav from "@/components/StudioNav";
import { BIOLIFFE_PRODUCTS } from "@/lib/products";

const FORMATS = [
  { id: "916", label: "9:16 Story/Reel", w: 270, h: 480 },
  { id: "11", label: "1:1 Feed", w: 380, h: 380 },
  { id: "169", label: "16:9 Banner", w: 480, h: 270 },
  { id: "45", label: "4:5 Portrait", w: 304, h: 380 },
];

const BG_OPTIONS = [
  { id: "dark-purple", label: "Dark Purple", bg: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)" },
  { id: "violet", label: "Violet Night", bg: "linear-gradient(135deg, #1e0a3c, #7c3aed, #1e0a3c)" },
  { id: "green", label: "Natural Green", bg: "linear-gradient(135deg, #0a1a0a, #1a3a1a, #0a1a0a)" },
  { id: "dark-gold", label: "Dark Gold", bg: "linear-gradient(135deg, #1a1000, #3a2800, #1a1000)" },
  { id: "midnight", label: "Midnight Blue", bg: "linear-gradient(135deg, #000a1a, #0a1a3a, #000a1a)" },
  { id: "fire", label: "Fire Orange", bg: "linear-gradient(135deg, #1a0500, #3a1200, #1a0500)" },
];

export default function EditorPage() {
  const [format, setFormat] = useState("916");
  const [productId, setProductId] = useState("eficlax");
  const [bg, setBg] = useState("dark-purple");
  const [pais, setPais] = useState("PY");
  const [customText, setCustomText] = useState("");
  const [showPrice, setShowPrice] = useState(true);
  const [showBadge, setShowBadge] = useState(true);

  const product = BIOLIFFE_PRODUCTS.find(p => p.id === productId) || BIOLIFFE_PRODUCTS[0];
  const priceData = product.price[pais];
  const selectedFormat = FORMATS.find(f => f.id === format) || FORMATS[0];
  const selectedBg = BG_OPTIONS.find(b => b.id === bg) || BG_OPTIONS[0];

  const displayText = customText || product.copyShort.substring(0, 60) + "...";

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>🖊️ Editor Visual</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 12 }}>Editor<br /><span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>visual</span></h1>
          <p style={{ color: "#9090b0", fontSize: 16 }}>Personalizá y exportá tu contenido visual para cualquier formato.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 32 }}>
          {/* Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Product */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>PRODUCTO</h3>
              <select value={productId} onChange={e => setProductId(e.target.value)} style={{ background: "rgba(18,18,26,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0ff", padding: "10px 14px", borderRadius: 10, fontSize: 14, width: "100%", outline: "none" }}>
                {BIOLIFFE_PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>

            {/* Format */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>FORMATO</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {FORMATS.map(f => (
                  <div key={f.id} onClick={() => setFormat(f.id)} style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer", background: format===f.id ? "rgba(124,58,237,0.15)" : "rgba(18,18,26,0.5)", border: `1px solid ${format===f.id ? "rgba(124,58,237,0.4)" : "transparent"}`, color: format===f.id ? "#a78bfa" : "#9090b0", fontSize: 14, fontWeight: format===f.id ? 700 : 500 }}>{f.label}</div>
                ))}
              </div>
            </div>

            {/* Background */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>FONDO</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {BG_OPTIONS.map(b => (
                  <div key={b.id} onClick={() => setBg(b.id)} style={{ height: 40, borderRadius: 10, cursor: "pointer", background: b.bg, border: `2px solid ${bg===b.id ? "#a78bfa" : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* País */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>PAÍS / MONEDA</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[["PY","🇵🇾 PY"],["AR","🇦🇷 AR"],["UY","🇺🇾 UY"],["BO","🇧🇴 BO"]].map(([code,label]) => (
                  <div key={code} onClick={() => setPais(code)} style={{ padding: "8px", borderRadius: 8, cursor: "pointer", textAlign: "center", background: pais===code ? "rgba(124,58,237,0.2)" : "rgba(18,18,26,0.5)", border: `1px solid ${pais===code ? "rgba(124,58,237,0.4)" : "transparent"}`, fontSize: 13, color: pais===code ? "#a78bfa" : "#9090b0", fontWeight: pais===code ? 700 : 500 }}>{label}</div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>TEXTO PERSONALIZADO</h3>
              <textarea value={customText} onChange={e => setCustomText(e.target.value)} placeholder="Dejar vacío para usar copy del producto..." style={{ background: "rgba(18,18,26,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0ff", padding: "10px 14px", borderRadius: 10, fontSize: 13, width: "100%", outline: "none", minHeight: 80, resize: "vertical" }} />
            </div>

            {/* Toggles */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>ELEMENTOS</h3>
              {[[showPrice, setShowPrice, "Mostrar precio"],[showBadge, setShowBadge, "Mostrar badge OFERTA"]].map(([val, setter, label]) => (
                <label key={label as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, cursor: "pointer" }}>
                  <span style={{ fontSize: 14, color: "#d0d0f0" }}>{label as string}</span>
                  <div onClick={() => (setter as (v: boolean) => void)(!val as boolean)} style={{ width: 44, height: 24, borderRadius: 12, background: val ? "#7c3aed" : "rgba(255,255,255,0.1)", position: "relative", transition: "background 0.2s", cursor: "pointer" }}>
                    <div style={{ position: "absolute", top: 2, left: val ? 22 : 2, width: 20, height: 20, borderRadius: "50%", background: "white", transition: "left 0.2s" }} />
                  </div>
                </label>
              ))}
            </div>

            {/* Export buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["📥 Exportar PNG","📥 Exportar JPG","📄 Exportar PDF"].map(label => (
                <button key={label} onClick={() => alert("Función de exportación disponible en la versión completa con integración de backend.")} style={{ background: label.includes("PNG") ? "linear-gradient(135deg,#7c3aed,#9d5cf0)" : "rgba(26,26,38,0.8)", color: "white", border: `1px solid ${label.includes("PNG") ? "transparent" : "rgba(124,58,237,0.3)"}`, padding: "12px 20px", borderRadius: 12, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>{label}</button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 16, letterSpacing: 1 }}>VISTA PREVIA</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
              <div style={{ width: selectedFormat.w, height: selectedFormat.h, background: selectedBg.bg, borderRadius: 16, position: "relative", overflow: "hidden", border: "2px solid rgba(124,58,237,0.3)", boxShadow: "0 0 60px rgba(124,58,237,0.15)" }}>
                {/* Glow effect */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "60%", height: "60%", background: "radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Badge */}
                {showBadge && (
                  <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg,#f59e0b,#f97316)", color: "white", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800, zIndex: 10 }}>✨ OFERTA</div>
                )}

                {/* Product image */}
                <img src={product.photo} alt={product.name} style={{ width: "100%", height: "55%", objectFit: "cover", opacity: 0.7 }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))" }} />

                {/* Content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 16px 20px" }}>
                  <div style={{ fontSize: format==="916" ? 18 : 14, fontWeight: 900, color: "white", marginBottom: 6, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>{product.name}</div>
                  <p style={{ fontSize: format==="916" ? 11 : 10, color: "rgba(255,255,255,0.7)", marginBottom: 10, lineHeight: 1.4 }}>{displayText.substring(0, format==="11" ? 40 : 70)}</p>
                  {showPrice && priceData && (
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      {priceData.promo && <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>{priceData.currency} {priceData.amount.toLocaleString()}</span>}
                      <span style={{ fontSize: format==="916" ? 22 : 18, fontWeight: 900, color: "#f59e0b" }}>{priceData.currency} {(priceData.promo || priceData.amount).toLocaleString()}</span>
                    </div>
                  )}
                  <div style={{ marginTop: 10, background: "rgba(124,58,237,0.8)", color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 11, fontWeight: 700, display: "inline-block" }}>💬 Escribime →</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24, background: "rgba(26,26,38,0.5)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px" }}>
              <p style={{ fontSize: 12, color: "#9090b0" }}>📐 <strong style={{ color: "#d0d0f0" }}>Formato:</strong> {selectedFormat.label} · <strong style={{ color: "#d0d0f0" }}>Fondo:</strong> {selectedBg.label} · <strong style={{ color: "#d0d0f0" }}>País:</strong> {pais}</p>
              <p style={{ fontSize: 11, color: "#5050a0", marginTop: 4 }}>La exportación real requiere integración con html2canvas o similar en el proyecto Next.js final.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
