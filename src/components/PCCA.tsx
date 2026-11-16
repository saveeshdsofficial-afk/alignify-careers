interface MatrixRow {
  letter: string
  name: string
  heading: string
  body: string
}

const MATRIX: MatrixRow[] = [
  {
    letter: 'A',
    name: 'Alignment',
    heading: 'Where you fit',
    body: 'The environments you thrive in, the ones that drain you, and the types of roles that align with how you naturally work.',
  },
  {
    letter: 'P',
    name: 'Personality',
    heading: 'Who you are',
    body: 'A DISC profile from a 28-question questionnaire: your archetype, personality traits, natural working behaviours, strengths, and blind spots.',
  },
  {
    letter: 'P',
    name: 'Playbook',
    heading: 'Your Career Playbook',
    body: 'A personal guide you keep coming back to: how you work with others, communicate and lead, how you handle pressure, what fulfilment looks like for you, and your career on a page.',
  },
]

export default function PCCA() {
  return (
    <section className="section section-alt pcca-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Solution</span>
          <h2 className="section-h">
            The Alignify <span className="it">model.</span>
          </h2>
          <p className="section-deck">
            A model that turns knowing yourself into your next career step.
          </p>
        </div>

        <div className="pcca-matrix">
          {MATRIX.map((m, i) => (
            <article key={i} className="pcca-row">
              <div className="pcca-letter">
                <span className="pcca-letter-big">{m.letter}</span>
                <span className="pcca-letter-name">{m.name}</span>
              </div>
              <div className="pcca-row-body">
                <h3>{m.heading}</h3>
                <p>{m.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
