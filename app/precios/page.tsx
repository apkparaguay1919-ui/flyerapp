'use client';

const plans = [
  {
    name: 'Plan Pro',
    price: '$29',
    period: '/mes',
    tag: null,
    featured: false,
    features: [
      'Generacion de flyers con IA',
      'Landing pages automaticas',
      'Copy con inteligencia artificial',
      'Hasta 50 proyectos/mes',
      'Soporte por WhatsApp',
      'Acceso a todas las plantillas',
    ],
    link: 'https://jkingsai.lemonsqueezy.com/checkout/buy/8c8edf5d-43a8-4e4e-bec7-d8a372dbc3f9',
    cta: 'Empezar con Pro',
  },
  {
    name: 'Plan VIP',
    price: '$97',
    period: '/mes',
    tag: 'MAS POPULAR',
    featured: true,
    features: [
      'Todo lo del Plan Pro',
      'Proyectos ilimitados',
      'IA avanzada para copy',
      'Generacion de videos cortos',
      'Acceso prioritario 24/7',
      'Onboarding personalizado',
      'API access incluido',
    ],
    link: 'https://jkingsai.lemonsqueezy.com/checkout/buy/e4c471e0-5ddb-4c0b-8c71-8dc0ee95ac3a',
    cta: 'Empezar con VIP',
  },
];

export default function PreciosPage() {
  return (
    <main style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: '#0a0a0a',
      color: '#fff',
      minHeight: '100vh',
      padding: '60px 20px',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{
          display: 'inline-block',
          background: 'rgba(212,175,55,0.1)',
          border: '1px solid rgba(212,175,55,0.3)',
          borderRadius: '100px',
          padding: '6px 18px',
          fontSize: '13px',
          color: '#d4af37',
          marginBottom: '20px',
          letterSpacing: '1px',
        }}>
          JKINGS AI - PLANES
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '900',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '-1px',
        }}>
          Elige tu <span style={{ color: '#d4af37' }}>Plan</span>
        </h1>

        <p style={{
          color: '#a3a3a3',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto 50px',
          lineHeight: '1.6',
        }}>
          Genera flyers, landing pages y copy con IA en segundos. Sin diseno, sin codigo.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,215,0,0.05))'
                  : 'rgba(255,255,255,0.03)',
                border: plan.featured
                  ? '2px solid #d4af37'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '36px 28px',
                position: 'relative',
                textAlign: 'left',
              }}
            >
              {plan.tag && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#d4af37',
                  color: '#000',
                  fontWeight: '800',
                  fontSize: '11px',
                  padding: '4px 18px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap',
                  letterSpacing: '1px',
                }}>
                  {plan.tag}
                </div>
              )}

              <h2 style={{
                fontSize: '1.3rem',
                fontWeight: '800',
                color: '#d4af37',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                {plan.name}
              </h2>

              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: '#fff' }}>{plan.price}</span>
                <span style={{ color: '#555', fontSize: '1rem' }}>{plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#d4d4d4' }}>
                    <span style={{ color: '#d4af37', fontSize: '16px', marginTop: '1px', flexShrink: 0 }}>checkmark</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  background: plan.featured ? '#d4af37' : 'rgba(212,175,55,0.1)',
                  color: plan.featured ? '#000' : '#d4af37',
                  fontWeight: '800',
                  fontSize: '15px',
                  padding: '16px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  border: plan.featured ? 'none' : '1px solid rgba(212,175,55,0.3)',
                  letterSpacing: '0.5px',
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'left',
        }}>
          <div>
            <p style={{ fontWeight: '700', margin: '0 0 4px', fontSize: '15px' }}>Pago seguro con Lemon Squeezy</p>
            <p style={{ color: '#555', fontSize: '13px', margin: 0 }}>
              Pagos procesados de forma segura. Cancela cuando quieras. Sin contratos.
            </p>
          </div>
        </div>

        <p style={{ color: '#333', fontSize: '12px', marginTop: '40px' }}>
          2025 JKINGS AI - Todos los derechos reservados
        </p>
      </div>
    </main>
  );
}