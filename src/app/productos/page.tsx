"use client";
import { useState } from "react";
import StudioNav from "@/components/StudioNav";
import { BIOLIFFE_PRODUCTS, Product } from "@/lib/products";

const PAISES = [
  { code: "PY", flag: "🇵🇾", name: "Paraguay" },
  { code: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "UY", flag: "🇺🇾", name: "Uruguay" },
  { code: "BO", flag: "🇧🇴", name: "Bolivia" },
];

function ProductCard({ product, pais, onClick }: { product: Product; pais: string; onClick: () => void }) {
  const priceData = product.price[pais];
  return (
    <div onClick={onClick} style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(124,58,237,0.4)"; el.style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.transform = "translateY(0)"; }}>
      <div style={{ position: "relative" }}>
        <img src={product.photo} alt={product.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span style={{ background: "rgba(124,58,237,0.8)", color: "white", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{product.category}</span>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#f0f0ff", marginBottom: 6 }}>{product.name}</h3>
        <p style={{ fontSize: 13, color: "#9090b0", marginBottom: 14, lineHeight: 1.5 }}>{product.copyShort.substring(0, 80)}...</p>
        {priceData && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {priceData.promo && <span style={{ fontSize: 13, color: "#6b7280", textDecoration: "line-through" }}>{priceData.currency} {priceData.amount.toLocaleString()}</span>}
            <span style={{ fontSize: 20, fontWeight: 800, color: "#a78bfa" }}>{priceData.currency} {(priceData.promo || priceData.amount).toLocaleString()}</span>
            {priceData.promo && <span style={{ background: "rgba(245,158,11,0.2)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)", padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>OFERTA</span>}
          </div>
        )}
        <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
          {product.tags.slice(0, 3).map(t => (
            <span key={t} style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)", padding: "2px 8px", borderRadius: 20, fontSize: 11 }}>#{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, pais, onClose }: { product: Product; pais: string; onClose: () => void }) {
  const [tab, setTab] = useState<"info" | "copy" | "precios">("info");
  const priceData = product.price[pais];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={onClose}>
      <div style={{ background: "#12121a", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 24, maxWidth: 700, width: "100%", maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <div style={{ position: "relative" }}>
          <img src={product.photo} alt={product.name} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "24px 24px 0 0" }} />
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.6)", border: "none", color: "white", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18 }}>✕</button>
        </div>
        <div style={{ padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: "#f0f0ff" }}>{product.name}</h2>
              <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{product.category}</span>
            </div>
            {priceData && (
              <div style={{ textAlign: "right" }}>
                {priceData.promo && <div style={{ fontSize: 12, color: "#6b7280", textDecoration: "line-through" }}>{priceData.currency} {priceData.amount.toLocaleString()}</div>}
                <div style={{ fontSize: 24, fontWeight: 800, color: "#a78bfa" }}>{priceData.currency} {(priceData.promo || priceData.amount).toLocaleString()}</div>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
            {([["info","📋 Info"],["copy","✍️ Copys"],["precios","💰 Precios"]] as [string,string][]).map(([id,label]) => (
              <button key={id} onClick={() => setTab(id as "info"|"copy"|"precios")} style={{ background: tab===id ? "rgba(124,58,237,0.2)" : "transparent", color: tab===id ? "#a78bfa" : "#9090b0", border: `1px solid ${tab===id ? "rgba(124,58,237,0.4)" : "transparent"}`, padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>{label}</button>
            ))}
          </div>

          {tab === "info" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 10, letterSpacing: 1 }}>BENEFICIOS</h4>
                {product.benefits.map(b => <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}><span style={{ color: "#22c55e", marginTop: 2 }}>✅</span><span style={{ fontSize: 14, color: "#d0d0f0" }}>{b}</span></div>)}
              </div>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 10, letterSpacing: 1 }}>INGREDIENTES</h4>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {product.ingredients.map(ing => <span key={ing} style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)", padding: "4px 10px", borderRadius: 20, fontSize: 12 }}>{ing}</span>)}
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 10, letterSpacing: 1 }}>MODO DE USO</h4>
                <p style={{ fontSize: 14, color: "#d0d0f0", lineHeight: 1.6, background: "rgba(18,18,26,0.5)", padding: 14, borderRadius: 10 }}>{product.modeOfUse}</p>
              </div>
              <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: 14 }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: "#f59e0b", marginBottom: 6, letterSpacing: 1 }}>⚠️ ADVERTENCIA RESPONSABLE</h4>
                <p style={{ fontSize: 12, color: "#9090b0", lineHeight: 1.6 }}>{product.disclaimer}</p>
              </div>
            </div>
          )}

          {tab === "copy" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", letterSpacing: 1 }}>COPY CORTO</h4>
                  <button onClick={() => navigator.clipboard.writeText(product.copyShort)} style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "none", padding: "4px 10px", borderRadius: 8, cursor: "pointer", fontSize: 12 }}>Copiar</button>
                </div>
                <p style={{ background: "rgba(18,18,26,0.8)", borderRadius: 12, padding: 16, fontSize: 14, color: "#d0d0f0", lineHeight: 1.7, border: "1px solid rgba(255,255,255,0.06)" }}>{product.copyShort}</p>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", letterSpacing: 1 }}>COPY LARGO</h4>
                  <button onClick={() => navigator.clipboard.writeText(product.copyLong)} style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "none", padding: "4px 10px", borderRadius: 8, cursor: "pointer", fontSize: 12 }}>Copiar</button>
                </div>
                <pre style={{ background: "rgba(18,18,26,0.8)", borderRadius: 12, padding: 16, fontSize: 13, color: "#d0d0f0", lineHeight: 1.8, border: "1px solid rgba(255,255,255,0.06)", whiteSpace: "pre-wrap", fontFamily: "Inter, sans-serif" }}>{product.copyLong}</pre>
              </div>
            </div>
          )}

          {tab === "precios" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {PAISES.map(p => {
                const pd = product.price[p.code];
                if (!pd) return null;
                return (
                  <div key={p.code} style={{ background: "rgba(18,18,26,0.5)", borderRadius: 14, padding: 18, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{p.flag} {p.name}</div>
                    {pd.promo && <div style={{ fontSize: 12, color: "#6b7280", textDecoration: "line-through" }}>{pd.currency} {pd.amount.toLocaleString()}</div>}
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#a78bfa" }}>{pd.currency} {(pd.promo || pd.amount).toLocaleString()}</div>
                    {pd.promo && <div style={{ fontSize: 11, color: "#f59e0b", marginTop: 4 }}>Precio especial activo</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductosPage() {
  const [pais, setPais] = useState("PY");
  const [selected, setSelected] = useState<Product | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(BIOLIFFE_PRODUCTS.map(p => p.category))];
  const filtered = filter === "all" ? BIOLIFFE_PRODUCTS : BIOLIFFE_PRODUCTS.filter(p => p.category === filter);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>📦 Biblioteca de Productos</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 12 }}>Productos<br /><span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bioliffe</span></h1>
          <p style={{ color: "#9090b0", fontSize: 16 }}>Base de datos completa con información, precios por país, copys y advertencias responsables.</p>
        </div>

        {/* Country selector */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          <span style={{ fontSize: 14, color: "#9090b0", alignSelf: "center" }}>Precios para:</span>
          {PAISES.map(p => (
            <button key={p.code} onClick={() => setPais(p.code)} style={{ background: pais===p.code ? "rgba(124,58,237,0.2)" : "rgba(26,26,38,0.8)", color: pais===p.code ? "#a78bfa" : "#9090b0", border: `1px solid ${pais===p.code ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)"}`, padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontWeight: pais===p.code ? 700 : 500, fontSize: 14 }}>{p.flag} {p.name}</button>
          ))}
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ background: filter===cat ? "rgba(124,58,237,0.2)" : "transparent", color: filter===cat ? "#a78bfa" : "#9090b0", border: `1px solid ${filter===cat ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)"}`, padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: filter===cat ? 700 : 500 }}>{cat === "all" ? "Todos" : cat}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} pais={pais} onClick={() => setSelected(p)} />)}
        </div>
      </div>

      {selected && <ProductModal product={selected} pais={pais} onClose={() => setSelected(null)} />}
    </div>
  );
}
