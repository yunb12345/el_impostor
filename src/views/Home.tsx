import { useState, type JSX } from "react";

type Feature = {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: <i className="pi pi-sparkles"></i>,
    iconColor: "text-violet-600",
    title: "Deep Deduction",
    desc: "Analiza las sutiles elecciones de palabras para descubrir al agente oculto entre tus filas.",
  },
  {
    icon: <i className="pi pi-comment"></i>,
    iconColor: "text-orange-700",
    title: "Chat",
    desc: "Interacción social en tiempo real diseñada para interrogatorios sin complicaciones.",
  },
  {
    icon: <i className="pi pi-box"></i>,
    iconColor: "text-violet-600",
    title: "Dynamic Ciphers",
    desc: "Las palabras secretas generadas proceduralmente aseguran que no haya dos investigaciones iguales.",
  },
];


export default function CipherSuitLanding(): JSX.Element {
  return (
    <div className="bg-[#f6f6f8] text-[#2d2f31] min-h-screen flex flex-col font-sans selection:bg-[#ad8eff] selection:text-[#2b006f]">

      {/* Main */}
      <main className="flex-grow pt-24 pb-32 px-6 relative overflow-hidden flex flex-col items-center justify-center">

        {/* Hero */}
        <div className="relative z-10 text-center max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#e1e2e5] rounded-full">
            <span className="material-symbols-outlined text-violet-600 text-sm">
              <i className="pi pi-shield"></i>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#5a5c5d]">
              Version 1.0 Established
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-[#2d2f31] mb-6 flex flex-col">
            <span className="text-violet-600">EL</span>
            <span className="relative">
              IMPOSTOR
            </span>
          </h1>

          <p className="text-lg text-[#5a5c5d] leading-relaxed mb-12 max-w-md mx-auto">
            Entra en el mundo de alto riesgo de la deducción inteligente. Encuentra la verdad o teje la mentira perfecta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl shadow-xl shadow-violet-600/20 hover:-translate-y-1 transition-all duration-300 active:scale-95">
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl font-bold text-white">Start Game</span>
                <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">
                  <i className="pi pi-play"></i>
                </span>
              </div>
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-[#dbdde0] rounded-xl text-[#2d2f31] font-bold hover:-translate-y-1 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
              <span>Join Game</span>
              <span className="material-symbols-outlined text-[#5a5c5d]">
                <i className="pi pi-arrow-down-left-and-arrow-up-right-to-center"></i>
              </span>
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <section className="relative z-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {features.map(({ icon, iconColor, title, desc }) => (
            <div
              key={title}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#f0f1f3] rounded-lg flex items-center justify-center mb-6">
                <span className={`material-symbols-outlined ${iconColor}`}>
                  {icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-[#5a5c5d]">{desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer (desktop) */}
      <footer className="hidden md:flex fixed bottom-8 right-8 z-10">
        <div className="bg-[#f0f1f3] p-4 rounded-xl flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a5c5d]">
              Online Players
            </span>
            <span className="text-2xl font-black text-violet-600">1,402</span>
          </div>
          <div className="w-px h-10 bg-[#acadaf]/20" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a5c5d]">
              Active Servers
            </span>
            <span className="text-2xl font-black text-[#9b3f00]">84</span>
          </div>
          <div className="ml-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-violet-600 text-xl">
              <i className="pi pi-users"></i>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
