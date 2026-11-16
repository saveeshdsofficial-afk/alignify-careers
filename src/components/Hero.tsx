export default function Hero() {
  return (
    <section className="hero">
      <div className="frame hero-grid">
        <HeroCopy />
        <AlignmentEngine />
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <div>
      <h1 className="hero-title">
        <span style={{ whiteSpace: 'nowrap' }}>Know your strengths,</span> <br />
        <span style={{ whiteSpace: 'nowrap' }}>Find your fit,</span> <br />
        <span className="it">Grow your career.</span>
      </h1>

      <p className="hero-sub">
        The Career Playbook is a personal guide to how you naturally work, connect, lead and grow, and the roles that fit you. Universities give it to their students, and anyone can get their own.
      </p>

      <div className="hero-metrics no-delta-arrow">
        <MetricCell k="Built on" big="DISC" delta="a widely used personality model" />
        <MetricCell k="Questionnaire" big="28" delta="questions" />
        <MetricCell k="Connecting you to" big="Real Job" delta="opportunities and comparisons" />
      </div>
    </div>
  )
}

function MetricCell({ k, big, delta }: { k: string; big: string; delta: string }) {
  return (
    <div className="hm-cell">
      <span className="hm-k">{k}</span>
      <div className="hm-v">{big}</div>
      <div className="hm-d">{delta}</div>
    </div>
  )
}

function AlignmentEngine() {
  return (
    <div className="engine-stage">
      <div className="ring-decor r1" />
      <div className="ring-decor r2" />
      <WheelOuter />
      <WheelQuadrants />
      <Hub />
    </div>
  )
}

function WheelOuter() {
  const nodes: { cx: number; cy: number; begin: string }[] = [
    { cx: 0, cy: -160, begin: '0s' },
    { cx: 113.1, cy: -113.1, begin: '0.3s' },
    { cx: 160, cy: 0, begin: '0.6s' },
    { cx: 113.1, cy: 113.1, begin: '0.9s' },
    { cx: 0, cy: 160, begin: '1.2s' },
    { cx: -113.1, cy: 113.1, begin: '1.5s' },
    { cx: -160, cy: 0, begin: '1.8s' },
    { cx: -113.1, cy: -113.1, begin: '2.1s' },
  ]
  return (
    <div className="wheel-outer">
      <svg viewBox="-200 -200 400 400" fill="none">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3eccc4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#21a89f" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3eccc4" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <circle cx="0" cy="0" r="180" stroke="url(#ringGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="170" stroke="rgba(62,204,196,0.15)" strokeWidth="0.8" fill="none" strokeDasharray="2 4" />

        <g stroke="#3eccc4" strokeWidth="1.5" opacity="0.7">
          <line x1="0" y1="-180" x2="0" y2="-168" />
          <line x1="127.3" y1="-127.3" x2="118.8" y2="-118.8" />
          <line x1="180" y1="0" x2="168" y2="0" />
          <line x1="127.3" y1="127.3" x2="118.8" y2="118.8" />
          <line x1="0" y1="180" x2="0" y2="168" />
          <line x1="-127.3" y1="127.3" x2="-118.8" y2="118.8" />
          <line x1="-180" y1="0" x2="-168" y2="0" />
          <line x1="-127.3" y1="-127.3" x2="-118.8" y2="-118.8" />
        </g>

        <g fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#3eccc4" letterSpacing="2">
          <text x="0" y="-188" textAnchor="middle">D</text>
          <text x="133" y="-128" textAnchor="middle">Di</text>
          <text x="194" y="5" textAnchor="middle">I</text>
          <text x="133" y="138" textAnchor="middle">iS</text>
          <text x="0" y="200" textAnchor="middle">S</text>
          <text x="-133" y="138" textAnchor="middle">SC</text>
          <text x="-194" y="5" textAnchor="middle">C</text>
          <text x="-133" y="-128" textAnchor="middle">CD</text>
        </g>

        <g fill="#3eccc4">
          {nodes.map((n) => (
            <circle key={n.begin} cx={n.cx} cy={n.cy} r="3">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={n.begin} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  )
}

function WheelQuadrants() {
  return (
    <div className="wheel-quadrants">
      <svg viewBox="-150 -150 300 300" fill="none">
        <defs>
          <radialGradient id="qFill1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#3eccc4" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#3eccc4" stopOpacity="0.04" />
          </radialGradient>
          <radialGradient id="qFill2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#21a89f" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#21a89f" stopOpacity="0.04" />
          </radialGradient>
          <radialGradient id="qFill4" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#2e3950" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2e3950" stopOpacity="0.1" />
          </radialGradient>
          <path id="arc-align" d="M -99.59,57.5 A 115,115 0 0,1 0,-115" fill="none" />
          <path id="arc-person" d="M 0,-115 A 115,115 0 0,1 99.59,57.5" fill="none" />
          <path id="arc-play" d="M -108.25,62.5 A 125,125 0 0,0 108.25,62.5" fill="none" />
        </defs>

        <path d="M 0 0 L 0 -140 A 140 140 0 0 1 121.24 70 Z" fill="url(#qFill1)" stroke="rgba(62,204,196,0.4)" strokeWidth="1" />
        <path d="M 0 0 L 121.24 70 A 140 140 0 0 1 -121.24 70 Z" fill="url(#qFill2)" stroke="rgba(33,168,159,0.4)" strokeWidth="1" />
        <path d="M 0 0 L -121.24 70 A 140 140 0 0 1 0 -140 Z" fill="url(#qFill4)" stroke="rgba(62,204,196,0.4)" strokeWidth="1" />

        <g fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.8" fill="#ffffff">
          <text>
            <textPath href="#arc-align" startOffset="50%" textAnchor="middle">ALIGNMENT</textPath>
          </text>
          <text>
            <textPath href="#arc-person" startOffset="50%" textAnchor="middle">PERSONALITY</textPath>
          </text>
          <text>
            <textPath href="#arc-play" startOffset="50%" textAnchor="middle">PLAYBOOK</textPath>
          </text>
        </g>

        <g stroke="rgba(62,204,196,0.3)" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="0" y1="0" x2="0" y2="-140" />
          <line x1="0" y1="0" x2="121.24" y2="70" />
          <line x1="0" y1="0" x2="-121.24" y2="70" />
        </g>
      </svg>
    </div>
  )
}

function Hub() {
  return (
    <div className="hub">
      <div className="hub-disc" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/alignify-icon.png" alt="Alignify" className="hub-mark" />
    </div>
  )
}

