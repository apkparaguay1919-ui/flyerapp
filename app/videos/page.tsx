"use client";
import { useState } from "react";
import StudioNav from "@/components/StudioNav";

const VIDEO_TYPES = [
  { id: "reel", icon: "📱", title: "Reel / TikTok", duration: "15-60s", desc: "Formato vertical viral para Instagram y TikTok" },
  { id: "short", icon: "▶️", title: "YouTube Short", duration: "30-60s", desc: "Shorts optimizados para YouTube" },
  { id: "whatsapp", icon: "💬", title: "Historia WhatsApp", duration: "15-30s", desc: "Status y stories de 9:16 para WhatsApp" },
  { id: "producto", icon: "📦", title: "Video de Producto", duration: "30-90s", desc: "Presentación profesional del producto" },
  { id: "voz", icon: "🎙️", title: "Video con Voz IA", duration: "30-60s", desc: "Narración automática con voz profesional" },
  { id: "subtitulos", icon: "📝", title: "Con Subtítulos", duration: "30-60s", desc: "Video con subtítulos automáticos" },
  { id: "antesdespues", icon: "🔄", title: "Antes / Después", duration: "15-30s", desc: "Comparativa visual de transformación" },
  { id: "venta", icon: "💰", title: "Estilo Venta Directa", duration: "30-60s", desc: "Video de conversión alta con FOMO y urgencia" },
];

const GUION_TEMPLATE = (tipo: string, producto: string, beneficio: string) => `🎬 GUIÓN DE VIDEO — ${tipo.toUpperCase()}
Producto: ${producto}
Beneficio clave: ${beneficio}

═══════════════════════════════
⏱️ 0-3 SEG — GANCHO
═══════════════════════════════
"¿Sabías que podés ${beneficio.toLowerCase()} de forma natural?"
[Texto en pantalla grande, fondo llamativo]

═══════════════════════════════
⏱️ 3-10 SEG — PROBLEMA
═══════════════════════════════
"Mucha gente lucha con esto todos los días..."
[Mostrar el problema de forma visual]

═══════════════════════════════
⏱️ 10-20 SEG — SOLUCIÓN
═══════════════════════════════
"${producto} fue creado para ayudarte."
[Producto en pantalla con brillo y efectos]
✅ Beneficio 1
✅ Beneficio 2  
✅ Beneficio 3

═══════════════════════════════
⏱️ 20-25 SEG — SOCIAL PROOF
═══════════════════════════════
"Miles de personas ya lo usan en toda Latinoamérica"
[Mostrar números o testimonios]

═══════════════════════════════
⏱️ 25-30 SEG — CTA URGENTE
═══════════════════════════════
"¡Stock limitado! Escribime HOY →"
[Número de WhatsApp grande]

───────────────────────────────
💡 NOTAS DE PRODUCCIÓN:
- Música: energética pero no invasiva
- Texto: blanco con sombra negra
- Transiciones: rápidas (0.3s)
- Formato: 9:16 vertical
- Resolución: 1080x1920px

⚠️ DISCLAIMER AL PIE (obligatorio):
"Producto natural. No reemplaza consulta médica."
`;

export default function VideosPage() {
  const [selected, setSelected] = useState("reel");
  const [producto, setProducto] = useState("");
  const [beneficio, setBeneficio] = useState("");
  const [guion, setGuion] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedType = VIDEO_TYPES.find(v => v.id === selected);

  const generate = async () => {
    if (!producto || !beneficio) {
      alert("Por favor completá el producto y beneficio clave.");
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setGuion(GUION_TEMPLATE(selectedType?.title || selected, producto, beneficio));
    setLoading(false);
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>🎬 Generador de Videos</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 12 }}>Crea guiones de video<br /><span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>que convierten</span></h1>
          <p style={{ fontSize: 16, color: "#9090b0" }}>Genera guiones profesionales para Reels, TikToks, Shorts y más con IA.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* Left: Config */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#9090b0" }}>1. TIPO DE VIDEO</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32 }}>
              {VIDEO_TYPES.map(v => (
                <div key={v.id} onClick={() => setSelected(v.id)} style={{ background: selected===v.id ? "rgba(124,58,237,0.2)" : "rgba(26,26,38,0.8)", border: `1px solid ${selected===v.id ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.06)"}`, borderRadius: 12, padding: "14px", cursor: "pointer", transition: "all 0.2s" }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{v.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selected===v.id ? "#a78bfa" : "#f0f0ff" }}>{v.title}</div>
                  <div style={{ fontSize: 11, color: "#9090b0", marginTop: 2 }}>{v.duration}</div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#9090b0" }}>2. DATOS DEL PRODUCTO</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#9090b0", marginBottom: 6 }}>Nombre del producto</label>
                <input value={producto} onChange={e => setProducto(e.target.value)} style={{ background: "rgba(18,18,26,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0ff", padding: "12px 16px", borderRadius: 12, fontSize: 15, width: "100%", outline: "none" }} placeholder="Ej: Eficlax, Vegafull, Revella..." />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#9090b0", marginBottom: 6 }}>Beneficio clave del video</label>
                <input value={beneficio} onChange={e => setBeneficio(e.target.value)} style={{ background: "rgba(18,18,26,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0ff", padding: "12px 16px", borderRadius: 12, fontSize: 15, width: "100%", outline: "none" }} placeholder="Ej: mejorar tu digestión natural" />
              </div>
              <button onClick={generate} disabled={loading} style={{ background: "linear-gradient(135deg,#7c3aed,#9d5cf0)", color: "white", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", opacity: loading ? 0.7 : 1, marginTop: 8 }}>
                {loading ? "⏳ Generando guión..." : "🎬 Generar guión de video →"}
              </button>
            </div>
          </div>

          {/* Right: Output */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#9090b0" }}>GUIÓN GENERADO</h3>
            {guion ? (
              <div>
                <pre style={{ background: "rgba(18,18,26,0.9)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: 24, fontSize: 13, lineHeight: 1.7, color: "#d0d0f0", whiteSpace: "pre-wrap", maxHeight: 600, overflowY: "auto" }}>{guion}</pre>
                <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                  <button onClick={() => navigator.clipboard.writeText(guion)} style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>📋 Copiar guión</button>
                  <button onClick={() => { setGuion(""); setProducto(""); setBeneficio(""); }} style={{ background: "transparent", color: "#9090b0", border: "1px solid rgba(255,255,255,0.08)", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14 }}>Nuevo</button>
                </div>
              </div>
            ) : (
              <div style={{ background: "rgba(26,26,38,0.5)", border: "2px dashed rgba(124,58,237,0.2)", borderRadius: 16, padding: "60px 24px", textAlign: "center", minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{selectedType?.icon}</div>
                <p style={{ color: "#9090b0", fontSize: 15 }}>Configurá el tipo de video y los datos del producto para generar el guión.</p>
                <p style={{ color: "#5050a0", fontSize: 13, marginTop: 8 }}>{selectedType?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
