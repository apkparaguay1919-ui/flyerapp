import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { producto, precio, beneficio } = await req.json();

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `Eres un experto en marketing digital para Paraguay. Crea un copy de venta para Facebook con este producto:

Producto: ${producto}
Precio: ${precio}
Beneficio principal: ${beneficio}

El copy debe:
- Empezar con una pregunta que genere curiosidad o dolor
- Listar 3 beneficios con emojis
- Incluir precio con urgencia
- Terminar con llamada a accion por WhatsApp
- Usar lenguaje paraguayo natural
- Maximo 150 palabras`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log('RESPUESTA:', JSON.stringify(data));

    if (data.content && data.content[0]) {
      return NextResponse.json({ copy: data.content[0].text });
    } else {
      return NextResponse.json({ copy: 'Error API: ' + JSON.stringify(data) });
    }

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ copy: 'Error: ' + error }, { status: 500 });
  }
}