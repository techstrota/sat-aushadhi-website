import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollProgressBar.css";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, pct: 0 });
  const trackRef = useRef(null);
  const tickingRef = useRef(false);
  const location = useLocation();

  // Calculate current vertical scroll percentage
  const updateProgress = useCallback(() => {
    const docEl = document.documentElement;
    const body = document.body;
    const scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop || 0;
    const scrollHeight = Math.max(
      docEl.scrollHeight,
      body.scrollHeight,
      docEl.offsetHeight,
      body.offsetHeight,
      docEl.clientHeight,
    );
    const clientHeight = window.innerHeight || docEl.clientHeight || 0;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 0) {
      setProgress(0);
    } else {
      const pct = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
      setProgress(pct);
    }
    tickingRef.current = false;
  }, []);

  const onScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(updateProgress);
    }
  }, [updateProgress]);

  // Recalculate on scroll, resize, route change, and DOM mutations
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial check
    updateProgress();

    // Recheck after initial DOM render/font loads
    const timer = setTimeout(updateProgress, 200);

    // Watch for dynamic DOM changes (e.g. accordion open, filters, images loading)
    let observer;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => {
        updateProgress();
      });
      observer.observe(document.body);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [onScroll, updateProgress, location.pathname]);

  // Scroll to a proportional position based on clientX on the progress track
  const scrollToClientX = useCallback(
    (clientX, smooth = false) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));

      const docEl = document.documentElement;
      const body = document.body;
      const scrollHeight = Math.max(
        docEl.scrollHeight,
        body.scrollHeight,
        docEl.offsetHeight,
        body.offsetHeight,
      );
      const clientHeight = window.innerHeight || docEl.clientHeight || 0;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll > 0) {
        window.scrollTo({
          top: ratio * maxScroll,
          behavior: smooth ? "smooth" : "auto",
        });
      }
    },
    [],
  );

  // Mouse handlers for dragging/scrubbing
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    scrollToClientX(e.clientX, false);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.round(Math.max(0, Math.min(100, (x / rect.width) * 100)));
      setHoverPosition({ x, pct });

      if (isDragging) {
        scrollToClientX(e.clientX, false);
      }
    },
    [isDragging, scrollToClientX],
  );

  // Touch handlers for mobile scrubbing
  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      setIsDragging(true);
      scrollToClientX(e.touches[0].clientX, false);
    }
  };

  const handleTouchMove = useCallback(
    (e) => {
      if (isDragging && e.touches && e.touches[0]) {
        scrollToClientX(e.touches[0].clientX, false);
      }
    },
    [isDragging, scrollToClientX],
  );

  // Global drag release
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <aside
      className={`scroll-progress-bar-wrapper ${isHovered || isDragging ? "active-scrub" : ""}`}
      ref={trackRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      role="progressbar"
      aria-label="Page vertical scroll progress bar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      title={`Scroll progress: ${Math.round(progress)}% (Click or drag to jump)`}
    >
      {/* Background Track */}
      <div className="scroll-progress-track">
        {/* Animated Progress Fill */}
        <div
          className="scroll-progress-fill"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing Leading Thumb */}
          <span className="scroll-progress-thumb" aria-hidden="true" />
        </div>
      </div>

      {/* Tooltip on hover/drag showing percentage */}
      {(isHovered || isDragging) && (
        <div
          className="scroll-progress-tooltip"
          style={{
            left: `${Math.min(
              window.innerWidth - 60,
              Math.max(30, hoverPosition.x),
            )}px`,
          }}
          aria-hidden="true"
        >
          {hoverPosition.pct}%
        </div>
      )}
    </aside>
  );
}

export default ScrollProgressBar;
