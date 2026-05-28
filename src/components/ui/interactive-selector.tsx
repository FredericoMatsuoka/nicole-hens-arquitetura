"use client";
import React, { useState, useEffect } from "react";

interface SelectorOption {
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface InteractiveSelectorProps {
  options: SelectorOption[];
  label?: string;
  heading?: string;
}

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ options, label, heading }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState<number[]>([]);

  useEffect(() => {
    const timers = options.map((_, i) =>
      setTimeout(() => setAnimated((prev) => [...prev, i]), 140 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, [options]);

  return (
    <div className="w-full">
      {/* Section header */}
      {(label || heading) && (
        <div className="container mb-10">
          {label && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ width: 36, height: 1, background: "#0A0A0A" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A0A0A" }}>
                {label}
              </span>
            </div>
          )}
          {heading && (
            <h2 className="heading-lg" style={{ color: "#0A0A0A" }}>{heading}</h2>
          )}
        </div>
      )}

      {/* Interactive strip */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "520px",
          overflow: "hidden",
        }}
      >
        {options.map((opt, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              position: "relative",
              flex: activeIndex === i ? "7 1 0%" : "1 1 0%",
              minWidth: "56px",
              height: "100%",
              backgroundImage: `url('${opt.image}')`,
              backgroundSize: activeIndex === i ? "cover" : "auto 120%",
              backgroundPosition: "center",
              cursor: "pointer",
              overflow: "hidden",
              opacity: animated.includes(i) ? 1 : 0,
              transform: animated.includes(i) ? "translateX(0)" : "translateX(-40px)",
              transition: "flex 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, transform 0.5s ease, box-shadow 0.4s ease, background-size 0.7s ease",
              boxShadow: activeIndex === i ? "inset 0 0 0 1px rgba(255,255,255,0.2)" : "none",
            }}
          >
            {/* Gradient overlay at bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: activeIndex === i
                  ? "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"
                  : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                transition: "opacity 0.5s ease",
              }}
            />

            {/* Tag pill top */}
            {activeIndex === i && (
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
                  opacity: activeIndex === i ? 1 : 0,
                  transition: "opacity 0.4s ease 0.2s",
                }}
              >
                {opt.tag}
              </div>
            )}

            {/* Label at bottom */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "1.5rem",
                padding: "0 1.25rem",
                display: "flex",
                alignItems: "flex-end",
                gap: "0.75rem",
              }}
            >
              {/* Thin vertical accent line when collapsed */}
              {activeIndex !== i && (
                <div style={{ width: 2, height: 24, background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
              )}

              <div
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i ? "translateX(0)" : "translateX(16px)",
                  transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: "0.35rem", letterSpacing: "-0.01em" }}>
                  {opt.title}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.04em" }}>
                  {opt.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
