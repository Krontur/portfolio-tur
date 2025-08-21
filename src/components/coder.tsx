import * as React from "react";
import { useTheme } from "@mui/material/styles";

type Props = {
  size?: number | string;
  ringColor?: string;
  primary?: string;
  secondary?: string;
  glow?: boolean;
  title?: string;
  className?: string;
};

export default function CodeBoltLogo({
  size = 220,
  primary,
  secondary,
  glow = true,
  title = "Logo: código y electricidad",
  className,
}: Readonly<Props>) {
  const theme = useTheme();
  const gradId = React.useId();
  const glowId = React.useId();

  const c1 = primary ?? theme?.palette?.primary?.main ?? "#0ea5e9";
  const c2 = secondary ?? theme?.palette?.secondary?.main ?? "#22c55e";

  return (
    <svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className={className}
      style={{ display: "block", maxWidth: "100%", padding: 20 }}
    >
      <title>{title}</title>

      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>

        {glow && (
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}

        <style>{`
          .ring {
            fill: none;
            stroke: url(#${gradId});
            stroke-width: 6;
          }
          .accent {
            fill: none;
            stroke: url(#${gradId});
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .glow-anim-ring {
            filter: url(#${glowId});
            animation: flicker-glow-ring 1.2s infinite steps(2, jump-none);
          }
          .glow-anim-chevron-left {
            filter: url(#${glowId});
            animation: flicker-glow-chevron-left 1.2s infinite steps(2, jump-none);
          }
          .glow-anim-bolt {
            filter: url(#${glowId});
            animation: flicker-glow-bolt 1.2s infinite steps(2, jump-none);
          }
          .glow-anim-chevron-right {
            filter: url(#${glowId});
            animation: flicker-glow-chevron-right 1.2s infinite steps(2, jump-none);
          }
          @keyframes flicker-glow-ring {
            0% { filter: url(#${glowId}); opacity: 0.7; }
            12% { filter: url(#${glowId}); opacity: 1; }
            30% { filter: url(#${glowId}); opacity: 0.5; }
            50% { filter: url(#${glowId}); opacity: 1; }
            80% { filter: url(#${glowId}); opacity: 0.8; }
            100% { filter: url(#${glowId}); opacity: 0.7; }
          }
          @keyframes flicker-glow-chevron-left {
            0% { filter: url(#${glowId}); opacity: 1; }
            20% { filter: url(#${glowId}); opacity: 0.6; }
            40% { filter: url(#${glowId}); opacity: 1; }
            60% { filter: url(#${glowId}); opacity: 0.4; }
            80% { filter: url(#${glowId}); opacity: 1; }
            100% { filter: url(#${glowId}); opacity: 1; }
          }
          @keyframes flicker-glow-bolt {
            0% { filter: url(#${glowId}); opacity: 1; }
            15% { filter: url(#${glowId}); opacity: 0.5; }
            35% { filter: url(#${glowId}); opacity: 1; }
            55% { filter: url(#${glowId}); opacity: 0.7; }
            75% { filter: url(#${glowId}); opacity: 1; }
            100% { filter: url(#${glowId}); opacity: 1; }
          }
          @keyframes flicker-glow-chevron-right {
            0% { filter: url(#${glowId}); opacity: 1; }
            10% { filter: url(#${glowId}); opacity: 0.8; }
            30% { filter: url(#${glowId}); opacity: 1; }
            50% { filter: url(#${glowId}); opacity: 0.6; }
            70% { filter: url(#${glowId}); opacity: 1; }
            100% { filter: url(#${glowId}); opacity: 1; }
          }
        `}</style>
      </defs>

      <circle cx="110" cy="110" r="96" className={`ring${glow ? ' glow-anim-ring' : ''}`} />

      {/* <  chevron izquierdo */}
      <path
        d="M70 72 L30 110 L70 148"
        className={`accent${glow ? ' glow-anim-chevron-left' : ''}`}
        strokeWidth={8}
      />

      {/* Rayo centrado con glow animado */}
      <path
        d="M110 60 L100 110 H120 L105 160"
        className={`accent${glow ? ' glow-anim-bolt' : ''}`}
        strokeWidth={9}
      />

      {/* > chevron derecho */}
      <path
        d="M150 72 L190 110 L150 148"
        className={`accent${glow ? ' glow-anim-chevron-right' : ''}`}
        strokeWidth={8}
      />
    </svg>
  );
}
