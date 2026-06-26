"use client";
import Link from "next/link";
import StudioNav from "@/components/StudioNav";

const TOOLS = [
  { icon: "🖼️", title: "Generador de Flyers", desc: "Crea flyers 9:16 profesionales con IA en segundos", href: "/studio/flyer", badge: "Popular" },
  { icon: "🎬", title: "Generador de Videos", desc: "Reels, TikToks, Shorts y videos de producto", href: "/videos" },
  { icon: "✍️", title: "Generador de Copys", desc: "Textos para redes, WhatsApp y anuncios", href: "/copy" },
  { icon: "📦", title: "Biblioteca Bioliffe", desc: "8 productos con datos completos por país", href: "/productos" },
  { icon: "💡", title: "Banco de Prompts", desc: "Prompts listos para cualquier estilo", href: "/prompts" },
  { icon: "🖊️", title: "Editor Visual", desc: "Edita y exporta tu contenido", href: "/editor" },
  { icon: "📊", title: "Dashboard", desc: "Todos tus proyectos en un lugar", href: "/dashboard" },
  { icon: "🗂️", title: "Plantillas", desc: "Campañas listas para personalizar", href: "/plantillas" },
];

const QUICK_STATS = [
  { val: "8", label: "Módulos activos", icon: "⚡" },
  { val: "8", label: "Productos Bioliffe", icon: "📦" },
  { val: "10", label: "Prompts listos", icon: "💡" },
  { val: "4", label: "Países con precios", icon: "🌍" },
];

export default function StudioPage() {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60, position: "relative" }}>
          <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>✨ JKings AI Studio</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, marginBottom: 16 }}>
            Bienvenido al{" "}
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Studio</span>
          </h1>
          <p style={{ fontSize: 18, color: "#9090b0", maxWidth: 500, margin: "0 auto" }}>
            Tu plataforma completa para crear contenido de ventas con IA para los productos Bioliffe.
          </p>
        </div>

        {/* Quick stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }}>
          {QUICK_STATS.map(s => (
            <div key={s.label} style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#a78bfa" }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "#9090b0", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f0f0ff" }}>Módulos disponibles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(124,58,237,0.4)"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.transform = "translateY(0)"; }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ fontSize: 28, flexShrink: 0 }}>{tool.icon}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 15, fontWeight: 700 }}>{tool.title}</span>
                      {tool.badge && <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "1px 7px", borderRadius: 20, fontSize: 10, fontWeight: 600 }}>{tool.badge}</span>}
                    </div>
                    <p style={{ fontSize: 13, color: "#9090b0", lineHeight: 1.5 }}>{tool.desc}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick start */}
        <div style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(157,92,240,0.08))", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 20, padding: "36px", textAlign: "center" }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>¿Por dónde empezar?</h3>
          <p style={{ color: "#9090b0", marginBottom: 24, fontSize: 15 }}>Si sos nuevo en el studio, te recomendamos empezar por la Biblioteca de Productos para ver los datos de Bioliffe, luego generar un copy y finalmente crear tu flyer.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/productos" style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>📦 Ver Productos</Link>
            <Link href="/copy" style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>✍️ Generar Copy</Link>
            <Link href="/prompts" style={{ background: "linear-gradient(135deg,#7c3aed,#9d5cf0)", color: "white", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>💡 Ver Prompts →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
