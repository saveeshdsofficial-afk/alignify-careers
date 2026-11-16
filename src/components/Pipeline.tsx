import type { CSSProperties } from 'react'

// "How it works" — where the insight in the Career Playbook comes from.
export default function Pipeline() {
  return (
    <section className="section section-alt">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">How It Works</span>
          <h2 className="section-h">
            Where the insight <span className="it">comes from.</span>
          </h2>
        </div>

        <div className="pipeline-grid">
          <AnswersCell />
          <DiscCell />
          <AiCell />
        </div>
      </div>
    </section>
  )
}

function AnswersCell() {
  const rows = [
    { k: 'Pace', v: 'fast-paced or deliberate' },
    { k: 'People', v: 'autonomous or collaborative' },
    { k: 'Trust', v: 'trusting or sceptical' },
    { k: 'Risk', v: 'risk tolerant or risk averse' },
  ]
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">01</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Your Answers</span>
      </div>
      <h4>
        28 questions <span className="it">about you.</span>
      </h4>
      <p className="desc">
        The questionnaire asks how you make decisions, deal with people, handle pace and respond to risk. There are no right or wrong answers.
      </p>
      <div className="cell-mini">
        {rows.map((r) => (
          <div key={r.k} className="mini-row">
            <span className="hi">{r.k}</span>
            <span>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DiscCell() {
  const bars = [
    { label: 'Dominance', value: 72 },
    { label: 'Influence', value: 18 },
    { label: 'Steadiness', value: 24 },
    { label: 'Conscientiousness', value: 61 },
  ]
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">02</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>DISC</span>
      </div>
      <h4>
        Your <span className="it">DISC style.</span>
      </h4>
      <p className="desc">
        Your answers are scored against the four DISC styles. Your blend places you on the DISC wheel as one of 16 archetypes, such as the Architect or the Supporter.
      </p>
      <div className="cell-mini">
        <div className="mini-bar-wrap disc-bars">
          {bars.map((b) => (
            <div key={b.label} className="mini-bar-row">
              <span>{b.label}</span>
              <span className="mini-bar" style={{ ['--w' as string]: `${b.value}%` } as CSSProperties} />
              <span>{b.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AiCell() {
  const app = [
    { letter: 'A', name: 'Alignment' },
    { letter: 'P', name: 'Personality' },
    { letter: 'P', name: 'Playbook' },
  ]
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">03</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Personality AI</span>
      </div>
      <h4>
        Powered <span className="it">by Alignify.</span>
      </h4>
      <p className="desc">
        Alignify’s personality AI reads your DISC profile and aligns it with the roles, environments and leadership styles that suit you, then writes your Career Playbook.
      </p>
      <div className="cell-mini">
        <div className="do-dont">
          {app.map((a) => (
            <div key={a.name} className="dd-row do">
              <span className="marker app-marker">{a.letter}</span>
              <span>{a.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
