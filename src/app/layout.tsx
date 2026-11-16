import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alignify — Career Playbook',
  description:
    'A personal Career Playbook: how you work, where you fit and the roles that suit you. For universities and their students, and anyone looking for career guidance.',
  openGraph: {
    title: 'Alignify — Career Playbook',
    description: 'Know your strengths. Find your fit. Grow your career.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gabarito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="orb orb-1" aria-hidden />
        <div className="orb orb-2" aria-hidden />
        {children}
      </body>
    </html>
  )
}
