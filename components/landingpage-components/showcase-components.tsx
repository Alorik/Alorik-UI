"use client";

import Button2 from "@/components-ui/Button/starlight";
import GracefulHoverCard from "@/components-ui/Card/GracefulCard";

import InputComponent from "@/components-ui/Input/InputComponent";
import SlideButton from "@/components-ui/Button/SlideUpButton";

export default function ShowcaseComponents() {
  return (
    <div className="min-h-screen flex-col container justify-center items-center py-12">
      <div>
        <h1 className="text-gray-800 text-3xl font-medium tracking-tight">
          Simply copy and paste the code
        </h1>
        <p className="text-gray-600 text-lg max-w-lg">
          Copy paste the code to standout your projects. It&apos;s Efficient,
          Easy.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-5 max-w-7xl mx-auto p-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-gray-950 p-12 shadow-2xl border border-slate-700 min-h-[400px] flex items-center justify-center">
            <GracefulHoverCard />
          </div>

          <div className="rounded-3xl bg-gray-950 p-12 shadow-2xl border border-slate-700 min-h-[215px] flex items-center justify-center">
            <InputComponent />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-gray-950 p-12 shadow-2xl border border-slate-800 min-h-[400px] flex items-center justify-center">
            <SlideButton />
          </div>

          <div className="rounded-3xl bg-gray-950 p-12 shadow-2xl border border-slate-800 min-h-[300px] flex items-center justify-center">
            <Button2 />
          </div>
        </div>
      </div>
    </div>
  );
}
