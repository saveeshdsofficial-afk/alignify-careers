interface GuideItem {
  title: string
  body: string
}

// Listed row by row (left, right) to match the two-column layout.
const GUIDE: GuideItem[] = [
  { title: 'Who you are', body: 'Your archetype, DISC blend, personality traits and natural working behaviours.' },
  { title: 'Your energy', body: 'What energises you at work, and what drains you.' },
  { title: 'Strengths and blind spots', body: 'Your strengths, and the blind spots to watch.' },
  { title: 'What drives you', body: 'What motivates you in your career.' },
  { title: 'You and other people', body: 'How you work with others, communicate, come across and build relationships.' },
  { title: 'Finding your fit', body: 'The environments you thrive in, the ones that drain you, and the roles that align with you.' },
  { title: 'Under pressure and over time', body: 'Pressure and challenge, fulfilment, your leadership style and the patterns in your career.' },
  { title: 'Bring it together', body: 'Your career synthesis, and your career on a page.' },
]

export function CareerPlaybook() {
  return (
    <section className="section solutions-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Career Playbook</span>
          <h2 className="section-h">
            A personal guide for <span className="it">your career.</span>
          </h2>
          <p className="section-deck">
            Each Career Playbook is built from the person’s own answers, to keep coming back to as their career grows.
          </p>
        </div>

        <div className="glass guide-card">
          <div className="guide-grid">
            {GUIDE.map((g) => (
              <div key={g.title} className="guide-item">
                <h4>{g.title}</h4>
                <p>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <section className="section solutions-section" id="pricing">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Pricing</span>
          <h2 className="section-h">
            One alignment engine – <br />
            <span className="it">a unique playbook for everyone.</span>
          </h2>
          <p className="section-deck">
            Universities give every student in a program their own Career Playbook. Individuals can start straight away.
          </p>
        </div>

        <div className="pricing-grid">
          <article className="price-card dark audience-card">
            <span className="audience-pill">For universities</span>
            <span className="price-eyebrow">Buy playbooks in bulk</span>
            <div className="audience-headline">Per student, priced by cohort size</div>
            <span className="price-rider">Includes the Career Playbook for every student and portal access.</span>
            <a href="#demo" className="form-btn audience-btn">Book a demo</a>
          </article>

          {/* Shown as "Coming soon" until playbooks generate automatically (client note).
              When ready: remove `coming-soon`, the badge, and restore the questionnaire link. */}
          <article className="price-card dark audience-card individual coming-soon">
            <span className="coming-soon-badge">Coming soon</span>
            <span className="audience-pill">For individuals</span>
            <span className="price-eyebrow">Your own Career Playbook</span>
            <div className="audience-price">$19.99</div>
            <span className="price-rider">
              One-off. For students, graduates and anyone looking for career guidance. Answer 28 questions and your playbook follows.
            </span>
            <span className="form-btn audience-btn is-disabled" aria-disabled="true">Coming soon</span>
          </article>
        </div>
      </div>
    </section>
  )
}
