import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import "./BalmReelWidget.css";

const VIDEO_SRC = "/Balm%20Demo%20video.mp4";
const POSTER_SRC = "/product-balm-25ml.png";

function BalmReelWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const bubbleVideoRef = useRef(null);
  const expandedVideoRef = useRef(null);

  // Sync playback when switching between bubble and expanded view
  useEffect(() => {
    if (isOpen) {
      if (bubbleVideoRef.current) {
        bubbleVideoRef.current.pause();
      }
      if (expandedVideoRef.current) {
        expandedVideoRef.current.currentTime = bubbleVideoRef.current
          ? bubbleVideoRef.current.currentTime
          : 0;
        expandedVideoRef.current.muted = true;
        expandedVideoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
          });
      }
    } else {
      if (expandedVideoRef.current) {
        expandedVideoRef.current.pause();
      }
      if (bubbleVideoRef.current && !isDismissed) {
        bubbleVideoRef.current.muted = true;
        bubbleVideoRef.current.play().catch(() => {});
      }
    }
  }, [isOpen, isDismissed]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Track expanded video progress for story progress bar
  const handleTimeUpdate = () => {
    if (expandedVideoRef.current) {
      const current = expandedVideoRef.current.currentTime;
      const duration = expandedVideoRef.current.duration || 23;
      setProgress((current / duration) * 100);
    }
  };

  // Toggle play / pause in expanded player
  const togglePlay = (e) => {
    e.stopPropagation();
    if (!expandedVideoRef.current) return;
    if (expandedVideoRef.current.paused) {
      expandedVideoRef.current.play();
      setIsPlaying(true);
    } else {
      expandedVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Dismiss widget to minimized pill
  const handleDismissBubble = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  // If dismissed, show a sleek pill button to re-open anytime
  if (isDismissed) {
    return (
      <button
        type="button"
        className="reel-reopen-pill"
        onClick={() => {
          setIsDismissed(false);
          setIsOpen(true);
        }}
        aria-label="Watch Balm Demo Video"
      >
        <span className="reopen-pulse-dot" />
        <Play size={13} fill="currentColor" />
        <span>Watch Balm Demo</span>
      </button>
    );
  }

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 1. Collapsed Floating Video Bubble (Bottom-Right)    */}
      {/* ---------------------------------------------------- */}
      {!isOpen && (
        <aside
          className="reel-floating-bubble"
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(true);
            }
          }}
          aria-label="Click to open Balm Demo Video"
        >
          {/* Subtle Outer Glow Ring */}
          <div className="reel-glow-ring" />

          {/* Dismiss Mini 'X' Button */}
          <button
            type="button"
            className="reel-dismiss-btn"
            onClick={handleDismissBubble}
            aria-label="Dismiss video widget"
            title="Minimize"
          >
            <X size={12} />
          </button>

          {/* Mini Looping Video Preview */}
          <div className="reel-video-container">
            <video
              ref={bubbleVideoRef}
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="reel-mini-video"
            />
            {/* Live Indicator Pill */}
            <div className="reel-live-tag">
              <span className="live-dot" />
              <span>LIVE DEMO</span>
            </div>

            {/* Hover Play Icon Overlay */}
            <div className="reel-play-overlay">
              <div className="play-icon-circle">
                <Play size={16} fill="currentColor" />
              </div>
            </div>

            {/* Bottom Tagline Badge */}
            <div className="reel-bottom-badge">
              <Sparkles size={11} className="badge-sparkle" />
              <span>Balm Demo • 23s</span>
            </div>
          </div>
        </aside>
      )}

      {/* ---------------------------------------------------- */}
      {/* 2. Expanded Full Reel Player Modal                   */}
      {/* ---------------------------------------------------- */}
      {isOpen && (
        <div
          className="reel-modal-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Sat Aushadhi Balm Demo Reel"
        >
          <div
            className="reel-player-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Story Progress Bar */}
            <div className="reel-progress-bar-track">
              <div
                className="reel-progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Top Header Controls Overlay */}
            <div className="reel-header-overlay">
              <div className="reel-header-brand">
                <img
                  src="/logo1.png"
                  alt="Sat Aushadhi"
                  className="reel-brand-logo"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div>
                  <h4>Sat Aushadhi</h4>
                  <span>Pain Relief Balm Demo</span>
                </div>
              </div>

              <div className="reel-header-actions">
                {/* View Details Button moved to Top Header next to Close button (audio removed, video center 100% visible) */}
                <Link
                  to="/products#pain-relief-balm"
                  className="reel-header-view-btn"
                  onClick={() => setIsOpen(false)}
                >
                  <span>View Details</span>
                  <ArrowRight size={13} />
                </Link>

                {/* Close / Minimize */}
                <button
                  type="button"
                  className="reel-control-btn reel-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close reel player"
                  title="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Main Interactive Video Area - Entire Screen / Center / Bottom is 100% Visible */}
            <div className="reel-video-stage" onClick={togglePlay}>
              <video
                ref={expandedVideoRef}
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                autoPlay
                loop
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="reel-expanded-video"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                <source src="/Balm Demo video.mp4" type="video/mp4" />
              </video>

              {/* Pause / Play Tap Overlay Indicator */}
              {!isPlaying && (
                <div className="reel-pause-indicator">
                  <div className="pause-icon-bubble">
                    <Play size={28} fill="currentColor" />
                  </div>
                  <span>Tap to Play</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BalmReelWidget;
