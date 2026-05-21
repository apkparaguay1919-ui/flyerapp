'use client';

export default function EficlaxPage() {
  const wa = 'https://wa.me/595994537438?text=Hola!%20Quiero%20pedir%20EFICLAX%20Detox';

  const ticker1 = '🇵🇾 PRODUCTO LEGAL EN PARAGUAY  ✅  🇵🇾 PRODUCTO LEGAL EN PARAGUAY  ✅  🇵🇾 PRODUCTO LEGAL EN PARAGUAY  ✅  🇵🇾 PRODUCTO LEGAL EN PARAGUAY  ✅  ';
  const ticker2 = '⭐ MILES DE PARAGUAYOS LO PREFIEREN  💚  ⭐ MILES DE PARAGUAYOS LO PREFIEREN  💚  ⭐ MILES DE PARAGUAYOS LO PREFIEREN  💚  ';
  const ticker3 = '🏆 RESULTADOS OPTIMOS GARANTIZADOS  🌿  🏆 RESULTADOS OPTIMOS GARANTIZADOS  🌿  🏆 RESULTADOS OPTIMOS GARANTIZADOS  🌿  ';

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#050f05', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-wrap {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }
        .ticker-inner {
          display: inline-block;
          animation: ticker 18s linear infinite;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
        }
        .btn-wa {
          display: inline-block;
          background: linear-gradient(135deg, #00c853, #1b5e20);
          color: #fff;
          font-weight: 900;
          font-size: 1.15rem;
          padding: 20px 48px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 0 30px rgba(0,200,83,0.6), 0 4px 20px rgba(0,0,0,0.4);
          border: 2px solid #00e676;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: transform 0.2s;
        }
        .btn-wa:hover {
          transform: scale(1.05);
        }
        .btn-wa-sm {
          display: inline-block;
          background: linear-gradient(135deg, #00c853, #1b5e20);
          color: #fff;
          font-weight: 900;
          font-size: 1rem;
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 0 20px rgba(0,200,83,0.5);
          border: 2px solid #00e676;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>

      {/* CINTA 1 */}
      <div style={{ background: '#00c853', padding: '10px 0' }}>
        <div className="ticker-wrap">
          <div className="ticker-inner" style={{ color: '#000' }}>
            {ticker1}{ticker1}
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <section style={{ textAlign: 'center', background: '#061406' }}>
        <img src="/hero.webp" alt="EFICLAX Hero" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }} />
        <div style={{ padding: '28px 20px', background: 'linear-gradient(180deg, #061406, #0a2a0a)' }}>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa">
            🛒 PEDIR POR WHATSAPP AHORA
          </a>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
            {['🚚 Envio Gratis', '💰 Pago al Recibir', '🇵🇾 Todo Paraguay'].map((item) => (
              <span key={item} style={{ background: 'rgba(0,200,83,0.15)', border: '1px solid #00c853', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', color: '#00e676', fontWeight: '600' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CINTA 2 */}
      <div style={{ background: '#1b5e20', padding: '10px 0' }}>
        <div className="ticker-wrap">
          <div className="ticker-inner" style={{ color: '#fff', animationDuration: '22s', animationDirection: 'reverse' }}>
            {ticker2}{ticker2}
          </div>
        </div>
      </div>

      {/* BEFORE AFTER */}
      <section style={{ textAlign: 'center', background: '#061406' }}>
        <img src="/before-after.webp" alt="Antes y Despues" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }} />
      </section>

      {/* CINTA 3 */}
      <div style={{ background: '#00c853', padding: '10px 0' }}>
        <div className="ticker-wrap">
          <div className="ticker-inner" style={{ color: '#000', animationDuration: '20s' }}>
            {ticker3}{ticker3}
          </div>
        </div>
      </div>

      {/* OFFER / PRICING */}
      <section style={{ textAlign: 'center', background: '#061406' }}>
        <img src="/offer.webp" alt="Oferta EFICLAX" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }} />
        <div style={{ padding: '28px 20px', background: 'linear-gradient(180deg, #061406, #0a2a0a)' }}>
          <p style={{ color: '#00e676', fontWeight: '800', fontSize: '1rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Elegis tu pack y pagas al recibir
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa">
            🛒 LLEVAR MI PACK AHORA
          </a>
        </div>
      </section>

      {/* LOGISTICS */}
      <section style={{ textAlign: 'center', background: '#061406' }}>
        <img src="/logistics.webp" alt="Envio Paraguay" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }} />
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '56px 20px 64px', textAlign: 'center', background: 'linear-gradient(135deg, #061406, #0d3d0d)' }}>
        <div style={{ display: 'inline-block', background: 'rgba(0,200,83,0.1)', border: '1px solid #00c853', borderRadius: '100px', padding: '6px 20px', fontSize: '13px', color: '#00e676', marginBottom: '20px', fontWeight: '700', letterSpacing: '1px' }}>
          🇵🇾 BIOLIFFE MORINGA PARAGUAY
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '12px', textTransform: 'uppercase', lineHeight: '1.1' }}>
          Listo para el <span style={{ color: '#00e676' }}>cambio?</span>
        </h2>
        <p style={{ color: '#a3a3a3', maxWidth: '480px', margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Escribinos ahora, elegis tu pack y lo recibis en la puerta. Sin adelanto. Sin riesgo.
        </p>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa">
          📲 WHATSAPP: +595 994 537 438
        </a>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
          {['✅ Envio Gratis', '✅ Pago Contraentrega', '✅ 100% Natural', '✅ Todo Paraguay'].map((item) => (
            <span key={item} style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.4)', borderRadius: '100px', padding: '8px 18px', fontSize: '13px', color: '#00e676', fontWeight: '600' }}>
              {item}
            </span>
          ))}
        </div>
        <p style={{ color: '#1a3a1a', fontSize: '12px', marginTop: '40px' }}>
          2025 Bioliffe Moringa Paraguay - Todos los derechos reservados
        </p>
      </section>

    </main>
  );
}