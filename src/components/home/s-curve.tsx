// Earned value S-curve: planned value, actual cost and earned value at "Now".
// Curves are generated from one smoothstep so the variance brackets line up.

const X0 = 64;
const X1 = 560;
const Y0 = 300;
const H = 260;
const NOW = 0.63;

const smooth = (t: number) => t * t * (3 - 2 * t);
const pv = (t: number) => smooth(t);
const ev = (t: number) => smooth(t * 0.85) * 0.92;
const ac = (t: number) => smooth(Math.min(1, t * 1.25)) * 0.95;

const x = (t: number) => X0 + t * (X1 - X0);
const y = (v: number) => Y0 - v * H;

function path(f: (t: number) => number, end: number) {
  const steps = 48;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * end;
    d += `${i ? "L" : "M"}${x(t).toFixed(1)},${y(f(t)).toFixed(1)}`;
  }
  return d;
}

// Time at which planned value reached today's earned value.
function behindAt() {
  let t = 0;
  while (pv(t) < ev(NOW)) t += 0.001;
  return t;
}

const legend = [
  { key: "pv", name: "Planned value", note: "Work scheduled to be done by now, at its budgeted cost" },
  { key: "ac", name: "Actual cost", note: "What has actually been spent so far" },
  { key: "ev", name: "Earned value", note: "Work actually done, at its budgeted cost" },
  { key: "sv", name: "Schedule variance", note: "Less work done than planned" },
  { key: "cv", name: "Cost variance", note: "More spent than the work done is worth" },
] as const;

function Swatch({ k }: { k: (typeof legend)[number]["key"] }) {
  if (k === "sv" || k === "cv")
    return (
      <span
        className={`inline-flex h-5 w-9 items-center justify-center rounded-sm font-mono text-xs font-medium text-white ${k === "sv" ? "bg-navy" : "bg-[var(--danger)]"}`}
      >
        {k.toUpperCase()}
      </span>
    );
  const stroke = { pv: "var(--blueprint)", ac: "var(--danger)", ev: "var(--safety-amber)" }[k];
  const dash = { pv: "1 5", ac: "9 6", ev: undefined }[k];
  return (
    <svg width="36" height="20" aria-hidden className="shrink-0">
      <line x1="2" y1="10" x2="34" y2="10" stroke={stroke} strokeWidth={k === "ev" ? 4 : 3} strokeDasharray={dash} strokeLinecap={k === "pv" ? "round" : "butt"} />
    </svg>
  );
}

export function SCurve() {
  const nx = x(NOW);
  const yPv = y(pv(NOW));
  const yEv = y(ev(NOW));
  const yAc = y(ac(NOW));
  const bx = x(behindAt());

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
      <svg
        viewBox="0 0 600 340"
        className="h-auto w-full"
        role="img"
        aria-label="S-curve chart. At today's date, actual cost is above planned value and earned value is below it, showing a cost overrun and a schedule delay."
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
        <g className="text-foreground" stroke="currentColor" strokeWidth="1.5" fill="none">
          <line x1={X0} y1={Y0 + 4} x2={X0} y2="22" markerEnd="url(#arrow)" />
          <line x1={X0 - 4} y1={Y0} x2="585" y2={Y0} markerEnd="url(#arrow)" />
        </g>
        <g className="fill-muted-foreground font-mono text-[13px] max-sm:text-[23px]">
          <text x={X0 - 8} y="20" textAnchor="end">Cost</text>
          <text x="584" y={Y0 + 26} textAnchor="end">Time</text>
          <text x={nx} y={Y0 + 26} textAnchor="middle">Now</text>
        </g>

        {/* guides */}
        <g stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 4" fill="none">
          <line x1={nx} y1="30" x2={nx} y2={Y0} />
          <line x1={nx} y1={yAc} x2="500" y2={yAc} />
          <line x1={nx} y1={yPv} x2="450" y2={yPv} />
          <line x1={bx} y1={yEv} x2="500" y2={yEv} />
          <line x1={bx} y1={yEv} x2={bx} y2={Y0} />
        </g>

        <g className="s-curve-plot">
          <path d={path(pv, 1)} fill="none" stroke="var(--blueprint)" strokeWidth="3" strokeDasharray="1 6" strokeLinecap="round" />
          <path d={path(ac, NOW)} fill="none" stroke="var(--danger)" strokeWidth="3" strokeDasharray="10 7" />
          <path d={path(ev, NOW)} fill="none" stroke="var(--safety-amber)" strokeWidth="4.5" strokeLinecap="round" />
        </g>

        {/* SV bracket */}
        <g stroke="var(--site-navy)" strokeWidth="2">
          <line x1="430" y1={yPv} x2="430" y2={yEv} />
          <line x1="422" y1={yPv} x2="438" y2={yPv} />
          <line x1="422" y1={yEv} x2="438" y2={yEv} />
        </g>
        <g className="origin-center [transform-box:fill-box] max-sm:scale-[1.75]">
          <rect x="392" y={(yPv + yEv) / 2 - 11} width="34" height="22" rx="2" fill="var(--site-navy)" />
        <text x="409" y={(yPv + yEv) / 2 + 4.5} textAnchor="middle" fill="#fff" fontWeight="600" className="font-mono text-[12px] max-sm:text-[13px]">SV</text>
        </g>

        {/* CV bracket */}
        <g stroke="var(--danger)" strokeWidth="2">
          <line x1="486" y1={yAc} x2="486" y2={yEv} />
          <line x1="478" y1={yAc} x2="494" y2={yAc} />
          <line x1="478" y1={yEv} x2="494" y2={yEv} />
        </g>
        <g className="origin-center [transform-box:fill-box] max-sm:scale-[1.75]">
          <rect x="498" y={(yAc + yEv) / 2 - 11} width="34" height="22" rx="2" fill="var(--danger)" />
        <text x="515" y={(yAc + yEv) / 2 + 4.5} textAnchor="middle" fill="#fff" fontWeight="600" className="font-mono text-[12px] max-sm:text-[13px]">CV</text>
        </g>

        {/* time behind */}
        <g stroke="currentColor" strokeWidth="2" className="text-foreground">
          <line x1={bx} y1="276" x2={nx} y2="276" />
          <line x1={bx} y1="268" x2={bx} y2="284" />
          <line x1={nx} y1="268" x2={nx} y2="284" />
        </g>
        <text x={(bx + nx) / 2} y="262" textAnchor="middle" fontWeight="600" className="fill-foreground text-[13px] max-sm:text-[23px]" stroke="var(--card)" strokeWidth="6" paintOrder="stroke">Time behind</text>
      </svg>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {legend.map((l) => (
          <li key={l.key} className="flex gap-3">
            <span className="mt-0.5"><Swatch k={l.key} /></span>
            <span>
              <span className="block font-semibold">{l.name}</span>
              <span className="block text-sm text-muted-foreground">{l.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
