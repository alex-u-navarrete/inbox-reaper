import Hero from '../components/Hero'
import SecuritySection from '../components/SecuritySection'
import ProcessSteps from '../components/ProcessSteps'

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProcessSteps />
      <SecuritySection />
    </div>
  )
}

export default Landing 