"use client";
import { useState } from "react";
import StudioNav from "@/components/StudioNav";
import { BIOLIFFE_PRODUCTS } from "@/lib/products";

const CATEGORIES = ["Todos", "Flyer 9:16", "Story", "Banner", "Video Thumb", "Copy Facebook", "Copy WhatsApp", "Copy TikTok"];

const TEMPLATES = [
  {
    id: "t1", name: "Lanzamiento Premium", category: "Flyer 9:16", product: "Amagy", style: "lujo",
    badge: "🔥 Popular", preview: "linear-gradient(135deg,#1a0533 0%,#4a1080 50%,#7c3aed 100%)",
    tags: ["premium", "lanzamiento", "morado"],
  },
  {
    id: "t2", name: "Oferta Relámpago", category: "Flyer 9:16", product: "Eficlax", style: "fitness",
    badge: "⚡ Nuevo", preview: "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)",
    tags: ["oferta", "urgencia", "azul"],
  },
  {
    id: "t3", name: "Naturaleza y Vida", category: "Story", product: "Purifort", style: "natural",
    badge: "🌿 Eco", preview: "linear-gradient(135deg,#1a3a1a 0%,#2d5a27 50%,#4a8c3f 100%)",
    tags: ["natural", "verde", "salud"],
  },
  {
    id: "t4", name: "Energía Total", category: "Story", product: "Metha", style: "fitness",
    badge: "💪 Fitness", preview: "linear-gradient(135deg,#1a0010 0%,#6b0030 50%,#cc0050 100%)",
    tags: ["energía", "fitness", "rojo"],
  },
  {
    id: "t5", name: "Belleza Radiante", category: "Banner", product: "Revella", style: "lujo",
    badge: "✨ Elegante", preview: "linear-gradient(135deg,#1a0a00 0%,#5c2d00 50%,#c4841d 100%)",
    tags: ["belleza", "colágeno", "dorado"],
  },
  {
    id: "t6", name: "WhatsApp Viral", category: "Copy WhatsApp", product: "Alkam", style: "venta",
    badge: "📱 Viral", preview: "linear-gradient(135deg,#001a0d 0%,#00562b 50%,#25d366 100%)",
    tags: ["whatsapp", "viral", "verde"],
  },
  {
    id: "t7", name: "Facebook Ads Pro", category: "Copy Facebook", product: "Ori", style: "ads",
    badge: "📣 Ads", preview: "linear-gradient(135deg,#000d1a 0%,#003380 50%,#1877f2 100%)",
    tags: ["facebook", "ads", "azul"],
  },
  {
    id: "t8", name: "TikTok Trend", category: "Copy TikTok", product: "Vegafull", style: "trend",
    badge: "🎵 TikTok", preview: "linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 50%,#16213e 100%)",
    tags: ["tiktok", "tendencia", "oscuro"],
  },
  {
    id: "t9", name: "Antes / Después", category: "Video Thumb", product: "Eficlax", style: "resultado",
    badge: "🎯 Resultado", preview: "linear-gradient(135deg,#1a1a1a 0%,#3d3d3d 50%,#7c7c7c 100%)",
    tags: ["antes-despues", "resultado", "gris"],
  },
  {
    id: "t10", name: "Colección Bioliffe", category: "Banner", product: "Amagy", style: "corporativo",
    badge: "🏢 Marca", preview: "linear-gradient(135deg,#0a0a0f 0%,#1e0a3d 50%,#7c3aed 100%)",
    tags: ["marca", "corporativo", "morado"],
  },
  {
    id: "t11", name: "Cierre de Venta", category: "Copy WhatsApp", product: "Metha", style: "cierre",
    badge: "💰 Ventas", preview: "linear-gradient(135deg,#1a1000 0%,#4d3000 50%,#ffa500 100%)",
    tags: ["cierre", "venta", "naranja"],
  },
  {
    id: "t12", name: "Story Minimalista", category: "Story", product: "Revella", style: "minimal",
    badge: "🤍 Clean", preview: "linear-gradient(135deg,#0f0f0f 0%,#1c1c1c 50%,#2a2a2a 100%)",
    tags: ["minimal", "clean", "oscuro"],
  },
];

