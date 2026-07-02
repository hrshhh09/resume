'use client';

import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
      return;
    }

    video.pause();
    setPlaying(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] bg-black shadow-2xl">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <video
        ref={videoRef}
        className="aspect-video h-auto w-full object-cover"
        poster="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
        preload="metadata"
        playsInline
        muted
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="https://cdn.pixabay.com/video/2024/03/15/204306-925981962_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <button onClick={toggle} className={`glass-strong pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
        </button>
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex gap-2">
        <button onClick={toggleMute} className="glass-strong pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:text-white" aria-label={muted ? 'Unmute' : 'Mute'}>
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      <div className="glass absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-zinc-200">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
        Intro Video - 45s
      </div>
    </div>
  );
}