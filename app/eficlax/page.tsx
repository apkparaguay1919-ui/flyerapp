'use client';

import { useState } from 'react';

const prices = [
  { units: 1, price: 'Gs. 69.999', tag: null, savings: null },
  { units: 2, price: 'Gs. 139.999', tag: 'MAS VENDIDO', savings: 'Ahorrás Gs. 10.000' },
  { units: 3, price: 'Gs. 209.999', tag: 'AHORRA MAS', savings: 'Ahorrás Gs. 30.000' },
];

const benefits = [
  { icon: '🌿', title: 'Moringa Pura', desc: 'Ingrediente natural 100% certificado de Paraguay' },
  { icon: '🔥', title: 'Detox Profundo', desc: 'Elimina toxinas y mejora tu digestión desde el primer uso' },
  { icon: '⚡', title: 'Energía Total', desc: 'Siente el cambio en tu energía desde los primeros días' },
  { icon: '💪', title: 'Resultados Reales', desc: 'Miles de paraguayos ya transformaron su salud con EFICLAX' },
];

const testimonials = [
  { name: 'María G.', city: 'Asunción', text: 'En 2 semanas noté la diferencia. Me siento más liviana y con energía!', stars: 5 },
  { name: 'Roberto S.', city: 'Encarnación', text: 'Lo pedí por WhatsApp y llegó rapidísimo. El producto es excelente.', stars: 5 },
  { name: 'Ana P.', city: 'Ciudad del Este', text: 'Pagué al recibir, sin riesgo. Y funciona de verdad. Lo recomiendo!', stars: 5 },
];

const cintas = [
  '🌿 MORINGA PURA','✅ ENVÍO GRATIS','💵 PAGO AL RECIBIR',
  '🇵🇾 PRODUCTO PARAGUAYO','🔒 COMPRA SEGURA','⚡ RESULTADOS REALES',
  '🌿 MORINGA PURA','✅ ENVÍO GRATIS','💵 PAGO AL RECIBIR',
  '🇵🇾 PRODUCTO PARAGUAYO','🔒 COMPRA SEGURA','⚡ RESULTADOS REALES',
];

