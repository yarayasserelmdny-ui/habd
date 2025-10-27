import About from '@/components/About'
import Contact_me from '@/components/Contact_me'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import My_portfolio from '@/components/My_portfolio'
import Nav from '@/components/Nav'
import Skills from '@/components/Skills'



import React from 'react'

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <My_portfolio/>
      <Contact_me/>
      <Footer/>
    </>

  )}
