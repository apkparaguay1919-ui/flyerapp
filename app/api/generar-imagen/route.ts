import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { producto, beneficios, precio, pais, estilo } = await req.json();

    const prompt = `Professional product advertisement photo for ${producto}, ${estilo || "premium luxury style"}, dark background with purple and violet gradient lighting, text overlay showing price ${precio} for ${pais || "Paraguay"}, benefits: ${beneficios}, 9:16 vertical format, ultra HD, commercial photography, Bioliffe brand, health and wellness product, dramatic lighting, high contrast, professional studio shot`;

    const response = await fetch("https://fal.run/fal-ai/flux/schnell", {
      method: "POST",
      headers: {
        "Authorization": `Key ${process.env.FAL_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        image_size: "portrait_9_16",
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: "Error generando imagen", details: error }, { status: 500 });
    }

    const data = await response.json();
    const imageUrl = data.images?.[0]?.url;

    if (!imageUrl) {
      return NextResponse.json({ error: "No se genero imagen" }, { status: 500 });
    }

    return NextResponse.json({ imageUrl, prompt });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
