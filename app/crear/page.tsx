"use client";
import { useState, useRef } from "react";

const SECCIONES = [
  { id: "hero", label: "Hero / Gancho", icon: "⚡", desc: "Imagen principal de impacto" },
  { id: "oferta", label: "Oferta Irresistible", icon: "🔥", desc: "Precio y urgencia" },
  { id: "antes_despues", label: "Antes / Después", icon: "✨", desc: "Transformación visual" },
  { id: "testimonios", label: "Testimonios", icon: "⭐", desc: "Prueba social" },
  { id: "como_usar", label: "Cómo Usar", icon: "📋", desc: "Guía de uso" },
];

const PRODUCTOS = ["Eficlax","Metha","Alkam","Revella","Ori","Purifort","Amagy","Vegafull"];
const PAISES = ["Paraguay","Argentina","Uruguay","Bolivia","Colombia","México","Chile","Perú"];
const ESTILOS = ["Premium Oscuro","Natural Verde","Fitness Rojo","Lujo Dorado","Corporativo Azul"];

export default function Crear() {
  const [seccion, setSeccion] = useState("hero");
  const [producto, setProducto] = useState("");
  const [beneficios, setBeneficios] = useState("");
  const [precio, setPrecio] = useState("");
  const [pais, setPais] = useState("Paraguay");
  const [estilo, setEstilo] = useState("Premium Oscuro");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [creditos] = useState(5);

  const generar = async () => {
    if (!producto) { setError("Ingresá el nombre del producto"); return; }
    setLoading(true);
    setError(null);
    setImageUrl(null);
    try {
      const res = await fetch("/api/generar-imagen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ producto, beneficios, precio, pais, estilo, seccion }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      setImageUrl(data.imageUrl);
    } catch (e) {
      setError("Error de conexión. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const descargar = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `jkings-${producto}-${seccion}.jpg`;
    a.target = "_blank";
    a.click();
  };

  return (
    <main style={{minHeight:"100vh",background:"#070711",color:"white",fontFamily:"sans-serif"}}>
      {/* NAV */}
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 32px",borderBottom:"1px solid rgba(255,255,255,0.06)",background:"rgba(7,7,17,0.9)",backdropFilter:"blur(24px)",position:"sticky",top:0,zIndex:50}}>
        <a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
          <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#7c3aed,#ec4899)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16}}>J</div>
          <span style={{fontWeight:900,fontSize:15,color:"white"}}>JKings <span style={{background:"linear-gradient(90deg,#a78bfa,#ec4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>AI Studio</span></span>
        </a>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{background:"rgba(124,58,237,0.15)",border:"1px solid rgba(124,58,237,0.3)",padding:"6px 14px",borderRadius:20,fontSize:12,color:"#a78bfa",fontWeight:600}}>
            ⚡ {creditos} créditos gratis
          </div>
          <a href="/studio" style={{color:"#9ca3af",fontSize:13,textDecoration:"none"}}>← Volver al Studio</a>
        </div>
      </nav>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"32px 24px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
        {/* PANEL IZQUIERDO */}
        <div>
          <h1 style={{fontSize:28,fontWeight:900,marginBottom:4}}>Generador de Flyers <span style={{background:"linear-gradient(90deg,#a78bfa,#ec4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>con IA</span></h1>
          <p style={{color:"#6b7280",fontSize:14,marginBottom:28}}>Igual que ZEPOL pero tuyo. Generá secciones profesionales.</p>

          {/* SECCIÓN */}
          <div style={{marginBottom:24}}>
            <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:10}}>1. Tipo de sección</label>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {SECCIONES.map(s => (
                <button key={s.id} onClick={() => setSeccion(s.id)} style={{padding:"12px 14px",borderRadius:12,border:seccion===s.id?"2px solid #7c3aed":"1px solid rgba(255,255,255,0.08)",background:seccion===s.id?"rgba(124,58,237,0.15)":"rgba(255,255,255,0.02)",color:seccion===s.id?"#a78bfa":"#9ca3af",cursor:"pointer",textAlign:"left",transition:"all 0.2s"}}>
                  <div style={{fontSize:16,marginBottom:2}}>{s.icon}</div>
                  <div style={{fontSize:12,fontWeight:700,color:seccion===s.id?"white":"#d1d5db"}}>{s.label}</div>
                  <div style={{fontSize:10,color:"#6b7280",marginTop:1}}>{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTO */}
          <div style={{marginBottom:16}}>
            <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:8}}>2. Producto</label>
            <select value={producto} onChange={e=>setProducto(e.target.value)} style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:"10px 14px",color:"white",fontSize:14,outline:"none"}}>
              <option value="">Seleccioná un producto...</option>
              {PRODUCTOS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          {/* BENEFICIOS */}
          <div style={{marginBottom:16}}>
            <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:8}}>3. Beneficios clave</label>
            <textarea value={beneficios} onChange={e=>setBeneficios(e.target.value)} placeholder="Ej: Quema grasa, aumenta energía, natural..." rows={2} style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:"10px 14px",color:"white",fontSize:14,outline:"none",resize:"none",boxSizing:"border-box"}}/>
          </div>

          {/* PRECIO Y PAÍS */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
            <div>
              <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:8}}>4. Precio</label>
              <input value={precio} onChange={e=>setPrecio(e.target.value)} placeholder="Ej: Gs 120.000" style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:"10px 14px",color:"white",fontSize:14,outline:"none",boxSizing:"border-box"}}/>
            </div>
            <div>
              <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:8}}>5. País</label>
              <select value={pais} onChange={e=>setPais(e.target.value)} style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:"10px 14px",color:"white",fontSize:14,outline:"none"}}>
                {PAISES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          {/* ESTILO */}
          <div style={{marginBottom:24}}>
            <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:8}}>6. Estilo visual</label>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {ESTILOS.map(e => (
                <button key={e} onClick={()=>setEstilo(e)} style={{padding:"6px 12px",borderRadius:20,border:estilo===e?"2px solid #7c3aed":"1px solid rgba(255,255,255,0.08)",background:estilo===e?"rgba(124,58,237,0.2)":"transparent",color:estilo===e?"#a78bfa":"#6b7280",fontSize:11,fontWeight:600,cursor:"pointer",transition:"all 0.2s"}}>
                  {e}
                </button>
              ))}
            </div>
          </div>

          {error && <div style={{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:10,padding:"10px 14px",color:"#fca5a5",fontSize:13,marginBottom:16}}>{error}</div>}

          <button onClick={generar} disabled={loading} style={{width:"100%",background:loading?"#374151":"linear-gradient(135deg,#7c3aed,#ec4899)",color:"white",border:"none",padding:"16px",borderRadius:14,fontSize:16,fontWeight:800,cursor:loading?"not-allowed":"pointer",boxShadow:loading?"none":"0 8px 32px rgba(124,58,237,0.4)",transition:"all 0.2s"}}>
            {loading ? "⏳ Generando con IA... (30-60s)" : "✨ Generar Flyer con IA"}
          </button>
        </div>

        {/* PANEL DERECHO - PREVIEW */}
        <div>
          <label style={{fontSize:11,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:1,display:"block",marginBottom:16}}>Vista previa</label>
          <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,overflow:"hidden",aspectRatio:"9/16",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",maxHeight:600}}>
            {loading && (
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:48,marginBottom:16,animation:"spin 1s linear infinite"}}>⚡</div>
                <p style={{color:"#a78bfa",fontWeight:700,fontSize:16}}>Generando con IA...</p>
                <p style={{color:"#6b7280",fontSize:13,marginTop:4}}>Puede tardar 30-60 segundos</p>
              </div>
            )}
            {!loading && !imageUrl && (
              <div style={{textAlign:"center",padding:32}}>
                <div style={{fontSize:48,marginBottom:12}}>🎨</div>
                <p style={{color:"#6b7280",fontSize:14}}>Tu flyer aparecerá aquí</p>
                <p style={{color:"#4b5563",fontSize:12,marginTop:4}}>Completá los datos y presioná Generar</p>
              </div>
            )}
            {imageUrl && !loading && (
              <img src={imageUrl} alt="Flyer generado" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            )}
          </div>

          {imageUrl && !loading && (
            <div style={{marginTop:16,display:"flex",gap:12}}>
              <button onClick={descargar} style={{flex:1,background:"linear-gradient(135deg,#7c3aed,#ec4899)",color:"white",border:"none",padding:"12px",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(124,58,237,0.3)"}}>
                ⬇️ Descargar HD
              </button>
              <button onClick={generar} style={{flex:1,background:"rgba(255,255,255,0.05)",color:"white",border:"1px solid rgba(255,255,255,0.1)",padding:"12px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer"}}>
                🔄 Regenerar
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      `}</style>
    </main>
  );
}
