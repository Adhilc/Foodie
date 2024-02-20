import React from 'react'
import Navbar from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Foodie from "./components/Food"
import Footers from "./components/Footer"
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
      }
    );
    AOS.refresh();
  },[])

  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Foodie />
      <Footers />
    </div>
  )
}

export default App
