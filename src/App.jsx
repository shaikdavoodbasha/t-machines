import React from 'react'
import { TextFlipping } from './Components/TextFlipping'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SectionTwo from './Components/SectionTwo'
import AboutUs from './Components/AboutUs'
import TextSlider from './Components/TextSlider'
import Services from './Components/Services'
import { HoveringImages } from './Components/HoveringImages'
import Tmachinetools from './Components/Tmachinetools'
import WorkProcess from './Components/WorkProcess'
import TeamMembers from './Components/TeamMembers'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ScrollText from './Components/ScrollText'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {


  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div >
      <div className='px-[2vw] sm:px-[3vw] md:px[5vw] lg:px-[7vw]'>
        <Navbar />
        <Hero />
        <SectionTwo />
        <AboutUs />
      </div>
      <TextSlider />
      <div className='px-[2vw] sm:px-[3vw] md:px[5vw] lg:px-[7vw]'>
        <Services />
      </div>
      <ScrollText />
      <HoveringImages />

      <div className='px-[2vw] sm:px-[3vw] md:px[5vw] lg:px-[7vw]'>
        <Tmachinetools />
        <WorkProcess />
        <TeamMembers />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
