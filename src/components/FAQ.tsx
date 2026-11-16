interface QA {
  q: string
  a: string
  open?: boolean
}

const QAS: QA[] = [
  {
    q: 'What is the Career Playbook?',
    a: 'A personal guide to your career, built on the DISC personality framework. It reflects how you naturally behave, what you prefer and what you’re good at, and shows the roles, environments and leadership styles that align with you.',
    open: true,
  },
  {
    q: 'Who is it for?',
    a: 'Universities and programs that want every student to have personal career guidance, and anyone who wants to understand where they fit: students, graduates and people changing careers.',
  },
  {
    q: 'How does a university run it?',
    a: 'Your team logs in to the Alignify portal and sends the 28-question questionnaire to the cohort. Each student answers it and receives their own Career Playbook. Start with one program, then roll out through your careers service.',
  },
  {
    q: 'Can I get one for myself?',
    a: 'Yes. Buy your own Career Playbook, answer the 28 questions and your playbook follows. If you’re studying, you can also ask your university to get it for your program.',
  },
]

export default function FAQ() {
  return (
    <section className="section section-alt faq-section">
      <div className="frame">
        <div className="faq-wrap">
          <div className="faq-head">
            <span className="label">Common Questions</span>
            <h2 className="section-h" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Key questions <span className="it">answered.</span>
            </h2>
          </div>
          <div className="faq-list">
            {QAS.map((f, i) => (
              <details key={i} className="qa" open={f.open}>
                <summary>
                  <span className="qt">{f.q}</span>
                  <span className="qx">+</span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
