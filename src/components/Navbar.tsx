export default function Navbar() {
  return (
    <nav>
      <div className="frame nav-inner">
        <a href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alignify-logo-light.png" alt="Alignify" className="brand-mark" />
        </a>
        <div className="nav-actions">
          {/* TODO: point "Log in" at the Career Playbook portal once its URL is known */}
          <a href="#" className="nav-link">Log in</a>
          <a href="/#pricing" className="nav-ghost">Get your playbook</a>
          <a href="/#book-demo" className="nav-cta">Book a demo</a>
        </div>
      </div>
    </nav>
  )
}
