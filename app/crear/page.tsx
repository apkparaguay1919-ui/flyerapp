"use client";
import { useState, useRef } from "react";

const PLANTILLAS = [
  { id: "metha-hero", src: "/flyers/metha-hero.webp", producto: "Metha", seccion: "hero", label: "Hero / Gancho" },
  { id: "metha-oferta", src: "/flyers/metha-oferta.webp", producto: "Metha", seccion: "oferta", label: "Oferta Irresistible" },
  { id: "metha-antes-despues", src: "/flyers/metha-antes-despues.webp", producto: "Metha", seccion: "antes_despues", label: "Antes / Después" },
  { id: "metha-testimonios", src: "/flyers/metha-testimonios.webp", producto: "Metha", seccion: "testimonios", label: "Testimonios" },
  { id: "metha-como-usar", src: "/flyers/metha-como-usar.webp", producto: "Metha", seccion: "como_usar", label: "Cómo Usar" },
  { id: "eficlax-hero", src: "/flyers/eficlax-hero.webp", producto: "Eficlax", seccion: "hero", label: "Hero / Gancho" },
  { id: "eficlax-oferta", src: "/flyers/eficlax-oferta.webp", producto: "Eficlax", seccion: "oferta", label: "Oferta Irresistible" },
  { id: "eficlax-antes-despues", src: "/flyers/eficlax-antes-despues.webp", producto: "Eficlax", seccion: "antes_despues", label: "Antes / Después" },
  { id: "eficlax-hero2", src: "/flyers/eficlax-hero2.png", producto: "Eficlax", seccion: "hero", label: "Hero Premium" },
  { id: "eficlax-oferta2", src: "/flyers/eficlax-oferta2.jpg", producto: "Eficlax", seccion: "oferta", label: "Oferta Combos" },
  { id: "eficlax-antes-despues2", src: "/flyers/eficlax-antes-despues2.jpg", producto: "Eficlax", seccion: "antes_despues", label: "Transformación" },
  { id: "metha-testimonios2", src: "/flyers/metha-testimonios2.webp", producto: "Metha", seccion: "testimonios", label: "Reseñas Reales" },
];

const SECCIONES = [
  { id: "todos", label: "Todos" },
  { id: "hero", label: "Hero / Gancho" },
  { id: "oferta", label: "Oferta Irresistible" },
  { id: "antes_despues", label: "Antes y Después" },
  { id: "testimonios", label: "Testimonios" },
  { id: "como_usar", label: "Cómo Usar" },
  { id: "beneficios", label: "Beneficios" },
  { id: "logistica", label: "Logística" },
];

const TAMANOS = [
  { id: "1024x1792", label: "Instagram Stories (1080×1920) - Recomendado" },
  { id: "1024x1024", label: "Feed Instagram (1080×1080)" },
  { id: "1792x1024", label: "Facebook Ads (1920×1080)" },
  { id: "1024x1280", label: "Feed Portrait (1080×1350)" },
];

const IDIOMAS = ["Español", "Inglés", "Portugués"];

const PAISES = [
  { code: "PY", name: "Paraguay", symbol: "¢", flag: "🇵🇾" },
  { code: "AR", name: "Argentina", symbol: "ARS", flag: "🇦🇷" },
  { code: "UY", name: "Uruguay", symbol: "UYU", flag: "🇺🇾" },
  { code: "BO", name: "Bolivia", symbol: "Bs", flag: "🇧🇴" },
  { code: "CO", name: "Colombia", symbol: "COP", flag: "🇨🇴" },
  { code: "MX", name: "México", symbol: "MXN", flag: "🇲🇽" },
  { code: "CL", name: "Chile", symbol: "CLP", flag: "🇨🇱" },
  { code: "PE", name: "Perú", symbol: "PEN", flag: "🇵🇪" },
  { code: "US", name: "USA", symbol: "USD", flag: "🇺🇸" },
];

const PRODUCTOS_BIOLIFFE = [
  { id: "eficlax", name: "Eficlax" },
  { id: "metha", name: "Metha" },
  { id: "alkam", name: "Alkam" },
  { id: "revella", name: "Revella" },
  { id: "ori", name: "Ori" },
  { id: "purifort", name: "Purifort" },
  { id: "amagy", name: "Amagy" },
  { id: "vegafull", name: "Vegafull" },
];

