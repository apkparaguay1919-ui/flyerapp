"use client";
import { useRouter } from "next/navigation";

export default function Crear() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center px-6">
      <div
        className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center text-sm font-black mb-6 cursor-pointer"
        onClick={() => router.push("/")}
      >
        J
      </div>
      <h1 className="text-3xl font-black mb-2 text-center">Crea tu flyer con IA</h1>
      <p className="text-gray-400 text-sm mb-8 text-center">Completa los datos y generamos todo en segundos</p>
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-full max-w-lg text-center">
        <p className="text-yellow-400 text-sm">✨ Próximamente — formulario completo con IA</p>
        <button
          onClick={() => router.push("/precios")}
          className="mt-6 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold px-6 py-3 rounded-xl text-sm"
        >
          Ver planes →
        </button>
      </div>
    </main>
  );
}