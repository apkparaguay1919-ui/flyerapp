import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const {
      producto, beneficios, precio, precioComparacion,
      precio2, precio3, pais, simboloMoneda, seccion,
      anguloVenta, avatarCliente, instrucciones, tamano
    } = await req.json();

    const sym = simboloMoneda || "¢";
    const country = pais || "Paraguay";

    const prompts: Record<string, string> = {

      hero: `Create a ULTRA PROFESSIONAL vertical marketing flyer (9:16 ratio) for ${producto} by Bioliffe brand.
This must look EXACTLY like a top-tier Latin American health supplement advertisement.

STRICT VISUAL REQUIREMENTS:
- Background: Rich dark green jungle with bokeh natural elements, golden glowing particles, cinematic lighting
- Typography: Bold impactful white text with dark green or golden accents, NO spelling errors
- Product: Photorealistic ${producto} Bioliffe branded pouch/bag centered with dramatic glow aura
- Style: Premium, high-end, like Herbalife or top MLM brand marketing

EXACT LAYOUT TOP TO BOTTOM:
1. TOP ROW: Gold stars ★★★★★ | "4.9/5" | "+10,000 CLIENTES SATISFECHOS" - small text
2. HEADLINE (HUGE BOLD): Write a compelling 2-line Spanish headline about ${beneficios || producto} - make it emotional and powerful
3. SUBTITLE: One line description in Spanish
4. PRICE BOX: Show "${sym}${precioComparacion || "399.000"}" with red strikethrough THEN arrow THEN "${sym}${precio || "349.000"}" in bright green badge
5. CENTER: Large ${producto} product bag/pouch with Bioliffe logo, surrounded by glowing green energy and natural ingredients floating around it
6. BENEFITS (3-4 items): Each with a small circular green icon containing a relevant emoji, then bold text:
   - Based on: ${beneficios || "Quema grasa naturalmente / Más energía diaria / Ingredientes 100% naturales"}
7. FOOTER BAR: Dark green bar with flag emoji + "ENVÍOS A TODO ${country.toUpperCase()}"
8. BOTTOM: Small text "Producto natural. No es medicamento." | "Ingredientes de origen natural"

${anguloVenta ? `TARGET AUDIENCE: ${anguloVenta}` : ""}
${instrucciones ? `SPECIAL INSTRUCTIONS: ${instrucciones}` : ""}

CRITICAL: ALL Spanish text must be PERFECTLY spelled. No typos. Professional typography only.
Quality level: National TV commercial advertisement. Photorealistic product.`,

      oferta: `Create a ULTRA PROFESSIONAL vertical marketing flyer (9:16 ratio) LIMITED TIME OFFER for ${producto} by Bioliffe.

STRICT VISUAL REQUIREMENTS:
- Background: Dark green jungle with golden light rays, bokeh leaves, premium atmosphere
- Style: Urgent but premium - like top Latin American ecommerce

EXACT LAYOUT:
1. TOP TITLE (HUGE): "OFERTA EXCLUSIVA" on line 1, "POR TIEMPO LIMITADO" on line 2 - white/golden bold text
2. SUBTITLE: "AHORRA MÁS CON NUESTROS COMBOS ${producto.toUpperCase()}"
3. THREE PRICING COLUMNS side by side:
   LEFT COLUMN (regular border):
   - "1 UNIDAD" header
   - Product image (1 bag)
   - "${sym}${precio || "349.000"}" large price
   - "LLÉVALO AHORA" green button
   
   CENTER COLUMN (golden highlighted border - MOST POPULAR):
   - "2 UNIDADES" header  
   - Product image (2 bags)
   - "${sym}${precio2 || "649.000"}" large price
   - "AHORRA MÁS" small text
   - "LLÉVALO AHORA" green button
   
   RIGHT COLUMN (golden glow - BEST VALUE badge "MÁS VENDIDO"):
   - "3 UNIDADES" header
   - Product image (3 bags)
   - "${sym}${precio3 || "899.000"}" large price
   - "MEJOR VALOR" small text
   - "LLÉVALO AHORA" golden button

4. TRUST ICONS ROW: 🚚 "ENVÍO RÁPIDO A TODO ${country.toUpperCase()}" | ✅ "GARANTÍA DE SATISFACCIÓN" | 💳 "PAGO SEGURO"
5. URGENCY BAR: Green progress bar + "STOCK LIMITADO – POCAS UNIDADES DISPONIBLES" + warning icon

${instrucciones ? `SPECIAL: ${instrucciones}` : ""}
CRITICAL: Perfect Spanish spelling. No typos. Professional quality.`,

      antes_despues: `Create a ULTRA PROFESSIONAL vertical marketing flyer (9:16 ratio) BEFORE/AFTER transformation for ${producto} by Bioliffe.

EXACT LAYOUT:
1. TOP: Two headers side by side - "ANTES" (dark/red) | "DESPUÉS" (bright green)
2. TOP HALF SPLIT IMAGE:
   - LEFT SIDE (dark, sad atmosphere): Overweight unhappy person in dark clothing, looking tired, dim lighting
   - RIGHT SIDE (bright, happy): Fit energetic smiling person in athletic wear, bright natural lighting with green energy glow
   - Diagonal split with green lightning bolt or arrow in center
3. LABELS BELOW EACH SIDE:
   ANTES side: "ANTES." bold + list of problems in Spanish related to ${beneficios || "metabolismo lento, falta energía, inflamación"}
   DESPUÉS side: "DESPUÉS." bold + list of results: ${beneficios || "vientre plano, más energía, bienestar diario"}
4. CENTER: Large ${producto} Bioliffe product bag with glowing green aura, floating natural ingredients around it
5. LARGE TITLE: "TRANSFORMA TU BIENESTAR CON ${producto.toUpperCase()}" - bold white text with green accent
6. TESTIMONIAL BOX: Rounded quote box with avatar photo placeholder + Spanish quote about transformation
7. STAT: Large "93%" with text "de usuarios sienten resultados desde la primera semana"

${instrucciones ? `SPECIAL: ${instrucciones}` : ""}
CRITICAL: Perfect Spanish. Photorealistic people. Professional quality like TV commercial.`,

      testimonios: `Create a ULTRA PROFESSIONAL vertical marketing flyer (9:16 ratio) CUSTOMER TESTIMONIALS for ${producto} by Bioliffe.

EXACT LAYOUT:
1. TOP TITLE: "RESEÑAS DE CLIENTES REALES" - large bold dark green text on light/white background
2. THREE TESTIMONIAL CARDS (white rounded cards with subtle shadow):
   CARD 1: 
   - Small circular photo of Latin American woman (30s, professional)
   - ★★★★★ gold stars
   - "MARÍA GONZÁLEZ, ASUNCIÓN:" bold
   - Testimonial quote in Spanish about ${beneficios || "energía y bienestar"} - 3 lines
   
   CARD 2:
   - Small circular photo of Latin American man (40s)
   - ★★★★★ gold stars  
   - "CARLOS PÉREZ, SANTA CRUZ:" bold
   - Testimonial about losing weight/more energy - 3 lines
   
   CARD 3:
   - Small circular photo of Latin American woman (50s)
   - ★★★★★ gold stars
   - "ANA LÓPEZ, ${country.toUpperCase()}:" bold
   - Testimonial about natural results - 3 lines

3. ${producto} product image at bottom center with green glow
4. GREEN BADGE FOOTER: "✓ MÁS DE 5,000 USUARIOS SATISFECHOS EN ${country.toUpperCase()}"

${instrucciones ? `SPECIAL: ${instrucciones}` : ""}
CRITICAL: Perfect Spanish spelling. Realistic Latin American faces. Professional card design.`,

      como_usar: `Create a ULTRA PROFESSIONAL vertical marketing flyer (9:16 ratio) HOW TO USE for ${producto} by Bioliffe.

EXACT LAYOUT - Dark green jungle background with golden accents:
1. TOP TITLE: "ACTIVA TU QUEMA GRASA CON ${producto.toUpperCase()}" - large bold golden/white text
2. SUBTITLE: "Sigue estos pasos simples para maximizar tus resultados naturales."
3. LEFT SIDE: Lifestyle photo of attractive Latin American woman/person drinking ${producto}, smiling, natural setting
4. RIGHT SIDE: 3 NUMBERED STEPS with golden circular numbers:
   STEP 1 - Golden circle "1" + relevant icon + "MEZCLA 1 SOBRE CON AGUA." bold
   STEP 2 - Golden circle "2" + clock icon + "TÓMALO 30 MIN ANTES DE HACER DEPORTE O ACCIÓN FÍSICA." bold  
   STEP 3 - Golden circle "3" + energy icon + "DISFRUTA DE ENERGÍA Y RESULTADOS VISIBLES." bold
5. CENTER BOTTOM: Large ${producto} Bioliffe product with golden glow platform, natural ingredients scattered around
6. FOOTER BAR: Gold gradient bar with "Bioliffe Moringa - Energía Natural" centered

${instrucciones ? `SPECIAL: ${instrucciones}` : ""}
CRITICAL: Perfect Spanish. Golden aesthetic. Professional photography quality.`,

      beneficios: `Create a ULTRA PROFESSIONAL vertical marketing flyer (9:16 ratio) BENEFITS for ${producto} by Bioliffe.

EXACT LAYOUT - Natural green background with person:
1. LARGE TITLE: "TRANSFORMA TU BIENESTAR Y VITALIDAD CON ${producto.toUpperCase()}" - bold white text
2. CENTER: Attractive Latin American person (relevant age/gender for product) in active pose, smiling, energetic
3. FLOATING BENEFIT BUBBLES around person (4 bubbles with icons):
   - Top left: Orange/green circle icon + "MÁS ENERGÍA DIARIA" bold + description
   - Top right: Circle icon + benefit 2 from ${beneficios} bold + description  
   - Bottom left: Circle icon + benefit 3 from ${beneficios} bold + description
   - Bottom right: Circle icon + benefit 4 bold + description
4. BOTTOM: ${producto} product image small + Bioliffe logo
5. FOOTER: Natural green with leaf icons + "100% NATURAL" | "SIN EFECTOS SECUNDARIOS"

${instrucciones ? `SPECIAL: ${instrucciones}` : ""}
CRITICAL: Perfect Spanish. Vibrant colors. Professional quality.`,
    };

    const finalSize = tamano === "1024x1536" ? "1024x1536" : 
                      tamano === "1536x1024" ? "1536x1024" : "1024x1024";

    const prompt = prompts[seccion || "hero"] || prompts.hero;

    const response = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size: finalSize as "1024x1024" | "1024x1536" | "1536x1024",
      quality: "high",
      n: 1,
    });

    const imageData = response.data?.[0];
    if (!imageData) return NextResponse.json({ error: "No se generó imagen" }, { status: 500 });

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