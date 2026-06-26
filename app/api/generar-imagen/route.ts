import { NextRequest, NextResponse } from "next/server";
import { fal } from "@fal-ai/client";

export async function POST(req: NextRequest) {
  try {
    fal.config({ credentials: process.env.FAL_KEY });
    const { producto, beneficios, precio, pais, estilo, seccion } = await req.json();
    const secciones: Record<string, string> = {
      hero: `Professional product advertisement hero banner, ${producto}, ${estilo || "premium dark luxury"} style, dramatic purple violet gradient lighting, price ${precio} ${pais || "Paraguay"}, benefits: ${beneficios}, 9:16 vertical format, ultra HD commercial photography, bold typography overlay, Bioliffe brand health wellness`,
      oferta: `Irresistible offer banner for ${producto}, limited time offer design, price ${precio} in ${pais}, urgent red orange accents on dark background, OFERTA badge, multiple units promotion, 9:16 vertical, professional marketing design`,
      antes_despues: `Before and after transformation split image for ${producto}, left problem state right results after using ${producto}, dramatic lighting, ${pais} market, health transformation, professional studio photography`,
      testimonios: `Customer testimonials layout for ${producto}, real people photos, star ratings, review quotes about ${beneficios}, professional dark background purple accents, trust badges, 9:16 format`,
      como_usar: `How to use instructions for ${producto}, 3 step visual guide, clean infographic style dark background, icons illustrations, ${beneficios}, professional health product photography`,
    };
    const prompt = secciones[seccion || "hero"];
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: { prompt, image_size: "portrait_16_9", num_inference_steps: 4, num_images: 1, enable_safety_checker: true },
    });
    const imageUrl = (result.data as any)?.images?.[0]?.url;
    if (!imageUrl) return NextResponse.json({ error: "No se genero imagen" }, { status: 500 });
    return NextResponse.json({ imageUrl, prompt, seccion: seccion || "hero" });
  } catch (error: any) {
    console.error("Error fal.ai:", error);
    return NextResponse.json({ error: error?.message || "Error generando imagen" }, { status: 500 });
  }
}
