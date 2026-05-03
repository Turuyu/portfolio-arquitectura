import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Stats />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  )
}

export default App
