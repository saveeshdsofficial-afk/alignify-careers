'use client'

import { useEffect, useId, useState, type FormEvent } from 'react'

// TODO: create a Brevo form for each of these and paste its "action" URL here.
// Until then the forms show the success message but send nothing anywhere.
// (Do NOT reuse the alignify.com sales form URL — its fields are different.)
const DEMO_FORM_ACTION = ''
const QUESTIONNAIRE_FORM_ACTION = ''

interface Field {
  name: string
  label: string
  type: 'email' | 'text'
  placeholder: string
}

const DEMO_FIELDS: Field[] = [
  { name: 'EMAIL', label: 'Work email', type: 'email', placeholder: 'you@university.edu.au' },
  { name: 'UNIVERSITY', label: 'University', type: 'text', placeholder: 'University name' },
  { name: 'PROGRAM', label: 'Program or cohort', type: 'text', placeholder: 'e.g. Master of Business' },
]

const QUESTIONNAIRE_FIELDS: Field[] = [
  { name: 'NAME', label: 'Your name', type: 'text', placeholder: 'First and last name' },
  { name: 'EMAIL', label: 'Email', type: 'email', placeholder: 'you@email.com' },
  { name: 'STAGE', label: 'Where you are now', type: 'text', placeholder: 'Studying, graduated or changing careers' },
]

function LeadForm({
  action,
  fields,
  titleLead,
  titleIt,
  sub,
  button,
  doneText,
  foot,
}: {
  action: string
  fields: Field[]
  titleLead: string
  titleIt: string
  sub: string
  button: string
  doneText: string
  foot: string
}) {
  const [done, setDone] = useState(false)
  const [values, setValues] = useState<Record<string, string>>({})
  const uid = useId()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (action) {
      void fetch(action, { method: 'POST', mode: 'no-cors', body: new FormData(e.currentTarget) }).catch(() => {})
    }
    setDone(true)
    setTimeout(() => {
      setDone(false)
      setValues({})
    }, 5000)
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      <h3 className="form-h">
        {titleLead} <span className="it">{titleIt}</span>
      </h3>
      <p className="form-sub">{sub}</p>

      {fields.map((f) => (
        <div key={f.name} className="form-field">
          <label htmlFor={`${uid}-${f.name}`}>{f.label}</label>
          <input
            type={f.type}
            id={`${uid}-${f.name}`}
            name={f.name}
            placeholder={f.placeholder}
            required
            value={values[f.name] ?? ''}
            onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
          />
        </div>
      ))}

      {/* Brevo anti-bot honeypot — must be present and empty */}
      <input
        type="text"
        name="email_address_check"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
      />
      <input type="hidden" name="locale" value="en" />

      <button type="submit" className="form-btn" disabled={done}>
        {done ? doneText : button}
      </button>
      <div className="form-foot">{foot}</div>
    </form>
  )
}

function DemoForm() {
  return (
    <LeadForm
      action={DEMO_FORM_ACTION}
      fields={DEMO_FIELDS}
      titleLead="Book a"
      titleIt="demo"
      sub="Tell us about your program and we’ll be in touch."
      button="Book a demo"
      doneText="✓ Demo requested – check your inbox"
      foot="Looking for your own playbook? Start the questionnaire above."
    />
  )
}

function QuestionnaireForm() {
  return (
    <LeadForm
      action={QUESTIONNAIRE_FORM_ACTION}
      fields={QUESTIONNAIRE_FIELDS}
      titleLead="Start the"
      titleIt="questionnaire"
      sub="Your own Career Playbook, built from your answers."
      button="Start the questionnaire · $19.99"
      doneText="✓ Thanks – check your inbox"
      foot="One-off payment. Your playbook follows once you’ve answered."
    />
  )
}

// The stand-alone "Book a demo" form under the pricing.
export function DemoFormSection() {
  return (
    <section className="section" id="demo">
      <div className="frame">
        <div className="cta-form-only">
          <DemoForm />
        </div>
      </div>
    </section>
  )
}

type Audience = 'universities' | 'individuals'

// Links elsewhere on the page use #book-demo / #start-questionnaire to open
// this section on the matching tab.
function audienceFromHash(): Audience | null {
  if (typeof window === 'undefined') return null
  if (window.location.hash === '#start-questionnaire') return 'individuals'
  if (window.location.hash === '#book-demo') return 'universities'
  return null
}

export default function FinalCTA() {
  const [audience, setAudience] = useState<Audience>('universities')

  useEffect(() => {
    const sync = () => {
      const a = audienceFromHash()
      if (a) setAudience(a)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const uni = audience === 'universities'

  return (
    <section className="section" id="get-started">
      <span id="book-demo" className="hash-anchor" />
      <span id="start-questionnaire" className="hash-anchor" />
      <div className="frame">
        <div className="cta-card">
          <div className="get-started-top">
            <div className="cta-eyebrow centered-eyebrow">
              <span className="label">Get Started</span>
            </div>
            <div className="audience-toggle" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={uni}
                className={uni ? 'active' : ''}
                onClick={() => setAudience('universities')}
              >
                For universities
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={!uni}
                className={!uni ? 'active' : ''}
                onClick={() => setAudience('individuals')}
              >
                For individuals
              </button>
            </div>
          </div>

          <div className="cta-inner">
            {uni ? (
              <div>
                <h2 className="cta-h">
                  Book <span className="it">a demo.</span>
                </h2>
                <p className="cta-deck">See the Career Playbook and the portal, and plan a pilot for your program.</p>
                <div className="cta-proof switch-box">
                  <span className="cta-proof-text">Looking for your own playbook?</span>
                  <button type="button" className="switch-btn" onClick={() => setAudience('individuals')}>
                    Start the questionnaire
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="cta-h">
                  Start <span className="it">your playbook.</span>
                </h2>
                <p className="cta-deck">Answer 28 questions and get your own Career Playbook. $19.99, one-off.</p>
                <div className="cta-proof switch-box">
                  <span className="cta-proof-text">Work at a university?</span>
                  <button type="button" className="switch-btn" onClick={() => setAudience('universities')}>
                    Book a demo
                  </button>
                </div>
              </div>
            )}

            {uni ? <DemoForm /> : <QuestionnaireForm />}
          </div>
        </div>
      </div>
    </section>
  )
}
