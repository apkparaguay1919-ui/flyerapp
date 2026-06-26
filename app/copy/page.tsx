"use client";
import { useState } from "react";
import StudioNav from "@/components/StudioNav";
import { BIOLIFFE_PRODUCTS } from "@/lib/products";

const COPY_TYPES = [
  { id: "facebook", icon: "📘", title: "Facebook Ads", desc: "Copy optimizado para Meta Ads Manager" },
  { id: "tiktok", icon: "🎵", title: "TikTok Ads", desc: "Copy viral para TikTok For Business" },
  { id: "instagram", icon: "📸", title: "Instagram", desc: "Caption para feed y stories" },
  { id: "whatsapp", icon: "💬", title: "WhatsApp", desc: "Mensaje directo de venta" },
  { id: "respuesta", icon: "🤖", title: "Respuesta automática", desc: "Para responder consultas" },
  { id: "cierre", icon: "💰", title: "Cierre de venta", desc: "Para cerrar cuando el cliente duda" },
  { id: "descripcion", icon: "📋", title: "Descripción de producto", desc: "Ficha completa del producto" },
  { id: "hashtags", icon: "#️⃣", title: "Hashtags", desc: "Set de hashtags optimizados" },
];

function generateCopy(type: string, productId: string, pais: string) {
  const product = BIOLIFFE_PRODUCTS.find(p => p.id === productId);
  if (!product) return "Seleccioná un producto para generar el copy.";
  const priceData = product.price[pais] || product.price["PY"];
  const price = priceData.promo || priceData.amount;
  const currency = priceData.currency;

  const copies: Record<string, string> = {
    facebook: `📣 TEXTO PRIMARIO (125 chars):
${product.copyShort.substring(0, 125)}

📰 TITULAR (27 chars):
${product.name} — Resultado Natural

📝 DESCRIPCIÓN (27 chars):
Pedí el tuyo hoy. Stock limitado.

🖼️ IMAGEN SUGERIDA: Producto sobre fondo degradado oscuro, precio destacado en dorado.

⚠️ Nota: Cumple políticas Meta — sin claims médicos, sin "cura" ni "trata".`,

    tiktok: `🎵 COPY TIKTOK ADS

📌 Texto principal:
${product.copyShort}

🔥 Hook (1er segundo):
"¿Sabías que ${product.benefits[0].toLowerCase()}?"

✅ Beneficios para texto en pantalla:
${product.benefits.map(b => `• ${b}`).join("\n")}

💰 Precio: ${currency} ${price.toLocaleString()}

📲 CTA: "Enlace en bio para más info"`,

    instagram: `📸 CAPTION INSTAGRAM

${product.copyLong}

💰 Precio especial: ${currency} ${price.toLocaleString()}

👇 Escribime por DM o WhatsApp para pedir el tuyo.

${["#salud", "#bienestar", "#natural", "#suplementos", "#vida", `#${product.name.toLowerCase()}`, "#bioliffe", "#distribuidorindependiente", "#emprendimiento", "#latinoamerica"].join(" ")}`,

    whatsapp: product.copyLong + `\n\n💰 Precio especial hoy: ${currency} ${price.toLocaleString()}\n\n📦 Con envío a tu domicilio.\n\n¿Te reservo uno? 😊`,

    respuesta: `👋 ¡Hola! Gracias por tu consulta sobre ${product.name}.

Te cuento rápidamente:

${product.benefits.slice(0, 3).map(b => `✅ ${b}`).join("\n")}

💊 Modo de uso: ${product.modeOfUse}

💰 Precio: ${currency} ${price.toLocaleString()}

📦 Hacemos envíos a todo el país.

¿Tenés alguna pregunta específica? Con gusto te ayudo 😊

⚠️ Recordá: ${product.disclaimer}`,

    cierre: `💪 Entiendo tu duda, ¡es normal querer asegurarse!

Te cuento por qué ${product.name} vale cada peso:

${product.benefits.map(b => `✅ ${b}`).join("\n")}

Y lo mejor: tenés mi acompañamiento personal durante todo el proceso. No sos un número más.

💰 La inversión es de solo ${currency} ${price.toLocaleString()}.

¿Arrancamos? Te reservo tu pedido ahora mismo 🚀

(Solo me quedan pocas unidades disponibles esta semana)`,

    descripcion: `━━━━━━━━━━━━━━━━━━━━━
📦 ${product.name.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━

${product.copyShort}

✨ BENEFICIOS:
${product.benefits.map(b => `• ${b}`).join("\n")}

🌿 INGREDIENTES:
${product.ingredients.join(", ")}

📋 MODO DE USO:
${product.modeOfUse}

💰 PRECIO: ${currency} ${price.toLocaleString()}

⚠️ ADVERTENCIA:
${product.disclaimer}`,

    hashtags: `#️⃣ HASHTAGS PARA ${product.name.toUpperCase()}

🔥 Trending (alta competencia):
#salud #bienestar #natural #suplementos #vida #saludable #fitness #nutricion

🎯 Nicho (media competencia):
#${product.tags.join(" #")} #bioliffe #suplementosnaturales #distribuidorindependiente

🌎 Por país (${pais}):
${pais === "PY" ? "#paraguay #asuncion #paraguaynatural #emprendedorpy" : ""}
${pais === "AR" ? "#argentina #buenosaires #saludnatural #emprendimientoar" : ""}
${pais === "UY" ? "#uruguay #montevideo #saluduy #emprendimientouy" : ""}
${pais === "BO" ? "#bolivia #lapaz #saludbolivia #emprendimientobo" : ""}

💡 CONSEJO: Usar 10-15 hashtags mezclando trending + nicho + país.`,
  };

  return copies[type] || product.copyShort;
}