export default function PlantillasPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = TEMPLATES.filter((t) => {
    const matchCat = activeCategory === "Todos" || t.category === activeCategory;
    const matchSearch = search === "" || t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some((tag) => tag.includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const selectedTemplate = TEMPLATES.find((t) => t.id === selected);
  const selectedProduct = selectedTemplate ? BIOLIFFE_PRODUCTS.find((p) => p.name === selectedTemplate.product) : null;

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>
      <StudioNav />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="badge">🎨 Galería</span>
          <h1 className="gradient-text" style={{ fontSize: 36, fontWeight: 800, margin: "12px 0 8px" }}>
            Plantillas Profesionales
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>
            Elige una plantilla, personalízala y exporta en segundos
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: 24, display: "flex", gap: 12 }}>
          <input
            className="input-field"
            placeholder="🔍 Buscar plantilla, tag o estilo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1 }}
          />
          <button className="btn-primary" style={{ padding: "12px 20px", whiteSpace: "nowrap" }}>
            + Nueva plantilla
          </button>
        </div>

        {/* Category filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: activeCategory === cat ? "2px solid var(--accent)" : "2px solid rgba(255,255,255,0.1)",
                background: activeCategory === cat ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.03)",
                color: activeCategory === cat ? "var(--accent-light)" : "var(--text-secondary)",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: activeCategory === cat ? 600 : 400,
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {filtered.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelected(template.id)}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: selected === template.id ? "2px solid var(--accent)" : "2px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                transition: "all 0.25s",
                background: "var(--bg-card)",
              }}
            >
              {/* Preview */}
              <div
                style={{
                  height: 160,
                  background: template.preview,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span style={{
                  position: "absolute", top: 10, left: 10,
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(4px)",
                  padding: "4px 10px",
                  borderRadius: 20,
                  fontSize: 11,
                  color: "#fff",
                  fontWeight: 600,
                }}>
                  {template.badge}
                </span>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 4 }}>🎨</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{template.category}</div>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "14px 16px" }}>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{template.name}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: 12, marginBottom: 10 }}>
                  Producto: {template.product} · Estilo: {template.style}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {template.tags.map((tag) => (
                    <span key={tag} style={{
                      background: "rgba(124,58,237,0.12)",
                      color: "var(--accent-light)",
                      padding: "2px 8px",
                      borderRadius: 10,
                      fontSize: 10,
                    }}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-secondary)" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
            <p>No se encontraron plantillas para "{search}"</p>
          </div>
        )}

        {/* Selected panel */}
        {selected && selectedTemplate && (
          <div className="glass" style={{ marginTop: 40, borderRadius: 20, padding: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20 }}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{selectedTemplate.name}</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                  Categoría: {selectedTemplate.category} · Producto: {selectedTemplate.product}
                </p>
                {selectedProduct && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontWeight: 600, marginBottom: 8, color: "var(--accent-light)" }}>Producto incluido:</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>
                      {selectedProduct.copyShort}
                    </div>
                  </div>
                )}
              </div>
              <div
                style={{
                  width: 120,
                  height: 200,
                  borderRadius: 12,
                  background: selectedTemplate.preview,
                  flexShrink: 0,
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/editor" className="btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
                ✏️ Usar en Editor →
              </a>
              <button
                style={{
                  padding: "12px 20px", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-primary)", cursor: "pointer", fontSize: 14,
                }}
              >
                💾 Guardar favorito
              </button>
              <button
                onClick={() => setSelected(null)}
                style={{
                  padding: "12px 20px", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "transparent",
                  color: "var(--text-secondary)", cursor: "pointer", fontSize: 14,
                }}
              >
                ✕ Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
