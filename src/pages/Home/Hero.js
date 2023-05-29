import React from 'react'
import {Parallax} from 'react-parallax'
import Hero1 from "../../Data/assets/Heroimage1.jpg"
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {FaBootstrap} from "react-icons/fa"
import {FaSass} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {FaReact} from "react-icons/fa"
import {FaGitAlt} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Hero = () => {
  // for parallax
  const parallaximagestyle = {
    width:"100%",
    height:"100vh",
    opacity :"0.9",
    objectFit:"cover",
    borderRadius:"30px",
  }

  return (
    <div className='hero'>
      <Parallax bgImage={Hero1} style={parallaximagestyle}>
        <div className="content" strength={1000}>
          <div className="text-content1">
            <h2>Hi, I am Daichi !</h2>
            <p>I am a fully self-taught Frontend developer💻<br/>and travel lover 🛫 </p>
            <div>
              <AiFillHtml5 color="white" fontSize="28px" />
              <FaCss3Alt color="white" fontSize="28px" />
              <FaBootstrap color="white" fontSize="28px" />
              <FaSass color="white" fontSize="28px" />
              <IoLogoJavascript color="white" fontSize="28px" />
              <FaReact color="white" fontSize="28px" />
              <FaGitAlt color="white" fontSize="28px" />
              <FaGithub color="white" fontSize="28px" />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero