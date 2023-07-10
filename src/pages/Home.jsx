import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
    
    <Header/>
    <main>
        <section>
                <Hero/>
        </section>
        <section>
                <Services/>
        </section>
        <section>
                <Projects/>
        </section>
        <section>
                <About/>
        </section>
        <section>
                <Contact/>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Home