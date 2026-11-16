interface Testimonial {
  quote: string
  name: string
  role: string
}

// PLACEHOLDERS: shown in the dashed "placeholder" style until the approved
// quotes and names come in. Replace the text and drop the `ph` class.
const TESTIMONIALS: Testimonial[] = [
  {
    quote: '[Quote]',
    name: 'Michael Hasik',
    role: '[Assistant Dean of Graduate Programs · University of Indianapolis]',
  },
  {
    quote: '[Quote from a UIndy student, once approved]',
    name: '[First name]',
    role: '[Program · University of Indianapolis]',
  },
]

function Star() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2.09 4.26 4.7.68-3.4 3.31.8 4.68L8 11.77l-4.2 2.16.8-4.68-3.4-3.31 4.7-.68z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">Evidence from the field</span>
          <h2 className="section-h">
            Trusted by <span className="it">universities and students.</span>
          </h2>
        </div>

        <div className="test-grid two">
          {TESTIMONIALS.map((t) => (
            <div key={t.quote} className="glass tcard ph">
              <div className="tcard-top">
                <div className="tcard-stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
              </div>
              <p className="quote">{t.quote}</p>
              <div className="tcard-author">
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
