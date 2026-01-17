"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full min-h-[80vh] mx-auto my-15 bg-black overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="landing.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}
