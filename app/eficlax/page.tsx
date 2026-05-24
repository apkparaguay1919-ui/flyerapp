'use client';

import { useState } from 'react';

const prices = [
  { 
    units: 1, 
    price: 'Gs. 69.999', 
    tag: null, 
    savings: null,
    sobres: '5 sobres',
    tomas: '5 tomas',
    dias: '5 días',
    ideal: 'Para probar'
  },
  { 
    units: 2, 
    price: 'Gs. 139.999', 
    tag: 'MAS VENDIDO', 
    savings: 'Ahorrás Gs. 10.000',
    sobres: '10 sobres',
    tomas: '10 tomas',
    dias: '10 días',
    ideal: 'Resultado visible'
  },
  { 
    units: 3, 
    price: 'Gs. 209.999', 
    tag: 'AHORRA MAS', 
    savings: 'Ahorrás Gs. 30.000',
    sobres: '15 sobres',
    tomas: '15 tomas',
    dias: '15 días',
    ideal: 'Transformación total'
  },
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

  const handleSelect = (units: number, price: string, sobres: string, dias: string) => {
    setSelectedPack(units);
    setForm(f => ({ ...f, pack: `x${units} tratamiento/s - ${price} - ${sobres} - ${dias}` }));
    setTimeout(() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.telefono || !form.ciudad) return;
    const msg = `🌿 *PEDIDO EFICLAX DETOX*\n\n👤 Nombre: ${form.nombre}\n📞 Teléfono: ${form.telefono}\n🏙️ Ciudad: ${form.ciudad}\n📍 Dirección: ${form.direccion}\n📦 Pack: ${form.pack}\n\n✅ Confirmo mi pedido con pago al recibir.`;
    window.open(`${waBase}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: '#050c05', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes scrollLeft { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes scrollRight { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }
        @keyframes pulseOrange {
          0%,100%{ transform:scale(1); box-shadow:0 4px 24px rgba(255,107,0,0.55), 0 0 0 0 rgba(255,107,0,0.3); }
          50%{ transform:scale(1.05); box-shadow:0 8px 32px rgba(255,107,0,0.7), 0 0 0 10px rgba(255,107,0,0); }
        }
        @keyframes glowPulse { 0%,100%{ opacity:0.15 } 50%{ opacity:0.28 } }
        .cl { display:flex; width:max-content; animation:scrollLeft 22s linear infinite; }
        .cr { display:flex; width:max-content; animation:scrollRight 24s linear infinite; }
        .pc { transition:all 0.25s cubic-bezier(.4,0,.2,1); cursor:pointer; }
        .pc:hover { transform:translateY(-6px); }
        .wa-float { animation:pulseOrange 2.2s infinite; transition:transform 0.2s; }
        .wa-float:hover { transform:scale(1.1) !important; }
        .glow-bg { animation:glowPulse 4s ease infinite; }
        .btn-main { transition:all 0.2s cubic-bezier(.4,0,.2,1); }
        .btn-main:hover { transform:scale(1.03); }
        input { transition:border-color 0.2s, box-shadow 0.2s; }
        input:focus { outline:none; border-color:rgba(74,222,128,0.7) !important; box-shadow:0 0 0 3px rgba(74,222,128,0.12) !important; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* BOTÓN FLOTANTE */}
      <a href={quickWa} target="_blank" rel="noopener noreferrer" className="wa-float"
        style={{ position:'fixed', bottom:'24px', right:'20px', zIndex:9999, background:'linear-gradient(135deg,#ff6b00,#ff8c00)', color:'#fff', borderRadius:'100px', padding:'13px 20px', display:'flex', alignItems:'center', gap:'9px', textDecoration:'none', fontWeight:'800', fontSize:'14px', boxShadow:'0 4px 24px rgba(255,107,0,0.55)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        PEDIR AHORA
      </a>

      {/* CINTA 1 */}
      <div style={{ background:'linear-gradient(90deg,#22c55e,#16a34a)', overflow:'hidden', padding:'11px 0' }}>
        <div className="cl">
          {cintas.map((item,i) => <span key={i} style={{ color:'#fff', fontWeight:'800', fontSize:'12px', letterSpacing:'2.5px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* HERO */}
      <section style={{ background:'linear-gradient(175deg,#061206 0%,#0a2a0a 40%,#0d3d0d 70%,#061206 100%)', padding:'64px 20px 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div className="glow-bg" style={{ position:'absolute', top:'-10%', left:'50%', transform:'translateX(-50%)', width:'80%', height:'60%', background:'radial-gradient(ellipse,rgba(34,197,94,0.22) 0%,transparent 70%)', pointerEvents:'none', borderRadius:'100%' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.35)', borderRadius:'100px', padding:'7px 18px', fontSize:'12px', color:'#86efac', marginBottom:'22px', letterSpacing:'2px', fontWeight:'700' }}>
            🌿 BIOLIFFE MORINGA PARAGUAY
          </div>
          <h1 style={{ fontSize:'clamp(2.8rem,8vw,5.5rem)', fontWeight:'900', lineHeight:'1.0', margin:'0 0 16px', textTransform:'uppercase', letterSpacing:'-1.5px', color:'#ffffff' }}>
            EFICLAX<br/><span style={{ color:'#4ade80', textShadow:'0 0 50px rgba(74,222,128,0.5)' }}>DETOX</span>
          </h1>
          <p style={{ fontSize:'clamp(1.05rem,2.8vw,1.3rem)', color:'#e2e8f0', maxWidth:'520px', margin:'0 auto 32px', lineHeight:'1.75', textShadow:'0 1px 3px rgba(0,0,0,0.4)' }}>
            <strong style={{ color:'#ffffff', fontWeight:'600' }}>Pensé que era grasa… pero era inflamación.</strong><br/>
            El detox natural con Moringa pura de Paraguay.
          </p>
          <div style={{ maxWidth:'400px', margin:'0 auto 32px', borderRadius:'20px', overflow:'hidden', border:'2px solid rgba(74,222,128,0.25)', boxShadow:'0 0 60px rgba(34,197,94,0.18), 0 20px 60px rgba(0,0,0,0.4)' }}>
            <img src="/hero2.jpg" alt="EFICLAX Detox" style={{ width:'100%', height:'auto', display:'block' }} />
          </div>
          <div style={{ display:'flex', gap:'8px', justifyContent:'center', flexWrap:'wrap', marginBottom:'36px' }}>
            {[
              { icon:'🚚', label:'Envío Gratis', sub:'Todo Paraguay' },
              { icon:'💵', label:'Pago al Recibir', sub:'Sin adelanto' },
              { icon:'✅', label:'100% Natural', sub:'Certificado' },
              { icon:'🔒', label:'Compra Segura', sub:'Garantía total' },
            ].map(b => (
              <div key={b.label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(74,222,128,0.2)', borderRadius:'14px', padding:'10px 14px', textAlign:'center', minWidth:'88px' }}>
                <div style={{ fontSize:'18px', marginBottom:'3px' }}>{b.icon}</div>
                <div style={{ fontSize:'11px', fontWeight:'700', color:'#86efac' }}>{b.label}</div>
                <div style={{ fontSize:'10px', color:'#6b7280', marginTop:'1px' }}>{b.sub}</div>
              </div>
            ))}
          </div>
          <a href={quickWa} target="_blank" rel="noopener noreferrer" className="btn-main"
            style={{ display:'inline-flex', alignItems:'center', gap:'10px', background:'linear-gradient(135deg,#22c55e,#16a34a)', color:'#fff', fontWeight:'800', fontSize:'1.1rem', padding:'17px 40px', borderRadius:'100px', textDecoration:'none', boxShadow:'0 0 40px rgba(34,197,94,0.4)' }}>
            💬 PEDIR POR WHATSAPP AHORA
          </a>
          <p style={{ color:'#4b5563', fontSize:'12px', marginTop:'14px' }}>Respuesta rápida · Sin adelanto · Entrega a domicilio</p>
        </div>
      </section>

      {/* CINTA 2 */}
      <div style={{ background:'#0a0f0a', overflow:'hidden', padding:'11px 0', borderTop:'1px solid rgba(74,222,128,0.15)', borderBottom:'1px solid rgba(74,222,128,0.15)' }}>
        <div className="cr">
          {cintas.map((item,i) => <span key={i} style={{ color:'#4ade80', fontWeight:'700', fontSize:'12px', letterSpacing:'2.5px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* CERTIFICACIONES */}
      <section style={{ padding:'24px 20px', background:'rgba(34,197,94,0.025)', borderBottom:'1px solid rgba(34,197,94,0.07)' }}>
        <div style={{ maxWidth:'680px', margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center', gap:'10px', flexWrap:'wrap' }}>
          <span style={{ fontSize:'11px', color:'#6b7280', letterSpacing:'1.5px', fontWeight:'700', textTransform:'uppercase' }}>Respaldado por:</span>
          {[
            { src:'/senave.webp', name:'SENAVE', desc:'Registrado' },
            { src:'/inan.png', name:'INAN', desc:'Aprobado' },
            { src:'/compra-segura.png', name:'Compra Segura', desc:'100% garantizado' },
          ].map(c => (
            <div key={c.name} style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'8px 14px' }}>
              <img src={c.src} alt={c.name} style={{ width:'40px', height:'40px', objectFit:'contain' }} />
              <div>
                <div style={{ fontSize:'12px', fontWeight:'700', color:'#e2e8f0' }}>{c.name}</div>
                <div style={{ fontSize:'10px', color:'#6b7280' }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section style={{ padding:'56px 20px', maxWidth:'820px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'28px', textTransform:'uppercase', color:'#ffffff' }}>
          💪 Resultados <span style={{ color:'#4ade80' }}>Reales</span>
        </h2>
        <div style={{ borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(74,222,128,0.15)' }}>
          <img src="/resultados1.png" alt="Resultados EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* OFERTA */}
      <section style={{ padding:'0 20px 56px', maxWidth:'820px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'28px', textTransform:'uppercase', color:'#ffffff' }}>
          🔥 Oferta <span style={{ color:'#4ade80' }}>Especial</span>
        </h2>
        <div style={{ borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(74,222,128,0.15)' }}>
          <img src="/offer.webp" alt="Oferta EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* ANTES Y DESPUES */}
      <section style={{ padding:'0 20px 56px', maxWidth:'820px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'28px', textTransform:'uppercase', color:'#ffffff' }}>
          Antes y <span style={{ color:'#4ade80' }}>Después</span>
        </h2>
        <div style={{ borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(74,222,128,0.12)' }}>
          <img src="/before-after.webp" alt="Resultados EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding:'20px 20px 64px', maxWidth:'820px', margin:'0 auto' }}>
        <h2 style={{ textAlign:'center', fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:'800', marginBottom:'40px', textTransform:'uppercase', color:'#ffffff' }}>
          Por qué <span style={{ color:'#4ade80' }}>EFICLAX</span> funciona
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'16px' }}>
          {benefits.map(b => (
            <div key={b.title} style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'16px', padding:'24px 18px', textAlign:'center' }}>
              <div style={{ fontSize:'2.4rem', marginBottom:'12px' }}>{b.icon}</div>
              <h3 style={{ fontSize:'0.95rem', fontWeight:'700', marginBottom:'8px', color:'#4ade80' }}>{b.title}</h3>
              <p style={{ fontSize:'12px', color:'#9ca3af', lineHeight:'1.6', margin:0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODO DE USO */}
      <section style={{ padding:'0 20px 56px', maxWidth:'820px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:'800', marginBottom:'28px', textTransform:'uppercase', color:'#ffffff' }}>
          📋 Cómo <span style={{ color:'#4ade80' }}>Usarlo</span>
        </h2>
        <div style={{ borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(74,222,128,0.12)' }}>
          <img src="/mododeuso.png" alt="Cómo usar EFICLAX" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* CINTA 3 */}
      <div style={{ background:'linear-gradient(90deg,#22c55e,#16a34a)', overflow:'hidden', padding:'11px 0' }}>
        <div className="cl">
          {cintas.map((item,i) => <span key={i} style={{ color:'#fff', fontWeight:'800', fontSize:'12px', letterSpacing:'2.5px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* PACKS CON INFO DE TRATAMIENTO */}
      <section style={{ padding:'64px 20px', background:'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth:'860px', margin:'0 auto' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(1.5rem,4vw,2.2rem)', fontWeight:'800', marginBottom:'8px', textTransform:'uppercase', color:'#ffffff' }}>
            🛒 Elegí tu <span style={{ color:'#4ade80' }}>Tratamiento</span>
          </h2>
          <p style={{ textAlign:'center', color:'#6b7280', marginBottom:'40px', fontSize:'13px' }}>Cada sobre = 1 toma diaria. Resultados desde el día 1.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'20px' }}>
            {prices.map(p => (
              <div key={p.units} className="pc" onClick={() => handleSelect(p.units, p.price, p.sobres, p.dias)}
                style={{
                  background: selectedPack===p.units ? 'linear-gradient(145deg,#0f3d15,#0a2a0a)' : p.tag ? 'linear-gradient(145deg,#0c3512,#071507)' : 'rgba(255,255,255,0.025)',
                  border: selectedPack===p.units ? '2px solid #4ade80' : p.tag ? '2px solid rgba(74,222,128,0.45)' : '1px solid rgba(255,255,255,0.07)',
                  borderRadius:'20px', padding:'28px 22px', textAlign:'center', position:'relative',
                  boxShadow: selectedPack===p.units ? '0 0 30px rgba(74,222,128,0.2)' : '0 4px 20px rgba(0,0,0,0.2)'
                }}>
                {p.tag && <div style={{ position:'absolute', top:'-13px', left:'50%', transform:'translateX(-50%)', background:'linear-gradient(90deg,#22c55e,#16a34a)', color:'#fff', fontWeight:'800', fontSize:'10px', padding:'4px 16px', borderRadius:'100px', whiteSpace:'nowrap', letterSpacing:'1.5px' }}>{p.tag}</div>}
                {selectedPack===p.units && <div style={{ position:'absolute', top:'12px', right:'12px', background:'#4ade80', color:'#000', borderRadius:'100%', width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', fontWeight:'900' }}>✓</div>}

                {/* Número de tratamiento */}
                <div style={{ fontSize:'11px', color:'#6b7280', letterSpacing:'1.5px', fontWeight:'600', textTransform:'uppercase', marginBottom:'6px' }}>TRATAMIENTO x{p.units}</div>
                <div style={{ fontSize:'2rem', fontWeight:'900', marginBottom:'4px', color:'#ffffff' }}>x{p.units}</div>

                {/* Info del tratamiento */}
                <div style={{ background:'rgba(74,222,128,0.06)', border:'1px solid rgba(74,222,128,0.12)', borderRadius:'10px', padding:'10px 12px', margin:'10px 0 14px', display:'flex', flexDirection:'column', gap:'4px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'11px', color:'#6b7280' }}>📦 Sobres:</span>
                    <span style={{ fontSize:'12px', fontWeight:'700', color:'#86efac' }}>{p.sobres}</span>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'11px', color:'#6b7280' }}>💊 Tomas:</span>
                    <span style={{ fontSize:'12px', fontWeight:'700', color:'#86efac' }}>{p.tomas}</span>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'11px', color:'#6b7280' }}>📅 Duración:</span>
                    <span style={{ fontSize:'12px', fontWeight:'700', color:'#86efac' }}>{p.dias}</span>
                  </div>
                  <div style={{ borderTop:'1px solid rgba(74,222,128,0.1)', paddingTop:'6px', marginTop:'2px' }}>
                    <span style={{ fontSize:'11px', color:'#4ade80', fontWeight:'700' }}>✨ {p.ideal}</span>
                  </div>
                </div>

                <div style={{ fontSize:'1.7rem', fontWeight:'800', color:'#4ade80', marginBottom:'6px', textShadow:'0 0 20px rgba(74,222,128,0.3)' }}>{p.price}</div>
                {p.savings && <div style={{ fontSize:'11px', color:'#86efac', marginBottom:'14px', fontWeight:'600', background:'rgba(74,222,128,0.08)', borderRadius:'100px', padding:'3px 10px', display:'inline-block' }}>💰 {p.savings}</div>}
                {!p.savings && <div style={{ marginBottom:'14px' }} />}

                <button onClick={e => { e.stopPropagation(); handleSelect(p.units, p.price, p.sobres, p.dias); }}
                  style={{ display:'block', width:'100%', background: selectedPack===p.units ? 'linear-gradient(135deg,#22c55e,#16a34a)' : p.tag ? 'rgba(34,197,94,0.18)' : 'rgba(255,255,255,0.05)', color:'#fff', fontWeight:'700', padding:'12px', borderRadius:'100px', border: p.tag ? '1px solid rgba(74,222,128,0.35)' : '1px solid rgba(255,255,255,0.08)', fontSize:'13px', cursor:'pointer', transition:'all 0.2s' }}>
                  {selectedPack===p.units ? '✓ Tratamiento Seleccionado' : 'Seleccionar Tratamiento'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" style={{ padding:'64px 20px', maxWidth:'560px', margin:'0 auto' }}>
        <div style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(34,197,94,0.18)', borderRadius:'22px', padding:'36px 28px', boxShadow:'0 0 40px rgba(0,0,0,0.3)' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(1.2rem,3vw,1.7rem)', fontWeight:'800', marginBottom:'6px', textTransform:'uppercase', color:'#ffffff' }}>
            📋 Formulario de <span style={{ color:'#4ade80' }}>Pedido</span>
          </h2>
          <p style={{ textAlign:'center', color:'#6b7280', fontSize:'13px', marginBottom:'28px' }}>Completá tus datos y te contactamos por WhatsApp</p>
          {submitted ? (
            <div style={{ textAlign:'center', padding:'36px 20px' }}>
              <div style={{ fontSize:'3.5rem', marginBottom:'14px' }}>🎉</div>
              <h3 style={{ color:'#4ade80', fontSize:'1.4rem', fontWeight:'800', marginBottom:'10px' }}>¡Pedido Enviado!</h3>
              <p style={{ color:'#9ca3af', fontSize:'13px' }}>Te redirigimos a WhatsApp. En breve te contactamos.</p>
            </div>
          ) : (
            <>
              {selectedPack && (
                <div style={{ background:'rgba(34,197,94,0.07)', border:'1px solid rgba(34,197,94,0.18)', borderRadius:'12px', padding:'12px 18px', marginBottom:'22px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ color:'#9ca3af', fontSize:'12px' }}>Tratamiento seleccionado:</span>
                  <span style={{ color:'#4ade80', fontWeight:'700', fontSize:'13px' }}>x{selectedPack}</span>
                </div>
              )}
              {[
                { key:'nombre', label:'Nombre completo *', placeholder:'Ej: María González', type:'text' },
                { key:'telefono', label:'Teléfono / WhatsApp *', placeholder:'Ej: 0994 123 456', type:'tel' },
                { key:'ciudad', label:'Ciudad *', placeholder:'Ej: Asunción, Encarnación...', type:'text' },
                { key:'direccion', label:'Dirección de entrega', placeholder:'Calle, número, barrio...', type:'text' },
              ].map(field => (
                <div key={field.key} style={{ marginBottom:'16px' }}>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:'600', color:'#d1d5db', marginBottom:'7px' }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    style={{ width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', padding:'13px 15px', color:'#ffffff', fontSize:'14px', boxSizing:'border-box' }} />
                </div>
              ))}
              {!selectedPack && <p style={{ color:'#f59e0b', fontSize:'12px', textAlign:'center', marginBottom:'14px', background:'rgba(245,158,11,0.08)', borderRadius:'8px', padding:'8px' }}>⚠️ Primero seleccioná un tratamiento arriba</p>}
              <button onClick={handleSubmit} disabled={!selectedPack}
                style={{ width:'100%', background: selectedPack ? 'linear-gradient(135deg,#25D366,#1da851)' : 'rgba(255,255,255,0.04)', color:'#fff', fontWeight:'800', fontSize:'1rem', padding:'15px', borderRadius:'100px', border:'none', cursor: selectedPack ? 'pointer' : 'not-allowed', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', opacity: selectedPack ? 1 : 0.45, transition:'all 0.2s' }}>
                💬 CONFIRMAR PEDIDO POR WHATSAPP
              </button>
              <div style={{ display:'flex', gap:'12px', justifyContent:'center', marginTop:'16px', flexWrap:'wrap' }}>
                {['🔒 Pago al recibir','🚚 Envío gratis','✅ Sin adelanto'].map(item => (
                  <span key={item} style={{ fontSize:'11px', color:'#6b7280' }}>{item}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* LOGISTICA */}
      <section style={{ padding:'0 20px 56px', maxWidth:'820px', margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:'800', marginBottom:'24px', textTransform:'uppercase', color:'#ffffff' }}>
          🚚 Entrega en <span style={{ color:'#4ade80' }}>Todo Paraguay</span>
        </h2>
        <div style={{ borderRadius:'20px', overflow:'hidden', border:'1px solid rgba(74,222,128,0.12)' }}>
          <img src="/logistics.webp" alt="Entrega Paraguay" style={{ width:'100%', height:'auto', display:'block' }} />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding:'20px 20px 64px', background:'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth:'820px', margin:'0 auto' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(1.4rem,4vw,2rem)', fontWeight:'800', marginBottom:'40px', textTransform:'uppercase', color:'#ffffff' }}>
            Lo que dicen nuestros <span style={{ color:'#4ade80' }}>clientes</span>
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:'16px' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'16px', padding:'24px 20px' }}>
                <div style={{ color:'#fbbf24', fontSize:'18px', marginBottom:'12px' }}>{'★'.repeat(t.stars)}</div>
                <p style={{ fontSize:'13px', color:'#d1d5db', lineHeight:'1.7', margin:'0 0 16px', fontStyle:'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <div style={{ width:'34px', height:'34px', background:'rgba(74,222,128,0.15)', borderRadius:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'15px' }}>👤</div>
                  <div>
                    <div style={{ fontSize:'12px', fontWeight:'700', color:'#f3f4f6' }}>{t.name}</div>
                    <div style={{ fontSize:'10px', color:'#6b7280' }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CINTA 4 */}
      <div style={{ background:'#0a0f0a', overflow:'hidden', padding:'11px 0', borderTop:'1px solid rgba(74,222,128,0.15)', borderBottom:'1px solid rgba(74,222,128,0.15)' }}>
        <div className="cr">
          {cintas.map((item,i) => <span key={i} style={{ color:'#4ade80', fontWeight:'700', fontSize:'12px', letterSpacing:'2.5px', padding:'0 28px', whiteSpace:'nowrap' }}>{item}</span>)}
        </div>
      </div>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 20px 100px', textAlign:'center', background:'linear-gradient(175deg,#061206 0%,#0a2a0a 50%,#061206 100%)', position:'relative', overflow:'hidden' }}>
        <div className="glow-bg" style={{ position:'absolute', bottom:'-20%', left:'50%', transform:'translateX(-50%)', width:'80%', height:'60%', background:'radial-gradient(ellipse,rgba(34,197,94,0.18) 0%,transparent 70%)', pointerEvents:'none', borderRadius:'100%' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <h2 style={{ fontSize:'clamp(1.8rem,5vw,3rem)', fontWeight:'900', marginBottom:'14px', textTransform:'uppercase', color:'#ffffff' }}>
            Listo para el <span style={{ color:'#4ade80', textShadow:'0 0 30px rgba(74,222,128,0.4)' }}>cambio?</span>
          </h2>
          <p style={{ color:'#9ca3af', maxWidth:'440px', margin:'0 auto 32px', lineHeight:'1.7' }}>
            Escribinos por WhatsApp, elegís tu tratamiento y lo recibís en la puerta de tu casa. Sin adelanto.
          </p>
          <a href={quickWa} target="_blank" rel="noopener noreferrer" className="btn-main"
            style={{ display:'inline-flex', alignItems:'center', gap:'12px', background:'linear-gradient(135deg,#25D366,#1da851)', color:'#fff', fontWeight:'800', fontSize:'1.15rem', padding:'19px 48px', borderRadius:'100px', textDecoration:'none', boxShadow:'0 0 60px rgba(37,211,102,0.45)' }}>
            💬 WHATSAPP: +595 994 537 438
          </a>
          <p style={{ color:'#1f2937', fontSize:'11px', marginTop:'48px' }}>© 2025 Bioliffe Moringa Paraguay — Todos los derechos reservados</p>
        </div>
      </section>
    </main>
  );
}