export interface Product {
  id: string;
  name: string;
  slug: string;
  photo: string;
  price: Record<string, { amount: number; currency: string; promo?: number }>;
  benefits: string[];
  ingredients: string[];
  modeOfUse: string;
  countries: string[];
  copyShort: string;
  copyLong: string;
  disclaimer: string;
  category: string;
  tags: string[];
}

export const BIOLIFFE_PRODUCTS: Product[] = [
  {
    id: "eficlax",
    name: "Eficlax",
    slug: "eficlax",
    photo: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=90",
    price: {
      PY: { amount: 150000, currency: "Gs", promo: 120000 },
      AR: { amount: 8500, currency: "ARS", promo: 6800 },
      UY: { amount: 890, currency: "UYU", promo: 720 },
      BO: { amount: 85, currency: "BOB", promo: 68 },
    },
    benefits: [
      "Apoya el tránsito intestinal saludable",
      "Contribuye a la sensación de bienestar digestivo",
      "Fórmula natural con ingredientes botánicos",
      "Sin estimulantes artificiales",
    ],
    ingredients: ["Senna", "Cascara sagrada", "Hinojo", "Jengibre", "Cúrcuma"],
    modeOfUse: "Tomar 1 cápsula antes de dormir con un vaso de agua. Consultar a un profesional de salud antes de usar.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "🌿 Eficlax — tu aliado natural para el bienestar digestivo. Fórmula botánica sin estimulantes. ¡Pedí el tuyo hoy!",
    copyLong: `¿Sentís pesadez o malestar digestivo? 😮‍💨

Eficlax es la solución natural que estabas buscando. Formulado con ingredientes botánicos seleccionados como Senna, Jengibre y Cúrcuma, apoya de forma suave y natural el bienestar intestinal.

✅ Ingredientes 100% naturales
✅ Sin estimulantes artificiales  
✅ Fácil de tomar — 1 cápsula antes de dormir
✅ Disponible en todo el país

👇 Escribinos ahora y te damos más información.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de comenzar cualquier suplemento.",
    category: "Digestivo",
    tags: ["detox", "digestivo", "natural", "botánico"],
  },
  {
    id: "metha",
    name: "Metha",
    slug: "metha",
    photo: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=90",
    price: {
      PY: { amount: 180000, currency: "Gs", promo: 145000 },
      AR: { amount: 9200, currency: "ARS", promo: 7400 },
      UY: { amount: 950, currency: "UYU", promo: 760 },
      BO: { amount: 92, currency: "BOB", promo: 74 },
    },
    benefits: [
      "Apoya los niveles de energía naturales",
      "Contribuye al bienestar metabólico",
      "Formulado con extractos de hierbas premium",
      "Apto para rutinas activas",
    ],
    ingredients: ["Guaraná", "Té verde", "Vitamina B12", "Zinc", "Magnesio"],
    modeOfUse: "Tomar 2 cápsulas por la mañana con el desayuno. No exceder la dosis recomendada.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "⚡ Metha — energía natural para tu día. Guaraná + Té Verde + Vitamina B12. ¡Sentí la diferencia!",
    copyLong: `¿Necesitás más energía para tu día a día? ⚡

Metha es el suplemento que te acompaña con energía natural sin los picos y caídas de los energizantes convencionales.

✅ Guaraná + Té Verde para energía sostenida
✅ Vitamina B12 para el sistema nervioso
✅ Zinc y Magnesio para el rendimiento físico
✅ Sin azúcar agregada

💬 Escribinos y te asesoramos sin compromiso.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de comenzar cualquier suplemento.",
    category: "Energía",
    tags: ["energía", "metabolismo", "vitaminas", "activo"],
  },
  {
    id: "alkam",
    name: "Alkam",
    slug: "alkam",
    photo: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=90",
    price: {
      PY: { amount: 165000, currency: "Gs", promo: 132000 },
      AR: { amount: 8800, currency: "ARS", promo: 7000 },
      UY: { amount: 870, currency: "UYU", promo: 695 },
      BO: { amount: 88, currency: "BOB", promo: 70 },
    },
    benefits: [
      "Apoya el equilibrio del pH del organismo",
      "Contribuye a la hidratación celular",
      "Electrolitos naturales para el bienestar",
      "Fórmula alcalinizante natural",
    ],
    ingredients: ["Bicarbonato de sodio", "Clorela", "Espirulina", "Limón deshidratado", "Potasio"],
    modeOfUse: "Disolver un sobre en 250ml de agua fría por la mañana en ayunas.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "💧 Alkam — hidrátate desde adentro. Electrolitos naturales + fórmula alcalinizante. Tu cuerpo lo necesita.",
    copyLong: `La hidratación va más allá del agua 💧

Alkam combina electrolitos naturales con superalimentos como Clorela y Espirulina para apoyar el equilibrio interno de tu organismo.

✅ Fórmula alcalinizante natural
✅ Electrolitos para hidratación óptima  
✅ Superalimentos antioxidantes
✅ Sin sabores artificiales

🌟 Ideal para personas activas que cuidan su salud.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de comenzar cualquier suplemento.",
    category: "Hidratación",
    tags: ["alcalino", "hidratación", "electrolitos", "superalimentos"],
  },
  {
    id: "revella",
    name: "Revella",
    slug: "revella",
    photo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=90",
    price: {
      PY: { amount: 220000, currency: "Gs", promo: 175000 },
      AR: { amount: 11500, currency: "ARS", promo: 9200 },
      UY: { amount: 1150, currency: "UYU", promo: 920 },
      BO: { amount: 115, currency: "BOB", promo: 92 },
    },
    benefits: [
      "Apoya la salud y apariencia de la piel",
      "Contribuye a la elasticidad natural",
      "Antioxidantes para el cuidado celular",
      "Fórmula con colágeno marino y vitamina C",
    ],
    ingredients: ["Colágeno marino", "Vitamina C", "Ácido hialurónico", "Coenzima Q10", "Biotina"],
    modeOfUse: "Tomar 2 cápsulas por la mañana con agua. Para mejores resultados, usar de forma continua.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "✨ Revella — cuida tu piel desde adentro. Colágeno marino + Ácido Hialurónico. ¡Sentí la diferencia!",
    copyLong: `El secreto de una piel radiante comienza desde adentro ✨

Revella combina los ingredientes más buscados en el cuidado de la piel: Colágeno marino, Ácido hialurónico y Coenzima Q10 en una sola cápsula.

✅ Colágeno marino para elasticidad
✅ Ácido hialurónico para hidratación profunda
✅ Vitamina C antioxidante natural
✅ Biotina para uñas y cabello

💆‍♀️ Miles de personas ya lo usan. ¡Sumate!`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de comenzar cualquier suplemento.",
    category: "Belleza",
    tags: ["colágeno", "piel", "belleza", "antiaging"],
  },
  {
    id: "ori",
    name: "Ori",
    slug: "ori",
    photo: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&q=90",
    price: {
      PY: { amount: 195000, currency: "Gs", promo: 156000 },
      AR: { amount: 10200, currency: "ARS", promo: 8100 },
      UY: { amount: 1020, currency: "UYU", promo: 815 },
      BO: { amount: 102, currency: "BOB", promo: 82 },
    },
    benefits: [
      "Aceite esencial de origen natural",
      "Apoya el bienestar del sistema respiratorio",
      "Aromaterapia y uso tópico diluido",
      "Fórmula pura sin aditivos",
    ],
    ingredients: ["Aceite de Orégano", "Aceite de oliva extra virgen (portador)", "Carvacrol natural"],
    modeOfUse: "Uso externo: diluir 2-3 gotas en aceite portador antes de aplicar. No ingerir sin guía profesional.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "🌿 Ori — aceite de orégano premium. Carvacrol natural de alta concentración. ¡La naturaleza en tu hogar!",
    copyLong: `El poder de la naturaleza en cada gota 🌿

Ori es aceite de orégano de concentración premium, con alto contenido de Carvacrol natural, uno de los compuestos botánicos más estudiados del mundo.

✅ Carvacrol natural de alta concentración
✅ Sin aditivos ni conservantes
✅ Extracción artesanal controlada
✅ Múltiples usos en el hogar

🏠 Para toda la familia, con precaución y uso adecuado.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Usar siempre diluido y consulte a un profesional de salud.",
    category: "Aceites",
    tags: ["aceite", "orégano", "natural", "botánico"],
  },
  {
    id: "purifort",
    name: "Purifort",
    slug: "purifort",
    photo: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=90",
    price: {
      PY: { amount: 175000, currency: "Gs", promo: 140000 },
      AR: { amount: 9100, currency: "ARS", promo: 7200 },
      UY: { amount: 910, currency: "UYU", promo: 728 },
      BO: { amount: 91, currency: "BOB", promo: 73 },
    },
    benefits: [
      "Apoya las defensas naturales del organismo",
      "Fórmula multivitamínica completa",
      "Antioxidantes para el cuidado celular",
      "Zinc y Selenio para el sistema inmune",
    ],
    ingredients: ["Vitamina C", "Vitamina D3", "Zinc", "Selenio", "Equinácea", "Propóleo"],
    modeOfUse: "Tomar 1 cápsula diaria con el almuerzo. Puede aumentarse a 2 en períodos de mayor necesidad.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "🛡️ Purifort — fortalece tus defensas naturales. Vitamina C + D3 + Zinc + Propóleo. ¡Tu escudo diario!",
    copyLong: `¿Cuidás tus defensas cada día? 🛡️

Purifort es la fórmula multivitamínica completa que combina los nutrientes más estudiados para el sistema inmune: Vitamina C, D3, Zinc y el poder natural del Propóleo.

✅ Vitamina C + D3 para las defensas
✅ Zinc y Selenio esenciales
✅ Equinácea y Propóleo naturales
✅ 1 cápsula diaria, fácil de tomar

💪 Para toda la familia. Consultanos hoy.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de comenzar cualquier suplemento.",
    category: "Inmunidad",
    tags: ["inmunidad", "vitaminas", "defensas", "zinc"],
  },
  {
    id: "amagy",
    name: "Amagy",
    slug: "amagy",
    photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=90",
    price: {
      PY: { amount: 210000, currency: "Gs", promo: 168000 },
      AR: { amount: 10800, currency: "ARS", promo: 8640 },
      UY: { amount: 1080, currency: "UYU", promo: 864 },
      BO: { amount: 108, currency: "BOB", promo: 86 },
    },
    benefits: [
      "Superalimento rico en nutrientes esenciales",
      "Apoya la vitalidad y el bienestar general",
      "Moringa + Spirulina en fórmula concentrada",
      "Antioxidantes y aminoácidos naturales",
    ],
    ingredients: ["Moringa oleifera", "Espirulina", "Clorela", "Ashwagandha", "Vitamina E"],
    modeOfUse: "Tomar 2 cápsulas por la mañana en ayunas o con el desayuno. Iniciar con 1 cápsula las primeras semanas.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "🌱 Amagy — el superalimento que tu cuerpo necesita. Moringa + Espirulina + Ashwagandha. ¡Sentí la vitalidad!",
    copyLong: `La naturaleza tiene lo que tu cuerpo necesita 🌱

Amagy concentra el poder de los superalimentos más valorados: Moringa, Espirulina y Ashwagandha en una fórmula que apoya tu vitalidad diaria.

✅ Moringa — el árbol de la vida
✅ Espirulina — proteína vegetal completa
✅ Ashwagandha — adaptógeno natural
✅ Rico en antioxidantes y aminoácidos

🌿 Nutrición premium de la naturaleza para vos.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico antes de comenzar cualquier suplemento.",
    category: "Superalimentos",
    tags: ["moringa", "espirulina", "superalimento", "vitalidad"],
  },
  {
    id: "vegafull",
    name: "Vegafull",
    slug: "vegafull",
    photo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=90",
    price: {
      PY: { amount: 230000, currency: "Gs", promo: 184000 },
      AR: { amount: 11900, currency: "ARS", promo: 9520 },
      UY: { amount: 1190, currency: "UYU", promo: 952 },
      BO: { amount: 119, currency: "BOB", promo: 95 },
    },
    benefits: [
      "Proteína vegetal completa de alta calidad",
      "Apoya el desarrollo y mantenimiento muscular",
      "Sin lactosa ni gluten",
      "Sabor natural sin edulcorantes artificiales",
    ],
    ingredients: ["Proteína de guisante", "Proteína de arroz integral", "Proteína de cáñamo", "Leucina", "BCAA naturales"],
    modeOfUse: "Mezclar 1 medida (30g) en 300ml de agua o bebida vegetal. Ideal post entrenamiento o como snack proteico.",
    countries: ["PY", "AR", "UY", "BO"],
    copyShort: "💪 Vegafull — proteína vegetal premium. Guisante + Arroz + Cáñamo. Sin lactosa. ¡Para tu rendimiento!",
    copyLong: `Proteína de alta calidad, sin comprometer tus valores 💪

Vegafull combina las mejores fuentes de proteína vegetal para darte un perfil completo de aminoácidos esenciales, sin lactosa, sin gluten y sin sabores artificiales.

✅ Proteína de guisante + arroz + cáñamo
✅ Perfil completo de aminoácidos
✅ Sin lactosa ni gluten
✅ 24g de proteína por porción

🏋️ Para atletas, fitness lovers y veganos comprometidos.`,
    disclaimer: "Este producto no es un medicamento. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Consulte a su médico o nutricionista antes de comenzar cualquier suplemento.",
    category: "Proteínas",
    tags: ["proteína", "vegano", "fitness", "músculo"],
  },
];

