"use client";
import { useState } from "react";
import Link from "next/link";
import StudioNav from "@/components/StudioNav";
import { BIOLIFFE_PRODUCTS } from "@/lib/products";

const DEMO_PROJECTS = [
  { id: 1, type: "flyer", title: "Flyer Eficlax — Paraguay", date: "Hoy, 10:32", status: "Listo", thumb: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&q=80" },
  { id: 2, type: "copy", title: "Copy WhatsApp — Vegafull", date: "Ayer, 18:45", status: "Listo", thumb: null },
  { id: 3, type: "video", title: "Guión Reel — Revella", date: "Hace 2 días", status: "Borrador", thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80" },
  { id: 4, type: "flyer", title: "Flyer Metha — Argentina", date: "Hace 3 días", status: "Listo", thumb: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&q=80" },
  { id: 5, type: "copy", title: "Facebook Ads — Amagy", date: "Hace 4 días", status: "Listo", thumb: null },
  { id: 6, type: "flyer", title: "Flyer Purifort — Uruguay", date: "Hace 5 días", status: "Borrador", thumb: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&q=80" },
];

const TYPE_ICONS: Record<string, string> = { flyer: "🖼️", copy: "✍️", video: "🎬" };
const TYPE_COLORS: Record<string, string> = { flyer: "#7c3aed", copy: "#0891b2", video: "#dc2626" };

const TABS = ["Todos", "Flyers", "Videos", "Copys", "Favoritos"];

const QUICK_LINKS = [
  { href: "/studio", icon: "✨", label: "Nuevo proyecto" },
  { href: "/videos", icon: "🎬", label: "Crear video" },
  { href: "/copy", icon: "✍️", label: "Generar copy" },
  { href: "/productos", icon: "📦", label: "Ver productos" },
  { href: "/prompts", icon: "💡", label: "Banco de prompts" },
  { href: "/editor", icon: "🖊️", label: "Editor visual" },
];

export default function DashboardPage() {
  const [tab, setTab] = useState("Todos");

  const filtered = tab === "Todos" ? DEMO_PROJECTS
    : tab === "Flyers" ? DEMO_PROJECTS.filter(p => p.type === "flyer")
    : tab === "Videos" ? DEMO_PROJECTS.filter(p => p.type === "video")
    : tab === "Copys" ? DEMO_PROJECTS.filter(p => p.type === "copy")
    : DEMO_PROJECTS.filter(p => p.id <= 2);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
          <div>
            <h1 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, marginBottom: 4 }}>Mi Dashboard</h1>
            <p style={{ color: "#9090b0", fontSize: 15 }}>Todos tus proyectos, historial y favoritos en un lugar.</p>
          </div>
          <Link href="/studio" style={{ background: "linear-gradient(135deg,#7c3aed,#9d5cf0)", color: "white", padding: "12px 24px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            ✨ Nuevo proyecto
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14, marginBottom: 40 }}>
          {[
            { val: DEMO_PROJECTS.length, label: "Proyectos totales", icon: "📁", color: "#a78bfa" },
            { val: DEMO_PROJECTS.filter(p=>p.type==="flyer").length, label: "Flyers", icon: "🖼️", color: "#7c3aed" },
            { val: DEMO_PROJECTS.filter(p=>p.type==="video").length, label: "Videos", icon: "🎬", color: "#dc2626" },
            { val: DEMO_PROJECTS.filter(p=>p.type==="copy").length, label: "Copys", icon: "✍️", color: "#0891b2" },
            { val: DEMO_PROJECTS.filter(p=>p.status==="Listo").length, label: "Listos", icon: "✅", color: "#22c55e" },
            { val: 8, label: "Productos", icon: "📦", color: "#f59e0b" },
          ].map(s => (
            <div key={s.label} style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "18px 16px" }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "#9090b0", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 32 }}>
          {/* Projects */}
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {TABS.map(t => (
                <button key={t} onClick={() => setTab(t)} style={{ background: tab===t ? "rgba(124,58,237,0.2)" : "rgba(26,26,38,0.8)", color: tab===t ? "#a78bfa" : "#9090b0", border: `1px solid ${tab===t ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)"}`, padding: "7px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: tab===t ? 700 : 500 }}>{t}</button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#9090b0" }}>No hay proyectos en esta categoría</div>
              ) : filtered.map(project => (
                <div key={project.id} style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 16, alignItems: "center", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"}>
                  {project.thumb ? (
                    <img src={project.thumb} alt="" style={{ width: 48, height: 48, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 48, height: 48, borderRadius: 8, background: `rgba(${TYPE_COLORS[project.type] === "#7c3aed" ? "124,58,237" : TYPE_COLORS[project.type] === "#0891b2" ? "8,145,178" : "220,38,38"},0.15)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{TYPE_ICONS[project.type]}</div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#f0f0ff", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.title}</div>
                    <div style={{ fontSize: 12, color: "#9090b0" }}>{project.date}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                    <span style={{ background: project.status==="Listo" ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)", color: project.status==="Listo" ? "#22c55e" : "#f59e0b", border: `1px solid ${project.status==="Listo" ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)"}`, padding: "2px 8px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{project.status}</span>
                    <button style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)", padding: "6px 12px", borderRadius: 8, cursor: "pointer", fontSize: 12 }}>Abrir</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Quick links */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 14, letterSpacing: 1 }}>ACCESOS RÁPIDOS</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {QUICK_LINKS.map(l => (
                  <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 10, background: "rgba(18,18,26,0.5)", textDecoration: "none", color: "#d0d0f0", fontSize: 14, transition: "background 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(18,18,26,0.5)"}>
                    <span style={{ fontSize: 18 }}>{l.icon}</span>{l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products mini */}
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", letterSpacing: 1 }}>PRODUCTOS BIOLIFFE</h3>
                <Link href="/productos" style={{ fontSize: 12, color: "#7c3aed", textDecoration: "none" }}>Ver todos →</Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {BIOLIFFE_PRODUCTS.slice(0,5).map(p => (
                  <Link key={p.id} href="/productos" style={{ display: "flex", gap: 10, alignItems: "center", textDecoration: "none" }}>
                    <img src={p.photo} alt={p.name} style={{ width: 36, height: 36, borderRadius: 8, objectFit: "cover" }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#f0f0ff" }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: "#9090b0" }}>{p.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
