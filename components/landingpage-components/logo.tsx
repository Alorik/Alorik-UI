"use client";

export default function AlorikLogo() {
  return (
    <div className="bg-transparent flex flex-col items-start justify-start font-sans selection:bg-emerald-100 ">
      {/* MAIN CONTAINER */}
      <div className="relative group cursor-default select-none flex flex-col items-start">


        {/* 2. LOGO TYPOGRAPHY */}
        <h1 className="relative z-10 flex items-baseline tracking-tighter leading-none cursor-pointer">
          {/* 'Alorik' - Dark Chrome Gradient */}
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-900 via-neutral-700 to-neutral-500 drop-shadow-xl filter contrast-125">
            Alorik
          </span>

          {/* Spacer */}
          <span className="w-2" />

          {/* 'UI' - Deep Emerald Glass */}
          <span className="text-2xl font-bold relative">
            {/* Base Layer: Deep Green to Black-Green */}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-slate-900 via-emerald-700 to-slate-950">
              UI
            </span>

            {/* Top Shine (Subtle reflection) */}
            <span
              className="absolute inset-0 text-transparent bg-clip-text bg-linear-to-tr from-white/40 via-transparent to-transparent opacity-100 mix-blend-overlay"
              aria-hidden="true"
            >
              UI
            </span>

            {/* Inner Shadow for depth */}
            <span
              className="absolute inset-0 text-transparent bg-clip-text bg-linear-to-t from-black/10 to-transparent mix-blend-multiply"
              aria-hidden="true"
            >
              UI
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
