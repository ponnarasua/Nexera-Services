"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface HlsVideoBackgroundProps {
  src: string;
}

export default function HlsVideoBackground({ src }: HlsVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setLoading(false);
        video.play().catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.warn("HLS network error, trying to recover...");
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.warn("HLS media error, trying to recover...");
              hls?.recoverMediaError();
              break;
            default:
              setError("Failed to load HLS stream.");
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        setLoading(false);
        video.play().catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      });
    } else {
      setError("HLS playback is not supported in this browser.");
      setLoading(false);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-20 bg-black">
      {/* HTML5 video element */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark overlay vignette to ensure readability of text in foreground */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Loading buffering indicator */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-accent-secondary border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-semibold text-text-muted tracking-wider uppercase animate-pulse">
              Buffering Stream...
            </span>
          </div>
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/95 px-6 text-center">
          <div className="space-y-2 max-w-sm">
            <p className="text-sm font-bold text-red-400">⚠️ Video Playback Error</p>
            <p className="text-xs text-text-muted">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}
