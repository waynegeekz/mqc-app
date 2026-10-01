// "You don't get what you asked for": one building, drifting at every hand-off.
// Labels are authored stand-ins for deck slide 8 (slide not on hand); line drawings are 2px, square-capped, per the icon rules.

import type { ReactNode } from "react";

const Ground = () => <line x1="16" y1="104" x2="144" y2="104" />;
const House = ({ dashed }: { dashed?: boolean }) => (
  <g strokeDasharray={dashed ? "5 5" : undefined}>
    <rect x="50" y="62" width="60" height="42" />
    <path d="M44 64 L80 34 L116 64" />
    <rect x="74" y="82" width="12" height="22" />
    <rect x="58" y="72" width="10" height="10" />
    <rect x="92" y="72" width="10" height="10" />
  </g>
);

const steps: { label: string; art: ReactNode }[] = [
  { label: "How you explained it", art: <><Ground /><House dashed /></> },
  {
    label: "How the designer understood it",
    art: (
      <>
        <Ground />
        <rect x="64" y="14" width="32" height="90" />
        {[24, 40, 56, 72].map((y) => (
          <g key={y}>
            <rect x="70" y={y} width="7" height="8" />
            <rect x="83" y={y} width="7" height="8" />
          </g>
        ))}
        <rect x="75" y="88" width="10" height="16" />
      </>
    ),
  },
  {
    label: "How the plans showed it",
    art: (
      <>
        <Ground />
        <rect x="50" y="62" width="60" height="42" />
        <path d="M44 34 L80 62 L116 34" />
        <rect x="74" y="82" width="12" height="22" />
        <rect x="58" y="72" width="10" height="10" />
      </>
    ),
  },
  {
    label: "How it was priced",
    art: (
      <>
        <Ground />
        <rect x="68" y="84" width="24" height="20" />
        <path d="M65 85 L80 72 L95 85" />
        <rect x="77" y="94" width="6" height="10" />
      </>
    ),
  },
  {
    label: "How it was built",
    art: (
      <>
        <Ground />
        <rect x="50" y="62" width="60" height="42" />
        <path d="M66 60 L102 28 L134 60" />
        <rect x="88" y="82" width="12" height="22" />
        <rect x="58" y="72" width="10" height="10" />
      </>
    ),
  },
  {
    label: "How the changes added up",
    art: (
      <>
        <Ground />
        <House />
        <rect x="110" y="78" width="28" height="26" />
        <rect x="24" y="86" width="26" height="18" />
        <path d="M96 52 L96 38 L104 38 L104 58" />
      </>
    ),
  },
  {
    label: "How it was reported",
    art: (
      <>
        <Ground />
        <path d="M50 104 L50 86 L110 86 L110 104" />
        <path d="M50 86 L50 62 M110 86 L110 62 M50 74 L110 74" strokeDasharray="3 4" />
        <rect x="108" y="18" width="40" height="22" />
        <path d="M116 29 L122 35 L132 23" />
      </>
    ),
  },
  {
    label: "What you really needed",
    art: (
      <>
        <line x1="16" y1="104" x2="144" y2="104" stroke="var(--safety-amber)" strokeWidth="4" />
        <rect x="40" y="70" width="80" height="34" />
        <path d="M34 72 L80 44 L126 72" />
        <rect x="74" y="84" width="12" height="20" />
        <rect x="50" y="80" width="12" height="10" />
        <rect x="98" y="80" width="12" height="10" />
      </>
    ),
  },
];

export function DriftGrid() {
  return (
    <ol className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:bg-border sm:px-0 sm:pb-0 lg:grid-cols-4">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li
            key={s.label}
            className={`w-[52vw] max-w-[200px] shrink-0 snap-start border border-border p-5 sm:w-auto sm:max-w-none sm:border-0 ${last ? "bg-navy text-white" : "bg-card"}`}
          >
            <span className={`font-mono text-xs tracking-[0.12em] ${last ? "text-[var(--safety-amber)]" : "text-muted-foreground"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <svg
              viewBox="0 0 160 120"
              aria-hidden
              className={`mt-4 mb-3 h-16 w-auto ${last ? "text-white" : "text-foreground"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              {s.art}
            </svg>
            <p className="text-sm leading-snug font-semibold">{s.label}</p>
          </li>
        );
      })}
    </ol>
  );
}
