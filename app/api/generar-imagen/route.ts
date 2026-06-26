import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { producto, beneficios, precio, precioComparacion, precio2, precio3, pais, simboloMoneda, seccion, estilo, anguloVenta, avatarCliente, instrucciones } = await req.json();

    const prompts: Record<string, string> = {
      hero: `Create a professional vertical marketing flyer 9:16 (1080x1920px) for ${producto} by Bioliffe brand.
Style: ${estilo || "dark green jungle background with golden glowing effects and natural elements"}.
Layout:
- TOP: Gold stars ★★★★★ 4.9/5 · +10,000 CLIENTES SATISFECHOS
- LARGE BOLD TITLE: Create compelling headline about ${producto} benefits: ${beneficios}
- SUBTITLE: Short description of main benefit
- PRICE: strikethrough ${simboloMoneda || "¢"}${precioComparacion || "399.000"} → ${simboloMoneda || "¢"}${precio || "349.000"} in green badge
- CENTER: Photorealistic product image of ${producto} pouch/bottle with glowing aura matching brand colors
- 3-4 BENEFIT ICONS with text: ${beneficios}
- BOTTOM BAR: 🇵🇾 ENVÍOS A TODO ${pais?.toUpperCase() || "PARAGUAY"}
${anguloVenta ? `Target audience: ${anguloVenta}` : ""}
${instrucciones ? `Extra: ${instrucciones}` : ""}
Ultra professional marketing quality like top Latin American health supplement ads. Bold impactful typography. Photorealistic.`,

      oferta: `Create a professional vertical marketing flyer 9:16 for ${producto} by Bioliffe. LIMITED TIME OFFER layout.
Style: ${estilo || "dark green jungle background with golden effects"}.
Layout:
- TOP TITLE (large bold): OFERTA EXCLUSIVA POR TIEMPO LIMITADO - AHORRA MÁS CON ${producto.toUpperCase()}
- 3 PRICING COLUMNS:
  LEFT: 1 UNIDAD - ${simboloMoneda}${precio || "349.000"} - LLÉVALO AHORA button
  CENTER: 2 UNIDADES - ${simboloMoneda}${precio2 || "649.000"} - AHORRA Y GANA - LLÉVALO AHORA button  
  RIGHT (highlighted BEST VALUE): MÁS VENDIDO - ${simboloMoneda}${precio3 || "899.000"} - MEJOR VALOR - LLÉVALO AHORA golden button
- Product images showing 1, 2, 3 units
- ICONS ROW: 🚚 Envío Rápido · ✅ Garantía · 💳 Pago Seguro
- BOTTOM: STOCK LIMITADO - POCAS UNIDADES DISPONIBLES with progress bar
${instrucciones ? `Extra: ${instrucciones}` : ""}
Professional Latin American marketing quality.`,

      antes_despues: `Create a professional vertical marketing flyer 9:16 BEFORE/AFTER for ${producto} by Bioliffe.
Style: ${estilo || "split dark/light background with green glowing energy effects"}.
Layout:
- TOP: ANTES | DESPUÉS headers in contrasting colors
- TOP HALF: Split image - LEFT dark sad person showing problem, RIGHT energetic happy fit person showing results
- CENTER: ${producto} product prominently displayed with glow effects and natural ingredients
- TITLE: TRANSFORMA TU BIENESTAR CON ${producto.toUpperCase()}
- BEFORE bullets (problems): related to ${beneficios} reversed
- AFTER bullets (results): ${beneficios}
- TESTIMONIAL quote box with avatar
- BOTTOM STAT: 93% de usuarios ven resultados
${instrucciones ? `Extra: ${instrucciones}` : ""}
Ultra professional marketing quality.`,

      testimonios: `Create a professional vertical marketing flyer 9:16 TESTIMONIALS for ${producto} by Bioliffe.
Style: ${estilo || "light green natural background with white cards"}.
Layout:
- TOP TITLE: RESEÑAS DE CLIENTES REALES (bold green)
- 3 TESTIMONIAL CARDS (white rounded cards):
  Card 1: Photo woman, ★★★★★, Name City, positive quote about ${beneficios}
  Card 2: Photo man, ★★★★★, Name City, positive quote about energy results
  Card 3: Photo woman, ★★★★★, Name City, positive quote about transformation
- ${producto} product image at bottom with glow
- GREEN BADGE: MÁS DE 5,000 USUARIOS SATISFECHOS
${instrucciones ? `Extra: ${instrucciones}` : ""}
Professional Latin American marketing quality.`,

      como_usar: `Create a professional vertical marketing flyer 9:16 HOW TO USE for ${producto} by Bioliffe.
Style: ${estilo || "dark green jungle background with golden numbered circles"}.
Layout:
- TOP TITLE: ACTIVA TU QUEMA GRASA CON ${producto.toUpperCase()} (bold golden)
- SUBTITLE: Sigue estos pasos simples para maximizar tus resultados
- LEFT: Lifestyle photo of person using/drinking ${producto}
- RIGHT: 3 NUMBERED STEPS with golden circles:
  1. First step of ${producto} usage
  2. Second step timing/instructions  
  3. Third step results
- ${producto} product centered with glow effects and ingredients
- BOTTOM BAR: Bioliffe - Energía Natural
${instrucciones ? `Extra: ${instrucciones}` : ""}
Ultra professional marketing quality.`,
    };

    const prompt = prompts[seccion || "hero"];

    const response = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1792",
      quality: "medium",
      n: 1,
    });

    const imageData = response.data?.[0];
    if (!imageData) return NextResponse.json({ error: "No se genero imagen" }, { status: 500 });
    
    if (imageData.b64_json) {
      return NextResponse.json({ 
        imageUrl: `data:image/png;base64,${imageData.b64_json}`,
        isBase64: true 
      });
    } else if (imageData.url) {
      return NextResponse.json({ imageUrl: imageData.url });
    }

    return NextResponse.json({ error: "No se generó imagen" }, { status: 500 });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return NextResponse.json({ error: error?.message || "Error generando imagen" }, { status: 500 });
  }
}