export default function CopyPage() {
  const [type, setType] = useState("whatsapp");
  const [productId, setProductId] = useState("");
  const [pais, setPais] = useState("PY");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!productId) { alert("Seleccioná un producto."); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setResult(generateCopy(type, productId, pais));
    setLoading(false);
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "#f0f0ff" }}>
      <StudioNav />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>✍️ Generador de Copys</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 12 }}>Copy que<br /><span style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>cierra ventas</span></h1>
          <p style={{ color: "#9090b0", fontSize: 16 }}>Copys listos para Facebook, TikTok, WhatsApp y más con los datos reales de cada producto Bioliffe.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 32 }}>
          {/* Config panel */}
          <div>
            <div style={{ background: "rgba(26,26,38,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 24 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 14, letterSpacing: 1 }}>1. TIPO DE COPY</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {COPY_TYPES.map(ct => (
                  <div key={ct.id} onClick={() => setType(ct.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, cursor: "pointer", background: type===ct.id ? "rgba(124,58,237,0.15)" : "transparent", border: `1px solid ${type===ct.id ? "rgba(124,58,237,0.4)" : "transparent"}`, transition: "all 0.2s" }}>
                    <span style={{ fontSize: 20 }}>{ct.icon}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: type===ct.id ? "#a78bfa" : "#f0f0ff" }}>{ct.title}</div>
                      <div style={{ fontSize: 11, color: "#9090b0" }}>{ct.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>2. PRODUCTO</h3>
              <select value={productId} onChange={e => setProductId(e.target.value)} style={{ background: "rgba(18,18,26,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: productId ? "#f0f0ff" : "#9090b0", padding: "12px 16px", borderRadius: 12, fontSize: 14, width: "100%", outline: "none", marginBottom: 16 }}>
                <option value="">Elegí un producto...</option>
                {BIOLIFFE_PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name} — {p.category}</option>)}
              </select>

              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 12, letterSpacing: 1 }}>3. PAÍS</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
                {[["PY","🇵🇾 Paraguay"],["AR","🇦🇷 Argentina"],["UY","🇺🇾 Uruguay"],["BO","🇧🇴 Bolivia"]].map(([code,name]) => (
                  <div key={code} onClick={() => setPais(code)} style={{ padding: "10px 12px", borderRadius: 10, cursor: "pointer", textAlign: "center", background: pais===code ? "rgba(124,58,237,0.2)" : "rgba(18,18,26,0.5)", border: `1px solid ${pais===code ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.06)"}`, fontSize: 13, fontWeight: pais===code ? 700 : 500, color: pais===code ? "#a78bfa" : "#9090b0", transition: "all 0.2s" }}>
                    {name}
                  </div>
                ))}
              </div>

              <button onClick={generate} disabled={loading} style={{ background: "linear-gradient(135deg,#7c3aed,#9d5cf0)", color: "white", padding: "14px 20px", borderRadius: 12, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", width: "100%", opacity: loading ? 0.7 : 1 }}>
                {loading ? "⏳ Generando..." : "✍️ Generar copy →"}
              </button>
            </div>
          </div>

          {/* Result */}
          <div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "#9090b0", marginBottom: 16, letterSpacing: 1 }}>COPY GENERADO</h3>
            {result ? (
              <div>
                <pre style={{ background: "rgba(18,18,26,0.9)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: 28, fontSize: 14, lineHeight: 1.8, color: "#d0d0f0", whiteSpace: "pre-wrap", minHeight: 400, fontFamily: "Inter, sans-serif" }}>{result}</pre>
                <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                  <button onClick={() => navigator.clipboard.writeText(result)} style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>📋 Copiar</button>
                  <button onClick={() => setResult("")} style={{ background: "transparent", color: "#9090b0", border: "1px solid rgba(255,255,255,0.08)", padding: "10px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14 }}>🗑️ Limpiar</button>
                </div>
              </div>
            ) : (
              <div style={{ background: "rgba(26,26,38,0.5)", border: "2px dashed rgba(124,58,237,0.15)", borderRadius: 16, padding: "80px 24px", textAlign: "center", minHeight: 500, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✍️</div>
                <p style={{ color: "#9090b0", fontSize: 15 }}>Elegí el tipo de copy, el producto y el país para generar tu texto.</p>
                <p style={{ color: "#5050a0", fontSize: 13, marginTop: 8 }}>Los copys incluyen precio real según el país seleccionado.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
