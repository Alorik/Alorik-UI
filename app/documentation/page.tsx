"use client";
import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Menu,
  X,
  Box,
} from "lucide-react";
import DocumentLeftSIdebar from "@/components/documentation-components/left-header";





// --- 1. INLINE COMPONENTS FOR PREVIEW ---


// --- 2. DOCS UI COMPONENTS ---




// --- 3. MAIN LAYOUT ---

export default function AlorikDocs() {


  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gray-100 flex">
      {/* MOBILE HEADER */}
<DocumentLeftSIdebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 pt-24 lg:pt-12 px-6 lg:px-12 max-w-5xl pb-24">
        {/* HERO HEADER */}
        <div className="mb-16 border-b border-slate-200 pb-10">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Introduction
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
            Alorik is a collection of re-usable components built with Motion and
            Tailwind CSS. It&apos;s not a component library. It&apos;s a
            collection of copy and paste components that you can copy into your
            apps.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
              Browse Components
            </button>
            <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
              Read the Philosophy
            </button>
          </div>
        </div>



        {/* COMPONENTS SHOWCASE */}

      </main>

      {/* TABLE OF CONTENTS (Right Sidebar) */}
     
    </div>
  );
}
