"use client";
import { useState } from "react";
import StudioNav from "@/components/StudioNav";
import { PROMPT_BANK } from "@/lib/products";

const CATEGORIES = ["Todos", "Imagen", "Video", "Copy"];

export default function PromptsPage() {
  const [filter, setFilter] = useState("Todos");
  const [copied, setCopied] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "Todos" ? PROMPT_BANK : PROMPT_BANK.filter(p => p.category === filter);

  const copy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>💡 Banco de Prompts</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 12 }}>Prompts<br /><span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>profesionales</span></h1>
          <p style={{ color: "#9090b0", fontSize: 16 }}>Prompts listos para usar en ChatGPT, Midjourney, DALL-E, Runway y más. Copia, pega y crea.</p>
        </div>

        {/* Info box */}
        <div style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(157,92,240,0.05))", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: "20px 24px", marginBottom: 32, display: "flex", gap: 16, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24 }}>💡</span>
          <div>
            <p style={{ fontSize: 14, color: "#d0d0f0", fontWeight: 600, marginBottom: 4 }}>¿Cómo usar estos prompts?</p>
            <p style={{ fontSize: 13, color: "#9090b0", lineHeight: 1.6 }}>Hacé clic en "Copiar prompt" y pegalo directamente en ChatGPT, Midjourney, DALL-E 3, Ideogram o la herramienta de IA que uses. Podés personalizarlo con el nombre del producto Bioliffe que quieras promocionar.</p>
          </div>
        </div>

        {/* Category filters */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ background: filter===cat ? "rgba(124,58,237,0.2)" : "rgba(26,26,38,0.8)", color: filter===cat ? "#a78bfa" : "#9090b0", border: `1px solid ${filter===cat ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)"}`, padding: "8px 18px", borderRadius: 20, cursor: "pointer", fontSize: 14, fontWeight: filter===cat ? 700 : 500 }}>{cat}</button>
          ))}
        </div>

        {/* Prompts list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filtered.map(prompt => (
            <div key={prompt.id} style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{prompt.icon}</div>
                    <div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f0ff" }}>{prompt.title}</h3>
                        <span style={{ background: prompt.category==="Imagen" ? "rgba(34,197,94,0.15)" : prompt.category==="Video" ? "rgba(239,68,68,0.15)" : "rgba(124,58,237,0.15)", color: prompt.category==="Imagen" ? "#22c55e" : prompt.category==="Video" ? "#ef4444" : "#a78bfa", border: "none", padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 700 }}>{prompt.category}</span>
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {prompt.tags.map(t => <span key={t} style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.15)", padding: "1px 7px", borderRadius: 20, fontSize: 11 }}>#{t}</span>)}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <button onClick={() => setExpanded(expanded === prompt.id ? null : prompt.id)} style={{ background: "rgba(255,255,255,0.06)", color: "#9090b0", border: "1px solid rgba(255,255,255,0.08)", padding: "8px 14px", borderRadius: 10, cursor: "pointer", fontSize: 13 }}>
                      {expanded === prompt.id ? "Ocultar" : "Ver prompt"}
                    </button>
                    <button onClick={() => copy(prompt.id, prompt.prompt)} style={{ background: copied===prompt.id ? "rgba(34,197,94,0.2)" : "rgba(124,58,237,0.2)", color: copied===prompt.id ? "#22c55e" : "#a78bfa", border: `1px solid ${copied===prompt.id ? "rgba(34,197,94,0.4)" : "rgba(124,58,237,0.3)"}`, padding: "8px 14px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                      {copied === prompt.id ? "✅ Copiado!" : "📋 Copiar prompt"}
                    </button>
                  </div>
                </div>
              </div>

              {expanded === prompt.id && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <pre style={{ padding: "20px 24px", fontSize: 13, lineHeight: 1.8, color: "#c0c0e0", whiteSpace: "pre-wrap", fontFamily: "Inter, sans-serif", background: "rgba(18,18,26,0.5)", margin: 0 }}>{prompt.prompt}</pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add custom prompt section */}
        <div style={{ marginTop: 40, background: "rgba(26,26,38,0.5)", border: "2px dashed rgba(124,58,237,0.2)", borderRadius: 16, padding: "36px", textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>➕</div>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>¿Tenés tu propio prompt?</h3>
          <p style={{ color: "#9090b0", fontSize: 14, marginBottom: 20 }}>Próximamente podrás agregar tus propios prompts al banco personal y compartirlos con tu equipo.</p>
          <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>🔜 Próximamente</span>
        </div>
      </div>
    </div>
  );
}