export default function EficlaxPage() {
  const waBase = 'https://wa.me/595994537438';
  const quickWa = `${waBase}?text=${encodeURIComponent('Hola! Quiero pedir EFICLAX Detox 🌿')}`;
  const [selectedPack, setSelectedPack] = useState<number | null>(null);
  const [form, setForm] = useState({ nombre: '', telefono: '', ciudad: '', direccion: '', pack: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (units: number, price: string) => {
    setSelectedPack(units);
    setForm(f => ({ ...f, pack: `x${units} - ${price}` }));
    setTimeout(() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.telefono || !form.ciudad) return;
    const msg = `🌿 *PEDIDO EFICLAX DETOX*\n\n👤 Nombre: ${form.nombre}\n📞 Teléfono: ${form.telefono}\n🏙️ Ciudad: ${form.ciudad}\n📍 Dirección: ${form.direccion}\n📦 Pack: ${form.pack}\n\n✅ Confirmo mi pedido con pago al recibir.`;
    window.open(`${waBase}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: '#060a06', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes scrollLeft { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes scrollRight { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }
        @keyframes pulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(255,107,0,0.4)} 50%{transform:scale(1.08);box-shadow:0 0 0 12px rgba(255,107,0,0)} }
        .cl { display:flex; width:max-content; animation:scrollLeft 20s linear infinite; }
        .cr { display:flex; width:max-content; animation:scrollRight 22s linear infinite; }
        .pc { transition:all 0.2s; cursor:pointer; }
        .pc:hover { transform:translateY(-4px); }
        .wa-float { animation:pulse 2s infinite; }
        .wa-float:hover { transform:scale(1.12) !important; }
        input:focus { outline:none; border-color:rgba(74,222,128,0.6) !important; }
      `}</style>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href={quickWa} target="_blank" rel="noopener noreferrer" className="wa-float"
        style={{ position:'fixed', bottom:'28px', right:'24px', zIndex:9999, background:'linear-gradient(135deg,#ff6b00,#ff8c00)', color:'#fff', borderRadius:'100px', padding:'14px 22px', display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', fontWeight:'800', fontSize:'14px', boxShadow:'0 4px 24px rgba(255,107,0,0.5)', letterSpacing:'0.5px' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        PEDIR AHORA
      </a>

      {/* CINTA 1 */}
      <div style={{ background:'#4ade80', overflow:'hidden', padding:'10px 0' }}>
        <div className="cl">
          {cintas.map((item,i) => <span key={i} style={{ color:'#000', fontWeight:'800', fontSize:'13px', letterSpacing:'2px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* HERO */}
      <section style={{ background:'linear-gradient(160deg,#071a07 0%,#0d3d0d 50%,#071a07 100%)', padding:'70px 20px 90px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 0%,rgba(34,197,94,0.18) 0%,transparent 65%)', pointerEvents:'none' }} />
        <div style={{ display:'inline-block', background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.4)', borderRadius:'100px', padding:'6px 20px', fontSize:'13px', color:'#4ade80', marginBottom:'24px', letterSpacing:'2px', fontWeight:'600' }}>
          🌿 BIOLIFFE MORINGA PARAGUAY
        </div>
        <h1 style={{ fontSize:'clamp(2.5rem,7vw,5rem)', fontWeight:'900', lineHeight:'1.05', margin:'0 0 20px', textTransform:'uppercase', letterSpacing:'-1px' }}>
          EFICLAX<br/><span style={{ color:'#4ade80', textShadow:'0 0 40px rgba(74,222,128,0.4)' }}>DETOX</span>
        </h1>
        <p style={{ fontSize:'clamp(1rem,2.5vw,1.25rem)', color:'#9ca3af', maxWidth:'540px', margin:'0 auto 36px', lineHeight:'1.7' }}>
          Pensé que era grasa… pero era inflamación. El detox natural con Moringa pura de Paraguay.
        </p>
        <div style={{ maxWidth:'420px', margin:'0 auto 36px', borderRadius:'24px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.2)', boxShadow:'0 0 60px rgba(34,197,94,0.15)' }}>
          <img src="/hero2.jpg" alt="EFICLAX Detox" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
        <div style={{ display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap', marginBottom:'40px' }}>
          {[
            { icon:'🚚', label:'Envío Gratis', sub:'Todo Paraguay' },
            { icon:'💵', label:'Pago al Recibir', sub:'Sin adelanto' },
            { icon:'✅', label:'100% Natural', sub:'Certificado' },
            { icon:'🔒', label:'Compra Segura', sub:'Garantía total' },
          ].map(b => (
            <div key={b.label} style={{ background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.25)', borderRadius:'12px', padding:'10px 16px', textAlign:'center', minWidth:'100px' }}>
              <div style={{ fontSize:'20px', marginBottom:'4px' }}>{b.icon}</div>
              <div style={{ fontSize:'12px', fontWeight:'700', color:'#4ade80' }}>{b.label}</div>
              <div style={{ fontSize:'11px', color:'#6b7280' }}>{b.sub}</div>
            </div>
          ))}
        </div>
        <a href={quickWa} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'10px', background:'#25D366', color:'#fff', fontWeight:'800', fontSize:'1.1rem', padding:'18px 44px', borderRadius:'100px', textDecoration:'none', boxShadow:'0 0 50px rgba(37,211,102,0.45)' }}>
          💬 PEDIR POR WHATSAPP AHORA
        </a>
        <p style={{ color:'#374151', fontSize:'13px', marginTop:'16px' }}>Respuesta rápida · Sin adelanto · Entrega a domicilio</p>
      </section>

      {/* CINTA 2 */}
      <div style={{ background:'#111', overflow:'hidden', padding:'10px 0', borderTop:'1px solid rgba(74,222,128,0.2)', borderBottom:'1px solid rgba(74,222,128,0.2)' }}>
        <div className="cr">
          {cintas.map((item,i) => <span key={i} style={{ color:'#4ade80', fontWeight:'700', fontSize:'13px', letterSpacing:'2px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* CERTIFICACIONES */}
      <section style={{ padding:'28px 20px', background:'rgba(34,197,94,0.03)', borderBottom:'1px solid rgba(34,197,94,0.08)' }}>
        <div style={{ maxWidth:'700px', margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
          <span style={{ fontSize:'12px', color:'#6b7280', letterSpacing:'1px', fontWeight:'600' }}>RESPALDADO POR:</span>
          {[
            { src:'/senave.webp', name:'SENAVE', desc:'Registrado' },
            { src:'/inan.png', name:'INAN', desc:'Aprobado' },
            { src:'/compra-segura.png', name:'Compra Segura', desc:'100% garantizado' },
          ].map(c => (
            <div key={c.name} style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'10px', padding:'8px 14px' }}>
              <img src={c.src} alt={c.name} style={{ width:'44px', height:'44px', objectFit:'contain' }} />
              <div>
                <div style={{ fontSize:'12px', fontWeight:'700', color:'#d1d5db' }}>{c.name}</div>
                <div style={{ fontSize:'10px', color:'#6b7280' }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section style={{ padding:'60px 20px', maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'32px', textTransform:'uppercase' }}>
          💪 Resultados <span style={{ color:'#4ade80' }}>Reales</span>
        </h2>
        <div style={{ borderRadius:'24px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.2)' }}>
          <img src="/resultados1.png" alt="Resultados EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* OFERTA */}
      <section style={{ padding:'0 20px 60px', maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'32px', textTransform:'uppercase' }}>
          🔥 Oferta <span style={{ color:'#4ade80' }}>Especial</span>
        </h2>
        <div style={{ borderRadius:'24px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.2)' }}>
          <img src="/offer.webp" alt="Oferta EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* ANTES Y DESPUES */}
      <section style={{ padding:'0 20px 60px', maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'32px', textTransform:'uppercase' }}>
          Antes y <span style={{ color:'#4ade80' }}>Después</span>
        </h2>
        <div style={{ borderRadius:'24px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.15)' }}>
          <img src="/before-after.webp" alt="Resultados EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding:'20px 20px 70px', maxWidth:'860px', margin:'0 auto' }}>
        <h2 style={{ textAlign:'center', fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'48px', textTransform:'uppercase' }}>
          Por qué <span style={{ color:'#4ade80' }}>EFICLAX</span> funciona
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'20px' }}>
          {benefits.map(b => (
            <div key={b.title} style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'18px', padding:'28px 22px', textAlign:'center' }}>
              <div style={{ fontSize:'2.8rem', marginBottom:'14px' }}>{b.icon}</div>
              <h3 style={{ fontSize:'1rem', fontWeight:'700', marginBottom:'10px', color:'#4ade80' }}>{b.title}</h3>
              <p style={{ fontSize:'13px', color:'#9ca3af', lineHeight:'1.6', margin:0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODO DE USO */}
      <section style={{ padding:'0 20px 60px', maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'32px', textTransform:'uppercase' }}>
          📋 Cómo <span style={{ color:'#4ade80' }}>Usarlo</span>
        </h2>
        <div style={{ borderRadius:'24px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.15)' }}>
          <img src="/mododeuso.png" alt="Cómo usar EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* CINTA 3 */}
      <div style={{ background:'#4ade80', overflow:'hidden', padding:'10px 0' }}>
        <div className="cl">
          {cintas.map((item,i) => <span key={i} style={{ color:'#000', fontWeight:'800', fontSize:'13px', letterSpacing:'2px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* PACKS */}
      <section style={{ padding:'70px 20px', background:'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth:'860px', margin:'0 auto' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'8px', textTransform:'uppercase' }}>
            🛒 Elegí tu <span style={{ color:'#4ade80' }}>Pack</span>
          </h2>
          <p style={{ textAlign:'center', color:'#6b7280', marginBottom:'48px', fontSize:'14px' }}>Seleccioná → completá el formulario → recibís en tu casa</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'24px' }}>
            {prices.map(p => (
              <div key={p.units} className="pc" onClick={() => handleSelect(p.units, p.price)}
                style={{ background: selectedPack===p.units ? 'linear-gradient(135deg,#0d3d0d,#0a2a0a)' : p.tag ? 'linear-gradient(135deg,#0b3010,#071a07)' : 'rgba(255,255,255,0.02)', border: selectedPack===p.units ? '2px solid #4ade80' : p.tag ? '2px solid rgba(74,222,128,0.5)' : '1px solid rgba(255,255,255,0.07)', borderRadius:'22px', padding:'32px 26px', textAlign:'center', position:'relative' }}>
                {p.tag && <div style={{ position:'absolute', top:'-14px', left:'50%', transform:'translateX(-50%)', background:'#4ade80', color:'#000', fontWeight:'800', fontSize:'11px', padding:'4px 18px', borderRadius:'100px', whiteSpace:'nowrap', letterSpacing:'1.5px' }}>{p.tag}</div>}
                {selectedPack===p.units && <div style={{ position:'absolute', top:'14px', right:'14px', background:'#4ade80', color:'#000', borderRadius:'100%', width:'26px', height:'26px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', fontWeight:'900' }}>✓</div>}
                <div style={{ fontSize:'2.5rem', fontWeight:'900', marginBottom:'4px' }}>x{p.units}</div>
                <div style={{ color:'#6b7280', fontSize:'13px', marginBottom:'16px' }}>{p.units===1?'unidad':'unidades'}</div>
                <div style={{ fontSize:'1.8rem', fontWeight:'800', color:'#4ade80', marginBottom:'8px' }}>{p.price}</div>
                {p.savings && <div style={{ fontSize:'12px', color:'#86efac', marginBottom:'20px', fontWeight:'600' }}>💰 {p.savings}</div>}
                {!p.savings && <div style={{ marginBottom:'20px' }} />}
                <button onClick={e => { e.stopPropagation(); handleSelect(p.units,p.price); }}
                  style={{ display:'block', width:'100%', background: selectedPack===p.units ? '#25D366' : p.tag ? 'rgba(37,211,102,0.2)' : 'rgba(255,255,255,0.05)', color:'#fff', fontWeight:'700', padding:'13px', borderRadius:'100px', border: p.tag ? '1px solid rgba(37,211,102,0.4)' : '1px solid rgba(255,255,255,0.1)', fontSize:'14px', cursor:'pointer' }}>
                  {selectedPack===p.units ? '✓ Pack Seleccionado' : 'Seleccionar Pack'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" style={{ padding:'70px 20px', maxWidth:'600px', margin:'0 auto' }}>
        <div style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'24px', padding:'40px 32px' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:'800', marginBottom:'8px', textTransform:'uppercase' }}>
            📋 Formulario de <span style={{ color:'#4ade80' }}>Pedido</span>
          </h2>
          <p style={{ textAlign:'center', color:'#6b7280', fontSize:'13px', marginBottom:'32px' }}>Completá tus datos y te contactamos por WhatsApp</p>
          {submitted ? (
            <div style={{ textAlign:'center', padding:'40px 20px' }}>
              <div style={{ fontSize:'4rem', marginBottom:'16px' }}>🎉</div>
              <h3 style={{ color:'#4ade80', fontSize:'1.5rem', fontWeight:'800', marginBottom:'12px' }}>¡Pedido Enviado!</h3>
              <p style={{ color:'#9ca3af', fontSize:'14px' }}>Te redirigimos a WhatsApp. En breve te contactamos.</p>
            </div>
          ) : (
            <>
              {selectedPack && (
                <div style={{ background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'12px', padding:'14px 20px', marginBottom:'24px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ color:'#9ca3af', fontSize:'13px' }}>Pack seleccionado:</span>
                  <span style={{ color:'#4ade80', fontWeight:'700', fontSize:'14px' }}>{form.pack}</span>
                </div>
              )}
              {[
                { key:'nombre', label:'Nombre completo *', placeholder:'Ej: María González', type:'text' },
                { key:'telefono', label:'Teléfono / WhatsApp *', placeholder:'Ej: 0994 123 456', type:'tel' },
                { key:'ciudad', label:'Ciudad *', placeholder:'Ej: Asunción, Encarnación...', type:'text' },
                { key:'direccion', label:'Dirección de entrega', placeholder:'Calle, número, barrio...', type:'text' },
              ].map(field => (
                <div key={field.key} style={{ marginBottom:'18px' }}>
                  <label style={{ display:'block', fontSize:'13px', fontWeight:'600', color:'#d1d5db', marginBottom:'8px' }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    style={{ width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'13px 16px', color:'#fff', fontSize:'14px', boxSizing:'border-box' }} />
                </div>
              ))}
              {!selectedPack && <p style={{ color:'#f59e0b', fontSize:'13px', textAlign:'center', marginBottom:'16px' }}>⚠️ Primero seleccioná un pack arriba</p>}
              <button onClick={handleSubmit} disabled={!selectedPack}
                style={{ width:'100%', background: selectedPack ? '#25D366' : 'rgba(255,255,255,0.05)', color:'#fff', fontWeight:'800', fontSize:'1rem', padding:'16px', borderRadius:'100px', border:'none', cursor: selectedPack ? 'pointer' : 'not-allowed', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', opacity: selectedPack ? 1 : 0.5 }}>
                💬 CONFIRMAR PEDIDO POR WHATSAPP
              </button>
              <div style={{ display:'flex', gap:'16px', justifyContent:'center', marginTop:'20px', flexWrap:'wrap' }}>
                {['🔒 Pago al recibir','🚚 Envío gratis','✅ Sin adelanto'].map(item => (
                  <span key={item} style={{ fontSize:'12px', color:'#6b7280' }}>{item}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* LOGISTICA */}
      <section style={{ padding:'0 20px 60px', maxWidth:'860px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:'800', marginBottom:'28px', textTransform:'uppercase' }}>
          🚚 Entrega en <span style={{ color:'#4ade80' }}>Todo Paraguay</span>
        </h2>
        <div style={{ borderRadius:'24px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.15)' }}>
          <img src="/logistics.webp" alt="Entrega Paraguay" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding:'20px 20px 70px', background:'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth:'860px', margin:'0 auto' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'48px', textTransform:'uppercase' }}>
            Lo que dicen nuestros <span style={{ color:'#4ade80' }}>clientes</span>
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'20px' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'18px', padding:'28px 24px' }}>
                <div style={{ color:'#fbbf24', fontSize:'20px', marginBottom:'14px' }}>{'★'.repeat(t.stars)}</div>
                <p style={{ fontSize:'14px', color:'#d1d5db', lineHeight:'1.7', margin:'0 0 18px' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <div style={{ width:'36px', height:'36px', background:'rgba(74,222,128,0.15)', borderRadius:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }}>👤</div>
                  <div>
                    <div style={{ fontSize:'13px', fontWeight:'700', color:'#f3f4f6' }}>{t.name}</div>
                    <div style={{ fontSize:'11px', color:'#6b7280' }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CINTA 4 */}
      <div style={{ background:'#111', overflow:'hidden', padding:'10px 0', borderTop:'1px solid rgba(74,222,128,0.2)', borderBottom:'1px solid rgba(74,222,128,0.2)' }}>
        <div className="cr">
          {cintas.map((item,i) => <span key={i} style={{ color:'#4ade80', fontWeight:'700', fontSize:'13px', letterSpacing:'2px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 20px', textAlign:'center', background:'linear-gradient(160deg,#071a07 0%,#0d3d0d 100%)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 100%,rgba(34,197,94,0.15) 0%,transparent 60%)', pointerEvents:'none' }} />
        <h2 style={{ fontSize:'clamp(1.8rem,5vw,3rem)', fontWeight:'900', marginBottom:'16px', textTransform:'uppercase' }}>
          Listo para el <span style={{ color:'#4ade80' }}>cambio?</span>
        </h2>
        <p style={{ color:'#9ca3af', maxWidth:'480px', margin:'0 auto 36px', lineHeight:'1.7' }}>
          Escribinos por WhatsApp, elegís tu pack y lo recibís en la puerta de tu casa. Sin adelanto.
        </p>
        <a href={quickWa} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'12px', background:'#25D366', color:'#fff', fontWeight:'800', fontSize:'1.2rem', padding:'20px 52px', borderRadius:'100px', textDecoration:'none', boxShadow:'0 0 70px rgba(37,211,102,0.5)' }}>
          💬 WHATSAPP: +595 994 537 438
        </a>
        <p style={{ color:'#1f2937', fontSize:'12px', marginTop:'48px' }}>© 2025 Bioliffe Moringa Paraguay — Todos los derechos reservados</p>
      </section>
    </main>
  );
}