export default function Crear() {
  const [seccionFiltro, setSeccionFiltro] = useState("todos");
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState<string | null>(null);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [seccion, setSeccion] = useState("hero");
  const [tamano, setTamano] = useState("1024x1792");
  const [idioma, setIdioma] = useState("Español");
  const [pais, setPais] = useState("PY");
  const [productoId, setProductoId] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [fotos, setFotos] = useState<string[]>([]);
  const [mostrarAvanzado, setMostrarAvanzado] = useState(false);
  const [descripcion, setDescripcion] = useState("");
  const [anguloVenta, setAnguloVenta] = useState("");
  const [avatarCliente, setAvatarCliente] = useState("");
  const [precioComparacion, setPrecioComparacion] = useState("");
  const [precio1, setPrecio1] = useState("");
  const [precio2, setPrecio2] = useState("");
  const [precio3, setPrecio3] = useState("");
  const [simboloMoneda, setSimboloMoneda] = useState("¢");
  const [instrucciones, setInstrucciones] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seccionesGeneradas, setSeccionesGeneradas] = useState<Array<{id:string, tipo:string, url:string}>>([]);

  const paisActual = PAISES.find(p => p.code === pais) || PAISES[0];

  const plantillasFiltradas = PLANTILLAS.filter(p =>
    seccionFiltro === "todos" || p.seccion === seccionFiltro
  );

  const handleFoto = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFotos(prev => { const arr = [...prev]; arr[idx] = reader.result as string; return arr; });
    };
    reader.readAsDataURL(file);
  };

  const usarPlantilla = (plantilla: typeof PLANTILLAS[0]) => {
    setPlantillaSeleccionada(plantilla.id);
    setSeccion(plantilla.seccion);
    setNombreProducto(plantilla.producto);
    setProductoId(plantilla.producto.toLowerCase());
    setMostrarGaleria(false);
  };

  const generar = async () => {
    if (!nombreProducto) { setError("Ingresá el nombre del producto"); return; }
    setLoading(true); setError(null); setImageUrl(null);
    try {
      const plantilla = PLANTILLAS.find(p => p.id === plantillaSeleccionada);
      const res = await fetch("/api/generar-imagen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          producto: nombreProducto,
          beneficios: descripcion,
          precio: precio1,
          precio2, precio3,
          precioComparacion,
          pais: paisActual.name,
          simboloMoneda: simboloMoneda || paisActual.symbol,
          seccion,
          anguloVenta, avatarCliente, instrucciones,
          tamano,
          plantillaReferencia: plantilla?.src,
        }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      setImageUrl(data.imageUrl);
      setSeccionesGeneradas(prev => [{ id: Date.now().toString(), tipo: SECCIONES.find(s => s.id === seccion)?.label || seccion, url: data.imageUrl }, ...prev]);
    } catch {
      setError("Error de conexión. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const descargar = (url: string, nombre: string) => {
    const a = document.createElement("a");
    a.href = url; a.download = nombre; a.target = "_blank"; a.click();
  };

  const inp: React.CSSProperties = { background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "10px 14px", color: "white", fontSize: 13, outline: "none", width: "100%", boxSizing: "border-box", fontFamily: "inherit" };

  return (
    <main style={{ minHeight: "100vh", background: "#0f0f1a", color: "white", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0f0f1a", position: "sticky", top: 0, zIndex: 50 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#7c3aed,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14 }}>J</div>
          <span style={{ fontWeight: 800, fontSize: 14, color: "white" }}>JKings <span style={{ background: "linear-gradient(90deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI Studio</span></span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", padding: "4px 12px", borderRadius: 20, fontSize: 12, color: "#a78bfa", fontWeight: 600 }}>⚡ 5 créditos gratis</span>
          <a href="/studio" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← Volver</a>
        </div>
      </nav>

      {/* GALERÍA MODAL */}
      {mostrarGaleria && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div style={{ background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, width: "100%", maxWidth: 1100, maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* Header galería */}
            <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, background: "rgba(124,58,237,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🎨</div>
                <h2 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>Galería de Diseños</h2>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "6px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Todos</button>
                <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "6px 16px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Mías</button>
                <button onClick={() => setMostrarGaleria(false)} style={{ background: "none", border: "none", color: "#6b7280", fontSize: 20, cursor: "pointer", padding: 4 }}>✕</button>
              </div>
            </div>

            {/* Filtros */}
            <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>TIPO DE SECCIÓN</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {SECCIONES.map(s => (
                  <button key={s.id} onClick={() => setSeccionFiltro(s.id)}
                    style={{ padding: "6px 14px", borderRadius: 20, border: "none", background: seccionFiltro === s.id ? "#7c3aed" : "rgba(255,255,255,0.06)", color: seccionFiltro === s.id ? "white" : "#9ca3af", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de plantillas */}
            <div style={{ overflowY: "auto", padding: 24, flex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 16 }}>
                {plantillasFiltradas.map(plantilla => (
                  <div key={plantilla.id}
                    onClick={() => setPlantillaSeleccionada(plantilla.id)}
                    style={{ borderRadius: 12, overflow: "hidden", border: plantillaSeleccionada === plantilla.id ? "2px solid #7c3aed" : "2px solid rgba(255,255,255,0.06)", cursor: "pointer", transition: "all 0.2s", background: "#1a1a2e" }}>
                    <img src={plantilla.src} alt={plantilla.label} style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block" }} />
                    <div style={{ padding: "8px 10px", fontSize: 11, color: "#9ca3af" }}>
                      <div style={{ fontWeight: 700, color: "white", marginBottom: 2 }}>{plantilla.producto}</div>
                      {plantilla.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer galería */}
            <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#6b7280", fontSize: 13 }}>Haz clic en un template para seleccionarlo</span>
              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => setMostrarGaleria(false)} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "10px 20px", borderRadius: 10, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Cancelar</button>
                <button onClick={() => { const p = PLANTILLAS.find(p => p.id === plantillaSeleccionada); if(p) usarPlantilla(p); }}
                  style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", border: "none", color: "white", padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Usar Este Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", minHeight: "calc(100vh - 57px)" }}>

        {/* PANEL IZQUIERDO */}
        <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", overflowY: "auto", padding: "20px 20px 40px" }}>

          {/* TIP PRO */}
          <div style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(236,72,153,0.08))", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 12, padding: "12px 14px", marginBottom: 20, display: "flex", gap: 10 }}>
            <span style={{ fontSize: 16 }}>💡</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#a78bfa", marginBottom: 2 }}>Tip Pro: Guía de Estilo</div>
              <div style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.5 }}>Genera primero un Hero. Las siguientes secciones mantendrán el mismo look profesional.</div>
            </div>
          </div>

          {/* FOTOS DEL PRODUCTO */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              Fotos del Producto <span style={{ color: "#6b7280", fontWeight: 400, fontSize: 12 }}>(agrega de 1 a 3 fotos)</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[0, 1, 2].map(idx => (
                <label key={idx} style={{ aspectRatio: "1", borderRadius: 10, border: fotos[idx] ? "2px solid rgba(124,58,237,0.5)" : "2px dashed rgba(255,255,255,0.1)", overflow: "hidden", cursor: "pointer", background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  {fotos[idx] ? (
                    <>
                      <img src={fotos[idx]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <button onClick={e => { e.preventDefault(); setFotos(prev => { const a = [...prev]; a[idx] = ""; return a; }); }}
                        style={{ position: "absolute", top: 4, right: 4, background: "rgba(239,68,68,0.9)", border: "none", borderRadius: "50%", width: 18, height: 18, color: "white", fontSize: 9, cursor: "pointer" }}>✕</button>
                    </>
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 22, color: "#374151" }}>+</div>
                      <div style={{ fontSize: 10, color: "#4b5563" }}>Imagen {idx + 1}</div>
                    </div>
                  )}
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleFoto(e, idx)} />
                </label>
              ))}
            </div>
          </div>

          {/* PLANTILLA */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              Plantilla <span style={{ color: "#6b7280", fontWeight: 400, fontSize: 12 }}>(selecciona de la galería)</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              {plantillaSeleccionada ? (
                <div style={{ width: 80, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "2px solid rgba(124,58,237,0.5)" }}>
                  <img src={PLANTILLAS.find(p => p.id === plantillaSeleccionada)?.src} style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "4px 6px", fontSize: 9, color: "#9ca3af", background: "#1a1a2e", textAlign: "center" }}>
                    {PLANTILLAS.find(p => p.id === plantillaSeleccionada)?.producto}
                    <br />Clic para cambiar
                  </div>
                </div>
              ) : null}
              <button onClick={() => setMostrarGaleria(true)}
                style={{ flex: 1, background: "linear-gradient(135deg,#7c3aed,#ec4899)", border: "none", color: "white", padding: "14px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(124,58,237,0.3)" }}>
                {plantillaSeleccionada ? "🔄 Cambiar Plantilla" : "🎨 Seleccionar Plantilla"}
              </button>
            </div>
          </div>

          {/* PRODUCTO */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Producto</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
              {PRODUCTOS_BIOLIFFE.map(prod => (
                <button key={prod.id} onClick={() => { setProductoId(prod.id); setNombreProducto(prod.name); }}
                  style={{ padding: "8px 10px", borderRadius: 8, border: productoId === prod.id ? "1.5px solid #7c3aed" : "1px solid rgba(255,255,255,0.07)", background: productoId === prod.id ? "rgba(124,58,237,0.15)" : "#1a1a2e", color: productoId === prod.id ? "white" : "#9ca3af", cursor: "pointer", fontSize: 12, fontWeight: productoId === prod.id ? 700 : 400, fontFamily: "inherit", transition: "all 0.15s" }}>
                  {prod.name}
                </button>
              ))}
            </div>
            <input style={inp} placeholder="O escribí el nombre de tu producto..." value={nombreProducto} onChange={e => setNombreProducto(e.target.value)} />
          </div>

          {/* TAMAÑO E IDIOMA */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>📐 Tamaño de Salida</div>
              <select style={inp} value={tamano} onChange={e => setTamano(e.target.value)}>
                {TAMANOS.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>🌐 Idioma</div>
              <select style={inp} value={idioma} onChange={e => setIdioma(e.target.value)}>
                {IDIOMAS.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
          </div>

          {/* CONTROLES AVANZADOS */}
          <div style={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, marginBottom: 20, overflow: "hidden" }}>
            <button onClick={() => setMostrarAvanzado(!mostrarAvanzado)}
              style={{ width: "100%", padding: "14px 16px", background: "none", border: "none", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontFamily: "inherit" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span>✨</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>Controles Avanzados</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>Personaliza tu sección</div>
                </div>
              </div>
              <div style={{ width: 36, height: 20, borderRadius: 10, background: mostrarAvanzado ? "#7c3aed" : "#374151", position: "relative", transition: "all 0.2s" }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "white", position: "absolute", top: 2, left: mostrarAvanzado ? 18 : 2, transition: "all 0.2s" }}/>
              </div>
            </button>

            {mostrarAvanzado && (
              <div style={{ padding: "0 16px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14, marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>📍 País de venta</div>
                    <select style={inp} value={pais} onChange={e => { setPais(e.target.value); const p = PAISES.find(p => p.code === e.target.value); if(p) setSimboloMoneda(p.symbol); }}>
                      {PAISES.map(p => <option key={p.code} value={p.code}>{p.flag} {p.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>💰 Símbolo moneda</div>
                    <input style={inp} value={simboloMoneda} onChange={e => setSimboloMoneda(e.target.value)} placeholder="¢" />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                  {[
                    { label: "🏷️ Precio comparación", val: precioComparacion, set: setPrecioComparacion, ph: "Ejemplo: 97.00" },
                    { label: "💵 Precio 1 Unidad", val: precio1, set: setPrecio1, ph: "Ejemplo: 47.00" },
                    { label: "📦 Precio 2 Unidades", val: precio2, set: setPrecio2, ph: "Ejemplo: 79.00" },
                    { label: "🎁 Precio 3 Unidades", val: precio3, set: setPrecio3, ph: "Ejemplo: 99.00" },
                  ].map(f => (
                    <div key={f.label}>
                      <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>{f.label}</div>
                      <div style={{ display: "flex", alignItems: "center", background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden" }}>
                        <span style={{ padding: "0 10px", color: "#6b7280", fontSize: 13 }}>{simboloMoneda}</span>
                        <input style={{ ...inp, border: "none", background: "transparent", padding: "10px 8px" }} placeholder={f.ph} value={f.val} onChange={e => f.set(e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>📝 Detalles del Producto</div>
                  <textarea style={{ ...inp, resize: "none" } as React.CSSProperties} rows={3} placeholder="Describe tu producto, características, beneficios..." value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>🎯 Ángulo de Venta</div>
                    <input style={inp} placeholder="Enfoque principal..." value={anguloVenta} onChange={e => setAnguloVenta(e.target.value)} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>👤 Avatar Cliente</div>
                    <input style={inp} placeholder="¿Quién es tu cliente?..." value={avatarCliente} onChange={e => setAvatarCliente(e.target.value)} />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6, fontWeight: 600 }}>💬 Instrucciones Adicionales</div>
                  <input style={inp} placeholder="Instrucción específica para la IA..." value={instrucciones} onChange={e => setInstrucciones(e.target.value)} />
                </div>
              </div>
            )}
          </div>

          {error && <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10, padding: "10px 14px", color: "#fca5a5", fontSize: 13, marginBottom: 16 }}>{error}</div>}

          <button onClick={generar} disabled={loading}
            style={{ width: "100%", background: loading ? "#374151" : "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "16px", borderRadius: 12, fontSize: 15, fontWeight: 800, cursor: loading ? "not-allowed" : "pointer", boxShadow: loading ? "none" : "0 8px 24px rgba(124,58,237,0.4)", fontFamily: "inherit" }}>
            {loading ? "⏳ Generando... (30-60s)" : "✨ Generar Sección"}
          </button>
        </div>

        {/* PANEL DERECHO */}
        <div style={{ padding: 24, overflowY: "auto", background: "#0a0a14" }}>
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>Secciones Generadas</h2>
            <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>Las secciones que generes aparecerán aquí organizadas por tipo</p>
          </div>

          {(loading || imageUrl) && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Vista previa actual</div>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 160, flexShrink: 0, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#1a1a2e", aspectRatio: "9/16", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {loading ? (
                    <div style={{ textAlign: "center", padding: 16 }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>⚡</div>
                      <p style={{ color: "#a78bfa", fontSize: 11, fontWeight: 600 }}>Generando...</p>
                    </div>
                  ) : imageUrl ? (
                    <img src={imageUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : null}
                </div>
                {imageUrl && !loading && (
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>{nombreProducto}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <button onClick={() => descargar(imageUrl, `jkings-${nombreProducto}.png`)}
                        style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>⬇️ Descargar HD</button>
                      <button onClick={generar}
                        style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: 10, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>🔄 Regenerar</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {seccionesGeneradas.length > 0 ? (
            <div>
              <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Todas las secciones ({seccionesGeneradas.length})</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 14 }}>
                {seccionesGeneradas.map(s => (
                  <div key={s.id} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#1a1a2e" }}>
                    <img src={s.url} style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block" }} />
                    <div style={{ padding: "8px 10px" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 6 }}>{s.tipo}</div>
                      <button onClick={() => descargar(s.url, `${s.tipo}.png`)}
                        style={{ width: "100%", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa", padding: "5px", borderRadius: 7, fontSize: 10, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>⬇️ Descargar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : !loading && !imageUrl && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 400, textAlign: "center" }}>
              <div style={{ fontSize: 52, marginBottom: 16, opacity: 0.15 }}>🎨</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>Sin secciones aún</h3>
              <p style={{ color: "#6b7280", fontSize: 13, maxWidth: 260 }}>Seleccioná una plantilla y generá tu primera sección profesional</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        select option { background: #1a1a2e; color: white; }
      `}</style>
    </main>
  );
}
