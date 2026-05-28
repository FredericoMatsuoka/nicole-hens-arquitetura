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
}

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState<number[]>([]);

  useEffect(() => {
    const timers = options.map((_, i) =>
      setTimeout(() => setAnimated((prev) => [...prev, i]), 120 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, [options]);

  return (
    <div className="w-full">
      {/* Strip */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "600px",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {options.map((opt, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              position: "relative",
              flex: activeIndex === i ? "6 1 0%" : "1 1 0%",
              minWidth: activeIndex === i ? "0" : "72px",
              height: "100%",
              backgroundImage: `url('${opt.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
              opacity: animated.includes(i) ? 1 : 0,
              transform: animated.includes(i) ? "translateX(0)" : "translateX(-40px)",
              transition:
                "flex 0.72s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            {/* Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  activeIndex === i
                    ? "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
                transition: "background 0.5s ease",
              }}
            />

            {/* Collapsed: number + vertical line */}
            {activeIndex !== i && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingBottom: "1.5rem",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.52rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.55)",
                    writingMode: "vertical-rl",
                    textTransform: "uppercase",
                  }}
                >
                  {opt.title}
                </div>
                <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.4)" }} />
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.52rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            )}

            {/* Expanded: tag pill */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "1.5rem",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.3rem 0.8rem",
                opacity: activeIndex === i ? 1 : 0,
                transform: activeIndex === i ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.4s ease 0.18s, transform 0.4s ease 0.18s",
                pointerEvents: "none",
              }}
            >
              {opt.tag}
            </div>

            {/* Expanded: title + description */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "2rem",
                padding: "0 1.75rem",
                opacity: activeIndex === i ? 1 : 0,
                transform: activeIndex === i ? "translateX(0)" : "translateX(20px)",
                transition: "opacity 0.45s ease 0.15s, transform 0.45s ease 0.15s",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                  fontWeight: 300,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {opt.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.62)",
                  letterSpacing: "0.03em",
                }}
              >
                {opt.description}
              </div>
            </div>

            {/* Counter — top right when expanded */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.45)",
                opacity: activeIndex === i ? 1 : 0,
                transition: "opacity 0.3s ease 0.2s",
                pointerEvents: "none",
              }}
            >
              {String(i + 1).padStart(2, "0")} / {String(options.length).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
