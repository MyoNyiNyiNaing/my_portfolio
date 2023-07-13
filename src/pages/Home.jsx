import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/services/Services.jsx";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import ThemeBtn from "../components/Theme/ThemeBtn";

const Home = () => {
  return (
    <>
      <Header />
      <main className=" relative dark:bg-black">
        <ThemeBtn />
        <section className="">
          <Hero />
        </section>
        <section className=" py-[80px]">
          <Services />
        </section>
        <section className=" py-[80px]">
          <Projects />
        </section>
        <section className=" py-[80px]">
          <About />
        </section>
        <section className=" py-[80px] pb-[160px]">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
