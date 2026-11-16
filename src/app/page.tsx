import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import PCCA from '@/components/PCCA'
import Pricing, { CareerPlaybook } from '@/components/Solutions'
import FinalCTA, { DemoFormSection } from '@/components/FinalCTA'
import Pipeline from '@/components/Pipeline'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <PCCA />
      <CareerPlaybook />
      <Pricing />
      <DemoFormSection />
      <Pipeline />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
