import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Root() {
  return (
    <>
      <ThemeToggle className='fixed right-4 top-4 z-10' />
      <main className='container-section'>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
