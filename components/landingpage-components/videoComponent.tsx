// components/landingpage-components/VideoSection.tsx
"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[70vh] bg-black overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="display.mp4" // put video in public/videos
        autoPlay
        loop
        muted
        playsInline
      />

    </section>
  );
}
