'use client';

import { useState } from 'react';

export default function Crear() {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [beneficio, setBeneficio] = useState('');
  const [resultado, setResultado] = useState('');
  const [cargando, setCargando] = useState(false);

  async function generarCopy() {
    if (!producto || !precio || !beneficio) {
      alert('Completa todos los campos');
      return;
    }
    setCargando(true);
    setResultado('');
    try {
      const response = await fetch('/api/generar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ producto, precio, beneficio }),
      });
      const data = await response.json();
      setResultado(data.copy);
    } catch (e) {
      setResultado('Error al generar. Intentá de nuevo.');
    }
    setCargando(false);
  }

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '100px', padding: '6px 18px', fontSize: '13px', color: '#d4af37', marginBottom: '16px' }}>
            JKINGS AI
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '900', margin: '0 0 8px', textTransform: 'uppercase' }}>
            Genera tu <span style={{ color: '#d4af37' }}>Copy</span> con IA
          </h1>
          <p style={{ color: '#a3a3a3', margin: 0 }}>Completá los datos y la IA genera el copy listo para publicar</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#d4af37', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Nombre del producto
            </label>
            <input
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Ej: EFICLAX Detox"
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#d4af37', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Precio
            </label>
            <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ej: Gs. 69.999"
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#d4af37', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Beneficio principal
            </label>
            <input
              value={beneficio}
              onChange={(e) => setBeneficio(e.target.value)}
              placeholder="Ej: Limpia el colon y elimina toxinas"
              style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <button
          onClick={generarCopy}
          disabled={cargando}
          style={{ width: '100%', background: cargando ? '#555' : 'linear-gradient(135deg, #d4af37, #f5d76e)', color: '#000', fontWeight: '900', fontSize: '1rem', padding: '18px', borderRadius: '100px', border: 'none', cursor: cargando ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}
        >
          {cargando ? 'Generando copy...' : 'Generar Copy con IA'}
        </button>

        {resultado && (
          <div style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, color: '#d4af37', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Copy Generado</h3>
              <button
                onClick={() => navigator.clipboard.writeText(resultado)}
                style={{ background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.4)', color: '#d4af37', padding: '6px 14px', borderRadius: '100px', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}
              >
                Copiar
              </button>
            </div>
            <p style={{ margin: 0, color: '#e5e5e5', lineHeight: '1.7', whiteSpace: 'pre-wrap', fontSize: '14px' }}>{resultado}</p>
          </div>
        )}

        <p style={{ textAlign: 'center', color: '#333', fontSize: '12px', marginTop: '40px' }}>
          2025 JKINGS AI
        </p>
      </div>
    </main>
  );
}