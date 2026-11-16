'use client'

import type { CSSProperties, MouseEvent } from 'react'

interface ChallengeItem {
  num: string
  title: string
  body: string
}

const CHALLENGES: ChallengeItem[] = [
  {
    num: '01',
    title: 'Choosing without a map',
    body: 'Students, graduates and career changers choose roles without knowing how they naturally work, so, many start in places that don’t suit them.',
  },
  {
    num: '02',
    title: 'Guidance that doesn’t scale',
    body: 'Careers teams do great work, but they can’t sit down with everyone. A Career Playbook gives every student a personal starting point.',
  },
  {
    num: '03',
    title: 'Showing employability',
    body: 'Universities need to show how they prepare students for work. A personal playbook for every student is a visible part of that.',
  },
]

export default function Problem() {
  function handleMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    e.currentTarget.style.setProperty('--mx', `${x}%`)
    e.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <section className="section problem-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Challenge</span>
          <h2 className="section-h">
            Personal guidance, <span className="it">at scale.</span>
          </h2>
          <p className="section-deck">
            Everyone deserves career guidance that fits who they are. Alignify gives each person their own playbook.
          </p>
        </div>
        <div className="problem-grid">
          {CHALLENGES.map((p) => (
            <article
              key={p.num}
              className="glass prob-card"
              onMouseMove={handleMove}
              style={{ ['--mx' as string]: '50%', ['--my' as string]: '30%' } as CSSProperties}
            >
              <div className="prob-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
