'use client';

import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function IntroVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl relative group bg-black">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      <video
        ref={videoRef}
        className="w-full h-auto aspect-video object-cover"
        poster="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
        preload="metadata"
        playsInline
        muted
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source
          src="https://cdn.pixabay.com/video/2024/03/15/204306-925981962_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Controls overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <button
          onClick={toggle}
          className={`pointer-events-auto w-16 h-16 rounded-full glass-strong flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
        </button>
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex gap-2">
        <button
          onClick={toggleMute}
          className="pointer-events-auto w-9 h-9 rounded-full glass-strong flex items-center justify-center text-white/90 hover:text-white transition"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Label */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-zinc-200">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        Intro Video · 45s
      </div>
    </div>
  );
}
