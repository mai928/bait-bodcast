import React from 'react'
import Header from './Header'
import Slider from './Slider'
import About from './About'
import Services from './Services'
import Gallary from './Gallary'
import Partner from './Partner'
import Footer from './Footer'
import Contact from './Contact'
import Videos from './Videos'

const Main = () => {
  return (
   <section>
    <Header/>
    <Slider/>
    <About/>
    {/* <Services/> */}
    {/* <Gallary/> */}
    {/* <Partner/> */}
    <Videos/>
    <Contact/>
    <Footer/>
   </section>
  )
}

export default Main