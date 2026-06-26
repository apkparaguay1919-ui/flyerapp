"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const flyerExamples = [
  { img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=90", name: "Bioliffe Moringa", price: "$249", before: "$350" },
  { img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=90", name: "Whey Protein", price: "$599", before: "$800" },
  { img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=90", name: "Crema Facial", price: "$189", before: "$290" },
  { img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=90", name: "Vitaminas", price: "$349", before: "$500" },
  { img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=90", name: "Aceite Natural", price: "$420", before: "$600" },
  { img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=90", name: "Colágeno Plus", price: "$299", before: "$450" },
  { img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=90", name: "Vitamina C", price: "$129", before: "$200" },
  { img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=90", name: "Sérum Facial", price: "$389", before: "$550" },
];

function PhoneMockup({ img, name, price, before }: { img: string; name: string; price: string; before: string }) {
  return (
    <div className="relative flex-shrink-0 w-[160px] h-[300px] group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-20"/>
        <div className="absolute inset-1 rounded-[2rem] overflow-hidden">
          <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>
          <div className="absolute top-6 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">OFERTA</div>
          <div className="absolute top-6 left-3 bg-black/60 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full border border-white/20">✨ IA</div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-white font-bold text-xs mb-0.5">{name}</p>
            <div className="flex items-center gap-1.5 mb-2">
              <p className="text-gray-400 text-[10px] line-through">{before}</p>
              <p className="text-white font-black text-base">{price}</p>
            </div>
            <div className="w-full bg-white/20 backdrop-blur-sm rounded-full py-1 text-[10px] text-white text-center border border-white/20">Ver oferta →</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-1 top-16 w-1 h-8 bg-gray-700 rounded-full"/>
      <div className="absolute -left-1 top-14 w-1 h-6 bg-gray-700 rounded-full"/>
      <div className="absolute -left-1 top-22 w-1 h-6 bg-gray-700 rounded-full"/>
    </div>
  );
}

const PAISES = [
  { group: "América Latina", options: ["🇲🇽 México — MXN","🇨🇴 Colombia — COP","🇦🇷 Argentina — ARS","🇵🇪 Perú — PEN","🇨🇱 Chile — CLP","🇵🇾 Paraguay — PYG","🇺🇾 Uruguay — UYU","🇧🇴 Bolivia — BOB","🇻🇪 Venezuela — USD","🇪🇨 Ecuador — USD","🇬🇹 Guatemala — GTQ","🇭🇳 Honduras — HNL","🇸🇻 El Salvador — USD","🇳🇮 Nicaragua — NIO","🇨🇷 Costa Rica — CRC","🇵🇦 Panamá — USD","🇩🇴 Rep. Dominicana — DOP","🇨🇺 Cuba — CUP","🇵🇷 Puerto Rico — USD","🇧🇷 Brasil — BRL"] },
  { group: "América del Norte", options: ["🇺🇸 USA — USD","🇨🇦 Canadá — CAD"] },
  { group: "Europa", options: ["🇪🇸 España — EUR","🇵🇹 Portugal — EUR","🇫🇷 Francia — EUR","🇩🇪 Alemania — EUR","🇮🇹 Italia — EUR","🇬🇧 Reino Unido — GBP","🇨🇭 Suiza — CHF","🇸🇪 Suecia — SEK","🇳🇴 Noruega — NOK","🇩🇰 Dinamarca — DKK","🇷🇺 Rusia — RUB","🇹🇷 Turquía — TRY","🇵🇱 Polonia — PLN","🇳🇱 Países Bajos — EUR","🇧🇪 Bélgica — EUR","🇦🇹 Austria — EUR","🇬🇷 Grecia — EUR","🇷🇴 Rumania — RON","🇨🇿 Rep. Checa — CZK","🇭🇺 Hungría — HUF","🇺🇦 Ucrania — UAH"] },
  { group: "Asia", options: ["🇯🇵 Japón — JPY","🇨🇳 China — CNY","🇮🇳 India — INR","🇰🇷 Corea del Sur — KRW","🇸🇬 Singapur — SGD","🇲🇾 Malasia — MYR","🇵🇭 Filipinas — PHP","🇹🇭 Tailandia — THB","🇮🇩 Indonesia — IDR","🇻🇳 Vietnam — VND","🇵🇰 Pakistán — PKR","🇧🇩 Bangladesh — BDT","🇸🇦 Arabia Saudita — SAR","🇦🇪 Emiratos Árabes — AED","🇮🇱 Israel — ILS","🇶🇦 Qatar — QAR","🇰🇼 Kuwait — KWD"] },
  { group: "África", options: ["🇿🇦 Sudáfrica — ZAR","🇳🇬 Nigeria — NGN","🇰🇪 Kenia — KES","🇪🇬 Egipto — EGP","🇲🇦 Marruecos — MAD","🇬🇭 Ghana — GHS","🇹🇿 Tanzania — TZS","🇪🇹 Etiopía — ETB"] },
  { group: "Oceanía", options: ["🇦🇺 Australia — AUD","🇳🇿 Nueva Zelanda — NZD"] },
];

const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm";

const MODULES = [
  { icon: "🎨", title: "Flyers", desc: "Diseños 9:16 que venden", href: "/crear", grad: "135deg,#7c3aed,#ec4899", glow: "rgba(124,58,237,0.3)", tag: "⚡ Popular" },
  { icon: "🎬", title: "Videos", desc: "Reels y TikToks con IA", href: "/videos", grad: "135deg,#1d4ed8,#7c3aed", glow: "rgba(29,78,216,0.3)", tag: "🔥 Nuevo" },
  { icon: "✍️", title: "Copys", desc: "Textos que convierten", href: "/copy", grad: "135deg,#059669,#1d4ed8", glow: "rgba(5,150,105,0.3)", tag: "" },
  { icon: "📦", title: "Productos", desc: "Biblioteca Bioliffe", href: "/productos", grad: "135deg,#d97706,#dc2626", glow: "rgba(217,119,6,0.3)", tag: "" },
  { icon: "💡", title: "Prompts", desc: "Los mejores prompts IA", href: "/prompts", grad: "135deg,#b45309,#d97706", glow: "rgba(180,83,9,0.3)", tag: "" },
  { icon: "🖊️", title: "Editor", desc: "Edición visual en vivo", href: "/editor", grad: "135deg,#be185d,#7c3aed", glow: "rgba(190,24,93,0.3)", tag: "" },
  { icon: "📊", title: "Dashboard", desc: "Control de proyectos", href: "/dashboard", grad: "135deg,#0f766e,#1d4ed8", glow: "rgba(15,118,110,0.3)", tag: "" },
  { icon: "🎭", title: "Plantillas", desc: "Galería profesional", href: "/plantillas", grad: "135deg,#4f46e5,#7c3aed", glow: "rgba(79,70,229,0.3)", tag: "" },
];

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="min-h-screen text-white overflow-x-hidden" style={{background: "#070711"}}>

      {/* FONDO */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{background: "radial-gradient(circle,rgba(124,58,237,0.12),transparent)", filter: "blur(60px)"}}/>
        <div className="absolute top-32 right-1/4 w-80 h-80 rounded-full" style={{background: "radial-gradient(circle,rgba(236,72,153,0.08),transparent)", filter: "blur(60px)"}}/>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full" style={{background: "radial-gradient(circle,rgba(37,99,235,0.08),transparent)", filter: "blur(60px)"}}/>
      </div>

      {/* NAVBAR PREMIUM */}
      <nav style={{position: "relative", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(7,7,17,0.85)", backdropFilter: "blur(24px)"}}>
        <div style={{display: "flex", alignItems: "center", gap: 10}}>
          <div style={{width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#7c3aed,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, boxShadow: "0 0 24px rgba(124,58,237,0.6)"}}>J</div>
          <div style={{lineHeight: 1.1}}>
            <div style={{fontWeight: 900, fontSize: 15, color: "white", letterSpacing: "-0.5px"}}>JKings <span style={{background: "linear-gradient(90deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>AI Studio</span></div>
            <div style={{fontSize: 9, color: "#6b7280", letterSpacing: 1, textTransform: "uppercase"}}>Powered by IA</div>
          </div>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: 2}}>
          {[
            { label: "Studio", href: "/studio", icon: "🎬", color: "#a78bfa" },
            { label: "Videos", href: "/videos", icon: "📱", color: "#60a5fa" },
            { label: "Copys", href: "/copy", icon: "✍️", color: "#34d399" },
            { label: "Productos", href: "/productos", icon: "📦", color: "#fb923c" },
            { label: "Prompts", href: "/prompts", icon: "💡", color: "#fbbf24" },
            { label: "Dashboard", href: "/dashboard", icon: "📊", color: "#f472b6" },
          ].map((item) => (
            <a key={item.href} href={item.href}
              style={{
                padding: "7px 13px", borderRadius: 8, color: hovered === item.href ? item.color : "#9ca3af",
                display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s", fontSize: 13, fontWeight: 500,
                background: hovered === item.href ? "rgba(255,255,255,0.07)" : "transparent",
                textDecoration: "none",
              }}
              onMouseEnter={() => setHovered(item.href)}
              onMouseLeave={() => setHovered(null)}>
              <span style={{fontSize: 13}}>{item.icon}</span>{item.label}
            </a>
          ))}
        </div>

        <div style={{display: "flex", alignItems: "center", gap: 10}}>
          <button style={{fontSize: 13, color: "#9ca3af", background: "none", border: "none", cursor: "pointer"}}>Iniciar sesión</button>
          <button onClick={() => router.push("/crear")}
            style={{background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "9px 22px", borderRadius: 50, fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(124,58,237,0.45)", transition: "all 0.2s", letterSpacing: "-0.2px"}}>
            Empezar gratis →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative text-center px-6 pt-20 pb-10">
        <div style={{display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa", fontSize: 12, padding: "6px 16px", borderRadius: 50, marginBottom: 32, fontWeight: 500}}>
          <span style={{width: 6, height: 6, background: "#a78bfa", borderRadius: "50%", animation: "pulse 2s infinite"}}/>
          Generador de Flyers + Videos + Copys con IA
        </div>
        <h1 style={{fontSize: 64, fontWeight: 900, maxWidth: 800, margin: "0 auto 24px", lineHeight: 1.05, letterSpacing: "-2px"}}>
          Crea flyers que
          <span style={{background: "linear-gradient(90deg,#a78bfa,#ec4899,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}> convierten </span>
          <br/>en segundos
        </h1>
        <p style={{color: "#9ca3af", fontSize: 17, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7}}>
          Sube tu producto, escribe los datos y la IA genera el flyer 9:16, landing page optimizada y copy para Meta Ads listo para publicar.
        </p>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 48, flexWrap: "wrap"}}>
          <button onClick={() => router.push("/crear")}
            style={{background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "16px 36px", borderRadius: 50, fontSize: 17, fontWeight: 800, cursor: "pointer", boxShadow: "0 8px 32px rgba(124,58,237,0.4)", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8}}>
            ✨ Crear mi flyer ahora →
          </button>
          <button onClick={() => router.push("/videos")}
            style={{background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.12)", padding: "16px 36px", borderRadius: 50, fontSize: 17, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8}}>
            🎬 Generar video →
          </button>
        </div>

        <div style={{display: "flex", justifyContent: "center", gap: 48}}>
          {[
            { num: "12,400+", label: "Flyers generados" },
            { num: "60+", label: "Países" },
            { num: "30s", label: "Tiempo promedio" },
            { num: "98%", label: "Satisfacción" },
          ].map(({ num, label }) => (
            <div key={label} style={{textAlign: "center"}}>
              <p style={{fontSize: 26, fontWeight: 900, color: "white", margin: 0}}>{num}</p>
              <p style={{color: "#6b7280", fontSize: 12, margin: "2px 0 0"}}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MÓDULOS PREMIUM */}
      <section style={{padding: "20px 32px 60px"}}>
        <div style={{maxWidth: 1100, margin: "0 auto"}}>
          <div style={{textAlign: "center", marginBottom: 40}}>
            <p style={{color: "#6b7280", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, fontWeight: 600}}>PLATAFORMA COMPLETA</p>
            <h2 style={{fontSize: 36, fontWeight: 900, margin: 0, letterSpacing: "-1px"}}>
              Todo para vender más con{" "}
              <span style={{background: "linear-gradient(90deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>IA</span>
            </h2>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16}}>
            {MODULES.map((mod) => (
              <a key={mod.title} href={mod.href} style={{textDecoration: "none", position: "relative", overflow: "hidden", borderRadius: 20, padding: "24px 20px", border: hovered === mod.title ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.07)", background: hovered === mod.title ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)", transition: "all 0.25s", cursor: "pointer", display: "block", boxShadow: hovered === mod.title ? `0 8px 32px ${mod.glow}` : "none", transform: hovered === mod.title ? "translateY(-4px)" : "none"}}
                onMouseEnter={() => setHovered(mod.title)}
                onMouseLeave={() => setHovered(null)}>
                {/* Glow fondo */}
                <div style={{position: "absolute", top: 0, right: 0, width: 100, height: 100, borderRadius: "50%", background: `radial-gradient(circle,${mod.glow},transparent)`, filter: "blur(20px)", opacity: hovered === mod.title ? 1 : 0, transition: "opacity 0.3s"}}/>
                {/* Tag */}
                {mod.tag && (
                  <div style={{position: "absolute", top: 12, right: 12, background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20}}>
                    {mod.tag}
                  </div>
                )}
                {/* Icono */}
                <div style={{width: 52, height: 52, borderRadius: 14, background: `linear-gradient(${mod.grad})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 14, boxShadow: `0 4px 16px ${mod.glow}`}}>
                  {mod.icon}
                </div>
                <div style={{fontWeight: 800, fontSize: 16, color: "white", marginBottom: 4}}>{mod.title}</div>
                <div style={{color: "#6b7280", fontSize: 12, lineHeight: 1.5}}>{mod.desc}</div>
                {/* Arrow */}
                <div style={{marginTop: 16, color: hovered === mod.title ? "#a78bfa" : "#374151", fontSize: 12, fontWeight: 600, transition: "color 0.2s"}}>
                  Abrir →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CINTA DE CELULARES */}
      <div className="relative w-full overflow-hidden py-8 mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{background: "linear-gradient(to right,#070711,transparent)"}}/>
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{background: "linear-gradient(to left,#070711,transparent)"}}/>
        <div className="flex items-end gap-6 animate-marquee w-max px-8">
          {[...flyerExamples, ...flyerExamples, ...flyerExamples].map((f, i) => (
            <div key={i} style={{ transform: i % 2 === 0 ? "rotate(-4deg)" : "rotate(4deg)", marginBottom: i % 2 === 0 ? "0px" : "20px" }}>
              <PhoneMockup {...f} />
            </div>
          ))}
        </div>
      </div>

      {/* FORMULARIO */}
      <section className="relative px-6 pb-24">
        <div className="max-w-md mx-auto">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background: "radial-gradient(circle,rgba(124,58,237,0.1),transparent)", filter: "blur(60px)"}}/>
          <div className="relative rounded-3xl p-8" style={{background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", boxShadow: "0 32px 64px rgba(0,0,0,0.5)"}}>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold mb-1">Genera tu flyer ahora</h2>
              <p style={{color: "#6b7280", fontSize: 13}}>Gratis — sin tarjeta de crédito</p>
            </div>
            <div className="flex items-center justify-center gap-0 mb-8">
              {["Producto", "Precio", "Foto"].map((label, i) => {
                const n = i + 1;
                const active = step >= n;
                const current = step === n;
                return (
                  <div key={n} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div style={{width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, transition: "all 0.3s", background: active ? "linear-gradient(135deg,#7c3aed,#ec4899)" : "rgba(255,255,255,0.05)", color: active ? "white" : "#4b5563", border: active ? "none" : "1px solid rgba(255,255,255,0.1)", transform: current ? "scale(1.1)" : "scale(1)", boxShadow: active ? "0 4px 16px rgba(124,58,237,0.4)" : "none"}}>
                        {step > n ? "✓" : n}
                      </div>
                      <span style={{fontSize: 10, marginTop: 4, color: active ? "#a78bfa" : "#4b5563"}}>{label}</span>
                    </div>
                    {n < 3 && <div style={{width: 64, height: 1, margin: "0 4px 16px", background: step > n ? "linear-gradient(90deg,#7c3aed,#ec4899)" : "rgba(255,255,255,0.08)"}}/>}
                  </div>
                );
              })}
            </div>
            {step === 1 && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">Nombre del producto</label>
                  <input className={inputClass} placeholder="Ej: Bioliffe Moringa"/>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">Beneficios principales</label>
                  <textarea className={inputClass} placeholder="Ej: Energía natural, desintoxica, fortalece el sistema inmune..." rows={3}/>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">Objetivo del anuncio</label>
                  <select className={inputClass}>
                    <option value="ventas">🛒 Ventas directas</option>
                    <option value="leads">📋 Conseguir contactos</option>
                    <option value="whatsapp">💬 Mensajes por WhatsApp</option>
                  </select>
                </div>
                <button onClick={() => setStep(2)} style={{width: "100%", background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "14px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,58,237,0.3)", marginTop: 8}}>
                  Continuar →
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">Precio antes</label>
                    <input className={inputClass} placeholder="350"/>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">Precio ahora</label>
                    <input className={inputClass} placeholder="249"/>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">País y moneda</label>
                  <select className={inputClass}>
                    {PAISES.map(({ group, options }) => (
                      <optgroup key={group} label={`— ${group} —`}>
                        {options.map(o => <option key={o}>{o}</option>)}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">WhatsApp de contacto</label>
                  <input className={inputClass} placeholder="Ej: 5215512345678"/>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <button onClick={() => setStep(1)} style={{background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "14px", borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: "pointer"}}>← Atrás</button>
                  <button onClick={() => setStep(3)} style={{background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "14px", borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,58,237,0.3)"}}>Continuar →</button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block font-medium uppercase tracking-wide">Foto del producto</label>
                  <label style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: 140, background: "rgba(255,255,255,0.02)", border: "2px dashed rgba(255,255,255,0.1)", borderRadius: 16, cursor: "pointer", transition: "all 0.2s"}}>
                    <span style={{fontSize: 32, marginBottom: 8}}>📸</span>
                    <span style={{color: "#9ca3af", fontSize: 13, fontWeight: 500}}>Haz clic para subir</span>
                    <span style={{color: "#4b5563", fontSize: 11, marginTop: 2}}>PNG, JPG hasta 10MB</span>
                    <input type="file" accept="image/*" className="hidden"/>
                  </label>
                </div>
                <div style={{background: "linear-gradient(135deg,rgba(124,58,237,0.1),rgba(236,72,153,0.1))", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: 16}}>
                  <p style={{fontSize: 13, fontWeight: 600, marginBottom: 10, color: "#a78bfa"}}>✨ La IA generará automáticamente:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "📱", text: "Flyer 9:16 HD" },
                      { icon: "🌐", text: "Landing page" },
                      { icon: "📝", text: "Copy Meta Ads" },
                      { icon: "💬", text: "Botón WhatsApp" },
                    ].map(({ icon, text }) => (
                      <div key={text} style={{display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#d1d5db"}}>
                        <span>{icon}</span><span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setStep(2)} style={{background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "14px", borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: "pointer"}}>← Atrás</button>
                  <button onClick={() => router.push("/crear")} style={{background: "linear-gradient(135deg,#7c3aed,#ec4899)", color: "white", border: "none", padding: "14px", borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,58,237,0.4)"}}>✨ Generar con IA</button>
                </div>
              </div>
            )}
          </div>
          <p style={{textAlign: "center", color: "#374151", fontSize: 11, marginTop: 20}}>🔒 Tus datos están seguros · Sin spam · Cancela cuando quieras</p>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
      `}</style>
    </main>
  );
}