export const PROMPT_BANK = [
  {
    id: "flyer-916",
    title: "Flyer 9:16 Profesional",
    category: "Imagen",
    icon: "📱",
    prompt: `Crea un flyer vertical 9:16 para producto de salud natural. Fondo degradado oscuro con brillos morados. Imagen del producto centrada con halo de luz. Texto grande y bold con nombre del producto. Precio anterior tachado y precio nuevo en dorado. Badge "OFERTA LIMITADA". Call to action "Escribime por WhatsApp". Estilo profesional moderno.`,
    tags: ["flyer", "9:16", "producto", "oferta"],
  },
  {
    id: "video-reel",
    title: "Video Reel Viral",
    category: "Video",
    icon: "🎬",
    prompt: `Crea un guión para Reel de 30 segundos. Gancho en los primeros 3 segundos con pregunta impactante. Problema que resuelve el producto (5 seg). Beneficios clave con texto en pantalla (10 seg). Testimonio o resultado (7 seg). Call to action urgente (5 seg). Música energética de fondo. Transiciones rápidas. Subtítulos en blanco con sombra.`,
    tags: ["reel", "video", "viral", "gancho"],
  },
  {
    id: "copy-whatsapp",
    title: "Copy WhatsApp de Venta",
    category: "Copy",
    icon: "💬",
    prompt: `Escribe un mensaje de WhatsApp para vender un suplemento natural. Longitud: 150-200 palabras. Comenzar con emoji y pregunta que genere curiosidad. Mencionar el problema principal. Presentar el producto como solución. 3 beneficios clave con checkmarks. Precio con descuento. Urgencia (stock limitado o tiempo). Cierre con pregunta de acción. Sin spam ni promesas médicas.`,
    tags: ["whatsapp", "copy", "venta", "mensaje"],
  },
  {
    id: "imagen-premium",
    title: "Imagen Producto Premium",
    category: "Imagen",
    icon: "✨",
    prompt: `Fotografía de producto premium, estilo lujo minimalista. Fondo negro o blanco puro. Iluminación de estudio con reflejos metálicos. Producto centrado con sombra suave. Textura de superficie elegante (mármol o cuero). Colores: negro, dorado, blanco. Sin texto. Alta resolución. Estilo Chanel o Armani.`,
    tags: ["imagen", "premium", "lujo", "producto"],
  },
  {
    id: "estilo-herbalife",
    title: "Estilo Herbalife / MLM",
    category: "Imagen",
    icon: "🌿",
    prompt: `Diseño estilo MLM wellness moderno. Fondo verde esmeralda o naranja vibrante. Persona feliz y saludable en segundo plano. Producto en primer plano con brillo. Texto motivacional grande. Logo de la empresa. Precio con descuento del distribuidor. Slogan de bienestar. Energía positiva y confianza. Colores: verde, naranja, blanco.`,
    tags: ["herbalife", "wellness", "MLM", "salud"],
  },
  {
    id: "antes-despues",
    title: "Antes / Después",
    category: "Imagen",
    icon: "🔄",
    prompt: `Diseño visual antes/después para suplemento. Dos paneles divididos verticalmente. Panel izquierdo: "ANTES" en rojo, icono de problema. Panel derecho: "DESPUÉS" en verde, icono de resultado. Flecha o línea divisoria en el centro. Tiempo de resultado realista. Disclaimer pequeño al pie. Sin imágenes de personas reales.`,
    tags: ["antes-despues", "resultado", "transformación"],
  },
  {
    id: "estilo-fitness",
    title: "Estilo Fitness / Gym",
    category: "Imagen",
    icon: "💪",
    prompt: `Diseño fitness de alto impacto. Fondo oscuro con textura metálica o carbono. Colores neón: verde eléctrico, azul cyan o naranja. Tipografía agresiva y bold. Producto con efecto de energía o explosión. Números de macros o proteínas destacados. Silueta atlética en el fondo. Estilo: pre-workout, gimnasio premium.`,
    tags: ["fitness", "gym", "proteína", "atlético"],
  },
  {
    id: "estilo-natural",
    title: "Estilo Natural Orgánico",
    category: "Imagen",
    icon: "🌱",
    prompt: `Diseño natural y orgánico. Fondo de madera clara o piedra natural. Elementos de naturaleza: hojas, hierbas, flores. Colores: verde salvia, tierra, crema, marrón suave. Tipografía serif elegante. Producto rodeado de ingredientes naturales. Luz natural y suave. Texturas orgánicas. Estilo: boutique wellness, tienda natural.`,
    tags: ["natural", "orgánico", "herbal", "wellness"],
  },
  {
    id: "copy-facebook-ads",
    title: "Copy Facebook / Meta Ads",
    category: "Copy",
    icon: "📘",
    prompt: `Escribe copy para anuncio de Facebook Ads para suplemento natural. Formato: Texto primario (125 chars), Titular (27 chars), Descripción (27 chars). El copy debe: captar atención con pregunta o dato impactante, presentar beneficio principal, tener llamada a la acción clara. Sin claims médicos ni promesas de resultados. Emojis moderados.`,
    tags: ["facebook", "ads", "meta", "publicidad"],
  },
  {
    id: "whatsapp-status",
    title: "WhatsApp Status / Story",
    category: "Video",
    icon: "📲",
    prompt: `Video para WhatsApp Status, duración 15-20 segundos, formato 9:16. Texto grande y legible en móvil. Colores vivos que resalten. Fondo sólido o degradado simple. Producto en primer plano. Precio visible. Emoji grande. CTA: "Deslizá para más info". Sin música (se ve en silencio). Mensaje directo y claro. Máximo 20 palabras visibles.`,
    tags: ["whatsapp", "status", "video", "móvil"],
  },
];
