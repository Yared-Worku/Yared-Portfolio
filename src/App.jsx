import Nav from './components/Nav'
import SocialSidebars from './components/SocialSidebars'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <ParticleBackground />
      <Nav />
       <SocialSidebars />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
