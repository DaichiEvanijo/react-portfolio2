import React, { useEffect, useRef, useState } from 'react'
import About1 from "../../Data/assets/Aboutimage1.png"
import About2 from "../../Data/assets/Aboutimage2.png"
import QANDA from '../../Data/QandA'

const About = () => {
// for API on about
const aboutRef=useRef()
const[isVisible0, setIsVisible0] = useState(false)
useEffect(()=>{
  function loadText (entries, obs) {
    entries.forEach((entry) =>{
      if(!entry.isIntersecting){
        return
      }
      setIsVisible0(true)
      obs.unobserve(aboutRef.current)
    })
  }
  const observer = new IntersectionObserver(loadText, {threshold:0.2})

  observer.observe(aboutRef.current)
},[])

// for accordion
const[selected, setSelected] = useState(null)

const toggle = (i) =>{
  if(selected === i){
    return setSelected(null)
  }
  setSelected(i)
}

  return (
    <div className={`about container ${isVisible0 ? "popup":""}`} ref={aboutRef}>
      <div className="aboutflex">
          <div className='image1'>
            <img src={About1} alt="" />
          </div>
          <div className='abouttext1'>
            <h2>About me</h2>
            <p>Hi! My name is Daichi and I have been learning to code aside my full-time job to become Frontend software developer. I am currently looking for a full-time position as a junior Frontend software developer. Practical or graduate program is also welcome as long as I can grow myself as a software developer. I am 26, Japanese, can speak English as well as Japanese fluently and German at an intermediate level (B1.2). </p>
          </div>
      </div>
      <div className="aboutflex">
          <div className='image2'>
            <img src={About2} alt="" />
          </div>
          <div className='abouttext2'>
            <div className="accordions">
              {QANDA.map((accordion,i) => {
                return (
                  <div className="item" key={i}>
                    <div className="question" onClick={()=> toggle(i)}>
                      <p>{accordion.question}</p>
                      <span>{selected === i ? "-" : "+"}</span>
                    </div>
                    <div className={selected === i ? "hidden show":"hidden"}>{accordion.answer}</div>
                  </div>
                )
              }
              )}
            </div>

          </div>
      </div>
    </div>
  )
}

export default About