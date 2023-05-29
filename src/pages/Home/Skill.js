import React, { useEffect, useRef, useState } from 'react'

import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {FaBootstrap} from "react-icons/fa"
import {FaSass} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {FaReact} from "react-icons/fa"
import {FaGitAlt} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Skill = () => {
  // forskill
  const skillRef=useRef()
  const[isVisible, setIsVisible] = useState(false)
  useEffect(()=>{
    function loadText (entries, obs) {
      entries.forEach((entry) =>{
        if(!entry.isIntersecting){
          return
        }
        setIsVisible(true)
        obs.unobserve(skillRef.current)
      })
    }
    const observer = new IntersectionObserver(loadText, {threshold:0.4})

    observer.observe(skillRef.current)
  },[])

  return (
    <div className={`skill container ${isVisible ? "showforapi":""}`} ref={skillRef}>
      <h2>Skill</h2>
      <div className="iconlist">
        <div className="icon">
          <AiFillHtml5 color="rgba(179, 0, 255) " fontSize="28px" />
          <p>HTML</p>
        </div>
        <div 
        className="icon">
          <FaCss3Alt color="rgba(179, 0, 255) " fontSize="28px" />
          <p>CSS</p>
        </div>
        <div className="icon">
          <FaBootstrap color="rgba(179, 0, 255) " fontSize="28px" />
          <p>Bootstrap</p>
        </div>
        <div className="icon">
          <FaSass color="rgba(179, 0, 255) " fontSize="28px" />
          <p>SASS</p>
        </div>
        <div className="icon">
          <IoLogoJavascript color="rgba(179, 0, 255)" fontSize="28px" />
          <p>Javascript</p>
        </div>
        <div className="icon">
          <FaReact color="rgba(179, 0, 255) " fontSize="28px" />
          <p>React</p>
        </div>
        <div className="icon">
          <FaGitAlt color="rgba(179, 0, 255) " fontSize="28px" />
          <p>Git</p>
        </div>
        <div className="icon">
          <FaGithub color="rgba(179, 0, 255) " fontSize="28px" />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  )
}

export default Skill