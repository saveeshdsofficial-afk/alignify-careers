export default function Footer() {
  return (
    <footer>
      <div className="frame">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="/" className="brand foot-brand-link">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/alignify-logo-light.png" alt="Alignify" className="brand-mark foot-brand-mark" />
            </a>
            <p>Intelligent alignment for every career.</p>
          </div>
          <div className="foot-col">
            <span className="label">Contact</span>
            {/* TODO: careers contact email not supplied yet */}
            <span className="fline ph-text">[Contact email]</span>
            <span className="fline">Sydney, Australia</span>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Alignify · Intelligent Alignment</span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="https://kainovation.com/" target="_blank" rel="noopener noreferrer">
              Designed &amp; Developed by Kainovation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
