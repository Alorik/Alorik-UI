"use client";

import InputComponent from "@/components-ui/Input/InputComponent";
import SlideButton from "@/components-ui/Button/SlideUpButton";
import CursorFollower from "@/components-ui/cursor/CursorFollower";
import StackCard from "@/components-ui/Card/StackedCard";

export default function ShowcaseComponents() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Simply copy and paste the code
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Copy-paste components to instantly elevate your UI.
          <br className="hidden sm:block" />
          Efficient, elegant, and easy to integrate.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-50 p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100 min-h-65 sm:min-h-75 flex items-center justify-center">
            <StackCard />
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800 min-h-50 sm:min-h-60 flex items-center justify-center">
            <InputComponent />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-950 p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800 min-h-70 sm:min-h-90 flex items-center justify-center">
            <SlideButton />
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100 min-h-65 sm:min-h-75 flex items-center justify-center">
            <CursorFollower />
          </div>
        </div>
      </div>
    </section>
  );
}
